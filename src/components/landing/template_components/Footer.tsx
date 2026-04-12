"use client";

import React from 'react';
import Reveal from './Reveal';

const Footer = () => {
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
            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="flex flex-row justify-center gap-2 sm:gap-4 w-full max-w-sm sm:max-w-none">
                <button className="flex-1 sm:flex-none bg-[#000000] text-[#f9f6f6] px-3 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                  Open an account
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#72b90d] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium hover:bg-[#2a650a] transition-colors duration-300 whitespace-nowrap shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  Download App
                </button>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Plot+102A+Collins+Aimuan+Road,+Kuje,+Abuja,+FCT" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto overflow-hidden bg-white text-[#000000] px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-sm inline-block text-center mt-4 sm:mt-0">
                Visit a branch
              </a>
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
    </footer>
  );
};

export default Footer;