import React from 'react';
import { motion } from 'motion/react';

export default function BrandVideo() {
  return (
    <section id="brand-video" className="px-4 md:px-8 max-w-6xl mx-auto py-[clamp(4rem,8vw,7rem)] bg-poch-black text-poch-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-10 space-y-4"
      >
        <span className="font-inter text-[clamp(0.75rem,2vw,0.875rem)] font-semibold tracking-[0.2em] text-white/50 uppercase">
          Brand Video
        </span>
        <h2 className="font-season-sans text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight leading-[1.2] text-white max-w-3xl">
          See how The FLIP Co transforms business operations
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/60 aspect-video relative group"
      >
        <iframe
          src="https://www.youtube.com/embed/kVEQP59uwwI?rel=0"
          title="The Flip Company Brand Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </motion.div>
    </section>
  );
}
