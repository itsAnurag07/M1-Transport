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


function Safety({ navigateTo, navigateToHomeAndScroll }) {
  const pillars = [
    {
      icon: 'verified_user',
      title: 'Chain of Responsibility',
      description: 'Full compliance with Australia\'s Chain of Responsibility (CoR) laws. Every participant in the supply chain — from consignor to driver — is held accountable for transport safety outcomes.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      standard: 'NHVR CoR Compliant',
      audit: 'Quarterly',
      highlights: ['Consignor accountability', 'Driver compliance tracking', 'Load restraint verification'],
    },
    {
      icon: 'speed',
      title: 'Fatigue Management',
      description: 'Advanced fatigue monitoring through electronic work diaries, mandatory rest schedules, and in-cab fatigue detection systems. We go beyond minimum BFM/AFM requirements.',
      image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=800',
      standard: 'BFM/AFM Accredited',
      audit: 'Continuous',
      highlights: ['Electronic work diaries', 'In-cab fatigue cameras', 'Mandatory rest scheduling'],
    },
    {
      icon: 'build',
      title: 'Vehicle Maintenance',
      description: 'Rigorous preventive maintenance programs with real-time fault reporting. Every vehicle undergoes scheduled inspections exceeding NHVR standards before dispatch.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
      standard: 'NHVR Maintenance',
      audit: 'Pre-Dispatch',
      highlights: ['Preventive maintenance', 'Real-time fault reporting', 'NHVR+ inspections'],
    },
    {
      icon: 'security',
      title: 'Safety Monitoring',
      description: 'Our in-house monitoring system tracks driver safety performance, maintenance records, and fatigue management to support safer and more reliable operations.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
      standard: 'Internal SMS',
      audit: 'Ongoing',
      highlights: ['Driver scorecards', 'Incident trend analysis', 'Proactive risk alerts'],
    },
  ];

  const certifications = [
    { name: 'NHVAS Accredited', detail: 'Mass, Maintenance & Fatigue', icon: 'workspace_premium' },
    { name: 'HACCP Certified', detail: 'Hazard Analysis & Critical Control Point', icon: 'eco' },
    { name: 'Guardian Fatigue Camera', detail: 'Driver Fatigue Monitoring System', icon: 'videocam' },
    { name: 'TruckSafe Certified', detail: 'Industry Best Practice', icon: 'shield' },
  ];

  const safetyFeatures = [
    { icon: 'gps_fixed', title: 'GPS Fleet Tracking', desc: 'Real-time location monitoring with geo-fencing alerts and route compliance verification across every vehicle.' },
    { icon: 'videocam', title: 'Dashcam & Telematics', desc: 'Forward and driver-facing cameras with AI-powered event detection for proactive incident management.' },
    { icon: 'sensors', title: 'Fatigue cameras', desc: 'AI-powered fatigue detection systems help identify driver tiredness and distraction, enabling early intervention to reduce safety risks.' },
    { icon: 'tire_repair', title: 'Tyre Monitoring (TPMS)', desc: 'Real-time tyre pressure and temperature monitoring preventing blowouts and improving fuel efficiency.' },
    { icon: 'visibility', title: '24/7 Human Safety Monitoring', desc: 'Continuous round-the-clock monitoring by trained personnel to identify potential safety concerns and coordinate prompt assistance when required.' },
    { icon: 'thermostat', title: 'EBS & Stability Control', desc: 'Electronic braking systems with roll stability and trailer sway mitigation on all articulated combinations.' },
  ];

  return (
    <>
      {/* Safety Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden opacity-100 translate-y-0 bg-black flex items-center" id="safety-hero">
        <div className="absolute inset-0">
          <img
            alt="Fleet safety inspection"
            className="w-full h-full object-cover opacity-50 filter contrast-125 brightness-75"
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 text-white pt-6 md:pt-20 hero-text-container">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Safety & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase mb-6 leading-none max-w-4xl font-sans">
            Safety is not a priority. <br />
            <span className="text-secondary text-outline">It's a value.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-white/85 max-w-2xl leading-relaxed">
            Zero-compromise safety and compliance protecting our people, cargo, and community.
          </p>
        </div>
      </section>


      {/* Safety Pillars Section — Image + Content Alternating Layout */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="safety-pillars">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Our Framework</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
            Four Pillars of Safety
          </h2>
          <p className="text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed mt-4">
            Our safety management system is built on four core pillars aligned with NHVR standards and Chain of Responsibility legislation.
          </p>
        </div>

        {/* Pillar Cards — Alternating Image Layout */}
        <div className="space-y-12 md:space-y-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
            >
              {/* Image Side */}
              <div className={`relative h-[280px] sm:h-[340px] lg:h-[400px] rounded-card overflow-hidden group shadow-xl ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={pillar.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                {/* Floating Pillar Number */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-caps uppercase tracking-widest text-[9px] font-bold text-white/90">
                    Pillar {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Bottom Standard Badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="bg-secondary/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full font-label-caps">
                    {pillar.standard}
                  </span>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-wider font-label-caps">
                    Audit: {pillar.audit}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-secondary">{pillar.icon}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest block">Pillar {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-primary uppercase italic font-sans leading-none">{pillar.title}</h3>
                  </div>
                </div>

                <p className="text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mb-6">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                      <span className="text-sm text-on-surface-variant font-medium font-body-md">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats Bar */}
                <div className="border-t border-outline-variant/20 pt-5 grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-wider mb-1 font-label-caps">Standard</span>
                    <span className="text-sm font-extrabold text-primary">{pillar.standard}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-wider mb-1 font-label-caps">Audit Frequency</span>
                    <span className="text-sm font-extrabold text-primary">{pillar.audit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Safety Stats */}
      <section className="py-16 md:py-20 bg-surface-container-low px-4 sm:px-6" id="safety-stats">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Our Track Record</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
              Safety in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={99.8} decimals={1} suffix="%" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Compliance Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={0} suffix="" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Major Incidents (2024)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={100} suffix="%" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Fleet GPS Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={4} suffix="x" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Annual Audits per Site</p>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-black text-white overflow-hidden px-4 sm:px-6" id="safety-certifications">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">● Industry Standards</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-white uppercase leading-none font-sans">
              Accreditations & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-8 border border-white/10 rounded-xl hover:border-secondary/30 transition-all duration-300 bg-white/3 hover:bg-white/5 text-center"
              >
                <span className="material-symbols-outlined text-4xl text-secondary mb-5 block group-hover:scale-110 transition-transform">
                  {cert.icon}
                </span>
                <h3 className="text-lg font-extrabold text-white uppercase italic font-sans mb-2">{cert.name}</h3>
                <p className="text-white/50 text-sm font-body-md">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Vehicle Safety Technology */}
      <section className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="safety-technology">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Onboard Systems</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
            Vehicle Safety Technology
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-base sm:text-lg mt-4">
            Every vehicle in our fleet is equipped with advanced safety systems that exceed industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-outline-variant/20 rounded-card p-6 sm:p-8 hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-3xl text-secondary mb-5 block group-hover:scale-110 transition-transform">
                {feature.icon}
              </span>
              <h3 className="text-lg font-bold text-primary mb-3 uppercase font-sans italic">{feature.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body-md">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>





      {/* Bottom CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6" id="safety-cta">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-primary rounded-card overflow-hidden px-6 py-10 sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,47,47,0.15),transparent_60%)]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-white mb-6 uppercase leading-none tracking-tight font-sans">
                  Safety starts with <br />the right partner.
                </h2>
                <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-body-lg">
                  Partner with a carrier that treats safety as a core business value — not just a checkbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  onClick={() => navigateToHomeAndScroll('contact')}
                  className="bg-secondary text-white px-6 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-black italic uppercase tracking-tighter hover:bg-[#BD1C19] transition-all flex items-center justify-center gap-3 cursor-pointer border-none outline-none rounded-button"
                >
                  Talk to our safety team
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Safety;
