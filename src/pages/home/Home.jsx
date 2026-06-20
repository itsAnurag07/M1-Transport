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
import slide1 from '../../assets/images/hero-slide-1.png';
import slide2 from '../../assets/images/hero-slide-2.png';
import slide3 from '../../assets/images/hero-slide-3.png';
import truck2 from '../../assets/images/truck-1.png';
import girlImage from '../../assets/images/girl.png';
import heroVideo from '../../assets/Truck_Hero.mp4';
import logo from '../../assets/images/LOGO_NEW.png';


function Home({ navigateTo, navigateToHomeAndScroll }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[550px] md:min-h-[700px] overflow-hidden opacity-100 translate-y-0" id="hero">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale-[0.2] contrast-110"
            src={heroVideo}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 md:px-6 flex flex-col justify-center pt-20 -translate-y-10 md:translate-y-0 hero-text-container">
          <div className="max-w-4xl text-white space-y-6 md:space-y-8">
            <h1 className="hero-title font-bold text-white font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl space-y-2 md:space-y-0">
              <span className="block">Lower cost. </span>
              <span className="block text-secondary">More visibility. </span>
              <span className="block">Better freight. </span>
            </h1>
            <p className="text-base md:text-xl font-light leading-relaxed max-w-2xl text-white/90">
              Smarter consolidation that cuts cost, improves transit, and gives you real visibility.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm font-label-caps uppercase tracking-widest text-white/80">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-secondary rotate-45 mr-3"></span> East Coast
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-secondary rotate-45 mr-3"></span> Bulk Haulage
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-secondary rotate-45 mr-3"></span> 3PL Logistics
              </div>
            </div>
            <div className="pt-6 md:pt-8">
              <a href="/#services" onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('services'); }} className="bg-secondary text-white px-6 py-3.5 md:px-10 md:py-5 rounded-button font-label-caps uppercase tracking-widest flex items-center group transition-all hover:bg-[#BD1C19] hover:pr-12 border-none outline-none cursor-pointer text-sm no-underline inline-flex">
                Our services
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Service Cards / Comprehensive Solutions */}
      <section id="services" className="relative z-10 px-4 md:px-6 my-12 md:my-16 opacity-100 translate-y-0">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16 items-center">
            <div className="md:col-span-7">
              <span className="block font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block mr-2 align-middle"></span>
                Logistics Infrastructure
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold italic tracking-tight text-primary leading-none uppercase font-sans">
                Comprehensive<br />Solutions.
              </h2>
            </div>
            <div className="md:col-span-5 border-l-2 border-secondary pl-6 md:pl-8 py-2">
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base md:text-lg">
                Modular service offerings designed to integrate seamlessly into your enterprise supply chain management.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
            {/* Card 1 */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[380px] md:h-[520px] group transition-all duration-500 hover:-translate-y-2 transform-gpu will-change-transform isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
              <img alt="Australian East Coast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu" src={slide1} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/50 via-[#0c1017]/25 to-transparent transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="relative h-full flex flex-col justify-end p-6 pb-3 md:px-8 md:pb-5 md:pt-8 z-10">
                <div style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">Australian East Coast</h3>
                  <div className="w-12 h-[2px] bg-secondary my-3"></div>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-0">
                    Daily scheduled corridor linehaul and freight consolidation connecting capital hubs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[380px] md:h-[520px] group transition-all duration-500 hover:-translate-y-2 transform-gpu will-change-transform isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
              <img alt="Bulk Haulage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu" src={slide2} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/50 via-[#0c1017]/25 to-transparent transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="relative h-full flex flex-col justify-end p-6 pb-3 md:px-8 md:pb-5 md:pt-8 z-10">
                <div style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">Bulk Haulage</h3>
                  <div className="w-12 h-[2px] bg-secondary my-3"></div>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-0">
                    Heavy industrial freight logistics and high-payload fleet combinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[380px] md:h-[520px] group transition-all duration-500 hover:-translate-y-2 transform-gpu will-change-transform isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
              <img alt="Third Party Logistics - 3PL" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu" src={slide3} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/50 via-[#0c1017]/25 to-transparent transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="relative h-full flex flex-col justify-end p-6 pb-3 md:px-8 md:pb-5 md:pt-8 z-10">
                <div style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">Third Party Logistics - 3PL</h3>
                  <div className="w-12 h-[2px] bg-secondary my-3"></div>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-0">
                    WMS-integrated warehousing, container devanning, and regional storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Fleet Section */}
      <section id="fleet" className="py-12 md:py-[100px] px-4 md:px-6 w-full max-w-7xl mx-auto opacity-100 translate-y-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-grid-gutter items-center">
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> About M1
            </span>
            <h2 className="font-display-lg text-3xl md:text-display-lg mb-6 md:mb-12 text-primary leading-tight">15+ years of operational excellence.</h2>
            <p className="font-body-lg text-on-surface-variant mb-6 md:mb-12 leading-relaxed text-sm md:text-base">
              We bring 15+ years of operational experience to every shipment—combining operational mastery with modern tech-enabled routing to keep your supply chain moving with surgical precision.
            </p>
            <a href="/about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="group flex items-center mt-8 md:mt-12 gap-4 border border-primary text-primary px-6 py-3.5 md:px-8 md:py-4 font-label-caps uppercase tracking-widest rounded-button hover:bg-primary hover:text-white transition-all bg-transparent cursor-pointer text-xs md:text-sm no-underline inline-flex">
              About the company
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">north_east</span>
            </a>
          </div>
          <div className="md:col-span-7 relative h-[350px] sm:h-[450px] md:h-[600px] rounded-card overflow-hidden editorial-shadow mt-6 md:mt-0">
            <img alt="Fleet of trucks" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9BLe5GVZxhvvmYRycGH9K02xszdBDTrpPQTamy7IVeTXclyVpP8OKiRuOVyZvQNtvx4m1Le33_UF186qaK54W4sIV5DjjGc7f17hIFurzxcMh5q4R6UBtjjSmnPxh_hySLTKf2c0ltQ06glDg3vFYTNAIFB9qnzsHS1G3-JP5w-qvJqeRALGH8t7MXowuix-o8uFKnNsSkxdV9s2vHmrH_uKvJ-5ob_3TFVZETZkF40wkvlHYVDiPlW8l0ZKfu7BfaDuTBs9L4yk" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 flex flex-row md:flex-col gap-2 md:gap-4 z-10">
              <div className="bg-secondary text-white p-2 px-3 md:py-4 md:px-6 flex items-center gap-2 md:gap-4 rounded-button shadow-2xl w-auto md:w-64">
                <span className="font-display-lg text-sm md:text-4xl font-bold">01</span>
                <span className="font-label-caps uppercase tracking-tighter leading-tight font-bold text-[8px] md:text-sm">Proven Expertise</span>
              </div>
              <div className="bg-surface text-primary p-2 px-3 md:py-4 md:px-6 flex items-center gap-2 md:gap-4 rounded-button shadow-2xl border border-outline-variant w-auto md:w-64">
                <span className="font-display-lg text-sm md:text-4xl font-bold">02</span>
                <span className="font-label-caps uppercase tracking-tighter leading-tight font-bold text-[8px] md:text-sm">Cost-Saving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="pt-10 pb-12 md:pt-[60px] md:pb-[100px] px-4 md:px-6 bg-surface-container-low opacity-100 translate-y-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-outline/30 pb-8 md:pb-12 mb-8 md:mb-12 gap-4">
            <h2 className="font-display-lg text-4xl md:text-display-lg text-primary">Services.</h2>
            <p className="max-w-md font-body-md text-on-surface-variant md:text-right text-sm md:text-base">
              Our solutions are built to move freight smarter — with optimized consolidation, adaptive routing, and complete transparency from first mile to final mile.
            </p>
          </div>
          <div className="space-y-0 text-primary">
            <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 border-b border-outline/20 hover:bg-secondary hover:text-white transition-colors px-4 md:px-6 -mx-4 md:-mx-6 gap-4 cursor-pointer no-underline block">
              <h4 className="font-headline-lg text-xl md:text-headline-lg text-left group-hover:translate-x-4 transition-transform uppercase font-bold italic text-primary group-hover:text-white">Australian East Coast</h4>
              <span className="w-full md:w-auto flex justify-between md:justify-start items-center gap-4 font-label-caps uppercase tracking-widest mt-2 md:mt-0 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity font-bold text-primary group-hover:text-white text-xs md:text-sm">
                Learn more <span className="material-symbols-outlined">north_east</span>
              </span>
            </a>
            <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 border-b border-outline/20 hover:bg-secondary hover:text-white transition-colors px-4 md:px-6 -mx-4 md:-mx-6 gap-4 cursor-pointer no-underline block">
              <h4 className="font-headline-lg text-xl md:text-headline-lg text-left group-hover:translate-x-4 transition-transform uppercase font-bold italic text-primary group-hover:text-white">Bulk Haulage</h4>
              <span className="w-full md:w-auto flex justify-between md:justify-start items-center gap-4 font-label-caps uppercase tracking-widest mt-2 md:mt-0 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity font-bold text-primary group-hover:text-white text-xs md:text-sm">
                Learn more <span className="material-symbols-outlined">north_east</span>
              </span>
            </a>
            <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 border-b border-outline/20 hover:bg-secondary hover:text-white transition-colors px-4 md:px-6 -mx-4 md:-mx-6 gap-4 cursor-pointer no-underline block">
              <h4 className="font-headline-lg text-xl md:text-headline-lg text-left group-hover:translate-x-4 transition-transform uppercase font-bold italic text-primary group-hover:text-white">Third Party Logistics - 3PL</h4>
              <span className="w-full md:w-auto flex justify-between md:justify-start items-center gap-4 font-label-caps uppercase tracking-widest mt-2 md:mt-0 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity font-bold text-primary group-hover:text-white text-xs md:text-sm">
                Learn more <span className="material-symbols-outlined">north_east</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 md:py-[100px] px-4 md:px-6 w-full max-w-7xl mx-auto opacity-100 translate-y-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-grid-gutter text-center">
          <div className="border-l border-outline-variant pl-4 md:pl-8 text-left">
            <div className="font-display-xl text-3xl md:text-display-xl mb-1 text-primary">
              <Counter end={15} suffix="+" />
            </div>
            <div className="font-label-caps text-on-surface-variant uppercase tracking-widest font-bold text-[10px] md:text-xs">Years Experience</div>
          </div>
          <div className="border-l border-outline-variant pl-4 md:pl-8 text-left">
            <div className="font-display-xl text-3xl md:text-display-xl mb-1 text-primary">
              <Counter end={1} decimals={1} suffix="M+" />
            </div>
            <div className="font-label-caps text-on-surface-variant uppercase tracking-widest font-bold text-[10px] md:text-xs">Shipments/Year</div>
          </div>
          <div className="border-l border-outline-variant pl-4 md:pl-8 text-left">
            <div className="font-display-xl text-3xl md:text-display-xl mb-1 text-primary">
              <Counter end={100} suffix="+" />
            </div>
            <div className="font-label-caps text-on-surface-variant uppercase tracking-widest font-bold text-[10px] md:text-xs">Business Clients</div>
          </div>
          <div className="border-l border-outline-variant pl-4 md:pl-8 text-left">
            <div className="font-display-xl text-3xl md:text-display-xl mb-1 text-primary">
              <Counter end={99} suffix="%" />
            </div>
            <div className="font-label-caps text-on-surface-variant uppercase tracking-widest font-bold text-[10px] md:text-xs">Reliability Rate</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="my-10 md:my-20 px-4 md:px-6 w-full max-w-7xl mx-auto bg-surface-container-lowest editorial-shadow rounded-card opacity-100 translate-y-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-6 md:px-12 py-10 md:py-[50px]">
          <div>
            <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6 md:mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Client Success
            </span>
            <h2 className="font-headline-lg text-2xl md:text-headline-lg leading-tight mb-6 md:mb-12 text-primary">
              Trusted by teams who depend on <span className="font-bold italic">speed, consistency,</span> and real communication.
            </h2>
            <div className="border-l-4 border-secondary pl-6 md:pl-8 mb-6 md:mb-12">
              <p className="font-body-lg text-on-surface-variant italic leading-relaxed text-sm md:text-base">
                "M1 Transport transformed our freight operations. Their consolidation network and proactive updates have reduced costs and improved reliability across our entire supply chain. They aren't just a carrier; they're a strategic partner."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-variant overflow-hidden shrink-0">
                <img alt="Jennifer B." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsuN2sjMferlNymh_c1YWgnrtCtAneZVFbeiiyE02zGo567eRwjGR-N9XudsxKDkvB6n3DCvyyjJkiXHLOpaXfJ3M-AW15UKn-FzrD5Et-IPL2_bZYVK1ewxVsRJ_jaT_86W6gaGyiJdRUg90zGC3PMvYCK1kM8oiD1YlI5J9EUnXPVdPU4hf_x8rX75RGhGlxPKk76JybrFQKmFyLEebUmlP3ZnH9APFSt91d7eHeV1Q4XSevyXYmbxaeN1lcVrd7piSskdK5guw" />
              </div>
              <div>
                <div className="font-bold text-primary text-sm md:text-base">Jennifer B.</div>
                <div className="text-on-surface-variant font-label-caps text-[10px] md:text-xs">National Supply Chain Manager, Global Logistics Co.</div>
              </div>
            </div>
          </div>
          <div className="relative h-[280px] sm:h-[350px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl mt-6 md:mt-0">
            <img alt="Supply Chain Professional" className="w-full h-full object-cover" src={girlImage} />
          </div>
        </div>
      </section>

      {/* Dark Feature Section (Value Props) */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-white overflow-hidden relative opacity-100 translate-y-0 bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
            <div>
              <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 md:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Why M1?
              </span>
              <h2 className="font-display-lg text-3xl md:text-display-lg text-[#FEFEFE] leading-tight">Solving the real problems in freight: cost, speed, and visibility.</h2>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="M1 Transport Logo"
                className="w-36 h-36 md:w-80 md:h-80 object-contain opacity-90"
                style={{ filter: 'drop-shadow(0 0 40px rgba(220,38,38,0.35)) drop-shadow(0 0 80px rgba(220,38,38,0.15))' }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 md:mb-6">analytics</span>
              <h4 className="font-headline-md text-xl md:text-2xl mb-3 md:mb-4 text-[#FEFEFE] uppercase font-bold italic">Lower Cost, No Middlemen</h4>
              <p className="font-body-md text-white/70 leading-relaxed text-sm">Our hybrid consolidation model eliminates broker markups and reduces total freight cost through smarter cube utilization and routing.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 md:mb-6">speed</span>
              <h4 className="font-headline-md text-xl md:text-2xl mb-3 md:mb-4 text-[#FEFEFE] uppercase font-bold italic">Faster Transit, Fewer Touchpoints</h4>
              <p className="font-body-md text-white/70 leading-relaxed text-sm">We move freight with FTL-level speed while avoiding the slow, multi-stop handling of traditional LTL. Less delay, less damage.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 md:mb-6">visibility</span>
              <h4 className="font-headline-md text-xl md:text-2xl mb-3 md:mb-4 text-[#FEFEFE] uppercase font-bold italic">Complete Visibility &amp; Transparency</h4>
              <p className="font-body-md text-white/70 leading-relaxed text-sm">Proactive updates, appointment scheduling, and direct access to operations — no ticket systems, no middle layers, no guessing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 md:py-24 px-4 md:px-6 w-full max-w-7xl mx-auto opacity-100 translate-y-0">
        <div className="flex flex-col md:flex-row bg-surface-container-lowest editorial-shadow overflow-hidden rounded-card">
          <div className="p-8 sm:p-12 md:p-20 md:w-1/2 flex flex-col justify-center">
            <h2 className="font-display-lg text-3xl md:text-display-lg mb-6 md:mb-8 leading-tight text-primary">Partner with <br /><span className="text-secondary italic font-bold">M1 Transport</span> today.</h2>
            <p className="font-body-lg text-on-surface-variant mb-8 md:mb-12 text-sm md:text-base leading-relaxed">Smarter consolidation. Faster freight. End-to-end support from first mile to final mile across the continent.</p>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="cta-gradient w-full md:w-fit px-8 py-4 md:px-12 md:py-6 rounded-button font-label-caps uppercase tracking-widest text-white hover:opacity-90 transition-all flex items-center justify-center gap-4 group border-none outline-none cursor-pointer text-sm font-bold no-underline inline-flex">
              Get a quote <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </a>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[300px] md:min-h-[400px] bg-black p-6">
            <div className="text-white font-display-xl text-[100px] md:text-[180px] font-bold tracking-tighter opacity-10 absolute select-none">M1</div>
            <img alt="Premium Transport" className="w-4/5 h-4/5 max-h-[300px] md:max-h-none object-cover editorial-shadow relative z-10 border-8 md:border-[16px] border-white rounded-lg" src={truck2} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
