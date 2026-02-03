import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Blobs */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -70, 30, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-pink-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent z-0"
        />
      </div>

      {/* 3D Image Background Container */}
      <div className="absolute inset-0 z-0 md:left-[25%] pointer-events-none flex items-center justify-center md:justify-end md:pr-10">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="https://uploads.onecompiler.io/43w9rf9r9/447d456ee/Gemini_Generated_Image_bcgoagbcgoagbcgo-removebg-preview.png"
          alt="3D Futuristic Shape"
          className="w-full h-full object-contain opacity-100 scale-90 md:scale-100"
        />
        {/* Floating Animation Wrapper for the Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none hidden md:block"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none md:hidden"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left pt-20 md:pt-0">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm"
          >
            <span className="text-purple-400 font-semibold tracking-wider text-xs md:text-sm uppercase flex items-center gap-2">
              <span className="animate-pulse">🚀</span> EVENT GEN-Z TERBESAR
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight select-none text-white"
          >
            Bamsayota<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 drop-shadow-2xl">
              University Fair
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed drop-shadow-md"
          >
            Masa depanmu dimulai di sini, di <span className="text-white font-bold">SMA Negeri 1 Bambanglipuro</span>. Jelajahi Universitas, Konsultasi Jurusan, Info Beasiswa, dan rasakan keseruannya!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center"
          >
            {/* Jelajahi Kampus - Secondary (Outline) */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#universities"
              className="px-6 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 w-full md:w-auto whitespace-nowrap group"
            >
              Jelajahi Kampus
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:rotate-45 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </motion.a>

            {/* Daftar Gratis - Primary (Gradient) */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://forms.gle/9WcmgfMLmo6JWbvZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all flex items-center justify-center gap-2 w-full md:w-auto whitespace-nowrap"
            >
              Daftar Gratis
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </motion.a>


          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}


    </section>
  );
};
export default Hero;