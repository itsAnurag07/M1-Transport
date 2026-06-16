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


function Safety({ navigateTo, navigateToHomeAndScroll }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: 'verified_user',
      title: 'Chain of Responsibility',
      description: 'Full compliance with Australia\'s Chain of Responsibility (CoR) laws. Every participant in the supply chain — from consignor to driver — is held accountable for transport safety outcomes.',
    },
    {
      icon: 'speed',
      title: 'Fatigue Management',
      description: 'Advanced fatigue monitoring through electronic work diaries, mandatory rest schedules, and in-cab fatigue detection systems. We go beyond minimum BFM/AFM requirements.',
    },
    {
      icon: 'build',
      title: 'Vehicle Maintenance',
      description: 'Rigorous preventive maintenance programs with real-time fault reporting. Every vehicle undergoes scheduled inspections exceeding NHVR standards before dispatch.',
    },
    {
      icon: 'local_shipping',
      title: 'Load Restraint',
      description: 'All loads secured to NTC Load Restraint Guide standards. Our drivers are certified in advanced load restraint techniques with regular competency assessments.',
    },
  ];

  const certifications = [
    { name: 'NHVAS Accredited', detail: 'Mass, Maintenance & Fatigue', icon: 'workspace_premium' },
    { name: 'ISO 9001:2015', detail: 'Quality Management System', icon: 'verified' },
    { name: 'ISO 45001:2018', detail: 'OH&S Management System', icon: 'health_and_safety' },
    { name: 'TruckSafe Certified', detail: 'Industry Best Practice', icon: 'shield' },
  ];

  const safetyFeatures = [
    { icon: 'gps_fixed', title: 'GPS Fleet Tracking', desc: 'Real-time location monitoring with geo-fencing alerts and route compliance verification across every vehicle.' },
    { icon: 'videocam', title: 'Dashcam & Telematics', desc: 'Forward and driver-facing cameras with AI-powered event detection for proactive incident management.' },
    { icon: 'sensors', title: 'Collision Avoidance', desc: 'Autonomous emergency braking (AEB), lane departure warning, and adaptive cruise control on all prime movers.' },
    { icon: 'tire_repair', title: 'Tyre Monitoring (TPMS)', desc: 'Real-time tyre pressure and temperature monitoring preventing blowouts and improving fuel efficiency.' },
    { icon: 'visibility', title: 'Blind Spot Detection', desc: 'Side-scan radar systems alerting drivers to vulnerable road users in adjacent lanes and blind zones.' },
    { icon: 'thermostat', title: 'EBS & Stability Control', desc: 'Electronic braking systems with roll stability and trailer sway mitigation on all articulated combinations.' },
  ];

  return (
    <>
      {/* Safety Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden opacity-100 translate-y-0 bg-black flex items-center" id="safety-hero">
        <div className="absolute inset-0">
          <img
            alt="Fleet safety inspection"
            className="w-full h-full object-cover opacity-50 filter contrast-125 brightness-75"
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-6 text-white pt-20">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Safety & Compliance
          </span>
          <h1 className="text-5xl font-extrabold italic tracking-tighter uppercase mb-6 leading-none max-w-4xl font-sans">
            Safety is not a priority. <br />
            <span className="text-secondary text-outline">It's a value.</span>
          </h1>
          <p className="text-xl md:text-lg font-light text-white/85 max-w-2xl leading-relaxed">
            Every journey begins and ends with safety. Our systems, training, and culture ensure zero-compromise protection for our people, cargo, and community.
          </p>
        </div>
      </section>


      {/* Safety Pillars Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="safety-pillars">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Our Framework</span>
            <h2 className="text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans mb-6">
              Four Pillars of Safety
            </h2>
            <p className="text-on-surface-variant font-body-md text-base leading-relaxed mb-8">
              Our safety management system is built on four core pillars aligned with NHVR standards and Chain of Responsibility legislation.
            </p>

            {/* Pillar Tabs */}
            <div className="space-y-2">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-4 bg-transparent outline-none ${
                    activePillar === index
                      ? 'border-secondary/40 bg-secondary/5 shadow-md'
                      : 'border-outline-variant/20 hover:border-outline-variant/40 hover:bg-slate-50'
                  }`}
                >
                  <span className={`material-symbols-outlined text-2xl ${activePillar === index ? 'text-secondary' : 'text-on-surface-variant/50'}`}>
                    {pillar.icon}
                  </span>
                  <span className={`font-bold text-sm uppercase tracking-wide ${activePillar === index ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {pillar.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Pillar Detail */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-outline-variant/20 rounded-card p-10 shadow-lg h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-secondary">{pillars[activePillar].icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest block">Pillar {String(activePillar + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-extrabold text-primary uppercase italic font-sans leading-none">{pillars[activePillar].title}</h3>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md text-base leading-relaxed mb-8">
                {pillars[activePillar].description}
              </p>
              <div className="border-t border-outline-variant/20 pt-6 grid grid-cols-2 gap-6">
                <div>
                  <span className="block text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-wider mb-1">Standard</span>
                  <span className="text-sm font-extrabold text-primary">NHVR Compliant</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-wider mb-1">Audit Frequency</span>
                  <span className="text-sm font-extrabold text-primary">Quarterly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section className="py-20 bg-black text-white overflow-hidden" id="safety-certifications">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">● Industry Standards</span>
            <h2 className="text-5xl font-extrabold italic tracking-tight text-white uppercase leading-none font-sans">
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
      <section className="py-20 px-6 max-w-7xl mx-auto" id="safety-technology">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Onboard Systems</span>
          <h2 className="text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
            Vehicle Safety Technology
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-lg mt-4">
            Every vehicle in our fleet is equipped with advanced safety systems that exceed industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-outline-variant/20 rounded-card p-8 hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
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


      {/* Safety Stats */}
      <section className="py-20 bg-surface-container-low" id="safety-stats">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Our Track Record</span>
            <h2 className="text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
              Safety in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={99.8} decimals={1} suffix="%" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Compliance Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={0} suffix="" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Major Incidents (2024)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={100} suffix="%" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Fleet GPS Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-primary tracking-tight mb-2">
                <Counter end={4} suffix="x" />
              </div>
              <p className="text-sm text-on-surface-variant font-body-md">Annual Audits per Site</p>
            </div>
          </div>
        </div>
      </section>


      {/* Driver Training Section */}
      <section className="py-20 bg-black text-white overflow-hidden" id="safety-training">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">● Our People</span>
              <h2 className="text-5xl font-extrabold italic tracking-tight text-white uppercase leading-none font-sans mb-6">
                Driver Training & Development
              </h2>
              <p className="text-white/60 text-base leading-relaxed font-body-md mb-8">
                Every M1 driver completes a comprehensive induction program and ongoing competency assessments covering defensive driving, load restraint, fatigue awareness, and emergency response.
              </p>

              <div className="space-y-4">
                {[
                  'National Heavy Vehicle Competency training',
                  'Quarterly defensive driving refreshers',
                  'Hazardous goods (DG) certification',
                  'In-cab coaching via telematics scorecards',
                  'Toolbox talks & safety stand-downs',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <span className="text-white/70 text-sm font-body-md">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[420px] rounded-card overflow-hidden group">
              <img
                alt="Driver training session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Bottom CTA */}
      <section className="py-16" id="safety-cta">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-primary rounded-card overflow-hidden px-12 py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,47,47,0.15),transparent_60%)]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-extrabold italic text-white mb-6 uppercase leading-none tracking-tight font-sans">
                  Safety starts with <br />the right partner.
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-body-lg">
                  Partner with a carrier that treats safety as a core business value — not just a checkbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  onClick={() => navigateToHomeAndScroll('contact')}
                  className="bg-secondary text-white px-10 py-4 font-black text-lg italic uppercase tracking-tighter hover:bg-[#BD1C19] transition-all flex items-center justify-center gap-3 cursor-pointer border-none outline-none rounded-button"
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
