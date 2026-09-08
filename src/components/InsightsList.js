"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function InsightsList({ articles }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sustainability", "Climate Finance", "Digital Growth", "Governance"];

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const featured = filteredArticles.filter(a => a.featured);
  const archives = filteredArticles.filter(a => !a.featured);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Featured Headline Section */}
      <section className="relative h-[650px] md:h-[819px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDri0JRxguZSliNXCj9BSQAQyKkn400HzE6LTtNyhvscn89cSncb8ymnuvseF1sWMdyLFl_TJt4uI-PegHXnXIJQ_F7a4mb_LAaAGk1NP04VsZr396PWCuqFdzHVT_8rNXcTCoYVDqk8scl8UttmuuHopZyrjEjb3m_JBWvVfq0anxV96HMCUSfS62oRmFhJyE0FkrQbTiqHomEXJ0_hu2zxsp-McSjBdUHAU-Dr54vehi6l2__kFxtrBIbfJGzY0Ut7ctG-Lwf4kg"
            alt="Double exposure cityscape and global map overlay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
          <div className="max-w-3xl">
            <ScrollReveal className="flex items-center space-x-2 mb-4">
              <span className="bg-secondary text-white px-3 py-1 rounded-sm text-label-sm font-label-sm uppercase tracking-widest font-bold">
                Featured Analysis
              </span>
              <span className="text-white/80 font-label-md">12 min read</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display-lg text-display-lg text-white mb-6 leading-tight font-extrabold">
                Navigating the Future of Climate Finance in 2025
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
                How global institutional investors are pivoting towards regenerative capital and the impact of decentralized climate ledger technologies on emerging markets.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center group active:scale-95 shadow-md cursor-pointer">
                Read Article
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <nav className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto flex items-center h-16 space-x-8 overflow-x-auto no-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-label-md h-full flex items-center whitespace-nowrap transition-all border-b-2 cursor-pointer ${activeCategory === category
                  ? "text-secondary border-secondary font-bold"
                  : "text-on-surface-variant border-transparent hover:text-secondary"
                }`}
            >
              {category === "All" ? "All Insights" : category}
            </button>
          ))}
        </div>
      </nav>

      {/* Editorial Grid */}
      <section className="py-stack-xl px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* Main Column */}
          <div className="md:col-span-8 space-y-stack-xl">
            {featured.length > 0 ? (
              featured.map((article, idx) => (
                <ScrollReveal
                  key={article.id}
                  delay={idx * 0.1}
                  className="bg-white rounded-xl overflow-hidden editorial-shadow accent-border-top group cursor-pointer border border-outline-variant/10"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2 overflow-hidden h-64 md:h-auto relative min-h-[250px]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="md:w-1/2 p-stack-lg flex flex-col justify-center">
                      <span className="text-secondary font-label-sm uppercase tracking-wider mb-2 font-bold">
                        {article.category}
                      </span>
                      <h3 className="font-headline-lg text-headline-lg mb-4 text-primary group-hover:text-secondary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-on-surface-variant font-body-md line-clamp-3 mb-6">
                        {article.desc}
                      </p>
                      <div className="mt-auto flex items-center text-label-sm text-outline">
                        <span>{article.date}</span>
                        <span className="mx-2">.</span>
                        <span>By {article.author}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <p className="text-on-surface-variant py-12 text-center">No featured articles found in this category.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-stack-lg">

            {/* Newsletter */}
            <ScrollReveal className="bg-primary-container rounded-xl p-stack-lg text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-headline-md text-headline-md mb-4 text-white">The ZTKL Brief</h4>
                <p className="text-on-primary-container mb-6 opacity-95">
                  Strategic insights delivered bi-weekly to your inbox. No fluff, just high-stakes analysis.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
                    placeholder="Work email"
                    type="email"
                  />
                  <button className="w-full bg-secondary text-white font-label-md py-3 rounded-lg hover:bg-secondary/90 transition-all font-bold cursor-pointer">
                    Subscribe Now
                  </button>
                </form>
                <p className="text-[10px] text-white/40 mt-4 leading-relaxed">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-secondary rounded-full opacity-10 blur-3xl"></div>
            </ScrollReveal>

            {/* Trending */}
            <ScrollReveal className="bg-white rounded-xl border border-outline-variant/30 p-stack-lg">
              <h4 className="font-label-md text-label-md uppercase tracking-widest text-outline mb-6 font-bold">
                Trending Topics
              </h4>
              <div className="space-y-6">
                <a className="flex group" href="#">
                  <div className="font-headline-md text-outline/35 mr-4 font-extrabold">01</div>
                  <div>
                    <h5 className="font-label-md text-primary group-hover:text-secondary transition-colors mb-1">ESG Metrics Reimagined</h5>
                    <p className="text-xs text-outline">Climate Finance</p>
                  </div>
                </a>
                <a className="flex group" href="#">
                  <div className="font-headline-md text-outline/35 mr-4 font-extrabold">02</div>
                  <div>
                    <h5 className="font-label-md text-primary group-hover:text-secondary transition-colors mb-1">AI in Sustainable Supply</h5>
                    <p className="text-xs text-outline">Digital Growth</p>
                  </div>
                </a>
                <a className="flex group" href="#">
                  <div className="font-headline-md text-outline/35 mr-4 font-extrabold">03</div>
                  <div>
                    <h5 className="font-label-md text-primary group-hover:text-secondary transition-colors mb-1">The Zero-Waste Office</h5>
                    <p className="text-xs text-outline">Sustainability</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Whitepaper Promo */}
            <ScrollReveal className="bg-surface-container-high rounded-xl p-stack-lg border border-outline-variant/30 relative group overflow-hidden">
              <div className="relative z-10">
                <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-4 inline-block">
                  New Report
                </span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4 font-bold">
                  2025 Global Sustainability Outlook
                </h4>
                <p className="text-on-surface-variant text-sm mb-6">
                  Download our comprehensive 120-page audit on global market shifts.
                </p>
                <button className="flex items-center text-secondary font-label-md group-hover:gap-2 transition-all font-bold cursor-pointer">
                  Download PDF
                  <span className="material-symbols-outlined ml-1">download</span>
                </button>
              </div>
              <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <span className="material-symbols-outlined text-[120px] text-secondary">description</span>
              </div>
            </ScrollReveal>

          </aside>
        </div>
      </section>

      {/* Archives Section */}
      <section className="bg-surface-container-low py-stack-xl">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="flex justify-between items-end mb-12">
            <ScrollReveal>
              <h2 className="font-headline-xl text-headline-xl text-primary">Strategic Depth</h2>
            </ScrollReveal>
            <ScrollReveal>
              <a className="text-secondary font-label-md flex items-center hover:underline font-bold" href="#">
                Explore All Archives <span className="material-symbols-outlined ml-1">chevron_right</span>
              </a>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {archives.length > 0 ? (
              archives.map((article, idx) => (
                <ScrollReveal
                  key={article.id}
                  delay={idx * 0.1}
                  className="space-y-stack-lg"
                >
                  <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 border border-outline-variant/20 relative min-h-[200px]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-outline font-label-sm uppercase font-bold">{article.category}</span>
                  <h4 className="font-headline-md text-headline-md text-primary hover:text-secondary cursor-pointer transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-on-surface-variant font-body-md line-clamp-2">{article.desc}</p>
                </ScrollReveal>
              ))
            ) : (
              <p className="text-on-surface-variant text-center col-span-3 py-6">No archives found in this category.</p>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto text-center w-full">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-6">
              Ready to lead the change?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Connect with our global consultants to tailor these strategic insights to your organization’s unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/contact"
                className="bg-primary text-white px-10 py-4 rounded-lg font-label-md hover:shadow-xl transition-all w-full sm:w-auto text-center font-bold"
              >
                Schedule a Briefing
              </a>
              <a
                href="/services"
                className="border border-outline text-primary px-10 py-4 rounded-lg font-label-md hover:bg-surface-container-high transition-all w-full sm:w-auto text-center font-bold"
              >
                View All Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
