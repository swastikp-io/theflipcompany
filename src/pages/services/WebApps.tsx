import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function WebApps() {
  return (
    <ServicePageLayout
      title="Custom Web Application Development | The FLIP Co"
      description="From websites to full-blown products. We build custom web apps, dashboards, booking systems, and internal tools in India."
      url="https://theflipcompany.in/services/web-apps/"
      serviceName="Web Apps"
      heroTitle="From websites to full-blown products."
      heroSubtitle="Custom web applications, dashboards, portals, booking systems, and internal tools built around the way your business works."
      content={
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Software Built for Your Workflows</h2>
            <p className="mb-6">
              Off-the-shelf software often forces you to change how you work. We believe software should adapt to your business. We develop custom web applications designed to solve specific operational challenges, automate repetitive tasks, and provide actionable insights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">What We Develop</h2>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li><strong className="text-white/90">Business Dashboards:</strong> Centralized hubs for monitoring KPIs, managing data, and making informed decisions.</li>
              <li><strong className="text-white/90">Customer Portals:</strong> Secure platforms for your clients to access resources, manage their accounts, or track progress.</li>
              <li><strong className="text-white/90">Booking & Scheduling Systems:</strong> Custom-built availability management that integrates directly with your calendar and payment gateways.</li>
              <li><strong className="text-white/90">Internal Tools:</strong> Operational software that streamlines employee workflows and data entry.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">The Development Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Requirements Gathering</h3>
                <p className="text-white/70">We map out your exact operational needs, user roles, and data flows.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Prototyping & UX Design</h3>
                <p className="text-white/70">We build interactive wireframes to validate the user experience before heavy engineering begins.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Robust Engineering</h3>
                <p className="text-white/70">Built with secure, modern stacks ensuring performance, scalability, and data integrity.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Services</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ai-integrations" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  AI Integrations & Agents &rarr;
                </Link>
              </li>
            </ul>
          </section>
        </>
      }
    />
  );
}
