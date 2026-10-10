import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function Ecommerce() {
  return (
    <ServicePageLayout
      title="E-commerce Website Development in India | The FLIP Co"
      description="Turn your website into a sales channel. Custom online store development designed for product discovery, brand trust, and conversion."
      url="https://theflipcompany.in/services/ecommerce/"
      serviceName="E-commerce"
      heroTitle="Turn your website into a sales channel."
      heroSubtitle="Modern online stores that make it easier for customers to discover products, trust your brand, and purchase without friction."
      content={
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Selling Online Shouldn't Be Hard</h2>
            <p className="mb-6">
              A successful e-commerce website removes every possible obstacle between a customer finding a product and checking out. We design custom online stores that prioritize speed, clarity, and reliability.
            </p>
            <p>
              Whether you are launching a new direct-to-consumer brand or upgrading an existing retail operation, we build platforms that scale with your inventory and traffic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Core Capabilities</h2>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li><strong className="text-white/90">Custom Storefronts:</strong> Unique designs that reflect your brand identity, stepping away from generic templates.</li>
              <li><strong className="text-white/90">Optimized Checkout Flows:</strong> Frictionless, secure payment gateways tailored to your region and customer preferences.</li>
              <li><strong className="text-white/90">Performance Focus:</strong> Fast-loading product pages and category grids that keep users engaged and reduce bounce rates.</li>
              <li><strong className="text-white/90">Mobile-First Commerce:</strong> fully responsive designs ensuring customers can shop easily on any device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Technical Excellence</h2>
            <p className="mb-4 text-white/70">
              We integrate with leading headless e-commerce platforms and robust backend systems to give you total control over your inventory, orders, and customer data. We ensure your store meets strict SEO standards so products rank when customers search for them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Services</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/services/conversion-growth" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  Conversion Optimization &rarr;
                </Link>
              </li>
              <li>
                <Link to="/services/ai-integrations" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  AI Chatbots & Recommendations &rarr;
                </Link>
              </li>
            </ul>
          </section>
        </>
      }
    />
  );
}
