import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Universitas', href: '#universities' },
    { name: 'Jadwal', href: '#schedule' },
    { name: 'Sponsor', href: '#sponsors' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://uploads.onecompiler.io/43w9rf9r9/447d456ee/P%20DATABASE%20BUF.png" 
            alt="Logo Bamsayota" 
            className="h-12 w-auto transition-transform group-hover:scale-110" 
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block text-white">
            BUF <span className="text-blue-500">2026</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <a 
            href="#register" 
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300"
          >
            Daftar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 absolute w-full px-6 py-4 flex flex-col gap-4 shadow-2xl transition-colors">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#register" 
            className="text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;