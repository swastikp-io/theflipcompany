import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] md:min-h-screen bg-[#023e90] text-white relative overflow-hidden flex flex-col items-center justify-center px-4 py-20 md:py-32">
      {/* Background Image & Overlay */}
      <img
        src="/newheroimg.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />


      {/* Content */}
      <div className="z-20 text-center max-w-4xl mx-auto w-full flex flex-col items-center justify-center space-y-6 md:space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-season-sans text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg text-center"
        >
          Building AI for businesses that hate busywork
        </motion.h1>
      </div>

      {/* Smooth gradient transition to the following section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-20" />
    </section>
  );
}

