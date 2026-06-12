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
    <span ref={containerRef}>
      {prefix}{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}


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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-6 text-white pt-20">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            About M1 Transport
          </span>
          <h1 className="text-5xl font-extrabold italic tracking-tighter uppercase mb-6 leading-none max-w-4xl font-sans">
            A Legacy of Movement. <br />
            <span className="text-secondary text-outline">A Future of Intelligence.</span>
          </h1>
          <p className="text-xl md:text-lg font-light text-white/85 max-w-2xl leading-relaxed">
            For over 15 years, we have connected Australian businesses with smart, reliable, and transparent supply chain operations.
          </p>
        </div>
      </section>

      {/* Our Mission & Core Values Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto opacity-100 translate-y-0" id="about-values">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7">
            <span className="block font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block mr-2 align-middle"></span>
              Core Principles
            </span>
            <h2 className="text-5xl font-extrabold italic tracking-tight text-primary leading-none uppercase font-sans">
              Driven by Purpose.
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-secondary pl-8 py-2">
            <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
              Our business model isn't just about moving cargo; it's about engineering efficiencies that help our partners scale sustainably.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-low rounded-card p-10 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Operational Integrity</h3>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-sm">
              We own our assets, manage our drivers, and control the entire lifecycle of your shipment. No broker markups, no surprise delays.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low rounded-card p-10 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Smart Consolidation</h3>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-sm">
              By utilizing advanced cube optimization and regional cross-docks, we slash empty miles, lowering shipping costs and emissions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low rounded-card p-10 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Total Transparency</h3>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-sm">
              Through direct tracking and automated notifications, you have a direct window into our operations. We communicate facts, not estimates.
            </p>
          </div>
        </div>
      </section>


      <section className="py-24 bg-black overflow-hidden opacity-100 translate-y-0" id="about-commitment">
        <div className="max-w-7xl mx-auto px-6 md:px-[64px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            {/* Left Column: Interactive Visual Panel */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative flex flex-col h-full">
              {/* Background Red Neon Blur Radial Glow */}
              <div className="absolute inset-0 bg-secondary/15 filter blur-[100px] rounded-full -z-10 animate-pulse duration-[8000ms]"></div>

              <div className="relative border border-zinc-800/80 bg-zinc-950/40 rounded-card p-4 overflow-hidden w-full h-full min-h-[440px] shadow-2xl flex flex-col justify-between">
                <div className="relative w-full h-full rounded-card overflow-hidden">
                  {/* Image 1: Precision */}
                  <img
                    alt="Precision in every move"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeTab === 0 ? 'opacity-80 scale-105 filter brightness-90 contrast-110' : 'opacity-0 scale-100'
                      }`}
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
                  />
                  {/* Image 2: Transparency */}
                  <img
                    alt="Transparency at every step"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeTab === 1 ? 'opacity-80 scale-105 filter brightness-90 contrast-110' : 'opacity-0 scale-100'
                      }`}
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                  />
                  {/* Image 3: Reliability */}
                  <img
                    alt="Reliability you can count on"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeTab === 2 ? 'opacity-80 scale-105 filter brightness-90 contrast-110' : 'opacity-0 scale-100'
                      }`}
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                  />

                  {/* Premium Dark Vignette Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

                  {/* Tech HUD overlay */}
                  <div className="absolute inset-x-4 bottom-4 bg-black/65 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white z-10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-secondary/35">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                        <span className="font-label-caps uppercase tracking-wider text-[9px] font-bold text-white/90">
                          {activeTab === 0 ? "SYSTEM: CONSOLIDATION ENGINE" : activeTab === 1 ? "SYSTEM: TELEMETRY ENGINE" : "SYSTEM: DISPATCH SYSTEM"}
                        </span>
                      </div>
                      <span className="font-label-caps bg-secondary/10 text-secondary border border-secondary/25 text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-widest">
                        {activeTab === 0 ? "ROUTING: OPTIMIZED" : activeTab === 1 ? "GPS: ONLINE" : "NETWORK: OPTIMAL"}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {activeTab === 0 ? (
                        <>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">CUBE UTILIZATION</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">96.4%</div>
                          </div>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">EMPTY MILES SAVED</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">1,420 KM</div>
                          </div>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">ROUTING LATENCY</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">&lt; 120MS</div>
                          </div>
                        </>
                      ) : activeTab === 1 ? (
                        <>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">SATELLITE SYNC</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">100% (GPS)</div>
                          </div>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">TEMP STABILITY</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">4.2°C (STABLE)</div>
                          </div>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">UPDATE FEED</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">REAL-TIME</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">ACTIVE DEPOTS</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">5 / 5 NATIONAL</div>
                          </div>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">DRIVER STATUS</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">VERIFIED</div>
                          </div>
                          <div>
                            <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-0.5 font-label-caps">ON-TIME SLA</div>
                            <div className="text-xs font-extrabold italic tracking-tight text-white font-sans">99.8%</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
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
                <h2 className="text-[2rem] font-extrabold italic tracking-tight leading-tight uppercase text-white font-sans">
                  Freight done smarter, <br />
                  <span className="text-secondary">faster, and transparently.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {/* Card 1 */}
                <button
                  onMouseEnter={() => setActiveTab(0)}
                  onClick={() => setActiveTab(0)}
                  className={`w-full text-left py-4 px-5 transition-all duration-300 rounded-card border relative overflow-hidden outline-none cursor-pointer flex gap-6 items-start ${activeTab === 0
                    ? 'bg-gradient-to-r from-white/10 via-white/5 to-transparent border-secondary/40 shadow-[0_0_25px_rgba(225,25,25,0.08)] scale-[1.02]'
                    : 'bg-transparent border-white/5 opacity-50 hover:opacity-80'
                    }`}
                >
                  {activeTab === 0 && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary shadow-[0_0_12px_#e11919] rounded-full"></div>
                  )}
                  <span className={`font-black text-xl italic mt-0.5 transition-colors duration-300 ${activeTab === 0 ? 'text-secondary' : 'text-white/60'}`}>/01</span>
                  <div>
                    <h3 className={`font-black text-lg uppercase italic mb-1 tracking-tight transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-white/70'}`}>
                      Precision in every move
                    </h3>
                    <p className={`text-xs leading-relaxed font-body-md transition-colors duration-300 ${activeTab === 0 ? 'text-white/80' : 'text-white/50'}`}>
                      Optimized consolidation and routing for faster, more efficient freight movement across the continent.
                    </p>
                  </div>
                </button>

                {/* Card 2 */}
                <button
                  onMouseEnter={() => setActiveTab(1)}
                  onClick={() => setActiveTab(1)}
                  className={`w-full text-left py-4 px-5 transition-all duration-300 rounded-card border relative overflow-hidden outline-none cursor-pointer flex gap-6 items-start ${activeTab === 1
                    ? 'bg-gradient-to-r from-white/10 via-white/5 to-transparent border-secondary/40 shadow-[0_0_25px_rgba(225,25,25,0.08)] scale-[1.02]'
                    : 'bg-transparent border-white/5 opacity-50 hover:opacity-80'
                    }`}
                >
                  {activeTab === 1 && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary shadow-[0_0_12px_#e11919] rounded-full"></div>
                  )}
                  <span className={`font-black text-xl italic mt-0.5 transition-colors duration-300 ${activeTab === 1 ? 'text-secondary' : 'text-white/60'}`}>/02</span>
                  <div>
                    <h3 className={`font-black text-lg uppercase italic mb-1 tracking-tight transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-white/70'}`}>
                      Transparency at every step
                    </h3>
                    <p className={`text-xs leading-relaxed font-body-md transition-colors duration-300 ${activeTab === 1 ? 'text-white/80' : 'text-white/50'}`}>
                      Real-time communication, appointment handling, and operational clarity through our digital tracking suite.
                    </p>
                  </div>
                </button>

                {/* Card 3 */}
                <button
                  onMouseEnter={() => setActiveTab(2)}
                  onClick={() => setActiveTab(2)}
                  className={`w-full text-left py-4 px-5 transition-all duration-300 rounded-card border relative overflow-hidden outline-none cursor-pointer flex gap-6 items-start ${activeTab === 2
                    ? 'bg-gradient-to-r from-white/10 via-white/5 to-transparent border-secondary/40 shadow-[0_0_25px_rgba(225,25,25,0.08)] scale-[1.02]'
                    : 'bg-transparent border-white/5 opacity-50 hover:opacity-80'
                    }`}
                >
                  {activeTab === 2 && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary shadow-[0_0_12px_#e11919] rounded-full"></div>
                  )}
                  <span className={`font-black text-xl italic mt-0.5 transition-colors duration-300 ${activeTab === 2 ? 'text-secondary' : 'text-white/60'}`}>/03</span>
                  <div>
                    <h3 className={`font-black text-lg uppercase italic mb-1 tracking-tight transition-colors duration-300 ${activeTab === 2 ? 'text-white' : 'text-white/70'}`}>
                      Reliability you can count on
                    </h3>
                    <p className={`text-xs leading-relaxed font-body-md transition-colors duration-300 ${activeTab === 2 ? 'text-white/80' : 'text-white/50'}`}>
                      A multi-terminal network and experienced teams delivering consistently high performance every day.
                    </p>
                  </div>
                </button>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => navigateToHomeAndScroll('contact')}
                  className="bg-white text-black px-8 py-3.5 font-black text-base italic uppercase tracking-tighter hover:bg-secondary hover:text-white transition-all flex items-center gap-4 cursor-pointer border-none outline-none rounded-button"
                >
                  Get started today
                  <span className="material-symbols-outlined font-black">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section: Why Choose Us (Stats) */}
      <section className="py-24 px-6 max-w-7xl mx-auto opacity-100 translate-y-0" id="about-stats">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
                <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
              </svg>
              <span className="font-bold text-[10px] uppercase tracking-widest text-primary font-label-caps">Why choose us</span>
            </div>

            <h2 className="text-5xl font-normal leading-tight text-on-surface-variant/60 font-sans">
              A smarter freight network built on <span className="font-extrabold text-primary">15+ years of</span> experience.
            </h2>

            <p className="text-on-surface-variant leading-relaxed font-body-md text-base">
              For 15+ years, we've been committed to solving the real problems in logistics — slow transit, high costs, middleman markups, and limited visibility. M1 Transport combines deep operational expertise with modern consolidation and routing to move freight faster, more efficiently, and with complete transparency.
            </p>
          </div>

          {/* Right Column (Stats Grid) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-x-12 gap-y-12 pl-0 lg:pl-12">
            <div>
              <div className="text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">Years of Logistics Excellence</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={100} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">
                Business Clients</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={1} decimals={1} suffix="M+" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">Shipments Delivered Safely</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light text-primary tracking-tight mb-2">
                <Counter end={99} suffix="%" />
              </div>
              <div className="text-xs md:text-sm text-on-surface-variant font-medium tracking-wide uppercase font-label-caps">On-Time Delivery Rate</div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 6: Partner - YOLO Variant */}
      <section className="py-24 opacity-100 translate-y-0" id="about-yolo-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-[64px]">
          <div className="kinetic-bg relative overflow-hidden p-8 lg:p-16 group rounded-card">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 text-[30rem] font-black text-white leading-none -translate-x-1/2 -translate-y-1/2 select-none">M1</div>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-extrabold italic text-white mb-6 uppercase leading-none tracking-tight font-sans">
                  Partner with<br />M1 Transport today!
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-md mb-8 leading-relaxed font-body-lg">
                  Smarter consolidation. Faster freight. End-to-end support from first mile to final mile. Let's move your business forward.
                </p>
                <button
                  onClick={() => navigateToHomeAndScroll('contact')}
                  className="bg-white text-secondary px-8 py-4 font-bold text-lg md:text-xl italic uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-4 shadow-xl border-none outline-none cursor-pointer rounded-button"
                >
                  Request a Quote
                  <span className="material-symbols-outlined font-black text-2xl">rocket_launch</span>
                </button>
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
