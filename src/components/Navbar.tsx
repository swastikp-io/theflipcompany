import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-8 transition-all duration-300 pointer-events-none flex items-center justify-between ${
          scrolled ? 'backdrop-blur-sm' : ''
        }`}
      >
        {/* Desktop Left Pill: Solutions, About, Contact */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-7 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 rounded-full px-7 py-2.5 shadow-lg transition-all duration-300">
          <a
            href="#services"
            className="text-white/90 hover:text-white font-inter text-[14px] font-normal transition-colors"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="text-white/90 hover:text-white font-inter text-[14px] font-normal transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-white font-inter text-[14px] font-normal transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Left: Minimal Pill / Brand */}
        <div className="md:hidden pointer-events-auto bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 flex items-center shadow-lg">
          <a href="#" className="font-season-sans text-white text-base font-bold tracking-wider">
            FLIP
          </a>
        </div>

        {/* Top Right Desktop & Mobile CTA / Menu Toggle */}
        <div className="pointer-events-auto flex items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=business.theflipco@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-inter text-sm md:text-base font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 inline-flex items-center gap-1.5"
          >
            <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-base md:text-lg">[</span>
            <span className="group-hover:tracking-wider transition-all duration-300">start a project</span>
            <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-base md:text-lg">]</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-white/10 backdrop-blur-md border border-white/15 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden px-6"
          >
            <a
              href="#services"
              onClick={closeMenu}
              className="text-white text-2xl font-season-sans hover:text-flip-blue transition-colors"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="text-white text-2xl font-season-sans hover:text-flip-blue transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white text-2xl font-season-sans hover:text-flip-blue transition-colors"
            >
              Contact
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=business.theflipco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="pt-4 font-inter text-xl text-white font-medium inline-flex items-center gap-1.5"
            >
              <span className="text-white/40">[</span>
              <span>start a project</span>
              <span className="text-white/40">]</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
