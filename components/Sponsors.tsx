import React from 'react';

const sponsors = [
    { 
        id: 1, 
        name: "Tandang Studio", 
        category: "Konsultan Event", 
        logo: "https://uploads.onecompiler.io/43w9rf9r9/448gwc977/Tandang%20Studio_page-0001.jpg" 
    },
    { 
        id: 2, 
        name: "KOHI ", 
        category: "Coffee House & Space", 
        logo: "https://uploads.onecompiler.io/43w9rf9r9/448gwc977/logo%20KOHI%20(1)_page-0001%20(1).jpg" 
    },
    { 
        id: 3, 
        name: "Ruangguru", 
        category: "Ed-Tech Partner", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Ruangguru_New.png/683px-Logo_Ruangguru_New.png" 
    },
    { 
        id: 4, 
        name: "Gramedia", 
        category: "Literacy Partner", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Gramedia_Asri_Media_logo.svg/2560px-Gramedia_Asri_Media_logo.svg.png" 
    },
    { 
        id: 5, 
        name: "Wardah", 
        category: "Beauty Partner", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wardah_logo.svg/2560px-Wardah_logo.svg.png" 
    },
    { 
        id: 6, 
        name: "Teh Botol Sosro", 
        category: "Refreshment", 
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Teh_Botol_Sosro_logo.svg/1200px-Teh_Botol_Sosro_logo.svg.png" 
    },
];

const Sponsors: React.FC = () => {
    return (
        <section id="sponsors" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Intro */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">Our Partners</span>
                    <h3 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white">Supported By</h3>
                </div>

                {/* Current Sponsors Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg dark:hover:bg-zinc-800/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-40">
                            <div className="h-20 w-full flex items-center justify-center mb-3 p-2">
                                <img 
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} Logo`} 
                                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-xs text-center">{sponsor.name}</h4>
                            <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1 uppercase tracking-wide text-center">{sponsor.category}</p>
                        </div>
                    ))}
                </div>

                {/* Call for Sponsors (The "Pitch") */}
                <div className="bg-slate-900 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center md:text-left relative overflow-hidden border border-slate-800 dark:border-blue-500/30 shadow-2xl">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Ingin Brand Kamu Dilihat <br/>
                                <span className="text-blue-400">Ribuan Gen Z?</span>
                            </h3>
                            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                                Bergabunglah sebagai partner di Bamsayota University Fair 2026! 
                                Tingkatkan <strong>brand awareness</strong> dan dapatkan akses langsung ke pasar pelajar di Yogyakarta.
                            </p>
                            <ul className="space-y-4 mb-8 text-slate-300">
                                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span> Logo di semua materi promosi digital & cetak</li>
                                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span> Booth eksklusif di area strategis (Main Hall)</li>
                                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span> Kesempatan presentasi produk di panggung utama</li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="mailto:sponsor@bamsayota.local" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-600/30 text-center hover:scale-105 transform duration-200">
                                    Ajukan Penawaran
                                </a>
                                <a href="#" className="px-8 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition text-center backdrop-blur-sm">
                                    Download Proposal
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center perspective-1000">
                            {/* 3D-like illustration representing growth */}
                            <div className="relative w-72 h-80 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl rotate-3 shadow-2xl flex flex-col items-center justify-center border border-white/10 hover:rotate-0 transition-transform duration-500 group">
                                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl"></div>
                                <div className="text-center text-white p-6">
                                    <div className="text-6xl mb-4">📈</div>
                                    <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">1.5k+</p>
                                    <p className="text-sm uppercase tracking-widest mt-2 text-slate-400 group-hover:text-white transition-colors">Target Audiens</p>
                                    <div className="mt-6 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[85%] animate-pulse"></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 text-right">85% Tiket Terjual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
