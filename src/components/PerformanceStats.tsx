import React from 'react';
import { motion } from 'motion/react';

export default function PerformanceStats() {
  return (
    <section className="relative w-full overflow-hidden bg-poch-black text-poch-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Prismatic Alpine Lake Reflection.png" 
          alt="Alpine Lake Reflection" 
          className="w-full h-full object-cover block opacity-80"
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-poch-black/90 via-poch-black/40 to-black/10"></div>
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto py-24 md:py-32 px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-white/70 mb-12"
        >
          <span className="w-12 h-px bg-white/50"></span>
          Built for Performance
        </motion.div>

        {/* Headline & Supporting Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-inter font-medium tracking-tight"
          >
            A better website isn't just seen. It performs.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col lg:justify-end"
          >
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-inter font-normal max-w-xl">
              Every second matters. We build fast, modern websites designed to deliver better experiences and help businesses turn visitors into customers.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="relative pt-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:pr-12 lg:pr-24"
            >
              <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] leading-none font-medium font-inter tracking-tighter mb-6 text-white">
                6.6%
              </div>
              <h3 className="text-xl md:text-2xl font-semibold font-inter mb-4 text-white">
                Median landing page conversion rate
              </h3>
              <p className="text-white/70 font-inter leading-relaxed mb-8">
                An industry benchmark reported by Unbounce across industries in its Q4 2024 dataset.
              </p>
              <div className="mt-auto text-xs sm:text-sm text-white/40 font-medium tracking-wide uppercase">
                Source: Unbounce
              </div>
            </motion.div>

            {/* Divider for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-16 bottom-0 w-px bg-white/20 -translate-x-1/2"></div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:pl-12 lg:pl-24 pt-16 md:pt-0 border-t border-white/20 md:border-t-0"
            >
              <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] leading-none font-medium font-inter tracking-tighter mb-6 text-white">
                &le; 2.5s
              </div>
              <h3 className="text-xl md:text-2xl font-semibold font-inter mb-4 text-white">
                Largest Contentful Paint (LCP)
              </h3>
              <p className="text-white/70 font-inter leading-relaxed mb-8">
                Google's recommended threshold for a good loading experience, measured at the 75th percentile of real-world visits.
              </p>
              <div className="mt-auto text-xs sm:text-sm text-white/40 font-medium tracking-wide uppercase">
                Source: Google Core Web Vitals
              </div>
            </motion.div>
          </div>
        </div>

        {/* Concluding Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-sm md:text-base font-inter font-normal tracking-wide text-white/50">
            Designed to look better. Built to work harder.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
