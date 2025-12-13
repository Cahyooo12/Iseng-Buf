import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50 dark:opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50 dark:opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">What is <span className="text-blue-600 dark:text-blue-500">BUF?</span></h3>
                <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Bukan sekadar pameran biasa. Ini adalah tempat di mana ambisi bertemu peluang. Cocok banget buat kamu siswa kelas X, XI, dan XII!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md border border-slate-200 dark:border-zinc-800 p-8 rounded-3xl hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors text-blue-600 group-hover:text-white">
                        <span className="text-3xl">📘</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Info Jurusan Lengkap</h4>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                        Bingung pilih jurusan? Dapatkan brosur detail dan tanya jawab langsung dengan mahasiswa & dosen dari berbagai kampus top.
                    </p>
                </div>

                {/* Card 2 - Featured */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900/40 dark:to-purple-900/40 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-xl">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-white/20 dark:bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 dark:group-hover:bg-purple-500 transition-colors relative z-10 text-white">
                        <span className="text-3xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 relative z-10">Konsultasi Karir</h4>
                    <p className="text-blue-50 dark:text-gray-300 text-sm leading-relaxed relative z-10">
                        Dapatkan tips jalur masuk, SNBP, SNBT, hingga strategi lolos seleksi mandiri langsung dari ahlinya.
                    </p>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-bold text-white/90 hover:text-white transition-colors">
                        Chat Panitia &rarr;
                    </a>
                </div>

                {/* Card 3 */}
                <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md border border-slate-200 dark:border-zinc-800 p-8 rounded-3xl hover:border-pink-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-14 h-14 bg-pink-100 dark:bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors text-pink-600 group-hover:text-white">
                        <span className="text-3xl">💸</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Info Beasiswa</h4>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                        Kuliah gratis? Bisa! Temukan info scholarship eksklusif dari kampus negeri maupun swasta di sini.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;