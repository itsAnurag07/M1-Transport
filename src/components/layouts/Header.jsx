import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/navbar_logo.png';

function Header({ currentPage, navigateTo, navigateToHomeAndScroll, isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.classList.remove('mobile-menu-active');
    }
    return () => {
      document.body.classList.remove('mobile-menu-active');
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-3 md:px-6">
        <nav className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-button px-4 md:px-8 transition-all duration-300 ${isMobileMenuOpen ? 'h-auto py-3' : 'navbar-custom'} md:navbar-custom flex flex-col md:flex-row md:items-center justify-between border border-outline-variant/20 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="flex items-center justify-between w-full md:w-auto navbar-logo-bar">
          <a href="/" className="flex items-center gap-2 md:gap-3 cursor-pointer h-full no-underline" onClick={(e) => { e.preventDefault(); navigateTo('home'); setIsMobileMenuOpen(false); }}>
            <img src={logoImg} alt="M1 Transport Logo" className="navbar-logo w-auto object-contain" />
            <span className="text-lg md:text-xl font-extrabold italic tracking-tighter text-primary">M1 TRANSPORT</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-1 text-primary hover:text-secondary transition-colors focus:outline-none bg-transparent border-none outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-label-caps uppercase tracking-widest text-primary h-full">
          <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer no-underline ${currentPage === 'services' ? 'text-secondary font-bold' : 'text-primary'}`}>Services</a>

          <a href="/about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer no-underline ${currentPage === 'about' ? 'text-secondary font-bold' : 'text-primary'}`}>About</a>
          <a href="/safety" onClick={(e) => { e.preventDefault(); navigateTo('safety'); }} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer no-underline ${currentPage === 'safety' ? 'text-secondary font-bold' : 'text-primary'}`}>Safety</a>

          <a href="/fleet" onClick={(e) => { e.preventDefault(); navigateTo('fleet'); }} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer no-underline ${currentPage === 'fleet' ? 'text-secondary font-bold' : 'text-primary'}`}>Fleet</a>


        </div>

        <div className="hidden md:flex items-center h-full">
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className={`bg-secondary text-white px-5 py-2.5 rounded-button text-xs font-label-caps uppercase tracking-widest hover:bg-[#BD1C19] transition-all border-none outline-none cursor-pointer no-underline flex items-center justify-center ${currentPage === 'contact' ? 'ring-2 ring-secondary/50' : ''}`}>
            Contact Us
          </a>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden w-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[350px] opacity-100 mt-4 pt-4 border-t border-outline-variant/20' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-wrap gap-2.5 pb-3 justify-center">
            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); navigateTo('services'); setIsMobileMenuOpen(false); }}
              className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-widest transition-all border outline-none cursor-pointer no-underline flex items-center justify-center ${currentPage === 'services' ? 'bg-secondary text-white border-secondary font-bold' : 'bg-transparent text-primary border-outline-variant/40 hover:border-secondary hover:text-secondary'}`}
            >
              Services
            </a>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigateTo('about'); setIsMobileMenuOpen(false); }}
              className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-widest transition-all border outline-none cursor-pointer no-underline flex items-center justify-center ${currentPage === 'about' ? 'bg-secondary text-white border-secondary font-bold' : 'bg-transparent text-primary border-outline-variant/40 hover:border-secondary hover:text-secondary'}`}
            >
              About
            </a>
            <a
              href="/safety"
              onClick={(e) => { e.preventDefault(); navigateTo('safety'); setIsMobileMenuOpen(false); }}
              className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-widest transition-all border outline-none cursor-pointer no-underline flex items-center justify-center ${currentPage === 'safety' ? 'bg-secondary text-white border-secondary font-bold' : 'bg-transparent text-primary border-outline-variant/40 hover:border-secondary hover:text-secondary'}`}
            >
              Safety
            </a>
            <a
              href="/fleet"
              onClick={(e) => { e.preventDefault(); navigateTo('fleet'); setIsMobileMenuOpen(false); }}
              className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-widest transition-all border outline-none cursor-pointer no-underline flex items-center justify-center ${currentPage === 'fleet' ? 'bg-secondary text-white border-secondary font-bold' : 'bg-transparent text-primary border-outline-variant/40 hover:border-secondary hover:text-secondary'}`}
            >
              Fleet
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigateTo('contact'); setIsMobileMenuOpen(false); }}
              className={`bg-secondary text-white px-5 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-widest hover:bg-[#BD1C19] transition-all border border-secondary outline-none cursor-pointer font-bold no-underline flex items-center justify-center ${currentPage === 'contact' ? 'ring-2 ring-secondary/50' : ''}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
