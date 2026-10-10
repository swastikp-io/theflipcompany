import React from 'react';
import { motion } from 'motion/react';
import MatrixOverlay from './MatrixOverlay';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Image */}
      <img
        src="/Enchanted Forest Lake Reflection.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
      />

      {/* Digital ASCII / Matrix & Scanline Overlay */}
      <MatrixOverlay />

      {/* Lighting & Contrast Gradients */}
      <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none z-[6]" />
      <div className="absolute bottom-0 left-0 right-0 h-56 md:h-72 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-[6]" />

      {/* Content Container */}
      <div className="relative z-20 min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-10 md:pb-16 px-6 sm:px-10 md:px-12 lg:px-16 max-w-[1700px] mx-auto">

        {/* Upper Section: Tagline on the Right */}
        <div className="flex justify-end w-full pt-4 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-right"
          >
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight text-white drop-shadow-md">
              Think Different. Build Faster.
            </h2>
          </motion.div>
        </div>

        {/* Bottom Section: Hero Title (Left) + Description & CTA (Right) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-14 w-full pt-20">

          {/* Bottom Left: Massive Brand Typography */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="font-season-sans font-bold text-[clamp(4.25rem,11.5vw,11.5rem)] leading-[0.88] tracking-[-0.035em] text-white select-none drop-shadow-2xl">
              The FLIP Co
            </div>
          </motion.div>

          {/* Bottom Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start space-y-4 md:space-y-5 max-w-md lg:mb-2"
          >
            <h1 className="font-inter text-[clamp(0.95rem,1.25vw,1.1rem)] text-white/90 font-normal leading-relaxed drop-shadow">
              <strong>Your website should do more than look good.</strong><br />
              We are a digital studio building high-performance websites, e-commerce stores, web apps, and AI integrations that help businesses operate, sell, and grow.
            </h1>

            <div className="pt-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=business.theflipco@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-inter text-base md:text-lg font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-lg md:text-xl">[</span>
                <span className="group-hover:tracking-wider group-hover:underline underline-offset-4 decoration-white/50 transition-all duration-300">
                  start a project
                </span>
                <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-lg md:text-xl">]</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Smooth Bottom Blend to Services Section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
