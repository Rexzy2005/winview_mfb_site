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
                <button className="flex-1 sm:flex-none bg-transparent border-2 border-[#000000] text-[#000000] px-3 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium hover:bg-[#000000] hover:text-[#f9f6f6] transition-colors duration-300 whitespace-nowrap">
                  Download the app
                </button>
              </div>
              <button className="w-full sm:w-auto bg-white text-[#000000] px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-sm">
                Visit a branch
              </button>
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
              <p className="text-[#f9f6f6]/70 text-sm font-light mb-8 max-w-sm">
                To revolutionize the Nigerian banking sector with a customer-centred, efficient, and digital-first microfinance model.
              </p>
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