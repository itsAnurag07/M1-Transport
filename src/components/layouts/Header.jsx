import React from 'react';
import logoImg from '../../assets/logo.png';

function Header({ currentPage, navigateTo, navigateToHomeAndScroll, isScrolled }) {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <nav className={`max-w-7xl mx-auto bg-white backdrop-blur-md rounded-button px-8 py-4 flex items-center justify-between border border-outline-variant/20 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <img src={logoImg} alt="M1 Transport Logo" className="h-11 w-auto object-contain" />
          <span className="text-2xl font-extrabold italic tracking-tighter text-primary text-3xl">M1 TRANSPORT</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-label-caps uppercase tracking-widest text-primary">
          <button onClick={() => navigateTo('services')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'services' ? 'text-secondary font-bold' : 'text-primary'}`}>Services</button>
          <button onClick={() => navigateTo('fleet')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'fleet' ? 'text-secondary font-bold' : 'text-primary'}`}>Fleet</button>
          <button onClick={() => navigateTo('safety')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'safety' ? 'text-secondary font-bold' : 'text-primary'}`}>Safety</button>
          <button onClick={() => navigateTo('about')} className={`hover:text-secondary transition-colors font-label-caps uppercase tracking-widest text-sm bg-transparent border-none outline-none cursor-pointer ${currentPage === 'about' ? 'text-secondary font-bold' : 'text-primary'}`}>About</button>
        </div>
        <div>
          <button onClick={() => navigateTo('contact')} className={`bg-secondary text-white px-6 py-2.5 rounded-button text-sm font-label-caps uppercase tracking-widest hover:bg-[#BD1C19] transition-all border-none outline-none cursor-pointer ${currentPage === 'contact' ? 'ring-2 ring-secondary/50' : ''}`}>
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
