import React, { useState, useEffect, useRef } from 'react';

function Counter({ end, duration = 2000, decimals = 0, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(decimals > 0 ? parseFloat(currentCount.toFixed(decimals)) : Math.floor(currentCount));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration, decimals]);

  return (
    <span ref={containerRef} className="whitespace-nowrap">
      {prefix}{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}


import m1Truck from '../../assets/images/M1_truck.png';

function About({ navigateToHomeAndScroll }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* About Us Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden opacity-100 translate-y-0 bg-black flex items-center" id="about-hero">
        <div className="absolute inset-0">
          <img
            alt="Truck on highway at sunset"
            className="w-full h-full object-cover opacity-60 filter contrast-125 brightness-75"
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-4 md:px-6 text-white pt-6 md:pt-20 hero-text-container">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            About M1 Transport
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase mb-6 leading-none max-w-4xl font-sans">
            A Legacy of Movement. <br />
            <span className="text-secondary text-outline">A Future of Intelligence.</span>
          </h1>
          <p className="text-base md:text-lg font-light text-white/85 max-w-2xl leading-relaxed">
            Connecting Australian businesses with smart, transparent supply chain operations for over 15 years.
          </p>
        </div>
      </section>

      {/* Our Mission & Core Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto opacity-100 translate-y-0" id="about-values">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16 items-center">
          <div className="lg:col-span-7">
            <span className="block font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block mr-2 align-middle"></span>
              Core Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold italic tracking-tight text-primary leading-none uppercase font-sans">
              Driven by Purpose.
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-secondary pl-6 md:pl-8 py-2">
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base md:text-lg">
              We do more than move cargo. We engineer supply chain efficiencies that help our partners scale sustainably.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-low rounded-card p-6 sm:p-10 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 md:mb-8">
              <span className="material-symbols-outlined text-2xl md:text-3xl">verified_user</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Operational Integrity</h3>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-sm">
              We own our fleet and manage our drivers to control the entire shipment lifecycle. Enjoy zero broker markups and zero surprise delays.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low rounded-card p-6 sm:p-10 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary text-white flex items-center justify-center mb-6 md:mb-8">
              <span className="material-symbols-outlined text-2xl md:text-3xl">hub</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Smart Consolidation</h3>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-sm">
              Using advanced cube optimization and cross-docks, we slash empty miles to lower shipping costs and reduce environmental impact.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low rounded-card p-6 sm:p-10 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 md:mb-8">
              <span className="material-symbols-outlined text-2xl md:text-3xl">visibility</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Total Transparency</h3>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-sm">
              Our automated notifications and live tracking provide a direct window into our operations. We share facts, not estimates.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-black overflow-hidden opacity-100 translate-y-0" id="about-commitment">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[64px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* Left Column: Interactive Visual Panel */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative flex flex-col h-full">
              {/* Background Red Neon Blur Radial Glow */}
              <div className="absolute inset-0 bg-secondary/15 filter blur-[100px] rounded-full -z-10 animate-pulse duration-[8000ms]"></div>

              <div className="relative border border-zinc-800/80 bg-zinc-950/40 rounded-card p-4 overflow-hidden w-full h-full min-h-[300px] sm:min-h-[440px] shadow-2xl flex flex-col justify-between">
                <div className="relative w-full h-full rounded-card overflow-hidden">
                  {/* Image 1: Precision */}
                  <img
                    alt="Precision in every move"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeTab === 0 ? 'opacity-100 scale-105 filter contrast-105' : 'opacity-0 scale-100'
                      }`}
                    src={m1Truck}
                  />
                  {/* Image 2: Transparency */}
                  <img
                    alt="Transparency at every step"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeTab === 1 ? 'opacity-100 scale-105 filter contrast-105' : 'opacity-0 scale-100'
                      }`}
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                  />
                  {/* Image 3: Reliability */}
                  <img
                    alt="Reliability you can count on"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeTab === 2 ? 'opacity-100 scale-105 filter contrast-105' : 'opacity-0 scale-100'
                      }`}
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                  />

                  {/* Premium Dark Vignette Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>

                  {/* Tech HUD overlay */}

                </div>
              </div>
            </div>

            {/* Right Column: Text & Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-1 w-12 bg-secondary"></div>
                  <span className="font-bold tracking-[0.3em] text-secondary text-[10px] uppercase font-label-caps">OUR COMMITMENT</span>
                </div>
                <h2 className="text-2xl sm:text-[2rem] font-extrabold italic tracking-tight leading-tight uppercase text-white font-sans">
                  Freight done smarter, <br />
                  <span className="text-secondary">faster, and transparently.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {/* Card 1 */}
                <button
                  onMouseEnter={() => setActiveTab(0)}
                  onClick={() => setActiveTab(0)}
                  className={`w-full text-left py-3 px-3 sm:py-4 sm:px-5 transition-all duration-300 rounded-card border relative overflow-hidden outline-none cursor-pointer flex gap-3 sm:gap-6 items-start ${activeTab === 0
                    ? 'bg-gradient-to-r from-white/10 via-white/5 to-transparent border-secondary/40 shadow-[0_0_25px_rgba(225,25,25,0.08)] scale-[1.02]'
                    : 'bg-transparent border-white/5 opacity-50 hover:opacity-80'
                    }`}
                >
                  {activeTab === 0 && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary shadow-[0_0_12px_#e11919] rounded-full"></div>
                  )}
                  <span className={`font-black text-xl italic mt-0.5 transition-colors duration-300 ${activeTab === 0 ? 'text-secondary' : 'text-white/60'}`}>/01</span>
                  <div className="flex-1">
                    <h3 className={`font-black text-base sm:text-lg uppercase italic mb-1 tracking-tight transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-white/70'}`}>
                      Precision in every move
                    </h3>
                    <p className={`text-xs leading-relaxed font-body-md transition-colors duration-300 ${activeTab === 0 ? 'text-white/80' : 'text-white/50'}`}>
                      Optimized route planning and lane consolidation for faster freight movement across Australia.
                    </p>
                  </div>
                </button>

                {/* Card 2 */}
                <button
                  onMouseEnter={() => setActiveTab(1)}
                  onClick={() => setActiveTab(1)}
                  className={`w-full text-left py-3 px-3 sm:py-4 sm:px-5 transition-all duration-300 rounded-card border relative overflow-hidden outline-none cursor-pointer flex gap-3 sm:gap-6 items-start ${activeTab === 1
                    ? 'bg-gradient-to-r from-white/10 via-white/5 to-transparent border-secondary/40 shadow-[0_0_25px_rgba(225,25,25,0.08)] scale-[1.02]'
                    : 'bg-transparent border-white/5 opacity-50 hover:opacity-80'
                    }`}
                >
                  {activeTab === 1 && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary shadow-[0_0_12px_#e11919] rounded-full"></div>
                  )}
                  <span className={`font-black text-xl italic mt-0.5 transition-colors duration-300 ${activeTab === 1 ? 'text-secondary' : 'text-white/60'}`}>/02</span>
                  <div className="flex-1">
                    <h3 className={`font-black text-base sm:text-lg uppercase italic mb-1 tracking-tight transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-white/70'}`}>
                      Transparency at every step
                    </h3>
                    <p className={`text-xs leading-relaxed font-body-md transition-colors duration-300 ${activeTab === 1 ? 'text-white/80' : 'text-white/50'}`}>
                      Automated status alerts, seamless appointment scheduling, and real-time transit visibility.
                    </p>
                  </div>
                </button>

                {/* Card 3 */}
                <button
                  onMouseEnter={() => setActiveTab(2)}
                  onClick={() => setActiveTab(2)}
                  className={`w-full text-left py-3 px-3 sm:py-4 sm:px-5 transition-all duration-300 rounded-card border relative overflow-hidden outline-none cursor-pointer flex gap-3 sm:gap-6 items-start ${activeTab === 2
                    ? 'bg-gradient-to-r from-white/10 via-white/5 to-transparent border-secondary/40 shadow-[0_0_25px_rgba(225,25,25,0.08)] scale-[1.02]'
                    : 'bg-transparent border-white/5 opacity-50 hover:opacity-80'
                    }`}
                >
                  {activeTab === 2 && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary shadow-[0_0_12px_#e11919] rounded-full"></div>
                  )}
                  <span className={`font-black text-xl italic mt-0.5 transition-colors duration-300 ${activeTab === 2 ? 'text-secondary' : 'text-white/60'}`}>/03</span>
                  <div className="flex-1">
                    <h3 className={`font-black text-base sm:text-lg uppercase italic mb-1 tracking-tight transition-colors duration-300 ${activeTab === 2 ? 'text-white' : 'text-white/70'}`}>
                      Reliability you can count on
                    </h3>
                    <p className={`text-xs leading-relaxed font-body-md transition-colors duration-300 ${activeTab === 2 ? 'text-white/80' : 'text-white/50'}`}>
                      A robust national depot network and dedicated teams delivering consistent on-time performance.
                    </p>
                  </div>
                </button>
              </div>

              <div className="pt-3">
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('contact'); }}
                  className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3.5 font-black text-sm sm:text-base italic uppercase tracking-tighter hover:bg-secondary hover:text-white transition-all flex items-center gap-4 cursor-pointer border-none outline-none rounded-button no-underline inline-flex"
                >
                  Get started today
                  <span className="material-symbols-outlined font-black">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section: Why Choose Us (Stats) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto opacity-100 translate-y-0" id="about-stats">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
                <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
              </svg>
              <span className="font-bold text-[10px] uppercase tracking-widest text-primary font-label-caps">Why choose us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-on-surface-variant/60 font-sans">
              A smarter freight network built on <span className="font-extrabold text-primary">15+ years of</span> experience.
            </h2>

            <p className="text-on-surface-variant leading-relaxed font-body-md text-base">
              We solve the core challenges of modern logistics: slow transit, inflated costs, and hidden fees. M1 Transport combines deep operational expertise with smart routing to deliver faster, highly transparent freight services.
            </p>
          </div>

          {/* Right Column (Stats Grid) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-12 pl-0 lg:pl-12">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={100} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">
                Active Clients</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={1} decimals={1} suffix="M+" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">Safe Deliveries</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={99} suffix="%" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">On-Time Rate</div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 6: Partner - YOLO Variant */}
      <section className="py-16 md:py-24 opacity-100 translate-y-0" id="about-yolo-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[64px]">
          <div className="kinetic-bg relative overflow-hidden p-6 sm:p-10 lg:p-16 group rounded-card">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 text-[30rem] font-black text-white leading-none -translate-x-1/2 -translate-y-1/2 select-none">M1</div>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-white mb-6 uppercase leading-none tracking-tight font-sans">
                  Partner with<br />M1 Transport today!
                </h2>
                <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md mb-8 leading-relaxed font-body-lg">
                  Get smarter freight consolidation, faster transit times, and dedicated end-to-end support. Let's move your business forward.
                </p>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('contact'); }}
                  className="bg-white text-secondary px-6 py-3 text-base md:px-8 md:py-4 md:text-xl font-bold italic uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-4 shadow-xl border-none outline-none cursor-pointer rounded-button no-underline inline-flex justify-center"
                >
                  Request a Quote
                  <span className="material-symbols-outlined font-black text-xl md:text-2xl">rocket_launch</span>
                </a>
              </div>
              <div className="hidden lg:block relative h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full aspect-square border-[24px] border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                </div>
                <div className="relative bg-white/10 backdrop-blur-3xl p-8 border-t-4 border-white shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                  <h4 className="text-white font-bold text-2xl italic uppercase mb-6 flex items-center gap-3 tracking-tight">
                    <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
                    Enterprise Ready
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-white font-bold uppercase tracking-widest text-xs mb-3">
                        <span>Efficiency Rating</span>
                        <span className="text-secondary">98%</span>
                      </div>
                      <div className="h-3 w-full bg-white/20 relative">
                        <div className="h-full bg-secondary w-[98%] shadow-[0_0_15px_#e11919]"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/10">
                      <div>
                        <div className="text-white/40 font-bold text-xs uppercase tracking-widest mb-1 font-label-caps">SYSTEM LOAD</div>
                        <div className="text-white font-bold text-lg md:text-xl italic tracking-tight uppercase font-sans">NOMINAL</div>
                      </div>
                      <div>
                        <div className="text-white/40 font-bold text-xs uppercase tracking-widest mb-1 font-label-caps">NETWORK STATUS</div>
                        <div className="text-white font-bold text-lg md:text-xl italic tracking-tight uppercase font-sans">OPTIMIZED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
