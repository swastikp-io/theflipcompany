import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function WebsiteCare() {
  return (
    <ServicePageLayout
      title="Website Maintenance & Support Services | The FLIP Co"
      description="Launch isn't the finish line. Ongoing website maintenance, hosting, SEO improvements, and performance optimization services."
      url="https://theflipcompany.in/services/website-care/"
      serviceName="Website Care"
      heroTitle="Launch isn't the finish line."
      heroSubtitle="Hosting, maintenance, updates, analytics, SEO improvements, performance optimization, and ongoing development."
      content={
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Protecting Your Digital Investment</h2>
            <p className="mb-6">
              A successful website requires ongoing attention. Security vulnerabilities emerge, search engine algorithms change, and business requirements evolve. Our Website Care plans ensure your digital presence remains fast, secure, and aligned with your goals long after launch day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">What's Included in Website Care</h2>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li><strong className="text-white/90">Performance Optimization:</strong> Continuous monitoring of Core Web Vitals and resolving loading bottlenecks to maintain speed.</li>
              <li><strong className="text-white/90">Technical SEO Improvements:</strong> Ongoing audits of metadata, indexing status, internal linking, and structured data to sustain search visibility.</li>
              <li><strong className="text-white/90">Security & Updates:</strong> Proactive updates to frameworks, dependencies, and plugins to prevent vulnerabilities.</li>
              <li><strong className="text-white/90">Analytics & Reporting:</strong> Providing insights on visitor behavior and search performance without overwhelming you with data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">A Partnership for Ongoing Growth</h2>
            <p className="mb-4 text-white/70">
              We act as your external technical partner. Instead of hiring a full-time developer to manage your site, our care plans provide reliable access to engineering and SEO expertise exactly when you need it.
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
                <Link to="/services/conversion-growth" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  Conversion Optimization &rarr;
                </Link>
              </li>
            </ul>
          </section>
        </>
      }
    />
  );
}
