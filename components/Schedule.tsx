import React, { useState } from 'react';
import { ScheduleItem } from '../types';

const day1Schedule: ScheduleItem[] = [
    { time: "07.50 – 08.00", title: "Ceremonial Opening", description: "Sambutan Kepala Sekolah dan Pembukaan Resmi.", icon: "🎉" },
    { time: "08.25 – 09.25", title: "Class Session #1", description: "Pemberian materi & bimbingan karir di kelas.", icon: "📚" },
    { time: "09.45 – 10.30", title: "Flashmob & Uni Display", description: "Penampilan pembuka yang seru & display universitas.", icon: "💃" },
    { time: "10.30 – 12.05", title: "Expo Time!", description: "Waktu bebas kunjungan ke stand perguruan tinggi.", icon: "🎪" },
    { time: "12.35 – 13.05", title: "Class Session #2", description: "Sesi lanjutan pemantapan materi.", icon: "📝" },
];

const day2Schedule: ScheduleItem[] = [
    { time: "07.30 – 08.00", title: "Opening & Class", description: "Persiapan hari kedua.", icon: "🌤️" },
    { time: "08.35 – 09.00", title: "Celebration", description: "Acara selebrasi spesial dari siswa.", icon: "🥳" },
    { time: "09.00 – 10.15", title: "Talkshow & Q&A", description: "Diskusi interaktif bareng alumni sukses.", icon: "🎤" },
    { time: "10.15 – 12.00", title: "Committee Performance", description: "Penampilan spesial dari panitia & Expo lanjutan.", icon: "🎸" },
    { time: "12.30 – 13.00", title: "Class Session", description: "Wrap up session.", icon: "📖" },
    { time: "13.05 – 14.00", title: "Guest Star", description: "Penutupan meriah dengan Bintang Tamu!", icon: "✨" },
];

const Schedule: React.FC = () => {
    const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

    return (
        <section id="schedule" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Rundown <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400">Acara</span></h3>
                    <p className="text-slate-600 dark:text-gray-400">Jangan sampai ketinggalan momen serunya!</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="bg-gray-100 dark:bg-zinc-900 p-1.5 rounded-xl border border-gray-200 dark:border-zinc-800 flex">
                        <button 
                            onClick={() => setActiveDay('day1')}
                            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeDay === 'day1' ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'}`}
                        >
                            Rabu, 4 Feb '26
                        </button>
                        <button 
                            onClick={() => setActiveDay('day2')}
                            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeDay === 'day2' ? 'bg-white dark:bg-purple-600 text-slate-900 dark:text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'}`}
                        >
                            Kamis, 5 Feb '26
                        </button>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-8 animate-fadeIn">
                    {(activeDay === 'day1' ? day1Schedule : day2Schedule).map((item, index) => (
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