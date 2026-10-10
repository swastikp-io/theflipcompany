import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function Websites() {
  return (
    <ServicePageLayout
      title="Website Development Company in India | The FLIP Co"
      description="High-performance marketing websites, company websites, portfolios, and landing pages designed around your business goals. Based in Lucknow."
      url="https://theflipcompany.in/services/websites/"
      serviceName="Websites"
      heroTitle="Websites that make your business look as good as it actually is."
      heroSubtitle="High-performance marketing websites, company websites, portfolios, landing pages, and custom digital experiences designed around your brand, customers, and goals."
      content={
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">More Than Just a Digital Brochure</h2>
            <p className="mb-6">
              A website is often the first interaction a potential customer has with your business. If it's slow, confusing, or outdated, they leave. We build custom websites that clearly communicate your value, establish trust, and drive action.
            </p>
            <p>
              Whether you are a B2B service provider in India looking to generate leads, or a creative agency needing a portfolio that stands out, we focus on what matters: fast load times, accessible design, and conversion-focused user experiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">What We Build</h2>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li><strong className="text-white/90">Marketing Websites:</strong> Scalable platforms optimized for search engines and lead generation.</li>
              <li><strong className="text-white/90">Landing Pages:</strong> High-converting single pages tailored for specific marketing campaigns.</li>
              <li><strong className="text-white/90">Company Portfolios:</strong> Dynamic, media-rich experiences that showcase your best work.</li>
              <li><strong className="text-white/90">Custom Digital Experiences:</strong> Interactive web experiences tailored to unique brand requirements using modern frameworks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Approach</h2>
            <p className="mb-4">
              We don't just hand over a template. Every project begins with understanding your business goals and target audience. 
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">1. Strategy & Architecture</h3>
                <p className="text-white/70">We plan the sitemap, content structure, and technical requirements before writing a single line of code.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">2. Design & Development</h3>
                <p className="text-white/70">We design modern, responsive interfaces and build them using fast, secure technologies like React, Vite, and Next.js.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">3. SEO & Performance Optimization</h3>
                <p className="text-white/70">Every site is built with technical SEO best practices, semantic HTML, and optimized assets to ensure fast Core Web Vitals.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Services</h2>
            <p className="mb-4 text-white/70">A great website is just the foundation. Explore how we can further improve your digital presence:</p>
            <ul className="space-y-3">
              <li>
                <Link to="/services/conversion-growth" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  Conversion & Growth &rarr;
                </Link>
              </li>
              <li>
                <Link to="/services/website-care" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  Website Care & Maintenance &rarr;
                </Link>
              </li>
            </ul>
          </section>
        </>
      }
    />
  );
}
