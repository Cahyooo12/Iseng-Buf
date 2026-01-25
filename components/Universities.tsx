import React from 'react';

export interface University {
    name: string;
    slogan: string;
    logo?: string;
    url: string;
    tags: string;
}

export const getAvatar = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128&bold=true&font-size=0.33`;

export const universities: University[] = [
    { name: "Universitas Amikom Yogyakarta", slogan: "Creative Economy Park", tags: "IT • Multimedia", url: "https://home.amikom.ac.id/", logo: "https://kadowisudaku.com/wp-content/uploads/2018/01/logo-amikom.png" },
    { name: "Universitas Gadjah Mada", slogan: "Locally Rooted, Globally Respected", tags: "Top #1 • Riset", url: "https://ugm.ac.id/", logo: "https://ugm.ac.id/wp-content/uploads/2022/11/LOGO-UGM-BAKU-tnp-back-grou-300x300.jpg" },
    { name: "Universitas Negeri Yogyakarta", slogan: "Leading in Character Education", tags: "Pendidikan • Vokasi", url: "https://www.uny.ac.id/", logo: "https://www.uny.ac.id/sites/default/files/inline-images/logo-uny.png" },
    { name: "UPN ”Veteran” Yogyakarta", slogan: "Widya Mwat Yasa", tags: "Geologi • Perminyakan", url: "https://www.upnyk.ac.id/", logo: "https://www.upnyk.ac.id/public/frontend/images/logo-upn.png" },
    { name: "Universitas Diponegoro", slogan: "Excellent Research University", tags: "Hukum • Kelautan", url: "https://undip.ac.id/", logo: "https://feb.undip.ac.id/wp-content/uploads/2021/09/undip-png.png" },
    { name: "UIN Sunan Kalijaga", slogan: "Integrasi - Interkoneksi", tags: "Islamic Studies • Sosial", url: "https://www.uin-suka.ac.id/", logo: "https://upload.wikimedia.org/wikipedia/id/c/c6/Logo_UIN_Sunan_Kalijaga.png" },
    { name: "Universitas Tidar", slogan: "Unggul dalam Kewirausahaan", tags: "Wirausaha • Teknik", url: "https://untidar.ac.id/", logo: "https://untidar.ac.id/wp-content/uploads/2018/11/LOGO-UNTIDAR-2017-218x218.png" },
    { name: "UNS Surakarta", slogan: "Smart and Green Campus", tags: "Kedokteran • Bisnis", url: "https://uns.ac.id/", logo: "https://uns.ac.id/id/wp-content/uploads/2023/06/cropped-cropped-logo-uns-biru-1.webp" },
    { name: "Universitas Negeri Malang", slogan: "Excellence in Learning Innovation", tags: "Learning Univ. • Sastra", url: "https://um.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoG5Dw78C8i2hqRKDDiaw_A8QyH8g0VVjGQ&s" },
    { name: "Universitas Jember", slogan: "Tradition of Excellence", tags: "Bioteknologi • Pertanian", url: "https://unej.ac.id/", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_unej.png" },
    { name: "Universitas Jenderal Soedirman", slogan: "Maju Terus Pantang Mundur", tags: "Biologi • Ekonomi", url: "https://unsoed.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxD8T8isS2ISVFIAc5nLW_tv1VDw1GQGGPQ&s" },
    { name: "Universitas Terbuka", slogan: "Making Higher Education Open to All", tags: "Fleksibel • Jarak Jauh", url: "https://www.ut.ac.id/", logo: "https://upload.wikimedia.org/wikipedia/id/thumb/c/c3/Logo_Universitas_Terbuka.svg/1200px-Logo_Universitas_Terbuka.svg.png" },
    { name: "Institut Seni Indonesia Yogyakarta", slogan: "Indonesia’s Arts Institute", tags: "Seni Murni • Desain", url: "https://isi.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtggeCROFscG8BKySTEP-Zn_ZpB7TRNP-LmA&s" },
    { name: "Institut Teknologi Kalimantan", slogan: "Specta: Solid, Professional, Excellence", tags: "Teknologi • Energi", url: "https://itk.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5vboLRFkrMF53foNIemsfbEbEoxS5b1u0g&s" },
    { name: "Poltekkes Kemenkes Yogyakarta", slogan: "Unggul, Berbudaya, Mendunia", tags: "Kesehatan • Terapan", url: "https://poltekkesjogja.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDTTcdfJF5ETD_GbuU-R9fFyEJBZflgdaAg&s" },

    // --- PTS & Sekolah Tinggi ---
    { name: "Universitas Islam Indonesia", slogan: "Values, Innovation, Perfection", tags: "Hukum • Arsitektur", url: "https://uii.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBpr6vdmunG2nSoBkvc0xv4__DFcOBJwtyw&s" },
    { name: "Universitas Muhammadiyah Yogyakarta", slogan: "Muda Mendunia", tags: "HI • Kedokteran", url: "https://umy.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAzQagfJto-bVwC0l5k_Vj-DdqJzyIjIaGg&s" },
    { name: "Universitas Ahmad Dahlan", slogan: "Moral and Intellectual Integrity", tags: "Farmasi • Psikologi", url: "https://uad.ac.id/", logo: "https://uad.ac.id/wp-content/uploads/logo-warna.png" },
    { name: "Universitas Sanata Dharma", slogan: "Cerdas dan Humanis", tags: "Humanis • Pendidikan", url: "https://usd.ac.id/", logo: "https://www.usd.ac.id/assets/img/USD500.png" },
    { name: "Universitas Sarjanawiyata Tamansiswa", slogan: "Salam dan Bahagia", tags: "Kebangsaan • Manajemen", url: "https://ustjogja.ac.id/", logo: "https://i.pinimg.com/736x/28/16/76/2816762331ca862f6104d7084c90c7f5.jpg" },
    { name: "Universitas Teknologi Yogyakarta", slogan: "Inspiring the Future", tags: "Teknologi • Bisnis", url: "https://uty.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqZ1mgVassbJyuWYZQ0pwe1NHlVl5PU8d5A&s" },
    { name: "Universitas PGRI Yogyakarta", slogan: "Reading the Future", tags: "Keguruan • Konseling", url: "https://upy.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRzYGvCuPdONJaSk5IK7Np82VYMWbbF-WqA&s" },
    { name: "Universitas Kristen Duta Wacana", slogan: "Servant Leadership", tags: "Teologi • Bioteknologi", url: "https://ukdw.ac.id/", logo: "https://www.ukdw.ac.id/public_html/wp-content/uploads/2017/10/logo-ukdw.png" },
    { name: "Universitas Teknologi Digital Indonesia", slogan: "Digital Global", tags: "Digital • Coding", url: "https://utdi.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4HyCGDFo7-k59QXAuvhEjpgqBrI3CHGxwA&s" },
    { name: "Politeknik YKPN Yogyakarta", slogan: "Professional & Integrity", tags: "Akuntansi • Keuangan", url: "https://ykpn.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPhmFNDgZ8momExRYAK7r0dBwo1d_GYkDdw&s" },
    { name: "STIKES Notokusumo Yogyakarta", slogan: "Caring & Competent", tags: "Keperawatan • Farmasi", url: "https://stikes-notokusumo.ac.id/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvmsrj5mmwBZehD_qmTSmpzApDtINxbbRAA&s" },
    { name: "STIKES Akbidyo", slogan: "Terdepan dalam Prestasi", tags: "Kebidanan • Kesehatan", url: "https://akbidyo.ac.id/", logo: "https://akbidyo.ac.id/logo_image/stikes_akbidyo_edfa0b5e18a741b5.jpg" },
    { name: "Sekolah Tinggi Maritim Yogyakarta", slogan: "Jalasveva Jayamahe", tags: "Maritim • Pelayaran", url: "https://stimaryo.ac.id/", logo: "https://jogjaversitas.id/wp-content/uploads/2020/07/STIMARYO.jpg" },
];

const Universities: React.FC = () => {
    return (
        <section id="universities" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">University Lineup 🎓</h3>
                        <p className="text-slate-600 dark:text-gray-400 mt-2">Temukan masa depanmu di 28+ Kampus Bergengsi.</p>
                    </div>
                    <div className="hidden md:block px-4 py-2 bg-purple-600/10 rounded-lg border border-purple-600/20">
                        <span className="text-purple-500 font-semibold text-sm">Total 28 Tenant</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {universities.map((uni, index) => (
                        <a
                            key={index}
                            href={uni.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-purple-500 hover:shadow-lg hover:-translate-y-1 dark:hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden h-full"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-50 dark:from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Logo */}
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 mb-4 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center border border-gray-100 flex-shrink-0">
                                <img
                                    src={uni.logo || getAvatar(uni.name)}
                                    alt={uni.name}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 w-full flex flex-col flex-grow">
                                <h4 className="text-slate-800 dark:text-white font-bold text-sm md:text-base leading-tight mb-2 flex items-center justify-center">
                                    {uni.name}
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-gray-400 italic mb-4">
                                    "{uni.slogan}"
                                </p>

                                <div className="mt-auto">
                                    <span className="inline-block text-[10px] md:text-xs font-medium text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-md border border-purple-100 dark:border-purple-800 break-words whitespace-normal">
                                        {uni.tags}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <p className="text-gray-500 text-sm">Scroll untuk melihat lebih banyak</p>
                </div>
            </div>
        </section>
    );
};

export default Universities;