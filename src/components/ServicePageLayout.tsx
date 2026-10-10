import React from 'react';
import SEO from './SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ServicePageProps {
  title: string;
  description: string;
  url: string;
  serviceName: string;
  heroTitle: string;
  heroSubtitle: string;
  content: React.ReactNode;
}

export default function ServicePageLayout({
  title, description, url, serviceName, heroTitle, heroSubtitle, content
}: ServicePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": serviceName,
        "provider": {
          "@type": "Organization",
          "name": "The FLIP Co",
          "url": "https://theflipcompany.in",
          "logo": "https://theflipcompany.in/company-logo.jpeg"
        },
        "description": description,
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Place", "name": "Worldwide" }
        ],
        "url": url
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://theflipcompany.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": serviceName,
            "item": url
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO title={title} description={description} url={url} schema={schema} />
      <main className="w-full bg-poch-black text-poch-white min-h-screen pt-32 pb-24 px-6 sm:px-10 md:px-12 lg:px-16 selection:bg-flip-blue selection:text-poch-black">
        <div className="max-w-[1700px] mx-auto">
          {/* Breadcrumb */}
          <div className="mb-12 font-inter text-sm text-white/50 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{serviceName}</span>
          </div>

          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mb-24"
          >
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-inter font-medium tracking-tight mb-8">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-3xl leading-relaxed font-inter font-normal">
              {heroSubtitle}
            </p>
          </motion.div>

          {/* Content */}
          <div className="max-w-4xl font-inter text-lg text-white/80 leading-relaxed space-y-16">
            {content}
          </div>
          
          {/* CTA */}
          <div className="mt-32 pt-12 border-t border-white/10 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-inter font-medium mb-6 text-white">Ready to start your project?</h2>
            <p className="text-white/60 mb-8 max-w-2xl">
              We partner with businesses to build digital solutions that drive results. Reach out to discuss how we can help your company grow.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=business.theflipco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-inter text-lg font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-xl">[</span>
              <span className="group-hover:tracking-wider group-hover:underline underline-offset-4 decoration-white/50 transition-all duration-300">
                contact us
              </span>
              <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-xl">]</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
