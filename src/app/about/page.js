import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import LeadershipSection from "@/components/LeadershipSection";

export const metadata = {
  title: "About ZTKL | Our Heritage, Mission & Leadership",
  description: "Learn about ZTKL (Zabet Trusthands Koncern Limited), our journey since 2011, and our executive leadership driving global sustainability strategy.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section: Editorial Intro */}
      <section className="hero-gradient py-stack-xl px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">

          <div className="md:col-span-7">
            <ScrollReveal>
              <h1 className="font-display-lg text-display-lg text-primary mb-stack-lg leading-tight">
                Architecture of <span className="text-secondary italic">Sustainable</span> Excellence.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                ZTKL Consulting bridges the gap between traditional enterprise logic and the imperative of future-proof sustainability strategy. We don't just advise; we architect resilience.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 relative mt-8 md:mt-0">
            <ScrollReveal className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <Image
                className="object-cover"
                alt="Zabet Trusthands leadership and strategic consultants"
                src="/assets/About-new.png"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </ScrollReveal>
            <div className="absolute -bottom-6 -left-6 glass-card p-stack-lg rounded-xl shadow-lg border-l-4 border-secondary max-w-xs z-10">
              <p className="font-headline-md text-headline-md text-primary mb-1">13 Years</p>
              <p className="font-label-md text-label-md text-on-surface-variant">
                Of pioneering high-stakes management and global impact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Heritage & Mission: Bento Layout */}
      <section className="py-stack-xl px-6 md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md">

            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-start relative group border border-outline-variant/10">
              <div className="z-10 space-y-6">

                <ScrollReveal delay={0.1}>
                  <h3 className="font-headline-lg text-headline-lg text-primary font-bold">Who We Are?</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Welcome to Zabet Trusthands Koncern Limited (ZTKL), a premier management consultancy firm established in 2011. We are your dedicated partners in building a sustainable future. While we offer deep expertise in business strategy and project management, our true passion lies in guiding organizations through the green economy and climate transitions.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-2">Our Core Foundation</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Our company is built on absolute integrity, honesty, and deep, collaborative client relationships. Backed by key professionals with over 20 years of hands-on expertise, we deliver best-in-class climate and business solutions. We run on modern, state-of-the-art digital processes to ensure our operations are as agile and forward-thinking as the strategies we implement.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-2">Our SMART-G Approach</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    We don't just plan projects; we guarantee clear-cut environmental outcomes. Every program we design meets strict SMART-G requirements (Specific, Measurable, Achievable, Relevant, Time-bound, and Green). By embedding net-emission reduction goals and gender-sensitiveness into our work, we ensure that our solutions for government bodies, educational institutions, and corporations are both highly inclusive and sustainable.
                  </p>
                </ScrollReveal>

              </div>
            </div>

            <ScrollReveal className="md:col-span-2 rounded-xl border border-outline-variant/30 overflow-hidden relative group editorial-shadow bg-white p-8 flex flex-col justify-between min-h-[450px] md:min-h-0 float-interaction">
              <div className="w-full text-left z-10 mb-6">
                <span className="font-label-sm text-label-sm text-secondary bg-secondary-container px-3 py-1 rounded-full uppercase tracking-wider font-bold">PILLARS OF IMPACT</span>
                <h3 className="font-headline-lg text-headline-lg text-primary mt-stack-md font-extrabold leading-tight">Delivering Integrated Solutions</h3>
              </div>
              <div className="relative w-full flex-grow min-h-[320px] md:min-h-0 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/assets/integrated_solutions_pillars.png"
                  alt="Delivering integrated solutions across 3 strong pillars"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

          </div>
        </div >
      </section >

      {/* Leadership Section: Interactive Profile Cards with Bio Modal */}
      <LeadershipSection />

      {/* Footprint Section: Map Interaction */}
      < section className="py-stack-xl px-6 md:px-margin-desktop bg-surface-container-low border-y border-outline-variant" >
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center">

          <div>
            <ScrollReveal>
              <h2 className="font-display-lg text-display-lg text-primary mb-stack-lg">
                Global Reach, <br /><span className="text-secondary">Local Depth.</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg max-w-md">
                While our vision is global, our implementation is surgical. We operate within local regulatory frameworks with physical offices in 3 different states to ensure compliance is not just a checkbox, but a catalyst.
              </p>
            </ScrollReveal>

            <ScrollReveal className="space-y-stack-md">
              <div className="flex items-center gap-stack-md p-stack-md rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold text-primary">ABUJA OFFICE</h6>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">No. 16 Cotonou Street, Wuse Zone 6, Abuja, FCT Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-stack-md p-stack-md rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold text-primary">CALABAR OFFICE</h6>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">No. 1 Edet Eyo Crescent, Off Marian Road,
                    Calabar, Cross River State-Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-stack-md p-stack-md rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold text-primary">MAKURDI OFFICE</h6>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Plot BND 1988, Makurdi Media Village,
                    Behind Radio Benue Makurdi Benue State</p>
                </div>
              </div>
              <div className="flex items-center gap-stack-md p-stack-md rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold text-primary">LAGOS OFFICE</h6>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">12, Jibowu Street, Yaba, Lagos</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0 border border-outline-variant/30">
            <ScrollReveal className="relative w-full h-full">
              <Image
                className="object-cover"
                alt="Zabet regional office network map across Nigeria highlighting Abuja, Calabar, and Makurdi"
                src="/assets/nigeria_office_map.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 to-transparent z-10 pointer-events-none"></div>
            </ScrollReveal>
          </div>

        </div>
      </section >

      {/* CTA Section */}
      < section className="py-stack-xl px-6 md:px-margin-desktop bg-primary-container text-surface-container-lowest" >
        <div className="max-w-container-max mx-auto text-center py-stack-lg">
          <ScrollReveal>
            <h2 className="font-headline-xl text-headline-xl mb-stack-md text-white font-bold">
              Partner with the <span className="text-[#cea72c] italic">Architects</span> of Change.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-stack-xl max-w-2xl mx-auto">
              Discover how ZTKL can transform your sustainability risks into measurable corporate value.
            </p>
            <div className="flex flex-col md:flex-row gap-stack-md justify-center items-center">
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-stack-xl py-stack-md rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all inline-block"
              >
                Request a Free Consultation
              </Link>
              <button className="border border-outline text-surface-container-lowest px-stack-xl py-stack-md rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all cursor-pointer">
                Download Impact Report
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section >

    </div >
  );
}
