import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Redesigned Hero Section with Background Overlay */}
      <header className="relative pt-32 pb-stack-xl md:pt-48 md:pb-56 overflow-hidden bg-slate-950">

        {/* Full Hero Background Image */}
        <Image
          src="/assets/african_boardroom_hero.png"
          alt="African boardroom hero background"
          fill
          priority
          className="object-cover opacity-45 pointer-events-none"
        />

        {/* Overlay Dark Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-4xl mx-auto text-center">

            <ScrollReveal>
              <h1 className="font-display-lg text-display-lg-mobile md:text-[60px] md:leading-[1.1] text-white mb-8 tracking-tight font-extrabold">
                Shaping <span className="text-teal-400">Sustainable</span> Growth Through Radical <span className="italic font-light">Innovation</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body-lg text-body-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                ZTKL bridges the gap between traditional corporate excellence and future-proof climate strategy. We empower global organizations to lead the transition to a low-carbon economy with precision and purpose.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all shadow-xl hover:-translate-y-1 inline-block"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/20 text-white px-10 py-5 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all flex items-center gap-2 group inline-block"
              >
                Explore Our Expertise
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </header>

      {/* Trust Indicators Bar */}
      <section className="bg-primary text-on-primary py-16">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center md:text-left">

            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-4xl">history</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md leading-none mb-1">2011</div>
                <div className="font-label-sm text-label-sm opacity-70 uppercase tracking-widest">Established</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-4xl">eco</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md leading-none mb-1">100+</div>
                <div className="font-label-sm text-label-sm opacity-70 uppercase tracking-widest">Climate Experts</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-4xl">terminal</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md leading-none mb-1">Global</div>
                <div className="font-label-sm text-label-sm opacity-70 uppercase tracking-widest">Digital-First</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-4xl">award_star</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md leading-none mb-1">ISO Cert</div>
                <div className="font-label-sm text-label-sm opacity-70 uppercase tracking-widest">Quality Assured</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About ZTKL Section */}
      <section className="py-stack-xl bg-surface-bright">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">

          <div className="md:col-span-5">
            <ScrollReveal>
              <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Authoritative Guidance for a Changing World</h2>
              <div className="w-20 h-1.5 bg-primary mb-10 rounded-full"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Zabet Trusthands Koncern Limited (ZTKL) stands at the intersection of strategic management and ecological resilience. Since 2011, we have been the silent engine behind some of the Nigeria's most significant sustainable transformations.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant opacity-80 mb-8 leading-relaxed">
                Our methodology combines deep analytical rigor with a radical commitment to climate innovation, ensuring that growth is not just measured in quarterly gains, but in decadal impact.
              </p>
              <Link className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group" href="/about">
                Learn about our mission
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-6">
            <ScrollReveal className="aspect-square bg-surface-container-low border border-outline-variant/30 rounded-3xl flex flex-col items-center justify-center p-8 text-center editorial-shadow hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">public</span>
              <span className="font-headline-md text-headline-md text-primary mb-2">4+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Nations Served</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="aspect-square bg-primary text-on-primary rounded-3xl flex flex-col items-center justify-center p-8 text-center editorial-shadow shadow-primary/10">
              <span className="material-symbols-outlined text-on-primary/70 text-5xl mb-4">analytics</span>
              <span className="font-headline-md text-headline-md text-on-primary mb-2">$1.5B</span>
              <span className="font-label-sm text-label-sm opacity-70 uppercase tracking-wider">Asset Value Optimized</span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="aspect-square bg-secondary text-on-secondary rounded-3xl flex flex-col items-center justify-center p-8 text-center editorial-shadow">
              <span className="material-symbols-outlined text-white/70 text-5xl mb-4">energy_savings_leaf</span>
              <span className="font-headline-md text-headline-md text-on-secondary mb-2">7M+</span>
              <span className="font-label-sm text-label-sm opacity-70 uppercase tracking-wider">Metric Tons CO2 offset</span>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="aspect-square bg-white border border-outline-variant/30 rounded-3xl flex flex-col items-center justify-center p-8 text-center editorial-shadow hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">groups</span>
              <span className="font-headline-md text-headline-md text-primary mb-2">50+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Global Partnerships</span>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Core Service Areas */}
      <section className="py-stack-xl bg-white">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">

          <div className="mb-stack-lg text-center">
            <ScrollReveal>
              <h2 className="font-headline-xl text-headline-xl text-on-background mb-4">Specialized Domains of Impact</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Precision-engineered solutions tailored for the complex demands of modern enterprise and governance.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

            {/* Card 1 */}
            <ScrollReveal className="group relative p-8 rounded-2xl editorial-shadow editorial-shadow-hover transition-all border border-outline-variant/30 accent-border-emerald bg-surface">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">hub</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Strategy &amp; Management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Corporate restructuring, market entry strategies, and high-stakes operational optimization.
              </p>
              <ul className="space-y-2 mb-8 font-label-md text-label-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> M&amp;A Advisory</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Risk Governance</li>
              </ul>
              <Link className="font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
                Explore <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.1} className="group relative p-8 rounded-2xl editorial-shadow editorial-shadow-hover transition-all border border-outline-variant/30 accent-border-gold bg-surface">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">compost</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Climate &amp; Sustainability</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Navigating the energy transition with science-based targets and ESG reporting frameworks.
              </p>
              <ul className="space-y-2 mb-8 font-label-md text-label-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Net Zero Roadmaps</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Carbon Markets</li>
              </ul>
              <Link className="font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
                Explore <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.2} className="group relative p-8 rounded-2xl editorial-shadow editorial-shadow-hover transition-all border border-outline-variant/30 accent-border-emerald bg-surface">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">settings_input_component</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Digital Transformation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Leveraging AI and data-driven insights to revolutionize industrial processes.
              </p>
              <ul className="space-y-2 mb-8 font-label-md text-label-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Digital Twin Tech</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Smart Grids</li>
              </ul>
              <Link className="font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
                Explore <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={0.3} className="group relative p-8 rounded-2xl editorial-shadow editorial-shadow-hover transition-all border border-outline-variant/30 accent-border-gold bg-surface">
              <div className="w-14 h-14 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">psychology_alt</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Capacity Development</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Empowering leadership through specialized executive training and change management.
              </p>
              <ul className="space-y-2 mb-8 font-label-md text-label-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Talent Pipelines</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Policy Design</li>
              </ul>
              <Link className="font-bold text-tertiary inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
                Explore <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Why Choose Zabet */}
      <section className="py-stack-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">

          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-6">
            <ScrollReveal className="max-w-2xl">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-4">The ZTKL Advantage</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Why leading organizations trust ZTKL for their most critical strategic shifts.
              </p>
            </ScrollReveal>
            <ScrollReveal className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary font-bold">
              Excellence by Design
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <ScrollReveal className="p-10 bg-white rounded-3xl border border-outline-variant/20 editorial-shadow hover:border-primary/20 transition-all">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">handshake</span></div>
              <h4 className="font-headline-md text-headline-md text-on-background mb-4">Long-term Partnership</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We don't just deliver reports; we embed with your teams to ensure implementation success over years, not months.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="p-10 bg-white rounded-3xl border border-outline-variant/20 editorial-shadow hover:border-primary/20 transition-all">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">science</span></div>
              <h4 className="font-headline-md text-headline-md text-on-background mb-4">Science-Based Rigor</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our climate strategies are anchored in the latest IPCC data and international regulatory frameworks for total compliance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="p-10 bg-white rounded-3xl border border-outline-variant/20 editorial-shadow hover:border-primary/20 transition-all">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">precision_manufacturing</span></div>
              <h4 className="font-headline-md text-headline-md text-on-background mb-4">Operational Precision</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Methodical approach to workflow optimization that uncovers hidden value in existing corporate structures.
              </p>
            </ScrollReveal>

            <ScrollReveal className="p-10 bg-white rounded-3xl border border-outline-variant/20 editorial-shadow hover:border-primary/20 transition-all">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">language</span></div>
              <h4 className="font-headline-md text-headline-md text-on-background mb-4">Global Perspective</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Multi-regional expertise across Africa, Europe, and Asia, providing local nuance to global strategic goals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="p-10 bg-white rounded-3xl border border-outline-variant/20 editorial-shadow hover:border-primary/20 transition-all">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">lock</span></div>
              <h4 className="font-headline-md text-headline-md text-on-background mb-4">Absolute Confidentiality</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Trusted by governments and conglomerates for high-sensitivity advisory with military-grade data protection.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="p-10 bg-white rounded-3xl border border-outline-variant/20 editorial-shadow hover:border-primary/20 transition-all">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">rocket_launch</span></div>
              <h4 className="font-headline-md text-headline-md text-on-background mb-4">Agile Innovation</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Despite our scale, we maintain an innovative edge, rapidly adopting and integrating emerging clean-tech solutions.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Industries Served Grid */}
      <section className="py-stack-xl bg-white">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">

          <ScrollReveal>
            <h2 className="font-headline-xl text-headline-xl text-on-background mb-stack-lg">
              Industries of Expertise
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <ScrollReveal className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">account_balance</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Government</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">diversity_3</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Development</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">corporate_fare</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Corporate</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">school</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Education</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">bolt</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Energy</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">payments</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Financial</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">forest</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">Environment</h5>
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="group relative aspect-video bg-surface overflow-hidden rounded-2xl border border-outline-variant/20 flex flex-col justify-end p-8 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white mb-3 text-3xl">volunteer_activism</span>
              <h5 className="font-headline-md text-headline-md text-primary group-hover:text-white transition-colors">NGOs</h5>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Consulting Methodology */}
      <section className="py-stack-xl bg-primary-container text-on-primary-container overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">

          <ScrollReveal>
            <h2 className="font-headline-xl text-headline-xl mb-12 text-center text-white">
              A Meticulous Methodology
            </h2>
          </ScrollReveal>

          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary opacity-30 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-gutter relative">

              {/* Step 1 */}
              <ScrollReveal delay={0.1} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 relative z-10 editorial-shadow font-bold text-headline-md border-4 border-primary-container">1</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Discover</h4>
                <p className="font-label-sm text-label-sm opacity-60">Insight gathering and stakeholder mapping.</p>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={0.2} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mb-6 relative z-10 editorial-shadow font-bold text-headline-md border-4 border-primary-container">2</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Assess</h4>
                <p className="font-label-sm text-label-sm opacity-60">Gap analysis and risk quantification.</p>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={0.3} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 relative z-10 editorial-shadow font-bold text-headline-md border-4 border-primary-container">3</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Design</h4>
                <p className="font-label-sm text-label-sm opacity-60">Bespoke strategic framework creation.</p>
              </ScrollReveal>

              {/* Step 4 */}
              <ScrollReveal delay={0.4} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mb-6 relative z-10 editorial-shadow font-bold text-headline-md border-4 border-primary-container">4</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Implement</h4>
                <p className="font-label-sm text-label-sm opacity-60">Active deployment &amp; management.</p>
              </ScrollReveal>

              {/* Step 5 */}
              <ScrollReveal delay={0.5} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 relative z-10 editorial-shadow font-bold text-headline-md border-4 border-primary-container">5</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Measure</h4>
                <p className="font-label-sm text-label-sm opacity-60">Data monitoring and validation.</p>
              </ScrollReveal>

              {/* Step 6 */}
              <ScrollReveal delay={0.6} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mb-6 relative z-10 editorial-shadow font-bold text-headline-md border-4 border-primary-container">6</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Sustain</h4>
                <p className="font-label-sm text-label-sm opacity-60">Long-term value anchoring.</p>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-stack-xl bg-surface-bright">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">

          <div className="flex justify-between items-end mb-stack-lg">
            <ScrollReveal>
              <h2 className="font-headline-xl text-headline-xl text-on-background mb-4">Strategic Insight</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Deep-dives into the future of global commerce and environmental policy.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <Link className="font-label-md text-label-md font-bold text-primary hover:underline transition-all flex items-center gap-2" href="/insights">
                View All Insights <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Article 1 */}
            <ScrollReveal className="group bg-white rounded-3xl overflow-hidden editorial-shadow border border-outline-variant/30">
              <div className="relative overflow-hidden h-64">
                <Image
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Executives in meeting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM_fxY6QBRi7jgTEn60RLs4-vGJmDbdq3vz_byJ5pfqu-cci3LCUF1M0m-CeTztIBZBXJrv-sUYgeyyBtN012Y2PNpf088aH66GWl1ZHCdqtonZLXHP1UYqGmNHEUP73FbE1kn7Vesdc1-wv7SNwD5J7vzDwC0acDLNxACTydvaQAvxbIb1qIFQ5vGMH-bwoVYaaEe8xpgMd_poEzkXfCn38rKV7R8nKZXBlUqeOwWxfRy5d2kb_1qNNhnyarPF7XRe_DcYVRWYow"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                  <span>Strategy</span>
                  <span className="w-1 h-1 bg-outline rounded-full"></span>
                  <span>8 Min Read</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                  The 2025 Decarbonization Mandate: What Boards Need to Know
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  Navigating the new EU directives on supply chain reporting and its global ripple effects.
                </p>
              </div>
            </ScrollReveal>

            {/* Article 2 */}
            <ScrollReveal delay={0.1} className="group bg-white rounded-3xl overflow-hidden editorial-shadow border border-outline-variant/30">
              <div className="relative overflow-hidden h-64">
                <Image
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Holographic data display"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6DYpULQelVx83l7l9sTj_UxmYf1AMNjAroNLNtOGICqSFYOf8U847bq_TNkC-GncfNb_AOU2PgAqowE__DSh3wNNmBwejYuH-Mke15LkqW9L632qDny46-g53H9qaPx76-0OlMHsPfQqErxlcZuGU52m0whB9XlragQyddf1jy8al-mnRHkv7hAUfde5hK85yvP9iHGPDsH0LnLrYdlGvneeQyIAUiuhwYyM7bEGxQx5OQt_E3YX8lhDqn6VTHMFZSs4JgF49rQ"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                  <span>Digital</span>
                  <span className="w-1 h-1 bg-outline rounded-full"></span>
                  <span>12 Min Read</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                  AI-Driven Predictive Sustainability in Heavy Industry
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  How machine learning is reducing operational waste by 22% in global manufacturing hubs.
                </p>
              </div>
            </ScrollReveal>

            {/* Article 3 */}
            <ScrollReveal delay={0.2} className="group bg-white rounded-3xl overflow-hidden editorial-shadow border border-outline-variant/30">
              <div className="relative overflow-hidden h-64">
                <Image
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Renewable energy landscape"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1lLGNv89tHqjm-ewO_Inx786H88fQLE2OLUIvgLdFfIaFEP-LzlMy4ogWOi09QjoNa4qA9nxUU53VBlRMJk3PNbll_c1v1yYUvGr_ZJoN4i74tBf9s_GG6whZgTwvec54DmFpHwyOea-ZEH1G_hnn7-HaeQhcLnbfngmiOmBMnn3zncKxblf3ZJC5RRWpPKyeJQEc-cRZ5N7ZXmUcAV2jwD5mKWwNePAvagjjq6D_TRyfElojczR0OMtQScpFZmFWSZOkztJS8Jg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                  <span>Policy</span>
                  <span className="w-1 h-1 bg-outline rounded-full"></span>
                  <span>5 Min Read</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                  Capital Reallocation in the Age of Climate Transition
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  Analyzing the major shift of institutional capital toward ESG-compliant portfolios.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-stack-xl bg-white">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <ScrollReveal className="relative bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "50px 50px" }}></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-8 leading-tight">
                Let's Build Sustainable Solutions Together.
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 mb-12">
                Partner with ZTKL to future-proof your organization and lead the transition to a sustainable global economy. Your strategic evolution begins with a conversation.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary px-14 py-6 rounded-full font-headline-md text-headline-md hover:bg-surface-container-low transition-all shadow-2xl active:scale-95 hover:-translate-y-1 inline-block"
              >
                Initiate Consultation
              </Link>
            </div>

            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/30 rounded-full blur-[100px]"></div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
