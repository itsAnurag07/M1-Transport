import React from 'react';
import logoImg from '../../assets/logo.png';

function Footer({ navigateTo, navigateToHomeAndScroll }) {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-12 gap-grid-gutter px-6 w-full max-w-7xl mx-auto pt-10 pb-12">
        <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
          <div className="mb-8">
            <img src={logoImg} alt="M1 Transport Logo" className="h-20 w-auto object-contain mb-4" />
            <div className="font-display-lg text-headline-md font-bold text-primary tracking-tighter">
              M1 TRANSPORT
            </div>
          </div>
          <div className="flex flex-col gap-4 text-on-surface-variant font-body-md">
            <p className="text-sm">Building the future of logistics through heritage, technology, and absolute transparency across the Australian landscape.</p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-label-caps uppercase text-primary mb-8 tracking-widest font-bold">Company</h5>
          <ul className="space-y-4 font-body-md text-on-surface-variant list-none pl-0">
            <li className=""><a href="/about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="hover:text-secondary transition-colors text-left font-body-md text-on-surface-variant bg-transparent border-none outline-none cursor-pointer no-underline block">About Us</a></li>
            <li className=""><a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="hover:text-secondary transition-colors text-left font-body-md text-on-surface-variant bg-transparent border-none outline-none cursor-pointer no-underline block">Our Services</a></li>
            <li className=""><a href="/fleet" onClick={(e) => { e.preventDefault(); navigateTo('fleet'); }} className="hover:text-secondary transition-colors text-left font-body-md text-on-surface-variant bg-transparent border-none outline-none cursor-pointer no-underline block">Our Fleet</a></li>

            <li className=""><a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="hover:text-secondary transition-colors text-left font-body-md text-on-surface-variant bg-transparent border-none outline-none cursor-pointer no-underline block">Contact</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-label-caps uppercase text-primary mb-8 tracking-widest font-bold">Legal</h5>
          <ul className="space-y-4 font-body-md text-on-surface-variant list-none pl-0">
            <li className=""><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
            <li className=""><a className="hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
            <li className=""><a className="hover:text-secondary transition-colors" href="#">Compliance</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 mt-12 md:mt-0 flex flex-col justify-between">
          <div>
            <h5 className="font-label-caps uppercase text-primary mb-8 tracking-widest font-bold">Subscribe to Insights</h5>
            <div className="relative">
              <input className="w-full bg-transparent border border-outline/30 rounded-full focus:border-secondary transition-colors py-3 px-5 pr-12 outline-none font-body-md text-primary" placeholder="Email address" type="email" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary group bg-transparent border-none outline-none cursor-pointer">
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:justify-end text-primary">
            <a className="hover:text-secondary transition-colors p-2.5 border border-outline-variant/30 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center" href="#" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a className="hover:text-secondary transition-colors p-2.5 border border-outline-variant/30 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center" href="#" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a className="hover:text-secondary transition-colors p-2.5 border border-outline-variant/30 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center" href="#" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 max-w-7xl mx-auto border-t border-outline/10 text-on-surface-variant text-sm font-label-caps opacity-60 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 M1 Transport Australia. All rights reserved.</span>
        <span>
          Designed and Developed by{' '}
          <a href="https://intelloft.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline transition-all">
            Intelloft
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
