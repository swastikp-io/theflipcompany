import React, { useState } from 'react';
import { ServiceSelect } from './ServiceSelect';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const textMessage = `Hi The FLIP Co.
My name is ${name}.
I run ${businessName || 'N/A'}.
I'm interested in ${selectedService}.
Here's what my business needs:
${message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/918081662353?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto py-[clamp(5rem,10vw,8rem)] bg-poch-black text-poch-white border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column Info */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 md:space-y-16">
          <div>
            <h2 className="font-season-sans text-[clamp(2.75rem,5.5vw,4.75rem)] font-bold leading-[1.1] text-white tracking-tight">
              Get In Touch<br />With Us
            </h2>
          </div>

          <div className="space-y-8 font-inter">
            <div>
              <p className="text-white/60 text-base mb-1 font-normal">Email Us</p>
              <a 
                href="mailto:business.theflipco@gmail.com" 
                className="text-[#023e90] hover:underline font-medium text-lg md:text-xl transition-colors"
              >
                business.theflipco@gmail.com
              </a>
            </div>

            <div>
              <p className="text-white/60 text-base mb-1 font-normal">Let’s grab a coffee</p>
              <p className="text-[#023e90] font-medium text-lg md:text-xl">
                We are based in Lucknow
              </p>
            </div>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            
            {/* Hi, I'm _____ */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-season-sans text-white">
              <span className="shrink-0 font-bold">Hi, I’m</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-transparent border-b-2 border-white focus:outline-none text-white px-2 py-1 min-w-[200px] flex-1 font-inter font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl placeholder:text-white/40 placeholder:font-normal"
              />
            </div>

            {/* and I run _____ */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-season-sans text-white">
              <span className="shrink-0 font-bold">and I run</span>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Your Business"
                className="bg-transparent border-b-2 border-white focus:outline-none text-white px-2 py-1 min-w-[200px] flex-1 font-inter font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl placeholder:text-white/40 placeholder:font-normal"
              />
            </div>

            {/* I'm interested in _____ (Shadcn UI Dropdown) */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-season-sans text-white">
              <span className="shrink-0 font-bold">I'm interested in</span>
              <div className="flex-1 min-w-[220px]">
                <ServiceSelect
                  value={selectedService}
                  onValueChange={setSelectedService}
                  placeholder="Select"
                  triggerClassName="w-full bg-transparent border-0 border-b-2 border-white rounded-none px-2 py-1 font-inter font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl text-white focus:ring-0 focus:outline-none hover:border-white/80 transition-colors h-auto shadow-none"
                />
              </div>
            </div>

            {/* [Here's what my business needs] */}
            <div className="space-y-4 pt-4">
              <label className="block text-2xl sm:text-3xl md:text-4xl font-season-sans font-bold text-white">
                [Here's what my business needs]
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you're trying to solve or achieve..."
                className="w-full bg-[#525252]/50 hover:bg-[#525252]/60 focus:bg-[#525252]/70 border-0 rounded-2xl p-5 font-inter font-normal text-base md:text-lg text-white placeholder:text-white/40 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Start the Conversation [↗] */}
            <div className="pt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-season-sans text-2xl sm:text-3xl md:text-4xl font-normal text-white hover:text-white/80 transition-colors cursor-pointer group"
              >
                <span>Start the Conversation</span>
                <span className="inline-flex items-center justify-center font-inter font-light text-2xl sm:text-3xl md:text-4xl text-white/90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  [<ArrowUpRight className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 inline ml-1" />]
                </span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

