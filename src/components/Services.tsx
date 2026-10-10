import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Websites',
    subtitle: 'Websites that make your business look as good as it actually is.',
    desc: 'High-performance marketing websites, company websites, portfolios, landing pages and custom experiences designed around your brand and customers.',
    link: '/services/websites',
  },
  {
    num: '02',
    title: 'E-commerce',
    subtitle: 'Turn your website into a sales channel.',
    desc: 'We build modern online stores that make it easy for customers to discover products, trust your brand, and buy.',
    link: '/services/ecommerce',
  },
  {
    num: '03',
    title: 'Web Apps',
    subtitle: 'From websites to full-blown products.',
    desc: 'Custom web applications, dashboards, portals, booking systems and internal tools built around the way your business works.',
    link: '/services/web-apps',
  },
  {
    num: '04',
    title: 'Conversion & Growth',
    subtitle: "More visitors are useless if they don't convert.",
    desc: 'We structure your website around clear messaging, strong calls-to-action, frictionless journeys and conversion-focused UX.',
    link: '/services/conversion-growth',
  },
  {
    num: '05',
    title: 'AI Integrations',
    subtitle: 'Add AI where it actually helps.',
    desc: 'AI chatbots, lead qualification, recommendation systems, content workflows, intelligent search and custom AI features integrated directly into your website.',
    link: '/services/ai-integrations',
  },
  {
    num: '06',
    title: 'Website Care',
    subtitle: "Launch isn't the finish line.",
    desc: 'Hosting, maintenance, updates, analytics, SEO improvements, performance optimization and ongoing development to keep your website working.',
    link: '/services/website-care',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-poch-black text-poch-white py-24 md:py-32 px-6 sm:px-10 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-inter font-medium tracking-tight mb-8"
          >
            Everything you need to build your presence online.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/60 max-w-3xl leading-relaxed font-inter font-normal"
          >
            From your first landing page to a complete digital platform, we design and develop websites that are fast, useful, and built around your business goals.
          </motion.p>
        </div>

        {/* Divider / Label Row */}
        <div className="w-full flex justify-between items-end pb-6 border-b border-white/10 mb-16">
          <div className="font-inter text-sm md:text-base font-medium">
            <span>Our services</span>
          </div>
          <div className="font-inter text-sm md:text-base font-medium border-b border-white pb-0.5">
            How we can help you
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col h-full group"
            >
              <Link to={service.link} className="flex flex-col h-full">
                {/* Number */}
                <div className="text-sm font-medium font-inter mb-4 text-white/60 group-hover:text-white transition-colors duration-300">
                  {service.num}
                </div>
                
                {/* Separator */}
                <div className="w-full h-px bg-white/10 mb-6 md:mb-8 group-hover:bg-white/40 transition-colors duration-300" />
                
                {/* Title & Description */}
                <h3 className="font-inter font-semibold text-lg md:text-xl mb-4 text-white group-hover:tracking-wide transition-all duration-300">
                  {service.title} &rarr;
                </h3>
                <div className="font-inter text-[0.95rem] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  <p className="mb-2 text-white/80">{service.subtitle}</p>
                  <p>{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
