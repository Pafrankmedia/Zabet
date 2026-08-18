"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insight", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-outline-variant/30"
          : "bg-white/80 backdrop-blur-md shadow-sm border-b border-outline-variant/10"
        }`}
    >
      <div className="flex justify-between items-center h-20 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Zabet Consulting Home"
        >
          <Image
            src="/assets/zabet-logo.png"
            alt="Zabet Consulting Logo"
            width={44}
            height={44}
            className="w-10 h-10 md:w-11 md:h-11 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
            priority
          />
          <div className="flex flex-col">
            <span className="font-headline-md text-xl md:text-2xl font-extrabold tracking-tight text-primary leading-tight">
              ZABET
            </span>
            <span className="font-label-sm text-[10px] tracking-[0.2em] text-on-surface-variant font-semibold uppercase -mt-0.5">
              Trusthands
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-label-md transition-all ${isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-primary text-on-primary px-7 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 shadow-md hover:shadow-lg"
          >
            Book Consultation
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant/30 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-label-md text-label-md py-2 border-b border-outline-variant/10 ${isActive
                    ? "text-primary font-bold pl-2 border-l-4 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-on-primary text-center py-4 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 shadow-md"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
