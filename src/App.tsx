/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Websites from './pages/services/Websites';
import Ecommerce from './pages/services/Ecommerce';
import WebApps from './pages/services/WebApps';
import ConversionGrowth from './pages/services/ConversionGrowth';
import AiIntegrations from './pages/services/AiIntegrations';
import WebsiteCare from './pages/services/WebsiteCare';

export default function App() {
  return (
    <div className="bg-poch-black min-h-screen text-poch-white font-inter antialiased selection:bg-flip-blue selection:text-poch-black">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/websites" element={<Websites />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/web-apps" element={<WebApps />} />
        <Route path="/services/conversion-growth" element={<ConversionGrowth />} />
        <Route path="/services/ai-integrations" element={<AiIntegrations />} />
        <Route path="/services/website-care" element={<WebsiteCare />} />
      </Routes>
      <Footer />
    </div>
  );
}
