import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 pt-20 pb-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                             <img 
                                src="https://uploads.onecompiler.io/43w9rf9r9/447d456ee/P%20DATABASE%20BUF.png" 
                                alt="Logo" 
                                className="h-10 w-auto" 
                            />
                            <span className="text-slate-900 dark:text-white font-bold text-xl">BUF 2026</span>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Event edukasi terbesar di Bambanglipuro. Jembatan masa depanmu menuju perguruan tinggi impian.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons (Placeholders) */}
                            {['IG', 'TK', 'YT'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600 transition-all">
                                    <span className="text-xs font-bold">{social}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Navigasi</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
                            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-500 transition">Tentang</a></li>
                            <li><a href="#universities" className="hover:text-blue-600 dark:hover:text-blue-500 transition">List Universitas</a></li>
                            <li><a href="#schedule" className="hover:text-blue-600 dark:hover:text-blue-500 transition">Rundown</a></li>
                            <li><a href="#register" className="hover:text-blue-600 dark:hover:text-blue-500 transition">Presensi</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-500 mt-1">📍</span>
                                <span>SMA Negeri 1 Bambanglipuro,<br />Bantul, Yogyakarta</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-500">📞</span>
                                <span>+62 812-3456-7890 (Cahyo)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-500">📧</span>
                                <span>panitia@bamsayota.local</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="rounded-xl overflow-hidden h-48 border border-gray-200 dark:border-zinc-800 shadow-lg">
                        <iframe
                            title="Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5440556062413!2d110.30047499999999!3d-7.9425927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7affb8a4c7b677%3A0x6eef3efd3d08f143!2sSMA%20Negeri%201%20Bambanglipuro!5e0!3m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-gray-500 text-sm">© 2026 Bamsayota University Fair.</p>
                    <p className="text-slate-500 dark:text-gray-600 text-xs">Designed by Amikom Student.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;