import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Our Services & Capabilities | ZTKL",
  description: "Explore ZTKL's core pillars of expertise: Management Consulting, Climate Change Advisory, Digital Transformation, and Capacity Development.",
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <header className="pt-20 pb-stack-xl px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">

          <div className="md:col-span-7">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded mb-4 font-bold">
                OUR CAPABILITIES
              </span>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                Strategic Excellence. <br />
                <span className="text-secondary">Sustainable Future.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                ZTKL Consulting bridges the gap between traditional business management and future-proof climate resilience through our four core service pillars.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 relative mt-8 md:mt-0">
            <ScrollReveal className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl float-anim">
              <Image
                className="object-cover"
                alt="Zabet strategic sustainability and integrated solutions presentation"
                src="/assets/service.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </ScrollReveal>
            <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-xl shadow-lg border border-outline-variant max-w-xs z-10">
              <p className="font-label-md text-label-md text-secondary font-bold mb-1">Global Impact</p>
              <p className="font-body-md text-body-md text-on-surface">
                Supporting 40+ Fortune 500 companies in their Net Zero transitions.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* Services Bento Grid */}
      <section className="py-stack-xl px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">

        <div className="mb-stack-lg">
          <ScrollReveal>
            <h2 className="font-headline-xl text-headline-xl text-primary">Core Pillars</h2>
            <div className="w-24 h-1 bg-secondary mt-4"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Management Consulting */}
          <ScrollReveal className="md:col-span-8 pillar-card group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="accent-bar absolute top-0 left-0 h-1 w-12 bg-primary transition-all duration-500"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">corporate_fare</span>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Management Consulting</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Optimizing organizational performance through deep structural analysis and visionary strategic planning.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Strategic Portfolio Optimization
                  </li>
                  <li className="flex items-center gap-3 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Operational Efficiency Audits
                  </li>
                  <li className="flex items-center gap-3 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> M&amp;A Advisory &amp; Integration
                  </li>
                </ul>
                <a className="inline-flex items-center gap-2 text-primary font-label-md font-bold group-hover:gap-4 transition-all" href="#">
                  Explore Insights <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden h-64 md:h-auto relative min-h-[250px]">
                <Image
                  className="object-cover"
                  alt="Management Consulting Presentation"
                  src="/assets/services-management.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Climate Change Advisory */}
          <ScrollReveal delay={0.1} className="md:col-span-4 pillar-card group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="accent-bar absolute top-0 left-0 h-1 w-12 bg-secondary transition-all duration-500"></div>
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">eco</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Climate Change Advisory</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Guiding enterprises through the complexities of decarbonization and ESG compliance.
            </p>
            <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-secondary mb-6">
              <p className="font-label-sm text-label-sm text-secondary uppercase font-bold mb-1">Key Outcome</p>
              <p className="font-body-md text-body-md italic text-on-surface">
                "Reduced carbon footprint by 34% for a global logistics leader within 18 months."
              </p>
            </div>
            <a className="inline-flex items-center gap-2 text-secondary font-label-md font-bold" href="#">
              Sustainability Frameworks <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </ScrollReveal>

          {/* Digital Transformation */}
          <ScrollReveal delay={0.2} className="md:col-span-4 pillar-card group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="accent-bar absolute top-0 left-0 h-1 w-12 bg-primary-container transition-all duration-500"></div>
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">dynamic_form</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Digital Transformation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Deploying bespoke AI and data-driven infrastructures to redefine the modern workspace.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-outline-variant/20 px-3 py-1 rounded font-label-sm text-label-sm text-primary font-bold">AI Governance</span>
              <span className="bg-outline-variant/20 px-3 py-1 rounded font-label-sm text-label-sm text-primary font-bold">Cloud Scale</span>
              <span className="bg-outline-variant/20 px-3 py-1 rounded font-label-sm text-label-sm text-primary font-bold">Cyber Resilience</span>
            </div>
            <a className="inline-flex items-center gap-2 text-primary font-label-md font-bold" href="#">
              System Overviews <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </ScrollReveal>

          {/* Capacity Development */}
          <ScrollReveal delay={0.3} className="md:col-span-8 pillar-card group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="accent-bar absolute top-0 left-0 h-1 w-12 bg-tertiary transition-all duration-500"></div>
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-1/2">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">groups</span>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Capacity Development</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Empowering leadership and workforces through specialized knowledge transfer and resilience training.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border border-outline-variant p-3 rounded">
                    <p className="text-headline-md font-bold text-primary">15k+</p>
                    <p className="text-label-sm text-on-surface-variant">Executives Trained</p>
                  </div>
                  <div className="border border-outline-variant p-3 rounded">
                    <p className="text-headline-md font-bold text-primary">20+</p>
                    <p className="text-label-sm text-on-surface-variant">Workshops Yearly</p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-2 text-tertiary font-label-md font-bold" href="#">
                  Training Programs <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden h-64 md:h-auto relative min-h-[250px]">
                <Image
                  className="object-cover"
                  alt="Capacity Development Training Workshop"
                  src="/assets/services-capacity.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Outcome / Statistics Section */}
      <section className="bg-primary-container text-on-primary py-stack-xl">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-headline-xl text-headline-xl mb-12 text-white">
              The ZTKL Standard of Success
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <ScrollReveal className="p-6">
              <p className="text-display-lg text-secondary mb-2 font-bold">98%</p>
              <p className="font-label-md text-label-md text-on-primary-container">Strategy Retention Rate</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="p-6">
              <p className="text-display-lg text-secondary mb-2 font-bold">$4.2B</p>
              <p className="font-label-md text-label-md text-on-primary-container">Client Value Created</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="p-6">
              <p className="text-display-lg text-secondary mb-2 font-bold">10M</p>
              <p className="font-label-md text-label-md text-on-primary-container">Tons of CO2 Mitigated</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="p-6">
              <p className="text-display-lg text-secondary mb-2 font-bold">12</p>
              <p className="font-label-md text-label-md text-on-primary-container">Global Market Presences</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-stack-xl px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <ScrollReveal className="bg-surface-container-low rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-sm border border-outline-variant/30">
          <div className="lg:w-1/2 h-80 lg:h-auto relative min-h-[300px]">
            <Image
              className="object-cover"
              alt="Sprawling solar farm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnp6ZgXnQlgIp0pw-iyX01fwnJhF3P6iEXAUUR8JC_SVbu_U1S5PDx2FMsgZNFj3MdkrkX2jj65b62BVW3anSNOEiX1pt37rLQQ10ikJPj7hLUNK5DgISc7yKeO1JNzO_Q7wgbJcFb3wsj6IBsSCS3R_6SAk81C9KdaO6CALuicoRdWZeHCmph3f_5H7udZqxRiSA5PYVi1YLh4zMNktHf24hmyGsSCT7KrXuLiyFa4IPP5B4P5_BLLDK5jHBbLjzLj4MrkhJjqCU"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="lg:w-1/2 p-stack-lg lg:p-16 flex flex-col justify-center">
            <p className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase mb-4">
              Case Study Highlight
            </p>
            <h3 className="font-display-lg-mobile md:font-headline-xl text-primary mb-6">
              Sustainable Logistics: The Alpha Project
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Discover how ZTKL transformed a legacy shipping conglomerate into a carbon-neutral industry leader through integrated digital oversight and climate advisory.
            </p>
            <button className="w-fit bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md font-bold hover:shadow-lg transition-all active:scale-95 cursor-pointer">
              Read Case Study
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
