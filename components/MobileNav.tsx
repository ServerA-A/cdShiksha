"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:text-white"
        aria-label="Toggle menu"
      >
        <svg
          className="h-5 w-5 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 transform bg-[#0b1120]/95 backdrop-blur-xl border-l border-sky-500/10 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pt-20">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-slate-300 transition hover:bg-sky-500/10 hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
          <div className="my-3 h-px bg-slate-700/50" />
          <a
            href="/shiksha-cv.docx"
            download
            onClick={() => setOpen(false)}
            className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-center text-sm font-medium text-sky-300 transition hover:bg-sky-500/20"
          >
            Download CV
          </a>
          <a
            href="https://linkedin.com/in/shikshasinha"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-sky-500 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}
