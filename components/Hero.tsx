import React from 'react';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      
      {/* 3D Image Background */}
      {/* Adjusted to md:left-[25%] to give more space, and using object-contain to prevent cropping */}
      <div className="absolute inset-0 z-0 md:left-[25%] pointer-events-none transition-all duration-1000 ease-out flex items-center justify-center md:justify-end md:pr-10">
        <img 
            src="https://uploads.onecompiler.io/43w9rf9r9/447d456ee/Gemini_Generated_Image_bcgoagbcgoagbcgo-removebg-preview.png" 
            alt="3D Futuristic Shape" 
            className="w-full h-full object-contain opacity-100 scale-90 md:scale-100 translate-y-10 md:translate-y-0"
        />
      </div>

      {/* Overlay Gradient - Enforced Black/Dark Theme */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none hidden md:block"></div>
      
      {/* Mobile Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none md:hidden"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left pt-20 md:pt-0 pointer-events-none">
            <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm animate-fadeIn pointer-events-auto">
              <span className="text-blue-400 font-semibold tracking-wider text-xs md:text-sm uppercase">
                  🚀 The Biggest Gen Z Event
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight select-none text-white">
              Bamsayota<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
                  University Fair
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed drop-shadow-md select-none">
              Masa depanmu dimulai di sini. Jelajahi 50+ Universitas, Konsultasi Jurusan, Info Beasiswa, dan rasakan keseruannya!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pointer-events-auto">
              <a 
                  href="#universities" 
                  className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all shadow-lg"
              >
                  Explore Campus 🎓
              </a>
              <a 
                  href="#register" 
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white backdrop-blur-sm rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                  Daftar Gratis ⚡
              </a>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-auto cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors z-30"
      >
        <svg className="w-6 h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;