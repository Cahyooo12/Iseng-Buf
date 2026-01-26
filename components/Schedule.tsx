import React from 'react';
import { ScheduleItem } from '../types';

const scheduleData: ScheduleItem[] = [
    { time: "07.00 - 07.30", title: "Registrasi Peserta", description: "Open Gate & Penukaran Tiket", icon: "🎫" },
    { time: "07.30 - 08.00", title: "Opening Ceremony", description: "Pembukaan Resmi BUF #10", icon: "🎉" },
    { time: "08.35 - 09.00", title: "Grand Celebration", description: "Selebrasi Spesial Lustrum", icon: "🥳" },
    { time: "09.00 - 10.15", title: "Talkshow Inspiratif", description: "Sesi Sharing & Tanya Jawab", icon: "🎤" },
    { time: "10.15 - 12.00", title: "University Expo & Performance", description: "Eksplorasi Kampus & Hiburan", icon: "🎪" },
    { time: "12.00 - 12.30", title: "ISHOMA", description: "Istirahat Sejenak", icon: "🍽️" },
    { time: "12.30 - 13.00", title: "Sesi Kelas Khusus", description: "Konsultasi Intensif", icon: "📚" },
    { time: "13.05 - Selesai", title: "Special Guest Star", description: "Penampilan Bintang Tamu", icon: "✨" },
];

const Schedule: React.FC = () => {
    return (
        <section id="schedule" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Rundown <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400">Acara</span></h3>
                    <p className="text-slate-600 dark:text-gray-400">Jangan sampai ketinggalan momen serunya!</p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-8 animate-fadeIn">
                    {scheduleData.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>

                            <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-500/30 dark:hover:bg-zinc-800/80 transition-all duration-300">
                                <span className="inline-block px-3 py-1 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-transparent text-blue-600 dark:text-blue-400 text-xs font-mono rounded mb-2 shadow-sm">
                                    {item.time} WIB
                                </span>
                                <div className="flex items-start justify-between">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                    <span className="text-2xl">{item.icon}</span>
                                </div>
                                <p className="text-slate-600 dark:text-gray-400 mt-2 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;