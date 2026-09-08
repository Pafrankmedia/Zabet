"use client";

import { useActionState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { submitContactForm } from "@/app/actions";

export default function ContactForm() {
  const formRef = useRef(null);
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="py-stack-xl px-6 md:px-margin-desktop max-w-container-max mx-auto text-center w-full">
        <ScrollReveal>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-stack-md block font-bold">
            Connect with our vision
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-lg max-w-3xl mx-auto font-extrabold leading-tight">
            Elevating strategy through global dialogue.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you are scaling operations in Nigeria or optimizing sustainability frameworks across Africa, our consultants are ready to bridge the gap.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Content: Form & Offices */}
      <section className="pb-stack-xl px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

          {/* Contact Form Column */}
          <ScrollReveal className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-stack-lg md:p-stack-xl rounded-xl editorial-shadow border border-outline-variant/30">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-lg font-bold">
              Professional Inquiry
            </h2>

            <form ref={formRef} action={formAction} className="space-y-stack-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                <div className="flex flex-col gap-stack-sm">
                  <label htmlFor="name-input" className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                  <input
                    id="name-input"
                    name="name"
                    required
                    disabled={isPending}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-primary disabled:opacity-50"
                    placeholder="e.g. Alexander Knight"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-stack-sm">
                  <label htmlFor="email-input" className="font-label-md text-label-md text-on-surface-variant">Corporate Email</label>
                  <input
                    id="email-input"
                    name="email"
                    required
                    disabled={isPending}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-primary disabled:opacity-50"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-stack-sm">
                <label htmlFor="service-select" className="font-label-md text-label-md text-on-surface-variant">Service Interest</label>
                <select
                  id="service-select"
                  name="service"
                  disabled={isPending}
                  defaultValue="Management Consulting"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-primary disabled:opacity-50"
                >
                  <option value="Management Consulting">Management Consulting</option>
                  <option value="Sustainability & ESG Strategy">Sustainability &amp; ESG Strategy</option>
                  <option value="Operational Excellence">Operational Excellence</option>
                  <option value="Financial Advisory">Financial Advisory</option>
                </select>
              </div>

              <div className="flex flex-col gap-stack-sm">
                <label htmlFor="narrative-textarea" className="font-label-md text-label-md text-on-surface-variant">Brief Narrative of Need</label>
                <textarea
                  id="narrative-textarea"
                  name="narrative"
                  required
                  disabled={isPending}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-primary disabled:opacity-50"
                  placeholder="How can ZTKL support your strategic objectives?"
                  rows="4"
                />
              </div>

              {state && (
                <div className={`p-4 rounded-lg font-label-md ${state.success
                  ? "bg-teal-50 text-teal-800 border border-teal-200"
                  : "bg-red-50 text-red-800 border border-red-200"
                  }`}>
                  {state.message || state.error}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full md:w-auto px-12 py-4 bg-secondary text-on-secondary font-headline-md text-headline-md rounded-lg font-bold editorial-shadow hover:bg-secondary/95 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {isPending ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </ScrollReveal>

          {/* Office Details Column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-stack-lg">

            {/* Office: Abuja */}
            <ScrollReveal className="bg-surface-container-low border-t-4 border-tertiary-container p-stack-lg rounded-xl editorial-shadow hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-stack-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">Abuja</h3>
                  <p className="font-label-sm text-label-sm text-tertiary uppercase font-bold">Head Office</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">corporate_fare</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                No. 16 Cotonou Street, Wuse Zone 6,<br />
                FCT, Abuja, Nigeria
              </p>
              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-sm">call</span>
                +234 806 811 4400
              </div>
            </ScrollReveal>

            {/* Office: Calabar */}
            <ScrollReveal delay={0.1} className="bg-surface-container-low border-t-4 border-secondary p-stack-lg rounded-xl editorial-shadow hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-stack-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">Calabar</h3>
                  <p className="font-label-sm text-label-sm text-secondary uppercase font-bold">Branch Office</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">apartment</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                No. 1 Edet Eyo Crescent, Off Marian Road,<br />
                Calabar, Cross River State-Nigeria
              </p>
              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-sm">call</span>
                +234 (0) 7047281550
              </div>
            </ScrollReveal>

            {/* Office: Makurdi */}
            <ScrollReveal delay={0.2} className="bg-surface-container-low border-t-4 border-secondary p-stack-lg rounded-xl editorial-shadow hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-stack-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">Makurdi</h3>
                  <p className="font-label-sm text-label-sm text-secondary uppercase font-bold">Branch Office</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">public</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Plot BND 1988, Makurdi Media Village,<br />
                Behind Radio Benue Makurdi Benue State
              </p>
              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-sm">call</span>
                +234 (0) 8068114400
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative h-[550px] w-full overflow-hidden mb-stack-xl bg-slate-950">
        {/* Map Simulation Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 z-10 pointer-events-none"></div>
        
        {/* Map Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/nigeria_office_map.jpg"
            alt="Zabet regional office locations map across Nigeria"
            fill
            className="object-cover opacity-90 filter contrast-110"
            sizes="100vw"
          />
        </div>

        {/* Map Markers Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="max-w-container-max w-full px-6 md:px-margin-desktop relative h-full">

            {/* Abuja Pin (Head Office) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.+16+Cotonou+Street,+Wuse+Zone+6,+Abuja,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[44%] left-[49%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer"
              title="Click for directions to Abuja Head Office on Google Maps"
              aria-label="Google Maps directions to Abuja Head Office"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 bg-amber-400/40 rounded-full animate-ping absolute"></div>
                <div className="w-5 h-5 bg-amber-400 rounded-full relative border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-950 rounded-full"></div>
                </div>
                
                {/* Tooltip Card */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white p-3 rounded-xl border border-amber-400/30 shadow-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 min-w-[200px]">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold font-label-sm text-[11px] uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[14px]">star</span>
                    Abuja (Head Office)
                  </div>
                  <p className="font-body-sm text-[12px] text-slate-300 mb-1.5 leading-snug">
                    16 Cotonou St, Wuse Zone 6
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-teal-300 font-semibold underline">
                    Open in Google Maps
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Makurdi Pin (Branch Office) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Makurdi+Media+Village,+Behind+Radio+Benue,+Makurdi,+Benue+State,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[54%] left-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer"
              title="Click for directions to Makurdi Branch Office on Google Maps"
              aria-label="Google Maps directions to Makurdi Branch Office"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 bg-teal-400/40 rounded-full animate-ping absolute"></div>
                <div className="w-5 h-5 bg-teal-400 rounded-full relative border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-950 rounded-full"></div>
                </div>

                {/* Tooltip Card */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white p-3 rounded-xl border border-teal-400/30 shadow-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 min-w-[200px]">
                  <div className="flex items-center gap-1.5 text-teal-400 font-bold font-label-sm text-[11px] uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    Makurdi Branch
                  </div>
                  <p className="font-body-sm text-[12px] text-slate-300 mb-1.5 leading-snug">
                    Plot BND 1988, Media Village
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-300 font-semibold underline">
                    Open in Google Maps
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Calabar Pin (Branch Office) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.+1+Edet+Eyo+Crescent,+Off+Marian+Road,+Calabar,+Cross+River+State,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[77%] left-[53%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer"
              title="Click for directions to Calabar Branch Office on Google Maps"
              aria-label="Google Maps directions to Calabar Branch Office"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 bg-teal-400/40 rounded-full animate-ping absolute"></div>
                <div className="w-5 h-5 bg-teal-400 rounded-full relative border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-950 rounded-full"></div>
                </div>

                {/* Tooltip Card */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white p-3 rounded-xl border border-teal-400/30 shadow-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 min-w-[200px]">
                  <div className="flex items-center gap-1.5 text-teal-400 font-bold font-label-sm text-[11px] uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    Calabar Branch
                  </div>
                  <p className="font-body-sm text-[12px] text-slate-300 mb-1.5 leading-snug">
                    1 Edet Eyo Crescent, Marian Rd
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-300 font-semibold underline">
                    Open in Google Maps
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Float Content Card */}
        <ScrollReveal className="absolute bottom-8 right-6 md:right-margin-desktop z-30 hidden lg:block bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-teal-500/20 shadow-2xl max-w-sm text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></span>
            <h4 className="font-headline-md text-lg font-bold text-white">Interactive Regional Network</h4>
          </div>
          <p className="font-body-sm text-sm text-slate-300 leading-relaxed mb-3">
            Click on any office location pin on the map to navigate directly to Google Maps for turn-by-turn directions.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-label-sm text-teal-300 font-semibold">
            <span className="bg-white/10 px-2.5 py-1 rounded-full">📍 Abuja</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-full">📍 Calabar</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-full">📍 Makurdi</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Call to Action Section */}
      <section className="py-stack-lg md:py-stack-xl px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-stack-xl w-full">
        <ScrollReveal className="bg-primary-container rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 md:gap-stack-lg shadow-xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-white mb-3 sm:mb-4 font-bold leading-tight tracking-tight">
              Start your transformation today.
            </h2>
            <p className="font-body-md sm:font-body-lg text-sm sm:text-base md:text-body-lg text-on-primary-container opacity-90 leading-relaxed">
              Join the league of forward-thinking enterprises reshaping the future through sustainable strategy.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
            <a 
              href="/documents/zabet-trusthands-brand-profile.pdf" 
              download="Zabet_Trusthands_Brand_Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary text-white font-label-md sm:font-headline-md text-sm sm:text-base font-bold rounded-xl hover:brightness-110 transition-all active:scale-95 text-center shadow-lg cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download Brand Profile
            </a>
            <a 
              href="/documents/zabet-consultancy-experience.pdf" 
              download="Zabet_Consultancy_Experience.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-outline/50 text-white font-label-md sm:font-headline-md text-sm sm:text-base font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95 text-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">description</span>
              Download Experience Profile
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
