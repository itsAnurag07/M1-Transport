import React, { useState } from 'react';

function Fleet({ navigateTo, navigateToHomeAndScroll }) {
  // Showroom Tab State
  const [activeTab, setActiveTab] = useState('bdouble');

  // Pallet Planner State
  const [pallets, setPallets] = useState(14);
  const [weight, setWeight] = useState(12000);
  const [tempControlled, setTempControlled] = useState(false);

  // Tabs Data
  const vehicles = {
    bdouble: {
      name: 'B-Double Multi-Combination',
      subtitle: 'The heavy linehaul workhorse of national corridors.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
      palletSpots: '34 Standard Spaces (Double deck options available)',
      maxPayload: '42,000 kg',
      axles: 'Lead Semi (Dual/Tri) + Tail Semi (Tri-Axle)',
      features: ['NHVR HML approved', 'EBS braking controls', 'Real-time satellite GPS tracking', 'Fatigue monitoring camera systems'],
      description: 'Our B-Double combinations operate primarily on capital-to-capital linehaul corridors (Sydney, Melbourne, Brisbane, Adelaide, Perth). They offer massive cargo capacity and excellent payload efficiency, reducing the overall carbon footprint per pallet moved.'
    },
    semi: {
      name: 'Single Semi-Trailer (Dry Van / Open)',
      subtitle: 'Flexible cargo transport for regional & metro shipments.',
      image: 'https://images.unsplash.com/photo-1501522308591-dfcbfd2f620c?auto=format&fit=crop&q=80&w=800',
      palletSpots: '22 to 26 Standard Spaces',
      maxPayload: '24,000 kg',
      axles: 'Tri-Axle Trailer suspension',
      features: ['Air-ride suspension', 'Rear barn doors & roll-up doors', 'Curtainside fast-lock buckles', 'Route telemetry sensors'],
      description: 'The single semi-trailer is the industry standard for regional distribution and metropolitan point-to-point deliveries. Highly maneuverable while maintaining substantial payload capability, our semis are equipped with air-ride systems to protect delicate freight.'
    },
    refrigerated: {
      name: 'Refrigerated Semi-Trailer (Chilled / Frozen)',
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
      axles: 'Single Axle / Dual Rear suspension',
      features: ['2.0 Tonne heavy tail-lift', 'Roller shutter rear door', 'Low-clearance urban styling', 'Reversing cameras & side sensors'],
      description: 'Our rigid fleet bridges metropolitan cross-docks and business delivery points. Outfitted with heavy-duty automated hydraulic tail-lifts, these vehicles are optimized for delivery sites that lack dock infrastructure or forklifts.'
    }
  };

  // Planner Recommendation Logic
  const getRecommendation = () => {
    let type = '';
    let maxPallets = 34;
    let maxWeight = 42000;

    if (tempControlled) {
      type = 'Refrigerated Semi-Trailer';
      maxPallets = 24;
      maxWeight = 22000;
    } else if (pallets > 26 || weight > 24000) {
      type = 'B-Double Multi-Combination';
      maxPallets = 34;
      maxWeight = 42000;
    } else if (pallets > 12 || weight > 8500) {
      type = 'Single Semi-Trailer (Dry Van)';
      maxPallets = 26;
      maxWeight = 24000;
    } else {
      type = 'Rigid Heavy Delivery Vehicle (Tail-Lift)';
      maxPallets = 12;
      maxWeight = 8500;
    }

    const palletUtil = (pallets / maxPallets) * 100;
    const weightUtil = (weight / maxWeight) * 100;
    const utilization = Math.min(100, Math.round(Math.max(palletUtil, weightUtil)));

    return { type, utilization, maxPallets, maxWeight };
  };

  const recommendation = getRecommendation();

  return (
    <>
      {/* Fleet Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden opacity-100 translate-y-0 bg-black flex items-center pt-16 md:pt-0" id="fleet-hero">
        <div className="absolute inset-0">
          <img
            alt="Line of trucks on road"
            className="w-full h-full object-cover opacity-60 filter contrast-125 brightness-75"
            src="https://images.unsplash.com/photo-1592838064805-71bd7454a4f1?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-6 text-white pt-20">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Asset Operations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase mb-6 leading-none max-w-4xl font-sans">
            OUR CAPABILITY IN MOTION. <br />
            <span className="text-secondary text-outline">THE M1</span>{" "}
            <span className="text-secondary text-outline">TRANSPORT</span>{" "}
            <span className="text-secondary text-outline">FLEET.</span>
          </h1>
          <p className="text-base md:text-lg font-light text-white/85 max-w-2xl leading-relaxed">
            Fully company-owned assets, operated by qualified drivers and maintained to standard compliance. Moving Australia daily.
          </p>
        </div>
      </section>



      {/* Fleet & Capabilities Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto opacity-100 translate-y-0" id="fleet-specs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline mb-16">
          <div className="lg:col-span-6">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Asset Capability</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
              Our Fleet Specifications
            </h2>
          </div>
          <div className="lg:col-span-6 border-l-2 border-secondary pl-8 py-1">
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
              We own and manage our assets, ensuring absolute control over vehicle compliance, service schedules, and driver standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Spec Card 1 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">local_shipping</span>
            <h3 className="text-xl font-bold text-primary mb-2 uppercase font-sans italic">B-Doubles</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              High-payload combination vehicles optimized for heavy national corridor linehauls.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-4">
              Max Payload: 38-40 Tonnes
            </div>
          </div>

          {/* Spec Card 2 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">ac_unit</span>
            <h3 className="text-xl font-bold text-primary mb-2 uppercase font-sans italic">Refrigerated Units</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              State-of-the-art temperature-controlled vans with active thermostatic tracking.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-4">
              Temp Range: -20°C to +20°C
            </div>
          </div>

          {/* Spec Card 3 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">inventory</span>
            <h3 className="text-xl font-bold text-primary mb-2 uppercase font-sans italic">Dry Van Semis</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Weather-tight, high-cube semi-trailers for general industrial and consumer freight.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-4">
              Capacity: Up to 26 Pallets
            </div>
          </div>

          {/* Spec Card 4 */}
          <div className="bg-white border border-outline-variant/30 rounded-card p-8 hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">precision_manufacturing</span>
            <h3 className="text-xl font-bold text-primary mb-2 uppercase font-sans italic">Tail-Lift Fleet</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Rigid delivery trucks with heavy-duty liftgates for sites lacking loading docks.
            </p>
            <div className="text-xs font-bold text-primary font-label-caps uppercase tracking-wider border-t border-outline-variant/20 pt-4">
              Lift Rating: 2.0 Tonnes
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showroom (Simple Tabs) */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="showroom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Asset Catalog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
            Explore Our Fleet
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-base md:text-lg mt-4">
            Select a vehicle class below to learn more about our fleet capabilities.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12 border-b border-outline-variant/30 pb-8">
          {Object.keys(vehicles).map((key) => (
            <button
              key={`tab-${key}`}
              onClick={() => setActiveTab(key)}
              className={`py-2.5 px-4 md:py-4 md:px-6 rounded-button font-bold text-xs md:text-sm tracking-wide uppercase border text-center transition-all cursor-pointer ${activeTab === key
                ? 'bg-primary border-primary text-white'
                : 'bg-surface-container-low border-outline-variant/50 text-primary hover:bg-slate-100'
                }`}
            >
              {key === 'bdouble' ? 'B-Double' : key === 'semi' ? 'Single Semi' : key === 'refrigerated' ? 'Refrigerated' : 'Rigid Delivery'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 lg:p-12 border border-outline-variant/20 rounded-card shadow-lg">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-primary uppercase italic font-sans leading-none">
              {vehicles[activeTab].name}
            </h3>
            <p className="text-secondary font-bold font-body-md italic text-sm sm:text-base">{vehicles[activeTab].subtitle}</p>
            <p className="text-on-surface-variant font-body-md text-xs sm:text-sm leading-relaxed">
              {vehicles[activeTab].description}
            </p>
          </div>

          <div className="relative h-[250px] sm:h-[300px] md:h-[380px] rounded-card overflow-hidden shadow-inner group">
            <img
              alt={vehicles[activeTab].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={vehicles[activeTab].image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
          </div>
        </div>
      </section>







      {/* Bottom Fleet Page CTA */}
      <section className="py-16" id="fleet-cta">
        <div className="max-w-7xl mx-auto px-6">
          <div className="kinetic-bg relative overflow-hidden p-8 lg:p-16 group rounded-card">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 text-[30rem] font-black text-white leading-none -translate-x-1/2 -translate-y-1/2 select-none">M1</div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-white mb-6 uppercase leading-none tracking-tight font-sans">
                  Book dedicated <br />fleet capacity today.
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-body-lg">
                  Need dedicated B-Double runs or regional semi distribution paths? Secure space in our asset network and let M1 handle the scheduling mechanics.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigateToHomeAndScroll('contact')}
                  className="bg-white text-secondary px-8 py-4 font-bold text-lg md:text-xl italic uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-4 shadow-xl border-none outline-none cursor-pointer rounded-button"
                >
                  Acquire Capacity
                  <span className="material-symbols-outlined font-black text-2xl">rocket_launch</span>
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
