import React from 'react';
import { motion } from 'motion/react';

interface ServiceItemData {
  title: string;
  description: string;
}

const leftServices: ServiceItemData[] = [
  {
    title: "AI Chatbot",
    description: "Deploy Intelligent chat bots that answer questions, qualify leads and deliver seamless customer support around the clock"
  },
  {
    title: "Workflow Automation",
    description: "Connect your stack and automate the busywork between every tool you run."
  },
  {
    title: "AI SEO / GEO",
    description: "Optimize your digital presence for generative search engines, ChatGPT, and Perplexity so your brand gets cited and recommended first."
  }
];

const rightServices: ServiceItemData[] = [
  {
    title: "Voice AI Agents",
    description: "Automate inbound and outbound calls with natural voice AI agents that book appointments and handle customer enquiries"
  },
  {
    title: "AI Strategy and Consulting",
    description: "Generative image, video, and audio production at the speed of your roadmap."
  },
  {
    title: "AI Assisted Web Development",
    description: "Build high-performance, modern websites and applications powered by intelligent AI workflows and modern web stacks."
  }
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto py-[clamp(4rem,8vw,7rem)] bg-poch-black text-poch-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-4"
      >
        <h2 className="font-season-sans text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold tracking-tight leading-[1.2] text-white max-w-4xl">
          Everything you need to ship AI under one roof
        </h2>
        <div className="font-inter text-[clamp(1rem,2vw,1.15rem)] text-white/70 font-normal leading-relaxed max-w-2xl space-y-1">
          <p>Scale your business with tailored intelligence.</p>
          <p>Choose the exact solutions you need today or automate whole business operation.</p>
        </div>
      </motion.div>

      {/* Services Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 md:gap-y-16 max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col space-y-12 md:space-y-16">
          {leftServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col text-left items-start"
            >
              <h3 className="font-season-sans text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm md:text-base text-white/70 font-normal leading-relaxed max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-12 md:space-y-16">
          {rightServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col text-left md:text-right items-start md:items-end"
            >
              <h3 className="font-season-sans text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm md:text-base text-white/70 font-normal leading-relaxed max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

