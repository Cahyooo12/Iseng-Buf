import React from 'react';

interface University {
    name: string;
    slogan: string;
    logo?: string;
    url: string;
    tags: string;
}

// Helper to generate a consistent avatar URL based on name if no specific logo is provided
const getAvatar = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128&bold=true&font-size=0.33`;

const universities: University[] = [
    { name: "Universitas Amikom Yogyakarta", slogan: "Creative Economy Park", tags: "IT • Multimedia", url: "https://home.amikom.ac.id/", logo: "https://kadowisudaku.com/wp-content/uploads/2018/01/logo-amikom.png" },

    { name: "Universitas Gadjah Mada", slogan: "Locally Rooted, Globally Respected", tags: "Top #1 • Riset", url: "https://ugm.ac.id/", logo: "https://ugm.ac.id/wp-content/uploads/2022/11/LOGO-UGM-BAKU-tnp-back-grou-300x300.jpg" },
    { name: "Universitas Negeri Yogyakarta", slogan: "Leading in Character Education", tags: "Pendidikan • Vokasi", url: "https://www.uny.ac.id/", logo: "https://www.uny.ac.id/sites/default/files/inline-images/logo-uny.png" },
    { name: "UPN ”Veteran” Yogyakarta", slogan: "Widya Mwat Yasa", tags: "Geologi • Perminyakan", url: "https://www.upnyk.ac.id/", logo: "https://www.upnyk.ac.id/public/frontend/images/logo-upn.png" },
    { name: "Universitas Diponegoro", slogan: "Excellent Research University", tags: "Hukum • Kelautan", url: "https://undip.ac.id/", logo: "https://feb.undip.ac.id/wp-content/uploads/2021/09/undip-png.png" },
    { name: "UIN Sunan Kalijaga", slogan: "Integrasi - Interkoneksi", tags: "Islamic Studies • Sosial", url: "https://www.uin-suka.ac.id/", logo: "https://upload.wikimedia.org/wikipedia/id/c/c6/Logo_UIN_Sunan_Kalijaga.png" },
    { name: "Universitas Tidar", slogan: "Unggul dalam Kewirausahaan", tags: "Wirausaha • Teknik", url: "https://untidar.ac.id/", logo: "https://untidar.ac.id/wp-content/uploads/2018/11/LOGO-UNTIDAR-2017-218x218.png" },
    { name: "UNS Surakarta", slogan: "Smart and Green Campus", tags: "Kedokteran • Bisnis", url: "https://uns.ac.id/", logo: "https://uns.ac.id/id/wp-content/uploads/2023/06/cropped-cropped-logo-uns-biru-1.webp" },
    { name: "Universitas Negeri Malang", slogan: "Excellence in Learning Innovation", tags: "Learning Univ. • Sastra", url: "https://um.ac.id/" },
    { name: "Universitas Jember", slogan: "Tradition of Excellence", tags: "Bioteknologi • Pertanian", url: "https://unej.ac.id/" },
    { name: "Universitas Jenderal Soedirman", slogan: "Maju Terus Pantang Mundur", tags: "Biologi • Ekonomi", url: "https://unsoed.ac.id/" },
    { name: "Universitas Terbuka", slogan: "Making Higher Education Open to All", tags: "Fleksibel • Jarak Jauh", url: "https://www.ut.ac.id/" },
    { name: "Institut Seni Indonesia Yogyakarta", slogan: "Indonesia’s Arts Institute", tags: "Seni Murni • Desain", url: "https://isi.ac.id/" },
    { name: "Institut Teknologi Kalimantan", slogan: "Specta: Solid, Professional, Excellence", tags: "Teknologi • Energi", url: "https://itk.ac.id/" },
    { name: "Poltekkes Kemenkes Yogyakarta", slogan: "Unggul, Berbudaya, Mendunia", tags: "Kesehatan • Terapan", url: "https://poltekkesjogja.ac.id/" },

    // --- PTS & Sekolah Tinggi ---
    { name: "Universitas Islam Indonesia", slogan: "Values, Innovation, Perfection", tags: "Hukum • Arsitektur", url: "https://uii.ac.id/" },
    { name: "Universitas Muhammadiyah Yogyakarta", slogan: "Muda Mendunia", tags: "HI • Kedokteran", url: "https://umy.ac.id/" },
    { name: "Universitas Ahmad Dahlan", slogan: "Moral and Intellectual Integrity", tags: "Farmasi • Psikologi", url: "https://uad.ac.id/", logo: "https://uad.ac.id/wp-content/uploads/logo-warna.png" },
    { name: "Universitas Sanata Dharma", slogan: "Cerdas dan Humanis", tags: "Humanis • Pendidikan", url: "https://usd.ac.id/" },
    { name: "Universitas Sarjanawiyata Tamansiswa", slogan: "Salam dan Bahagia", tags: "Kebangsaan • Manajemen", url: "https://ustjogja.ac.id/", logo: "https://i.pinimg.com/736x/28/16/76/2816762331ca862f6104d7084c90c7f5.jpg" },
    { name: "Universitas Teknologi Yogyakarta", slogan: "Inspiring the Future", tags: "Teknologi • Bisnis", url: "https://uty.ac.id/" },
    { name: "Universitas PGRI Yogyakarta", slogan: "Reading the Future", tags: "Keguruan • Konseling", url: "https://upy.ac.id/" },
    { name: "Universitas Kristen Duta Wacana", slogan: "Servant Leadership", tags: "Teologi • Bioteknologi", url: "https://ukdw.ac.id/" },
    { name: "Universitas Teknologi Digital Indonesia", slogan: "Digital Global", tags: "Digital • Coding", url: "https://utdi.ac.id/" },
    { name: "Politeknik YKPN Yogyakarta", slogan: "Professional & Integrity", tags: "Akuntansi • Keuangan", url: "https://ykpn.ac.id/" },
    { name: "STIKES Notokusumo Yogyakarta", slogan: "Caring & Competent", tags: "Keperawatan • Farmasi", url: "https://stikes-notokusumo.ac.id/" },
    { name: "STIKES Akbidyo", slogan: "Terdepan dalam Prestasi", tags: "Kebidanan • Kesehatan", url: "https://akbidyo.ac.id/" },
    { name: "Sekolah Tinggi Maritim Yogyakarta", slogan: "Jalasveva Jayamahe", tags: "Maritim • Pelayaran", url: "https://stimaryo.ac.id/" },
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
                <div className="hidden md:block px-4 py-2 bg-blue-600/10 rounded-lg border border-blue-600/20">
                    <span className="text-blue-500 font-semibold text-sm">Total 28 Tenant</span>
                </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {universities.map((uni, index) => (
                    <a 
                        key={index} 
                        href={uni.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 dark:hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden h-full"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 dark:from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
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
                                <span className="inline-block text-[10px] md:text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-800 break-words whitespace-normal">
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