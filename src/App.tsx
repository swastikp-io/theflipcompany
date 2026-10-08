/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-poch-black min-h-screen text-poch-white font-inter antialiased selection:bg-flip-blue selection:text-poch-black">
      <Navbar />
      <Hero />
      <Services />
      <div className="w-full relative flex items-center justify-center overflow-hidden">
        <img 
          src="/Prismatic Alpine Lake Reflection.png" 
          alt="Prismatic Alpine Lake Reflection" 
          className="w-full min-h-[40vh] md:min-h-[60vh] object-cover block"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h2 className="text-white font-inter font-medium tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl px-6 drop-shadow-xl">
            Stop treating your website like a brochure.
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
