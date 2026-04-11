"use client";

import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import MobileCarousel from './MobileCarousel';
;

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full bg-[#f9f6f6] font-sans selection:bg-[#72b90d] selection:text-[#000000] py-12">
      <div className="relative py-16 lg:py-24 px-2 sm:px-6 md:px-12 lg:px-24 mx-4 md:mx-6">
        {/* Contact Hero Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-0 lg:pt-8">
            <div className={`inline-block border border-[#72b90d]/30 bg-[#72b90d]/10 px-4 py-1.5 rounded-full text-[#72b90d] text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(114,185,13,0.15)] opacity-0 ${mounted ? 'animate-fade-up delay-100' : ''}`}>
              We're Here For You
            </div>
            <h2 className={`text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] tracking-tighter text-[#000000] font-medium mb-6 opacity-0 ${mounted ? 'animate-fade-up delay-200' : ''}`}>
              Let's Keep In <span className="text-[#72b90d] block sm:inline">Touch</span>
            </h2>
            <p className={`text-slate-500 text-base sm:text-lg md:text-xl font-light mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0 ${mounted ? 'animate-fade-up delay-300' : ''}`}>
              Have questions about your WinView account, our Police Cooperative integration, or anything banking-related? Reach out and we'll reply right away.
            </p>
            
            {/* Social Media Icons */}
            <div className={`flex justify-center lg:justify-start gap-6 opacity-0 ${mounted ? 'animate-fade-up delay-400' : ''}`}>
              <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#000000] hover:bg-[#72b90d] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <iconify-icon icon="lucide:facebook" style={{fontSize: "20px"}}></iconify-icon>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#000000] hover:bg-[#72b90d] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <iconify-icon icon="lucide:twitter" style={{fontSize: "20px"}}></iconify-icon>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#000000] hover:bg-[#72b90d] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <iconify-icon icon="lucide:linkedin" style={{fontSize: "20px"}}></iconify-icon>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#000000] hover:bg-[#72b90d] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                <iconify-icon icon="lucide:instagram" style={{fontSize: "20px"}}></iconify-icon>
              </a>
            </div>
          </div>
          
          <div className={`w-full lg:w-[45%] max-w-md mx-auto relative opacity-0 ${mounted ? 'animate-fade-in delay-500' : ''}`}>
            {/* Interactive Form Card */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] z-20">
              <h3 className="text-[#f9f6f6] text-2xl font-medium tracking-tight mb-6">Send us a Message</h3>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#000000] border border-white/10 rounded-xl px-4 py-3 text-[#f9f6f6] focus:outline-none focus:border-[#72b90d] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#000000] border border-white/10 rounded-xl px-4 py-3 text-[#f9f6f6] focus:outline-none focus:border-[#72b90d] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-[#000000] border border-white/10 rounded-xl px-4 py-3 text-[#f9f6f6] focus:outline-none focus:border-[#72b90d] transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#72b90d] text-[#000000] font-medium py-3.5 rounded-xl hover:bg-[#f9f6f6] transition-colors hover:shadow-[0_0_20px_rgba(114,185,13,0.3)]">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-[#72b90d] rounded-full flex items-center justify-center mb-6 text-[#000000] shadow-[0_0_30px_rgba(114,185,13,0.5)]">
                    <iconify-icon icon="solar:check-read-bold" className="text-3xl"></iconify-icon>
                  </div>
                  <h4 className="text-[#f9f6f6] text-xl font-medium tracking-tight mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">We'll get back to you via email very shortly. Thank you!</p>
                </div>
              )}
            </div>
            
            <div className="absolute top-4 -right-4 w-full h-full bg-[#2a650a]/40 border border-[#72b90d]/20 rounded-3xl -z-10 rotate-3"></div>
            
            {/* Licenses Section under the form */}
            <div className="mt-10 flex flex-row items-center justify-center gap-4 sm:gap-6">
              {/* CBN License */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img src="/cbn_logo.png" alt="CBN Logo" className="h-6 sm:h-10 w-6 object-contain" />
                <span className="text-slate-800 text-[12px] sm:text-base font-medium">CBN Licensed</span>
              </div>
              
              {/* Divider */}
              <div className="h-6 sm:h-8 w-[1px] bg-slate-300"></div>
              
              {/* NDIC License */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img src="/ndic_logo.png" alt="NDIC Logo" className="h-8 w-8 object-contain rounded-sm" />
                <span className="text-slate-800 text-[12px] sm:text-base font-medium">NDIC Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <div className="pb-24 px-6 pt-12 max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#000000] mb-4">Other ways to reach us</h3>
            <p className="text-slate-500 font-light text-base max-w-lg mx-auto">Prefer speaking to someone directly or visiting our branch? Here are our primary contacts.</p>
          </div>
        </Reveal>

        
        {/* Mobile Swipe Carousel */}
        <div className="relative z-10 block md:hidden w-full overflow-hidden mt-8">
          <MobileCarousel>
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
              <div className="w-20 h-20 bg-[#72b90d]/10 rounded-3xl flex items-center justify-center mb-8 border border-[#72b90d]/30 text-[#2a650a] group-hover:bg-[#72b90d] group-hover:text-black transition-colors shadow-sm">
                <iconify-icon icon="solar:letter-linear" className="text-4xl"></iconify-icon>
              </div>
              <h4 className="text-3xl font-medium tracking-tight text-[#000000] mb-4">Email Support</h4>
              <p className="text-base text-slate-500 font-light mb-6">Our team typically responds in under 2 hours during normal business operation.</p>
              <a href="mailto:support@winview.com" className="text-base font-medium text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2">
                support@winview.com
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>

            <div className="bg-[#1a1a1a] rounded-[2.5rem] p-8 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
              <div className="w-20 h-20 bg-[#72b90d] rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(114,185,13,0.3)] text-[#000000]">
                <iconify-icon icon="solar:phone-calling-linear" className="text-4xl"></iconify-icon>
              </div>
              <h4 className="text-3xl font-medium tracking-tight text-[#f9f6f6] mb-4">24/7 Helpline</h4>
              <p className="text-base text-slate-400 font-light mb-6">For urgent banking queries, suspected fraud, or lost ATM cards.</p>
              <a href="tel:+2347000000000" className="text-base font-medium text-[#72b90d] hover:text-white transition-colors inline-flex items-center gap-2">
                +234 (0)700 WIN VIEW
              </a>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
              <div className="w-20 h-20 bg-[#72b90d]/10 rounded-3xl flex items-center justify-center mb-8 border border-[#72b90d]/30 text-[#2a650a] group-hover:bg-[#72b90d] group-hover:text-black transition-colors shadow-sm">
                <iconify-icon icon="solar:map-point-linear" className="text-4xl"></iconify-icon>
              </div>
              <h4 className="text-3xl font-medium tracking-tight text-[#000000] mb-4">Branch Network</h4>
              <p className="text-base text-slate-500 font-light mb-6">Locate a WinView Microfinance branch or affiliated cooperative center.</p>
              <a href="#" className="text-base font-medium text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2">
                Find a branch
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </MobileCarousel>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
          {/* Support Email */}
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 border border-black/5 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl group">
              <div className="w-14 h-14 bg-[#72b90d]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#72b90d] transition-colors text-[#2a650a] group-hover:text-[#000000]">
                <iconify-icon icon="solar:letter-linear" className="text-3xl"></iconify-icon>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#000000] mb-2">Email Support</h4>
              <p className="text-slate-500 font-light text-sm mb-6">Our team typically responds in under 2 hours during normal business operation.</p>
              <a href="mailto:support@winview.com" className="text-sm font-medium text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2">
                support@winview.com
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </Reveal>

          {/* Active Help Line */}
          <Reveal delay={200}>
            <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl group">
              <div className="w-14 h-14 bg-[#72b90d] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(114,185,13,0.3)] text-[#000000]">
                <iconify-icon icon="solar:phone-calling-linear" className="text-3xl"></iconify-icon>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#f9f6f6] mb-2">24/7 Helpline</h4>
              <p className="text-slate-400 font-light text-sm mb-6">For urgent banking queries, suspected fraud, or lost ATM cards.</p>
              <a href="tel:+2347000000000" className="text-sm font-medium text-[#72b90d] hover:text-white transition-colors inline-flex items-center gap-2">
                +234 (0)700 WIN VIEW
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </Reveal>

          {/* Physical Branch */}
          <Reveal delay={300}>
            <div className="bg-white rounded-3xl p-8 border border-black/5 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl group">
              <div className="w-14 h-14 bg-[#72b90d]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#72b90d] transition-colors text-[#2a650a] group-hover:text-[#000000]">
                <iconify-icon icon="solar:routing-2-linear" className="text-3xl"></iconify-icon>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#000000] mb-2">Headquarters</h4>
              <p className="text-slate-500 font-light text-sm mb-6">14 WinView Street, Corporate District, Lagos, Nigeria.</p>
              <a href="#" className="text-sm font-medium text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2">
                Get Directions
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
