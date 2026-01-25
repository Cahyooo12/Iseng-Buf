import React from 'react';

const sponsors = [
    {
        id: 1,
        name: "Beauty Center",
        category: "DRW SKINCARE",
        logo: "https://uploads.onecompiler.io/43w9rf9r9/44bnhegst/IMG-20260114-WA0004.jpg"
    },
    {
        id: 2,
        name: "Tandang Studio",
        category: "Consultan Event",
        logo: "https://uploads.onecompiler.io/43w9rf9r9/448gwc977/Tandang%20Studio_page-0001.jpg"
    },
    {
        id: 3,
        name: "KOHI",
        category: "Coffee House And Space",
        logo: "https://uploads.onecompiler.io/43w9rf9r9/448gwc977/logo%20KOHI%20(1)_page-0001%20(1).jpg"
    },
    {
        id: 4,
        name: "LA Media",
        category: "Media",
        logo: "https://uploads.onecompiler.io/43w9rf9r9/44bnhegst/IMG_6821.PNG"
    }
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

                {/* Call for Sponsors Removed as requested */}
            </div>
        </section>
    );
};

export default Sponsors;
