import React, { useState } from 'react';

function Contact({ navigateTo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const office = {
    city: 'Melbourne',
    address: '2 Raymond Rd, Laverton North, 3026 Vic',
    phone: '0447219626',
    email: 'info@m1transport.com.au',
  };

  return (
    <>
      {/* Contact Hero Section */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden opacity-100 translate-y-0 bg-black flex items-center pt-16 md:pt-0" id="contact-hero">
        <div className="absolute inset-0">
          <img
            alt="Logistics warehouse"
            className="w-full h-full object-cover opacity-40 filter contrast-125 brightness-75"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-6 text-white pt-6 md:pt-20">
          <span className="inline-flex items-center gap-2 font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase mb-6 leading-none max-w-4xl font-sans">
            Let's move your <br />
            <span className="text-secondary text-outline">freight</span>{" "}
            <span className="text-secondary text-outline">forward.</span>
          </h1>
          <p className="text-base md:text-lg font-light text-white/85 max-w-2xl leading-relaxed">
            Whether you need a quote or want to explore a logistics partnership, our team is ready.
          </p>
        </div>
      </section>


      {/* Contact Form + Info Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">Send a Message</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
                Request a Quote
              </h2>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-card p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-green-500 mb-4 block">check_circle</span>
                <h3 className="text-2xl font-extrabold text-primary uppercase italic font-sans mb-2">Message Sent!</h3>
                <p className="text-on-surface-variant font-body-md">Our team will respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-outline-variant/30 rounded-full px-5 py-4 outline-none focus:border-secondary transition-colors font-body-md text-primary bg-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-outline-variant/30 rounded-full px-5 py-4 outline-none focus:border-secondary transition-colors font-body-md text-primary bg-transparent"
                      placeholder="john@company.com.au"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-outline-variant/30 rounded-full px-5 py-4 outline-none focus:border-secondary transition-colors font-body-md text-primary bg-transparent"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-outline-variant/30 rounded-full px-5 py-4 outline-none focus:border-secondary transition-colors font-body-md text-primary bg-transparent"
                      placeholder="Your Company Pty Ltd"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Service Required</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-outline-variant/30 rounded-full px-5 py-4 outline-none focus:border-secondary transition-colors font-body-md text-primary bg-white appearance-none cursor-pointer pr-12"
                    >
                      <option value="">Select a service...</option>
                      <option value="east-coast">Australian East Coast Linehaul</option>
                      <option value="bulk">Bulk Haulage</option>
                      <option value="3pl">Third Party Logistics (3PL)</option>
                      <option value="refrigerated">Refrigerated Transport</option>
                      <option value="general">General Enquiry</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                      keyboard_arrow_down
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-outline-variant/30 rounded-3xl px-5 py-4 outline-none focus:border-secondary transition-colors font-body-md text-primary bg-transparent resize-none"
                    placeholder="Tell us about your freight requirements, volumes, routes, and timelines..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-secondary text-white px-10 py-4 font-black text-lg italic uppercase tracking-tighter hover:bg-[#BD1C19] transition-all flex items-center gap-3 cursor-pointer border-none outline-none rounded-button"
                >
                  Send Message
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="lg:col-span-5">
            <div className="mb-10">
              <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">● Direct Lines</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold italic tracking-tight text-primary uppercase leading-none font-sans">
                Reach Us Directly
              </h2>
            </div>

            <div className="space-y-6 mb-12">
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant/15">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">call</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">National Dispatch</h4>
                  <p className="text-on-surface-variant text-sm font-body-md">0447 219 626</p>
                  <p className="text-on-surface-variant/60 text-xs font-body-md mt-0.5">Mon–Fri: 6 AM – 10 PM AEST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant/15">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">General Enquiries</h4>
                  <p className="text-on-surface-variant text-sm font-body-md">enquiries@m1transport.com.au</p>
                  <p className="text-on-surface-variant/60 text-xs font-body-md mt-0.5">We respond within 24 hours</p>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant/15">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">Head Office</h4>
                  <p className="text-on-surface-variant text-sm font-body-md">2 Raymond Rd, Laverton North</p>
                  <p className="text-on-surface-variant/60 text-xs font-body-md mt-0.5">3026 Vic, Australia</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-primary rounded-xl p-6 sm:p-8 text-white">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">schedule</span>
                Operating Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday – Friday</span>
                  <span className="font-bold">6:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday</span>
                  <span className="font-bold">7:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
                <div className="border-t border-white/15 pt-3 mt-3 flex justify-between">
                  <span className="text-white/60">24/7 Emergency</span>
                  <span className="font-bold text-secondary">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Location */}
      <section className="py-20 bg-black text-white overflow-hidden" id="contact-depots">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-label-caps uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">● Our Location</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic tracking-tight text-white uppercase leading-none font-sans">
              Visit Our Office
            </h2>
          </div>

          <div className="group p-8 sm:p-10 border border-white/10 rounded-xl hover:border-secondary/30 transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.05]">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">warehouse</span>
              <h3 className="text-xl font-extrabold text-white uppercase italic font-sans">{office.city} — Head Office</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white/30 text-lg mt-0.5">location_on</span>
                <span className="text-white/60 font-body-md">{office.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/30 text-lg">call</span>
                <span className="text-white/60 font-body-md">{office.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/30 text-lg">mail</span>
                <span className="text-white/60 font-body-md">{office.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
