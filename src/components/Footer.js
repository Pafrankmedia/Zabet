import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-background text-on-primary w-full pt-stack-xl pb-stack-lg border-t border-white/10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto">

        {/* Info Column */}
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-3 mb-6 inline-flex group" aria-label="Zabet Consulting">
            <Image
              src="/assets/zabet-logo.png"
              alt="Zabet Consulting Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain rounded-full shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-headline-lg text-2xl font-bold text-primary leading-tight">
                ZABET
              </span>
              <span className="font-label-sm text-[10px] tracking-[0.2em] text-white/60 font-semibold uppercase">
                Trusthands
              </span>
            </div>
          </Link>
          <p className="font-body-md text-body-md opacity-60 max-w-xs mb-8">
            Empowering Global Sustainability since 2011. High-stakes management and climate strategy for a resilient world.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
              aria-label="Public Info"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[18px]">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Expertise Column */}
        <div className="md:col-span-2">
          <h5 className="font-label-md text-label-md font-bold mb-6 text-primary">Expertise</h5>
          <ul className="space-y-4 font-body-md text-body-md opacity-70">
            <li>
              <Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="/services">
                Strategy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="/services">
                Sustainability
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="/services">
                Digital Twin
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="/services">
                M&A Advisory
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="md:col-span-2">
          <h5 className="font-label-md text-label-md font-bold mb-6 text-primary">Resources</h5>
          <ul className="space-y-4 font-body-md text-body-md opacity-70">
            <li>
              <a className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform text-white font-bold" href="#">
                Sustainability Report
              </a>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="/contact">
                Global Offices
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="/insights">
                Insight Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-2">
          <h5 className="font-label-md text-label-md font-bold mb-6 text-primary">Legal</h5>
          <ul className="space-y-4 font-body-md text-body-md opacity-70">
            <li>
              <a className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform" href="#">
                Compliance
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-2">
          <h5 className="font-label-md text-label-md font-bold mb-6 text-primary">Contact</h5>
          <p className="font-body-sm text-sm opacity-60 mb-2">Global Headquarters</p>
          <p className="font-body-md text-body-md mb-4 text-white">
            ABUJA OFFICE:<br />No. 16 Cotonou Street, Wuse Zone 6, Abuja, FCT Nigeria
          </p>
          <p className="font-body-md text-body-md text-primary font-bold">info@ztkl.org</p>
        </div>

        {/* Copyright Bar */}
        <div className="col-span-1 md:col-span-12 mt-stack-xl pt-stack-sm border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body-md text-body-md opacity-40 text-center md:text-left">
            © {new Date().getFullYear()} Zabet Trusthands Koncern Limited. All rights reserved.
          </div>
          <div className="flex gap-8 font-label-sm text-label-sm opacity-40">
            <a className="hover:opacity-100 transition-opacity" href="#">Privacy</a>
            <a className="hover:opacity-100 transition-opacity" href="#">Cookies</a>
            <a className="hover:opacity-100 transition-opacity" href="#">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
