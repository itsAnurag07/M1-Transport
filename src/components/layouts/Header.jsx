import React, { useState } from 'react';
import logoImg from '../../assets/images/navbar_logo.png';

function Header({ currentPage, navigateTo, navigateToHomeAndScroll, isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 md:top-3 left-0 right-0 z-50 px-3 md:px-6">
      <nav className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-button px-4 md:px-8 transition-all duration-300 ${isMobileMenuOpen ? 'h-auto py-3' : 'navbar-custom'} md:navbar-custom flex flex-col md:flex-row md:items-center justify-between border border-outline-variant/20 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="flex items-center justify-between w-full md:w-auto navbar-logo-bar">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer h-full" onClick={() => { navigateTo('home'); setIsMobileMenuOpen(false); }}>
            <img src={logoImg} alt="M1 Transport Logo" className="navbar-logo w-auto object-contain" />
            <span className="text-base sm:text-lg md:text-xl lg:text-xl font-extrabold italic tracking-tighter text-primary">M1 TRANSPORT</span>
          </div>

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
          <button onClick={() => navigateTo('services')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'services' ? 'text-secondary font-bold' : 'text-primary'}`}>Services</button>
          <button onClick={() => navigateTo('fleet')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'fleet' ? 'text-secondary font-bold' : 'text-primary'}`}>Fleet</button>
          <button onClick={() => navigateTo('safety')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'safety' ? 'text-secondary font-bold' : 'text-primary'}`}>Safety</button>
          <button onClick={() => navigateTo('about')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'about' ? 'text-secondary font-bold' : 'text-primary'}`}>About</button>
        </div>

        <div className="hidden md:flex items-center h-full">
          <button onClick={() => navigateTo('contact')} className={`bg-secondary text-white px-5 py-2.5 rounded-button text-xs font-label-caps uppercase tracking-widest hover:bg-[#BD1C19] transition-all border-none outline-none cursor-pointer ${currentPage === 'contact' ? 'ring-2 ring-secondary/50' : ''}`}>
            Contact Us
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden w-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[350px] opacity-100 mt-4 pt-4 border-t border-outline-variant/20' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-4 pb-2 text-left font-label-caps uppercase tracking-widest text-primary">
            <button
              onClick={() => { navigateTo('services'); setIsMobileMenuOpen(false); }}
              className={`hover:text-secondary transition-colors text-left font-label-caps uppercase tracking-widest text-sm py-2 bg-transparent border-none outline-none cursor-pointer w-full ${currentPage === 'services' ? 'text-secondary font-bold' : 'text-primary'}`}
            >
              Services
            </button>
            <button
              onClick={() => { navigateTo('fleet'); setIsMobileMenuOpen(false); }}
              className={`hover:text-secondary transition-colors text-left font-label-caps uppercase tracking-widest text-sm py-2 bg-transparent border-none outline-none cursor-pointer w-full ${currentPage === 'fleet' ? 'text-secondary font-bold' : 'text-primary'}`}
            >
              Fleet
            </button>
            <button
              onClick={() => { navigateTo('safety'); setIsMobileMenuOpen(false); }}
              className={`hover:text-secondary transition-colors text-left font-label-caps uppercase tracking-widest text-sm py-2 bg-transparent border-none outline-none cursor-pointer w-full ${currentPage === 'safety' ? 'text-secondary font-bold' : 'text-primary'}`}
            >
              Safety
            </button>
            <button
              onClick={() => { navigateTo('about'); setIsMobileMenuOpen(false); }}
              className={`hover:text-secondary transition-colors text-left font-label-caps uppercase tracking-widest text-sm py-2 bg-transparent border-none outline-none cursor-pointer w-full ${currentPage === 'about' ? 'text-secondary font-bold' : 'text-primary'}`}
            >
              About
            </button>
            <button
              onClick={() => { navigateTo('contact'); setIsMobileMenuOpen(false); }}
              className={`bg-secondary text-white px-6 py-3 rounded-button text-sm font-label-caps uppercase tracking-widest hover:bg-[#BD1C19] transition-all border-none outline-none cursor-pointer w-full text-center mt-2 ${currentPage === 'contact' ? 'ring-2 ring-secondary/50' : ''}`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
