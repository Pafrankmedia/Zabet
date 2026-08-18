"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const LEADERS = [
  {
    id: "david-okoruwa",
    name: "Dr. David Okoruwa",
    role: "Chief Executive Officer & Founder",
    image: "/assets/leader1.jfif",
    bio: "Dr. David Okoruwa is the founding visionary behind Zabet Trusthands Koncern Limited. With over two decades of high-level management consulting and sustainability leadership, he has spearheaded complex transformation programs across public and private sectors in Nigeria and globally.",
    highlights: [
      "20+ years executive leadership & strategic advisory",
      "Pioneered SMART-G framework for sustainable enterprise transitions",
      "Advises corporate boards and governmental bodies on climate policy",
    ],
  },
  {
    id: "viola-okoruwa",
    name: "Viola Okoruwa",
    role: "Head of Sustainability Strategy",
    image: "/assets/leader3.jfif",
    bio: "Viola Okoruwa leads ZTKL's sustainability, ESG intelligence, and climate resilience practices. She specializes in crafting net-zero pathways, green finance frameworks, and ensuring gender-sensitive sustainability programs.",
    highlights: [
      "Expert in carbon accounting, ESG compliance & green finance",
      "Architected emission reduction plans for major industrial clients",
      "Champion for inclusive climate transitions across Africa",
    ],
  },
  {
    id: "okoruwa-jude",
    name: "Okoruwa Jude",
    role: "Director of Global Operations",
    image: "/assets/leader2.jfif",
    bio: "Okoruwa Jude oversees operational execution, agile delivery, and regional office coordination across Abuja, Calabar, and Makurdi. His focus is on seamless digital process deployment and rigorous quality standards for all client engagements.",
    highlights: [
      "Directs multi-state regional consulting operations",
      "Specialist in agile digital systems & project lifecycle execution",
      "Ensures strict compliance with ISO & environmental standards",
    ],
  },
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedLeader(null);
      }
    };

    if (selectedLeader) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLeader]);

  return (
    <section className="py-stack-xl px-6 md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-stack-xl">
          <ScrollReveal>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-stack-sm block">
              THE MINDS BEHIND ZTKL
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary">
              Executive Leadership
            </h2>
          </ScrollReveal>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {LEADERS.map((leader, index) => (
            <ScrollReveal key={leader.id} delay={index * 0.1} className="group">
              <div
                className="aspect-[3/4] rounded-xl overflow-hidden mb-stack-md relative cursor-pointer"
                onClick={() => setSelectedLeader(leader)}
              >
                <Image
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={`${leader.name} portrait`}
                  src={leader.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLeader(leader);
                    }}
                    className="w-full glass-card p-stack-md rounded-lg flex justify-between items-center text-left hover:bg-white/95 transition-all shadow-md active:scale-98"
                    aria-label={`View bio of ${leader.name}`}
                  >
                    <span className="font-label-sm text-label-sm text-primary font-bold">VIEW BIO</span>
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                  </button>
                </div>
              </div>
              <h5 className="font-headline-md text-headline-md text-primary font-bold">{leader.name}</h5>
              <p className="font-label-md text-label-md text-secondary">{leader.role}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Bio Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-all animate-in fade-in duration-200"
          onClick={() => setSelectedLeader(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-bio-title"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-outline-variant/30 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-on-surface-variant transition-colors"
              aria-label="Close bio modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Modal Header Profile */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-primary/20">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left pt-1">
                <span className="font-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
                  Executive Profile
                </span>
                <h3 id="leader-bio-title" className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-primary">
                  {selectedLeader.name}
                </h3>
                <p className="font-label-md text-on-surface-variant font-medium mt-1">
                  {selectedLeader.role}
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="border-t border-outline-variant/20 pt-6">
              <h4 className="font-label-md uppercase tracking-wider text-primary font-bold mb-3">
                Biography
              </h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                {selectedLeader.bio}
              </p>

              {selectedLeader.highlights && (
                <>
                  <h4 className="font-label-md uppercase tracking-wider text-primary font-bold mb-3">
                    Key Expertise &amp; Focus
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedLeader.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 flex-shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
