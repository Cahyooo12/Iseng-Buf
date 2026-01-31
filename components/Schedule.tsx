import React, { useState } from 'react';
import { ScheduleItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface DaySchedule {
    id: number;
    label: string;
    date: string;
    title: string;
    description: string;
    items: ScheduleItem[];
}

const scheduleData: DaySchedule[] = [
    {
        id: 0,
        label: "Hari 1",
        date: "Rabu, 4 Februari 2026",
        title: "Sesi Eksplorasi & Karakter",
        description: "Berfokus pada pengenalan dunia perkuliahan dan pengembangan diri di dalam kelas.",
        items: [
            { time: "07.30 - 08.00", title: "Opening & Pengantar BUF 10", description: "Pembukaan Acara", icon: "🎬" },
            { time: "08.15 - 09.30", title: "Workshop: Ambil! Jawab! Goals!", description: "Sesi Interaktif Penetapan Tujuan", icon: "🎯" },
            { time: "09.30 - 10.00", title: "Fun Session: Kahoot", description: "Games & Quiz Seru", icon: "🎮" },
            { time: "10.30 - 11.15", title: "Challenge: Riyal or Fake?!", description: "Tantangan Mitos vs Fakta Kuliah", icon: "🎭" },
            { time: "11.15 - 12.00", title: "Sharing Dunia Perkuliahan", description: "Diskusi Santai bareng Mahasiswa", icon: "🎓" },
            { time: "12.30 - 14.00", title: "Sesi Utama: Kasih Paham Bos!", description: "Talkshow Utama Inspiratif", icon: "💡" },
            { time: "14.00 - 14.30", title: "Map of Dreams", description: "Menulis Harapan Masa Depan", icon: "🗺️" },
        ]
    },
    {
        id: 1,
        label: "Hari 2",
        date: "Kamis, 5 Februari 2026",
        title: "Selebrasi & Expo Kampus",
        description: "Puncak acara yang menghadirkan parade universitas dan hiburan di lapangan.",
        items: [
            { time: "08.25 - 08.55", title: "Opening Ceremony & Sambutan", description: "Pembukaan Hari Kedua", icon: "🎉" },
            { time: "08.55 - 09.35", title: "Art Performance & Parade Universitas", description: "Parade Bendera & Penampilan Seni", icon: "🎨" },
            { time: "09.40 - 11.10", title: "Inspirational Talk Show", description: "Bincang Inspiratif Tokoh Muda", icon: "🎤" },
            { time: "11.10 - 12.05", title: "Q&A & Expo University", description: "Tanya Jawab & Keliling Booth Kampus", icon: "🎪" },
            { time: "13.00 - 13.15", title: "Performance oleh Alumni", description: "Special Show dari Alumni", icon: "🎸" },
            { time: "13.15 - 13.30", title: "Awarding", description: "Kelas Teraktif & Juara Kelompok", icon: "🏆" },
            { time: "13.35 - 14.35", title: "Special Guest Star", description: "Penampilan Penutup yang Meriah", icon: "✨" },
        ]
    }
];

const Schedule: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="schedule" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* Header - Reverted to Original Style */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Rundown <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400">Acara</span>
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-lg">Jangan sampai ketinggalan momen serunya!</p>
                    </motion.div>
                </div>

                {/* Enhanced Tabs - Cooler Design */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {scheduleData.map((day, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative min-w-[180px] md:min-w-[220px] rounded-2xl p-[2px] transition-all duration-300 ${activeTab === index
                                ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)]'
                                : 'bg-transparent hover:bg-gray-200 dark:hover:bg-zinc-800'
                                }`}
                        >
                            <div className={`relative w-full h-full px-8 py-5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ${activeTab === index
                                ? 'bg-white dark:bg-black/95'
                                : 'bg-white dark:bg-zinc-900/40 border border-gray-200 dark:border-zinc-800'
                                }`}>
                                <span className={`text-xl md:text-2xl font-black uppercase tracking-wider ${activeTab === index
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'
                                    : 'text-slate-400 dark:text-zinc-600 group-hover:text-slate-600 dark:group-hover:text-zinc-400 transition-colors'
                                    }`}>
                                    {day.label}
                                </span>
                                <span className={`text-[10px] md:text-xs font-mono tracking-widest uppercase opacity-80 ${activeTab === index
                                    ? 'text-slate-600 dark:text-slate-300'
                                    : 'text-slate-400 dark:text-zinc-600'
                                    }`}>
                                    {day.date}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Day Content Header */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-center mb-12"
                    >
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">{scheduleData[activeTab].title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">{scheduleData[activeTab].description}</p>
                    </motion.div>
                </AnimatePresence>

                {/* Timeline */}
                <div className="relative border-l-2 border-dashed border-gray-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-10 min-h-[500px]">
                    <AnimatePresence mode="popLayout">
                        {scheduleData[activeTab].items.map((item, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Dot */}
                                <div className={`absolute -left-[9px] top-6 w-[18px] h-[18px] rounded-full border-4 transition-all duration-300 z-10 ${activeTab === 0
                                    ? 'bg-blue-500 border-white dark:border-black group-hover:scale-125 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                                    : 'bg-purple-500 border-white dark:border-black group-hover:scale-125 shadow-[0_0_10px_rgba(168,85,247,0.6)]'
                                    }`}></div>

                                <div className="relative bg-white dark:bg-zinc-900/40 backdrop-blur-sm border border-gray-100 dark:border-zinc-800/60 p-6 md:p-7 rounded-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] dark:hover:bg-zinc-900/80 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl filter drop-shadow-md">{item.icon}</span>
                                            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h4>
                                        </div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide ${activeTab === 0
                                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30'
                                            : 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-800/30'
                                            }`}>
                                            {item.time} WIB
                                        </span>
                                    </div>
                                    <p className="text-slate-600 dark:text-gray-400 text-sm ml-0 sm:ml-12 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Schedule;