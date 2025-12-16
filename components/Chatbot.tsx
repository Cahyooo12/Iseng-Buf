import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai"; 

// Tipe data untuk pesan chat, termasuk sumber grounding jika ada
interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    sources?: { title: string; uri: string }[];
}

// Konfigurasi System Instruction dengan Data Lengkap dari Web
const SYSTEM_INSTRUCTION = `
Kamu adalah asisten AI resmi untuk "Bamsayota University Fair 2026" (BUF 2026).
Tugasmu adalah membantu siswa dengan informasi seputar event DAN informasi umum universitas.

ATURAN UTAMA:
1. Gunakan data EVENT di bawah ini sebagai kebenaran mutlak.
2. Jika pengguna bertanya detail spesifik tentang Universitas (Biaya, Akreditasi, Jurusan detail) yang tidak ada di data event, GUNAKAN Google Search untuk mencari data terbaru dari internet.
3. Gaya bahasa: Santai, semangat, khas Gen Z tapi sopan.

INFORMASI EVENT (INTERNAL WEB):
- Nama: Bamsayota University Fair 2026 (BUF 2026).
- Lokasi: SMA Negeri 1 Bambanglipuro, Bantul, Yogyakarta.
- Tanggal: Rabu, 4 Feb 2026 & Kamis, 5 Feb 2026.
- Deskripsi: Event edukasi terbesar di Bambanglipuro. 28+ Tenant Universitas.

JADWAL (RUNDOWN):
- Rabu (Day 1): 07.50 Opening, 08.25 Class Session 1, 09.45 Flashmob, 10.30 Expo Time, 12.35 Class Session 2.
- Kamis (Day 2): 07.30 Opening, 08.35 Selebrasi Siswa, 09.00 Talkshow Alumni, 10.15 Band & Expo, 13.05 Guest Star.

DAFTAR UNIVERSITAS (TENANT):
1. PTN (Negeri): UGM (Top #1), UNY (Pendidikan), UPN Veteran (Geologi/Minyak), UNDIP (Hukum/Laut), UIN Sunan Kalijaga, UNTIDAR, UNS Surakarta, UM (Malang), UNEJ (Jember), UNSOED (Purwokerto), Universitas Terbuka (Jarak Jauh), ISI Yogyakarta (Seni), ITK (Kalimantan), Poltekkes Kemenkes Jogja.
2. PTS (Swasta) & Sekolah Tinggi: Amikom (Creative Economy), UII, UMY, UAD, Sanata Dharma (USD), UST (Tamansiswa), UTY, UPY (PGRI), UKDW, UTDI (Digital/Coding), Politeknik YKPN, STIKES Notokusumo, STIKES Akbidyo, STIMARYO (Maritim).

SPONSOR:
Kosant Studio, Telkomsel, Ruangguru, Gramedia, Wardah, Teh Botol Sosro.

KONTAK:
Cahyo (+62 812-3456-7890), panitia@bamsayota.local.
`;

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Halo! 👋 Aku AI Bamsayota. Tanya soal event atau info detail kampus (biaya/jurusan) di sini ya!' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chatSession, setChatSession] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    // Inisialisasi Gemini dengan Google Search Tool
    useEffect(() => {
        if (!process.env.API_KEY) {
            console.error("API_KEY is missing!");
            return;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const chat = ai.chats.create({
            model: 'gemini-1.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                tools: [{ googleSearch: {} }], // MENGAKTIFKAN PENCARIAN DATA LUAR
            },
        });
        setChatSession(chat);
    }, []);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim() || !chatSession || isLoading) return;

        const userMessage = inputText;
        setInputText('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const result: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
            const responseText = result.text;

            // Ekstrak Sumber (Grounding)
            const sources: { title: string; uri: string }[] = [];
            const groundingChunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks;
            
            if (groundingChunks) {
                groundingChunks.forEach((chunk: any) => {
                    if (chunk.web) {
                        sources.push({
                            title: chunk.web.title,
                            uri: chunk.web.uri
                        });
                    }
                });
            }

            setMessages(prev => [...prev, { 
                role: 'model', 
                text: responseText || "Maaf, saya tidak dapat menemukan informasi tersebut.",
                sources: sources.length > 0 ? sources : undefined
            }]);

        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Maaf, terjadi kesalahan koneksi" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-red-500 rotate-90' : 'bg-blue-600 animate-bounce'}`}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div 
                className={`fixed bottom-24 right-6 w-[90vw] md:w-96 h-[550px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-[99] flex flex-col transition-all duration-300 origin-bottom-right ${
                    isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none translate-y-10'
                }`}
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 rounded-t-2xl flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl">🤖</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white text-sm">BUF Assistant AI</h3>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Powered by Gemini</p>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-white dark:bg-black">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                            <div 
                                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                    msg.role === 'user' 
                                        ? 'bg-blue-600 text-white rounded-br-none' 
                                        : 'bg-gray-100 dark:bg-zinc-800 text-slate-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-zinc-700'
                                }`}
                            >
                                <span className="whitespace-pre-wrap">{msg.text}</span>
                            </div>

                            {/* Menampilkan Sumber jika ada */}
                            {msg.sources && msg.sources.length > 0 && (
                                <div className="mt-2 max-w-[85%] flex flex-wrap gap-2">
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 w-full mb-0.5">Sumber:</p>
                                    {msg.sources.map((source, sIdx) => (
                                        <a 
                                            key={sIdx}
                                            href={source.uri}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-blue-500 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full truncate max-w-[150px] transition-colors"
                                        >
                                            🔗 {source.title}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-zinc-700 flex gap-1 items-center">
                                <span className="text-xs text-gray-500 mr-2">Sedang mencari info...</span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 rounded-b-2xl">
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Tanya harga kuliah, jadwal, dll..."
                            className="flex-1 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white shadow-sm"
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading || !inputText.trim()}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white p-2.5 rounded-xl transition-all shadow-md active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409 5 5 0 115.513-5.513L10 10.828 17.158 3.553a1 1 0 00-1.409-1.169L10.894 2.553zM15 15a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};


export default Chatbot;
