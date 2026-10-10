import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PerformanceStats from '../components/PerformanceStats';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="The FLIP Co"
        description="Stop treating your website like a brochure. We build digital experiences designed to get your business noticed"
        url="https://theflipcompany.in/"
      />
      <Hero />
      <Services />
      <PerformanceStats />
    </>
  );
}
