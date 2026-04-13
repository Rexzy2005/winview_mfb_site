"use client";

import React, { useState } from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <footer className="px-0 md:px-6 pb-0 md:pb-4 pt-12">
      <div className="bg-[#2a650a] rounded-none rounded-b-[2.5rem] md:rounded-[3.5rem] pt-16 md:pt-24 pb-8 px-6 md:px-16 lg:px-24">
        
        {/* Join WinView CTA */}
        <Reveal>
          <div className="bg-[#72b90d] rounded-3xl p-10 md:p-16 mb-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#000000] mb-6 relative z-10">Join WinView Today</h2>
            <p className="text-base md:text-lg text-[#000000]/80 font-light mb-10 max-w-xl mx-auto relative z-10">
              Empowering, not condescending. We help you grow your money. Simple, transparent, and built entirely around you.
            </p>
            <div className="flex flex-col items-center gap-4 relative z-10 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
                <button className="w-[180px] sm:w-[200px] h-[52px] bg-[#000000] text-[#f9f6f6] rounded-xl text-sm font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  Open an account
                </button>
                <a href="https://www.google.com/maps/search/?api=1&query=Plot+102A+Collins+Aimuan+Road,+Kuje,+Abuja,+FCT" target="_blank" rel="noopener noreferrer" className="w-[180px] sm:w-[200px] h-[52px] flex items-center justify-center bg-white text-[#000000] rounded-xl text-sm font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  Visit a branch
                </a>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 mt-2 w-full">
                <a href="#" className="flex items-center gap-2.5 bg-black hover:bg-[#1a1a1a] text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/20 hover:scale-105 transition-all w-[140px] sm:w-[160px] h-[48px] sm:h-[52px] shadow-lg group whitespace-nowrap" onClick={handleAppClick}>
                  <iconify-icon icon="ic:baseline-apple" className="text-3xl sm:text-4xl shrink-0 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
                  <div className="flex flex-col items-start justify-center leading-none text-left">
                    <span className="text-[8px] sm:text-[10px] font-medium text-white/80 mb-0.5 whitespace-nowrap">Download on the</span>
                    <span className="text-[14px] sm:text-[17px] font-semibold tracking-tight -mt-0.5 whitespace-nowrap">App Store</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 bg-black hover:bg-[#1a1a1a] text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/20 hover:scale-105 transition-all w-[140px] sm:w-[160px] h-[48px] sm:h-[52px] shadow-lg group whitespace-nowrap" onClick={handleAppClick}>
                  <iconify-icon icon="logos:google-play-icon" className="text-[24px] sm:text-[30px] shrink-0 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
                  <div className="flex flex-col items-start justify-center leading-none text-left">
                    <span className="text-[8px] sm:text-[10px] font-medium text-white/80 uppercase tracking-widest mb-0.5 whitespace-nowrap">GET IT ON</span>
                    <span className="text-[14px] sm:text-[17px] font-semibold tracking-tight -mt-0.5 whitespace-nowrap">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer Links */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
          {/* Brand & Socials */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="text-[#f9f6f6] font-medium text-2xl tracking-tight mb-6">
                Win<span className="text-[#72b90d]">View</span>
              </div>
              <p className="text-[#f9f6f6]/70 text-sm font-light mb-6 max-w-sm">
                To revolutionize the Nigerian banking sector with a customer-centred, efficient, and digital-first microfinance model.
              </p>
              <div className="text-[#f9f6f6]/70 text-sm font-light mb-8 max-w-sm flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" className="text-xl text-[#72b90d] mt-1 shrink-0"></iconify-icon>
                <div>
                  <span className="block text-white font-medium mb-1">Headquarters</span>
                  Plot 102A Collins Aimuan Road,<br />
                  Kuje, Abuja, FCT.
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f9f6f6] hover:bg-[#72b90d] hover:text-[#000000] transition-colors">
                  <iconify-icon icon="solar:square-bottom-up-linear" className="text-lg"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#72b90d] border border-[#72b90d] flex items-center justify-center text-[#000000] hover:bg-[#f9f6f6] transition-colors">
                  <iconify-icon icon="solar:dialog-linear" className="text-lg"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f9f6f6] hover:bg-[#72b90d] hover:text-[#000000] transition-colors">
                  <iconify-icon icon="solar:letter-linear" className="text-lg"></iconify-icon>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 flex flex-wrap justify-between lg:justify-end gap-16 lg:gap-32">
            <Reveal delay={100}>
              <h4 className="text-[#f9f6f6] font-medium text-sm mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4">
                <li><a href="/about-us" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">About Us</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Careers</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Branches</a></li>
                <li><a href="/#contact" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Contact Support</a></li>
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <h4 className="text-[#f9f6f6] font-medium text-sm mb-6 uppercase tracking-wider">Products</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Savings Accounts</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Loans & Credit</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Police Cooperative</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">SME Banking</a></li>
              </ul>
            </Reveal>
            <Reveal delay={300}>
              <h4 className="text-[#f9f6f6] font-medium text-sm mb-6 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Terms of Service</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Privacy Policy</a></li>
                <li><a href="#" className="text-[#f9f6f6]/70 hover:text-[#72b90d] transition-colors text-sm font-light">Fraud Alert</a></li>
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="text-center text-[#f9f6f6]/50 text-xs font-light tracking-wide">
            © WinView Microfinance Bank Ltd. All rights reserved. Licensed by the Central Bank of Nigeria.
          </div>
        </Reveal>
      </div>

      {/* Coming Soon Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-24 right-4 sm:top-8 sm:right-8 z-[9999] bg-[#000000] text-white border border-[#72b90d]/30 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#72b90d]/10 to-transparent pointer-events-none"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#72b90d]/20 flex items-center justify-center shrink-0 relative z-10">
              <iconify-icon icon="solar:rocket-bold" className="text-lg sm:text-xl text-[#72b90d]"></iconify-icon>
            </div>
            <div className="flex flex-col text-left relative z-10">
              <span className="font-bold text-sm sm:text-base text-white tracking-tight">App Coming Soon!</span>
              <span className="text-[10px] sm:text-xs text-white/70 whitespace-nowrap">We're launching on iOS & Android shortly.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;