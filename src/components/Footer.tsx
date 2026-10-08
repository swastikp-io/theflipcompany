import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black px-4 md:px-8 py-[clamp(3rem,6vw,4rem)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-[clamp(1.5rem,4vw,2rem)] relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-[clamp(1rem,3vw,1.5rem)]">
          <span className="font-inter text-[clamp(0.75rem,2vw,1rem)] font-semibold tracking-[0.2em] text-black/70 uppercase">
            connect with us:
          </span>
          <div className="flex flex-wrap justify-center items-center gap-[clamp(1rem,4vw,1.5rem)] font-inter font-medium text-[clamp(1rem,2vw,1.125rem)] text-black">
            <a href="https://www.instagram.com/itsflipco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              Instagram <ArrowUpRight className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/theflipcompany/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              LinkedIn <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="font-inter text-black/80 text-[clamp(0.875rem,2vw,1rem)]">
          The FLIP Co © 2026
        </div>
      </div>
      <div className="w-full text-center mt-[clamp(3rem,8vw,5rem)] overflow-hidden">
        <h1 className="font-season-sans font-bold text-[clamp(5rem,20vw,220px)] leading-none text-black select-none opacity-90 tracking-tight">
          The FLIP Co.
        </h1>
      </div>
    </footer>
  );
}
