import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function ConversionGrowth() {
  return (
    <ServicePageLayout
      title="Website Conversion Optimization Services | The FLIP Co"
      description="More visitors are useless if they don't convert. We design conversion-focused user experiences and landing pages to generate more leads."
      url="https://theflipcompany.in/services/conversion-growth/"
      serviceName="Conversion & Growth"
      heroTitle="More visitors are useless if they don't convert."
      heroSubtitle="Website messaging, calls to action, conversion-focused user experience, and frictionless customer journeys designed to generate more enquiries and sales."
      content={
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Stop Losing Qualified Traffic</h2>
            <p className="mb-6">
              Driving traffic to your website is expensive and time-consuming. If those visitors arrive and leave without taking action, your marketing budget is being wasted. We focus on optimizing the pathways that turn visitors into paying customers or qualified leads.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Optimize for Conversion</h2>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li><strong className="text-white/90">Landing Page Optimization:</strong> We rebuild underperforming campaign pages to align perfectly with search intent and ad messaging.</li>
              <li><strong className="text-white/90">UX Audits & Friction Removal:</strong> Identifying and fixing confusing navigation, broken mobile experiences, or complicated forms.</li>
              <li><strong className="text-white/90">Clear Messaging & Copywriting:</strong> Ensuring your value proposition is immediately obvious within the first 3 seconds of a visit.</li>
              <li><strong className="text-white/90">Strategic Calls to Action:</strong> Placing the right next steps at the natural conclusion of a user's reading flow.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data-Informed Design</h2>
            <p className="mb-4 text-white/70">
              We do not promise arbitrary conversion improvements without evidence. Our process involves analyzing existing analytics (where available), understanding user behavior, and implementing proven UX patterns to incrementally improve lead generation and sales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Services</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/services/websites" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  Website Development &rarr;
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  E-commerce Development &rarr;
                </Link>
              </li>
            </ul>
          </section>
        </>
      }
    />
  );
}
