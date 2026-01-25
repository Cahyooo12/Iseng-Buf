import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { universities, getAvatar } from './Universities';

const questions = [
    {
        id: 1,
        question: "Apa mata pelajaran favoritmu di sekolah?",
        icon: "📚",
        options: [
            { text: "Matematika / Fisika", type: "teknik", desc: "Suka berhitung & logika" },
            { text: "Biologi / Kimia", type: "sains", desc: "Suka alam & eksperimen" },
            { text: "Seni Budaya / Bahasa", type: "seni", desc: "Suka kreativitas" },
            { text: "Ekonomi / Sosiologi", type: "sosial", desc: "Suka masyarakat" },
        ]
    },
    {
        id: 2,
        question: "Apa yang paling kamu nikmati saat waktu luang?",
        icon: "🎮",
        options: [
            { text: "Mengutak-atik barang / Coding", type: "teknik", desc: "Bikin sistem jalan" },
            { text: "Eksperimen / Mengamati alam", type: "sains", desc: "Meneliti sesuatu" },
            { text: "Menggambar / Bermusik", type: "seni", desc: "Ekspresi diri" },
            { text: "Organisasi / Jualan", type: "sosial", desc: "Ketemu orang baru" },
        ]
    },
    {
        id: 3,
        question: "Lingkungan kerja seperti apa yang kamu bayangkan?",
        icon: "🏢",
        options: [
            { text: "Teknologi & Sistem Canggih", type: "teknik", desc: "Serba otomatis" },
            { text: "Laboratorium / Rumah Sakit", type: "sains", desc: "Steril & fokus" },
            { text: "Studio Kreatif / Panggung", type: "seni", desc: "Bebas berkreasi" },
            { text: "Kantor / Bertemu Klien", type: "sosial", desc: "Dinamis & sosial" },
        ]
    },
    {
        id: 4,
        question: "Bagaimana caramu memecahkan masalah?",
        icon: "🧩",
        options: [
            { text: "Analisis Data & Logika", type: "teknik", desc: "Sistematis" },
            { text: "Bukti & Observasi", type: "sains", desc: "Empiris" },
            { text: "Intuisi & Kreativitas", type: "seni", desc: "Out of the box" },
            { text: "Diskusi & Negosiasi", type: "sosial", desc: "Persuasif" },
        ]
    },
    {
        id: 5,
        question: "Apa tujuan karir utamamu?",
        icon: "🚀",
        options: [
            { text: "Menciptakan Inovasi Teknologi", type: "teknik", desc: "Masa depan canggih" },
            { text: "Menyembuhkan / Meneliti", type: "sains", desc: "Kualitas hidup" },
            { text: "Berkarya & Menginspirasi", type: "seni", desc: "Menyentuh hati" },
            { text: "Memimpin & Berbisnis", type: "sosial", desc: "Impactful leader" },
        ]
    }
];

const Analysis: React.FC = () => {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({
        teknik: 0,
        sains: 0,
        seni: 0,
        sosial: 0
    });
    const [finished, setFinished] = useState(false);
    const [history, setHistory] = useState<string[]>([]);

    const handleStart = () => {
        setStarted(true);
    };

    const handleAnswer = (type: string) => {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);
        setHistory([...history, type]);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setFinished(true);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            const lastAnswer = history[history.length - 1];
            setScores(prev => ({ ...prev, [lastAnswer]: prev[lastAnswer] - 1 }));
            setHistory(prev => prev.slice(0, -1));
            setCurrentQuestion(prev => prev - 1);
        } else {
            setStarted(false);
        }
    };

    const resetQuiz = () => {
        setStarted(false);
        setCurrentQuestion(0);
        setScores({ teknik: 0, sains: 0, seni: 0, sosial: 0 });
        setHistory([]);
        setFinished(false);
    };

    const getResult = () => {
        const sortedDetails = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topResult = sortedDetails[0][0];
        const topScore = sortedDetails[0][1];
        const matchPercentage = Math.round((topScore / questions.length) * 100); // Simple calculation

        switch (topResult) {
            case 'teknik':
                return {
                    title: "Teknik & Informatika",
                    match: matchPercentage,
                    desc: "Mempelajari pengembangan teknologi, rekayasa sistem, dan inovasi digital untuk memecahkan masalah masa depan.",
                    colors: "from-blue-600 to-cyan-600",
                    bg: "bg-blue-600/20",
                    concentrations: ["Artificial Intelligence", "Cyber Security", "Robotics", "Software Engineering"],
                    careers: [
                        { title: "Software Engineer", icon: "💻" },
                        { title: "Data Scientist", icon: "📊" },
                        { title: "System Architect", icon: "🏗️" },
                        { title: "IT Consultant", icon: "💼" }
                    ]
                };
            case 'sains':
                return {
                    title: "Sains & Kesehatan",
                    match: matchPercentage,
                    desc: "Mempelajari fenomena alam, kesehatan manusia, dan penelitian ilmiah untuk meningkatkan kualitas hidup.",
                    colors: "from-emerald-500 to-teal-600",
                    bg: "bg-emerald-600/20",
                    concentrations: ["Biomedis", "Farmasi Klinis", "Konservasi Alam", "Epidemiologi"],
                    careers: [
                        { title: "Dokter / Nakes", icon: "👨‍⚕️" },
                        { title: "Peneliti Lab", icon: "🧪" },
                        { title: "Apoteker", icon: "💊" },
                        { title: "Ahli Lingkungan", icon: "🌿" }
                    ]
                };
            case 'seni':
                return {
                    title: "Seni & Humaniora",
                    match: matchPercentage,
                    desc: "Mengeksplorasi kreativitas, ekspresi visual, budaya, dan komunikasi untuk menciptakan karya yang inspiratif.",
                    colors: "from-purple-600 to-pink-600",
                    bg: "bg-purple-600/20",
                    concentrations: ["Desain Grafis", "Film & Animasi", "Jurnalistik", "Seni Pertunjukan"],
                    careers: [
                        { title: "Art Director", icon: "🎨" },
                        { title: "Content Creator", icon: "📹" },
                        { title: "Copywriter", icon: "✍️" },
                        { title: "Illustrator", icon: "🖌️" }
                    ]
                };
            case 'sosial':
                return {
                    title: "Sosial & Bisnis",
                    match: matchPercentage,
                    desc: "Mempelajari dinamika sosial, strategi bisnis, dan hubungan antarmanusia untuk membangun masyarakat yang lebih baik.",
                    colors: "from-orange-500 to-amber-600",
                    bg: "bg-orange-600/20",
                    concentrations: ["Digital Marketing", "Hubungan Internasional", "Psikologi Klinis", "Business Management"],
                    careers: [
                        { title: "HR Manager", icon: "👥" },
                        { title: "Diplomat", icon: "🤝" },
                        { title: "Entrepreneur", icon: "🚀" },
                        { title: "Market Analyst", icon: "📈" }
                    ]
                };
            default:
                return {
                    title: "Multidisiplin",
                    match: 75,
                    desc: "Minatmu sangat beragam! Kamu berpotensi sukses di bidang yang menggabungkan berbagai disiplin ilmu.",
                    colors: "from-indigo-500 to-violet-600",
                    bg: "bg-indigo-600/20",
                    concentrations: ["Bisnis Digital", "Teknologi Pendidikan", "Manajemen Proyek", "Informatika Medis"],
                    careers: [
                        { title: "Project Manager", icon: "📋" },
                        { title: "Consultant", icon: "💡" },
                        { title: "Researcher", icon: "🔍" },
                        { title: "Product Owner", icon: "📦" }
                    ]
                };
        }
    };

    // Animation variants
    const slideVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { x: -50, opacity: 0, transition: { duration: 0.3 } }
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    if (!started) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center relative overflow-hidden bg-black">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-6"
                        >
                            <img
                                src="https://em-content.zobj.net/source/microsoft-teams/337/robot_1f916.png"
                                alt="AI Icon"
                                className="w-5 h-5 object-contain"
                            />
                            AI-Powered Analysis (Simulated)
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Temukan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Jurusan Impian</span> <br />
                            Dalam 1 Menit
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                            Bingung milih jurusan? Jawab 5 pertanyaan cepat tentang kepribadianmu dan dapatkan rekomendasi kampus terbaik yang cocok buat kamu!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleStart}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all flex items-center justify-center gap-3"
                            >
                                <span>Mulai Tes Sekarang</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-gray-500 text-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs text-white">
                                        🎓
                                    </div>
                                ))}
                            </div>
                            <p>Digunakan oleh 1,000+ Siswa SMA</p>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Floating Cards Animation */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute top-0 right-10 bg-zinc-800 p-4 rounded-2xl border border-zinc-700 shadow-xl z-20"
                            >
                                <img
                                    src="https://em-content.zobj.net/source/microsoft-teams/337/laptop_1f4bb.png"
                                    alt="Laptop"
                                    className="w-10 h-10 block mb-2"
                                />
                                <div className="h-2 w-16 bg-blue-500 rounded-full mb-2"></div>
                                <div className="h-2 w-10 bg-zinc-600 rounded-full"></div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-0 bg-zinc-800 p-4 rounded-2xl border border-zinc-700 shadow-xl z-20"
                            >
                                <span className="text-4xl block mb-2">🎨</span>
                                <div className="h-2 w-16 bg-pink-500 rounded-full mb-2"></div>
                                <div className="h-2 w-8 bg-zinc-600 rounded-full"></div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 z-0"
                            />

                            <div className="relative z-10 w-full h-full bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center overflow-hidden">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Analisis Jurusan</h3>
                                    <p className="text-gray-400 mb-6">Cocokkan minatmu dengan prodi terbaik</p>
                                    <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["0%", "100%"] }}
                                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1 }}
                                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    if (finished) {
        const result = getResult();

        // Filter universities based on result
        const recommendedUniversities = universities.filter(uni => {
            const tags = uni.tags.toLowerCase();
            if (result.title.includes("Teknik")) return tags.includes("teknik") || tags.includes("teknologi") || tags.includes("it") || tags.includes("coding") || tags.includes("perminyakan") || tags.includes("geologi");
            if (result.title.includes("Sains")) return tags.includes("kedokteran") || tags.includes("biologi") || tags.includes("farmasi") || tags.includes("kesehatan") || tags.includes("pertanian") || tags.includes("bioteknologi") || tags.includes("kebidanan");
            if (result.title.includes("Seni")) return tags.includes("seni") || tags.includes("desain") || tags.includes("sastra") || tags.includes("multimedia") || tags.includes("humanis") || tags.includes("kreatif");
            if (result.title.includes("Sosial")) return tags.includes("hukum") || tags.includes("bisnis") || tags.includes("ekonomi") || tags.includes("psikologi") || tags.includes("manajemen") || tags.includes("sosial") || tags.includes("hi") || tags.includes("wirausaha");
            return true;
        }).slice(0, 4);

        return (
            <div className="min-h-screen py-24 px-6 flex items-center justify-center bg-black relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-black opacity-100 z-0 pointer-events-none" />

                <div className="max-w-xl w-full z-10 flex flex-col gap-10">

                    {/* Result Card (Lighter Purple/Violet Theme) */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className="bg-[#6D28D9] rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}
                    >

                        <div className="relative z-10">
                            {/* Header: Title + Match */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                <h2 className="text-3xl font-bold">{result.title}</h2>
                                <span className="px-5 py-2 bg-white text-purple-900 font-bold rounded-full text-base shadow-lg whitespace-nowrap">
                                    {result.match}% Cocok
                                </span>
                            </div>

                            {/* Description Box */}
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 italic mb-10 border border-white/20 text-lg leading-relaxed shadow-inner">
                                "{result.desc}"
                            </div>

                            {/* Concentrations */}
                            <div className="mb-8">
                                <h3 className="font-bold text-lg mb-4 text-white">Konsentrasi yang tersedia:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {result.concentrations.map((item, idx) => (
                                        <span key={idx} className="px-5 py-2.5 bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors rounded-xl text-sm font-semibold shadow-md">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Career Prospects */}
                            <div>
                                <h3 className="font-bold text-lg mb-4 text-white">Prospek Karir:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {result.careers.map((career, idx) => (
                                        <div key={idx} className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                                            <div className="w-12 h-12 rounded-xl bg-[#A78BFA] flex items-center justify-center text-2xl shadow-md text-white">
                                                {career.icon}
                                            </div>
                                            <span className="font-semibold text-white text-base">{career.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Recommendations Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">Rekomendasi Kampus</h3>
                            <a href="#universities" className="text-sm text-blue-400 hover:text-blue-300">Lihat Semua</a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recommendedUniversities.map((uni, idx) => (
                                <a
                                    key={idx}
                                    href={uni.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-4 hover:border-purple-500 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                                        <img src={uni.logo || getAvatar(uni.name)} alt={uni.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="text-white font-medium text-sm truncate group-hover:text-purple-400 transition-colors">{uni.name}</h4>
                                        <p className="text-xs text-gray-500 truncate">{uni.tags}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-center pt-8">
                            <button
                                onClick={resetQuiz}
                                className="px-8 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors font-medium border border-zinc-700"
                            >
                                🔄 Ulangi Tes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 px-4 flex items-center justify-center bg-black">
            <div className="max-w-2xl w-full">
                {/* Header / Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between text-gray-400 mb-4 px-2">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
                        >
                            ← Kembali
                        </button>
                        <span className="font-mono text-sm">Step {currentQuestion + 1}/{questions.length}</span>
                    </div>
                    <div className="h-3 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-zinc-900 rounded-3xl p-6 md:p-10 border border-zinc-700 shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">{questions[currentQuestion].icon}</span>
                            <h3 className="text-2xl md:text-3xl text-white font-bold leading-tight">
                                {questions[currentQuestion].question}
                            </h3>
                        </div>

                        <div className="grid gap-4">
                            {questions[currentQuestion].options.map((option, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(39, 39, 42, 1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleAnswer(option.type)}
                                    className="w-full text-left p-4 md:p-5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/50 transition-all group relative overflow-hidden"
                                >
                                    <div className="flex items-start justify-between relative z-10">
                                        <div>
                                            <div className="text-gray-100 font-semibold text-lg mb-1">{option.text}</div>
                                            <div className="text-gray-400 text-sm">{option.desc}</div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full border-2 border-zinc-600 group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors mt-1" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Analysis;
