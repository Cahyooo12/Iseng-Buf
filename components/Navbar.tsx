import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const getLinkHref = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome
        ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://uploads.onecompiler.io/43w9rf9r9/447d456ee/P%20DATABASE%20BUF.png"
            alt="Logo Bamsayota"
            className="h-12 w-auto transition-transform group-hover:scale-110"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block text-white">
            BUF <span className="text-purple-500">2026</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-semibold">
          {navLinks.map((link) => (
            isHome ? (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.name}
                to={`/${link.href}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </Link>
            )
          ))}

          <Link
            to="/analysis"
            className="text-gray-300 hover:text-white transition-colors relative group"
          >
            Tes Jurusan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
          </Link>

          <a
            href="https://forms.gle/9WcmgfMLmo6JWbvZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] hover:scale-105 transition-all duration-300"
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
            isHome ? (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={`/${link.href}`}
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/analysis"
            className="text-gray-300 hover:text-white font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tes Jurusan
          </Link>
          <a
            href="https://forms.gle/9WcmgfMLmo6JWbvZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Daftar
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;