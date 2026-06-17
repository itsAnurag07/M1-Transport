import React, { useState } from 'react';

function Fleet({ navigateTo, navigateToHomeAndScroll }) {
  // Showroom Tab State
  const [activeTab, setActiveTab] = useState('bdouble');

  // Tabs Data
  const vehicles = {
    bdouble: {
      name: 'B-Double Multi-Combination',
      subtitle: 'The heavy linehaul workhorse of national corridors.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
      palletSpots: '34 Standard Spaces',
      maxPayload: '42,000 kg',
      axles: 'Lead Semi + Tail Semi (Tri-Axle)',
      features: ['NHVR HML approved', 'EBS braking controls', 'Real-time satellite GPS tracking', 'Fatigue monitoring camera systems'],
      description: 'Our B-Double combinations operate primarily on capital-to-capital linehaul corridors (Sydney, Melbourne, Brisbane, Adelaide, Perth). They offer massive cargo capacity and excellent payload efficiency, reducing the overall carbon footprint per pallet moved.'
    },
    semi: {
      name: 'Single Semi-Trailer',
      subtitle: 'Flexible cargo transport for regional & metro shipments.',
      image: 'https://images.unsplash.com/photo-1501522308591-dfcbfd2f620c?auto=format&fit=crop&q=80&w=800',
      palletSpots: '22 to 26 Standard Spaces',
      maxPayload: '24,000 kg',
      axles: 'Tri-Axle Trailer suspension',
      features: ['Air-ride suspension', 'Rear barn doors & roll-up doors', 'Curtainside fast-lock buckles', 'Route telemetry sensors'],
      description: 'The single semi-trailer is the industry standard for regional distribution and metropolitan point-to-point deliveries. Highly maneuverable while maintaining substantial payload capability, our semis are equipped with air-ride systems to protect delicate freight.'
    },
    refrigerated: {
      name: 'Refrigerated Semi-Trailer',
      subtitle: 'Active climate-controlled cargo protection.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      palletSpots: '22 to 24 Pallet Spaces',
      maxPayload: '22,000 kg',
      axles: 'Tri-Axle Thermal Trailer',
      features: ['Carrier Vector active units', 'Multi-temp zone partitioning', 'Real-time digital temp logs', 'HACCP food safety certification'],
      description: 'Designed specifically for cold chain integrity, our refrigerated trailer fleet maintains constant temperatures from -20°C to +20°C. Complete with thermal barrier walls and real-time electronic temperature alarms, it ensures fresh food and sensitive pharmaceuticals arrive compliant.'
    },
    rigid: {
      name: 'Rigid Heavy Delivery Vehicle',
      subtitle: 'Last-mile urban delivery with destination support.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
      palletSpots: '8 to 12 Pallet Spaces',
      maxPayload: '8,500 kg',
      axles: 'Single / Dual Rear Axle',
      features: ['2.0 Tonne heavy tail-lift', 'Roller shutter rear door', 'Low-clearance urban styling', 'Reversing cameras & side sensors'],
      description: 'Our rigid fleet bridges metropolitan cross-docks and business delivery points. Outfitted with heavy-duty automated hydraulic tail-lifts, these vehicles are optimized for delivery sites that lack dock infrastructure or forklifts.'
    }
  };

  const tabLabels = {
    bdouble: 'B-Double',
    semi: 'Single Semi',
    refrigerated: 'Refrigerated',
    rigid: 'Rigid'
  };

  const active = vehicles[activeTab];

  return (
    <>
      {/* ──────────── Fleet Hero Section ──────────── */}
      <section
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] md:min-h-[450px] overflow-hidden bg-black flex items-end sm:items-center"
        id="fleet-hero"
      >
        <div className="absolute inset-0">
          <img
            alt="Line of trucks on road"
            className="w-full h-full object-cover opacity-50 sm:opacity-60 filter contrast-125 brightness-75"
            src="https://images.unsplash.com/photo-1592838064805-71bd7454a4f1?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 text-white pb-8 sm:pb-0 pt-20">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-3 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Asset Operations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase mb-3 sm:mb-6 leading-[0.95] max-w-4xl font-sans">
            OUR CAPABILITY IN MOTION. <br />
            <span className="text-secondary text-outline">THE M1 TRANSPORT FLEET.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light text-white/85 max-w-2xl leading-relaxed">
            Fully company-owned assets, operated by qualified drivers and maintained to standard compliance. Moving Australia daily.
          </p>
        </div>
      </section>


      {/* ──────────── Fleet Specifications Grid ──────────── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="fleet-specs">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 sm:gap-6 lg:gap-12 mb-10 sm:mb-16">
          <div className="lg:w-1/2">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-2 sm:mb-4 block">Asset Capability</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
              Our Fleet Specifications
            </h2>
          </div>
          <div className="lg:w-1/2 lg:border-l-2 lg:border-secondary lg:pl-8 py-1">
            <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-base">
              We own and manage our assets, ensuring absolute control over vehicle compliance, service schedules, and driver standards.
            </p>
          </div>
        </div>

        {/* Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Spec Card 1 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-5 sm:p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-secondary mb-4 sm:mb-6">local_shipping</span>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 uppercase font-sans italic">B-Doubles</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
              High-payload combination vehicles optimized for heavy national corridor linehauls.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-3 sm:pt-4">
              Max Payload: 38-40 Tonnes
            </div>
          </div>

          {/* Spec Card 2 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-5 sm:p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-secondary mb-4 sm:mb-6">ac_unit</span>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 uppercase font-sans italic">Refrigerated Units</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
              State-of-the-art temperature-controlled vans with active thermostatic tracking.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-3 sm:pt-4">
              Temp Range: -20°C to +20°C
            </div>
          </div>

          {/* Spec Card 3 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-5 sm:p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-secondary mb-4 sm:mb-6">inventory</span>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 uppercase font-sans italic">Dry Bulk Tankers</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
              Weather-tight, high-cube semi-trailers for general industrial and consumer freight.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-3 sm:pt-4">
              Capacity: Up to 26 Pallets
            </div>
          </div>

          {/* Spec Card 4 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-5 sm:p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-secondary mb-4 sm:mb-6">precision_manufacturing</span>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 uppercase font-sans italic">Tail-Lift Fleet</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
              Rigid delivery trucks with heavy-duty liftgates for sites lacking loading docks.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-3 sm:pt-4">
              Lift Rating: 2.0 Tonnes
            </div>
          </div>
        </div>
      </section>


      {/* ──────────── Fleet Showroom (Tabbed) ──────────── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="showroom">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-2 sm:mb-4 block">Asset Catalog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
            Explore Our Fleet
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
            Select a vehicle class below to learn more about our fleet capabilities.
          </p>
        </div>

        {/* Tab Buttons — horizontal scroll on mobile */}
        <div className="flex overflow-x-auto scrollbar-none w-full justify-start md:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 border-b border-outline-variant/30 pb-4 sm:pb-8">
          {Object.keys(vehicles).map((key) => (
            <button
              key={`tab-${key}`}
              onClick={() => setActiveTab(key)}
              className={`shrink-0 py-2.5 sm:py-4 px-4 sm:px-6 rounded-button font-bold text-xs sm:text-sm tracking-wide uppercase border text-center transition-all cursor-pointer ${activeTab === key
                ? 'bg-primary border-primary text-white'
                : 'bg-surface-container-low border-outline-variant/50 text-primary hover:bg-slate-100'
                }`}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white border border-outline-variant/20 rounded-card shadow-lg overflow-hidden">
          {/* Image + Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[220px] sm:h-[280px] lg:h-full lg:min-h-[420px] overflow-hidden group order-1 lg:order-2">
              <img
                alt={active.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={active.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              {/* Floating badge on image */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-button px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{tabLabels[activeTab]}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary uppercase italic font-sans leading-tight">
                  {active.name}
                </h3>
                <p className="text-secondary font-bold font-body-md italic text-sm sm:text-base mt-1">{active.subtitle}</p>
              </div>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                {active.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="bg-surface-container-low rounded-xl p-3 sm:p-4">
                  <span className="material-symbols-outlined text-secondary text-lg sm:text-xl mb-1 block">inventory_2</span>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant font-bold">Pallets</p>
                  <p className="text-xs sm:text-sm font-bold text-primary mt-0.5">{active.palletSpots}</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3 sm:p-4">
                  <span className="material-symbols-outlined text-secondary text-lg sm:text-xl mb-1 block">weight</span>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant font-bold">Max Payload</p>
                  <p className="text-xs sm:text-sm font-bold text-primary mt-0.5">{active.maxPayload}</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3 sm:p-4 col-span-2 sm:col-span-1">
                  <span className="material-symbols-outlined text-secondary text-lg sm:text-xl mb-1 block">settings</span>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant font-bold">Axle Config</p>
                  <p className="text-xs sm:text-sm font-bold text-primary mt-0.5">{active.axles}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 sm:mb-3">Key Features</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {active.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5 shrink-0">check_circle</span>
                      <span className="text-xs sm:text-sm text-on-surface-variant">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ──────────── Bottom Fleet CTA ──────────── */}
      <section className="py-10 sm:py-16" id="fleet-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="kinetic-bg relative overflow-hidden p-6 sm:p-8 lg:p-16 group rounded-card">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 text-[15rem] sm:text-[20rem] lg:text-[30rem] font-black text-white leading-none -translate-x-1/2 -translate-y-1/2 select-none">M1</div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold italic text-white mb-3 sm:mb-6 uppercase leading-none tracking-tight font-sans">
                  Book dedicated <br className="hidden sm:block" />fleet capacity today.
                </h2>
                <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-body-lg">
                  Need dedicated B-Double runs or regional semi distribution paths? Secure space in our asset network and let M1 handle the scheduling mechanics.
                </p>
              </div>
              <div className="shrink-0">
                <button
                  onClick={() => navigateToHomeAndScroll('contact')}
                  className="bg-white text-secondary px-5 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-lg md:text-xl italic uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-3 sm:gap-4 shadow-xl border-none outline-none cursor-pointer rounded-button w-full sm:w-auto justify-center"
                >
                  Acquire Capacity
                  <span className="material-symbols-outlined font-black text-xl sm:text-2xl">rocket_launch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fleet;
