import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Link } from 'react-router-dom';

export default function AiIntegrations() {
  return (
    <ServicePageLayout
      title="AI Integration Services & Agents in India | The FLIP Co"
      description="Add AI where it actually helps. Custom AI chatbots, lead qualification, and AI agent development integrated into your business."
      url="https://theflipcompany.in/services/ai-integrations/"
      serviceName="AI Integrations"
      heroTitle="Add AI where it actually helps."
      heroSubtitle="AI chatbots, lead qualification, recommendation systems, intelligent search, and custom AI functionality integrated into websites and business workflows."
      content={
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Practical AI for Real Business Problems</h2>
            <p className="mb-6">
              AI shouldn't be a gimmick. We help businesses cut through the noise and integrate artificial intelligence solutions that actually improve customer experience, reduce operational overhead, or increase sales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our AI Capabilities</h2>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li><strong className="text-white/90">Customer Support Chatbots:</strong> Intelligent conversational agents trained on your documentation to answer customer queries instantly, 24/7.</li>
              <li><strong className="text-white/90">Lead Qualification Agents:</strong> AI agents that engage website visitors, ask qualifying questions, and route warm leads directly to your sales team.</li>
              <li><strong className="text-white/90">Intelligent Search:</strong> Semantic search implementations that understand user intent, helping customers find products or articles faster.</li>
              <li><strong className="text-white/90">Internal AI Workflows:</strong> Tool-using AI agents that connect with your existing databases and APIs to automate internal data processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Implement AI</h2>
            <p className="mb-4 text-white/70">
              We distinguish between simple rule-based automation, Large Language Model (LLM) powered conversational interfaces, and fully autonomous tool-using agents. We assess your requirements and implement the most appropriate, cost-effective technology—ensuring data privacy and reliability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Services</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-apps" className="text-white hover:underline underline-offset-4 decoration-white/30">
                  Custom Web Applications &rarr;
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
