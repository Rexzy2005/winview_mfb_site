"use client";

import Link from "next/link";
import React from 'react';
import Reveal from './Reveal';

const Cooperative = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Side: Realistic Card Mockup */}
        <Reveal direction="right">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-4 sm:p-8 border border-slate-200/60 shadow-sm relative">
            
            {/* Main Mastercard */}
            <div className="bg-gradient-to-br from-[#112a06] via-[#1c440a] to-[#0a1803] rounded-[1.25rem] sm:rounded-[1.5rem] p-4 sm:p-6 md:p-8 aspect-[1.586/1] relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(28,68,10,0.5)] mb-8 border border-white/10 group hover:-translate-y-2 transition-transform duration-500 w-full max-w-[450px] mx-auto lg:mx-0">
              
              {/* Card Texture & Lighting */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
                  backgroundSize: '24px 24px' 
                }}
              ></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay pointer-events-none transition-transform duration-700 group-hover:translate-x-10 group-hover:translate-y-10"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#72b90d]/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div className="font-medium text-white/90 tracking-widest text-[10px] sm:text-xs uppercase drop-shadow-sm">Nigeria Police Coop</div>
                  <iconify-icon icon="solar:screencast-2-linear" className="text-xl sm:text-2xl text-white/70 rotate-90 drop-shadow-sm"></iconify-icon>
                </div>

                {/* EMV Chip */}
                <div className="w-10 h-7 sm:w-12 sm:h-9 bg-gradient-to-br from-[#d4af37] via-[#ffd700] to-[#b8860b] rounded-md flex items-center justify-center shadow-inner my-2 sm:my-3 opacity-90 overflow-hidden relative border border-yellow-600/50">
                  <div className="absolute w-full h-[1px] bg-yellow-900/30 top-1/2"></div>
                  <div className="absolute w-[1px] h-full bg-yellow-900/30 left-1/3"></div>
                  <div className="absolute w-[1px] h-full bg-yellow-900/30 right-1/3"></div>
                  <div className="absolute w-5 sm:w-6 h-4 sm:h-5 border border-yellow-900/30 rounded-[2px] sm:rounded-sm"></div>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto">
                  <div className="text-xs sm:text-xl md:text-2xl tracking-[0.05em] sm:tracking-[0.2em] text-white font-medium mb-2 font-mono drop-shadow-md whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    5399  2210  4432  8892
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        <div className="text-[7px] sm:text-[8px] text-white/70 uppercase tracking-widest leading-tight">Valid<br/>Thru</div>
                        <div className="text-xs sm:text-sm text-white font-mono drop-shadow-sm">12/28</div>
                      </div>
                      <div className="font-medium text-white uppercase text-[10px] sm:text-xs tracking-wider drop-shadow-sm">Insp. Emmanuel A.</div>
                    </div>
                    
                    {/* Realistic Mastercard Logo */}
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex -space-x-3 sm:-space-x-4">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#eb001b] mix-blend-screen opacity-90"></div>
                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#f79e1b] mix-blend-screen opacity-90"></div>
                      </div>
                      <div className="text-[7px] sm:text-[8px] text-white/90 font-medium tracking-widest uppercase mr-1">Debit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cooperative Benefits */}
            <div className="space-y-4 px-2 sm:px-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f9f6f6] flex items-center justify-center text-[#2a650a] shadow-sm">
                  <iconify-icon icon="solar:wallet-money-linear" className="text-xl"></iconify-icon>
                </div>
                <div className="font-medium text-sm text-slate-800">Salary-linked savings & loans</div>
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f9f6f6] flex items-center justify-center text-[#2a650a] shadow-sm">
                  <iconify-icon icon="solar:safe-circle-linear" className="text-xl"></iconify-icon>
                </div>
                <div className="font-medium text-sm text-slate-800">Retirement-friendly savings vehicles</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Side: Content */}
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <Reveal delay={100}>
            <div className="inline-block px-3 py-1 bg-[#2a650a]/10 text-[#2a650a] rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Community Focus
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#000000] mb-6 leading-[1.15]">
              The trusted partner for the Nigeria Police Cooperative
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base sm:text-lg text-slate-500 font-light mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              WinView provides tailored savings, loans, and investment products that deeply understand the unique needs of police officers, retirees, and their families.
            </p>
          </Reveal>
          <ul className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0 text-left">
            {[
              "Dedicated servicing channels for cooperative members",
              "Group-based cooperative finance tools",
              "Direct repayment from salary accounts"
            ].map((item, idx) => (
              <Reveal key={idx} delay={400 + (idx * 100)} className="group relative">
                <li className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium bg-slate-50 p-3 rounded-2xl border border-slate-100 relative overflow-hidden transition-all duration-500 hover:border-[#72b90d]/30 hover:bg-[#72b90d]/5">
                  <div 
                    className="w-8 h-8 rounded-full bg-[#72b90d]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 group-[.opacity-100]:scale-100"
                    style={{ transitionDelay: `${600 + (idx * 100)}ms` }}
                  >
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#2a650a] text-lg"></iconify-icon>
                  </div>
                  {item}
                  {/* Subtle highlight sweep */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#72b90d]/10 to-transparent -translate-x-[200%] group-[.opacity-100]:translate-x-[400%] transition-transform duration-[1.5s] ease-in-out"
                    style={{ transitionDelay: `${800 + (idx * 100)}ms` }}
                  ></div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={700}>
            <Link href="/about-us" className="inline-block text-center w-full sm:w-auto bg-[#000000] text-[#f9f6f6] px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#2a650a] transition-colors duration-300 shadow-lg">
              Learn about Cooperative Banking
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Cooperative;