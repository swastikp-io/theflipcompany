import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] md:min-h-screen bg-[#023e90] text-white relative overflow-hidden flex flex-col items-center justify-center px-4 py-20 md:py-32">
      {/* Background Image & Overlay */}
      <img 
        src="https://i.pinimg.com/1200x/aa/21/2f/aa212ff9afc4b8560fcad015e926d1d5.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[#023e90]/40 mix-blend-multiply z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* Content */}
      <div className="z-20 text-center max-w-4xl mx-auto w-full flex flex-col items-center justify-center space-y-6 md:space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-season-sans text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg"
        >
          Visibility for the AI Age.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-inter text-[clamp(1.125rem,2.5vw,1.45rem)] text-white/90 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow"
        >
          Optimize your brand for ChatGPT, Perplexity, Gemini, Claude, and Google's AI Overviews so you're recommended when customers ask questions—not just when they search.
        </motion.p>
      </div>

      {/* Smooth gradient transition to the following section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-20" />
    </section>
  );
}

