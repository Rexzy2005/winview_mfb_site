"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingCoins from './FloatingCoins';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="p-0 md:px-6 md:p-4">
      <div className="bg-[#000000] h-[100svh] lg:h-auto lg:min-h-0 rounded-t-none rounded-b-[2rem] md:rounded-b-[3.5rem] relative overflow-hidden pb-16 lg:pb-32 pt-6 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col z-0 lg:py-24">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="animate-pulse-glow absolute top-[-10%] right-[-5%] w-[60%] sm:w-[40%] h-[50%] bg-[#2a650a] rounded-full blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="animate-pulse-glow delay-500 absolute bottom-[-10%] left-[-5%] w-[50%] sm:w-[30%] h-[40%] bg-[#72b90d] rounded-full blur-[80px] sm:blur-[100px] opacity-10"></div>
        </div>

      {/* 3D Floating Coins Background */}
      {mounted && (
          <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30 mix-blend-screen">
            <FloatingCoins />
          </div>
        )}
        
        <nav className={`relative z-50 flex items-center justify-between mb-12 sm:mb-16 md:mb-24 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
          <div className="flex items-center gap-2 text-[#f9f6f6] font-medium text-lg tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
            <img src="/brandLogo.png" alt="WinView Logo" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shadow-sm bg-[#72b90d] border border-white/10" />
            <div className="flex items-center">
              Win<span className="text-[#72b90d]">View</span>
            </div>
          </div>
          
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-[#72b90d] text-[#000000] px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform duration-300 relative z-50"
            >
              Menu
              <div className={`w-1.5 h-1.5 bg-[#000000] rounded-full transition-transform duration-300 ${menuOpen ? 'scale-150' : ''}`}></div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: -20, rotateX: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20, rotateX: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="absolute top-full right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-200/50 origin-top-right z-40"
                  style={{ perspective: 1000 }}
                >
                  <a href="/about-us" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 p-3 hover:bg-[#72b90d]/10 rounded-xl text-sm font-medium transition-all duration-300 text-slate-800 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                    <div className="w-8 h-8 rounded-full bg-[#f9f6f6] group-hover:bg-white flex items-center justify-center transition-colors shadow-sm group-hover:scale-110 duration-300">
                      <iconify-icon icon="solar:info-circle-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                  </a>
                  <div className="h-px w-full bg-slate-100 my-1 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#72b90d]/30 to-transparent"></div></div>
                  <a href="/#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 p-3 hover:bg-[#72b90d]/10 rounded-xl text-sm font-medium transition-all duration-300 text-slate-800 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                    <div className="w-8 h-8 rounded-full bg-[#f9f6f6] group-hover:bg-white flex items-center justify-center transition-colors shadow-sm group-hover:scale-110 duration-300">
                      <iconify-icon icon="solar:phone-calling-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        

        {/* Hero Content */}
        <div className="relative z-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1 pb-6 lg:pb-0">
          <div className="relative z-30 max-w-xl mx-auto lg:mx-0 text-center lg:text-left mt-4 sm:mt-0 lg:-translate-y-8 lg:translate-y-0 bg-black/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-5 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none border border-white/5 lg:border-none shadow-2xl lg:shadow-none">
            <h1 className={`text-[#f9f6f6] text-[clamp(2.5rem,8vw,4.5rem)] lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-6 opacity-0 ${mounted ? 'animate-fade-up delay-100' : ''}`}>
              Banking built <br className="hidden md:block" />
              around <span className="text-[#72b90d]">you.</span>
            </h1>
            <p className={`text-slate-300 text-[clamp(1rem,2vw,1.25rem)] font-light mb-6 md:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 opacity-0 ${mounted ? 'animate-fade-up delay-200' : ''}`}>
              Banking that works for you, your family, and your cooperative. Simple, efficient, and digital-first microfinance.
            </p>

            {/* Trust Badges */}
            <div className={`flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start mb-8 md:mb-10 opacity-0 ${mounted ? 'animate-fade-up delay-[250ms]' : ''}`}>
              <div className="inline-flex items-center bg-[#f0f2f5]/50 rounded-md px-3 py-1.5 sm:px-4 sm:py-2.5 shadow-sm">
                {/* CBN License */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-black text-[10px] sm:text-[13px] font-medium whitespace-nowrap">Fully licensed by CBN</span>
                  <img src="/cbn_logo.png" alt="CBN Logo" className="h-4 sm:h-6 w-auto object-contain drop-shadow-sm" />
                </div>
                
                {/* Divider */}
                <div className="h-4 sm:h-5 w-[1px] bg-slate-300 mx-2.5 sm:mx-4"></div>
                
                {/* NDIC License */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-black text-[10px] sm:text-[13px] font-medium whitespace-nowrap">Deposits Insured by</span>
                  <img src="/ndic_logo.png" alt="NDIC Logo" className="h-3 sm:h-4 w-auto object-contain rounded-sm mix-blend-multiply" />
                </div>
              </div>
            </div>
            <div className={`flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 opacity-0 w-full sm:w-auto ${mounted ? 'animate-fade-up delay-300' : ''}`}>
              <button className="flex-1 sm:flex-none w-auto bg-[#72b90d] text-[#000000] px-4 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-[#f9f6f6] transition-colors duration-300 shadow-[0_0_20px_rgba(114,185,13,0.3)] hover:shadow-[0_0_30px_rgba(114,185,13,0.5)] whitespace-nowrap">
                Open an account
              </button>
              <button className="flex-1 sm:flex-none w-auto bg-[#f9f6f6] border-2 border-white/70 text-[#000000] px-4 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-[#72b90d] hover:border-white transition-colors duration-300 flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap">
                <iconify-icon icon="solar:smartphone-linear" className="text-lg"></iconify-icon>
                Get the app
              </button>
            </div>
          </div>


          {/* Hero Mockups */}
          <div className="flex absolute lg:relative bottom-0 lg:bottom-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 translate-y-[20%] sm:translate-y-[15%] lg:translate-y-0 h-[380px] sm:h-[500px] lg:h-[650px] w-full lg:w-full justify-center lg:justify-end perspective-[1000px] z-0 lg:z-20 mix-blend-screen lg:mix-blend-normal">
            
            {/* Phone 1 (Back/Secondary) */}
            <div className={`absolute top-[10%] sm:top-[12%] left-1/2 -translate-x-[60%] sm:-translate-x-[65%] lg:left-auto lg:translate-x-0 lg:right-[15%] w-[55vw] max-w-[240px] sm:max-w-[280px] aspect-[1/2.1] z-0 opacity-0 ${mounted ? 'animate-fade-in delay-400' : ''}`}>
              <div className="animate-float-back w-full h-full pb-0 transform-gpu preserve-3d">
                <div className="w-full h-full bg-gradient-to-b from-[#152e0c] to-[#081204] border-[6px] sm:border-[10px] border-r-[#060606] border-t-[#060606] border-l-[#2c2c2c] border-b-[#1c1c1c] rounded-[2.2rem] sm:rounded-[3.2rem] shadow-[-12px_15px_0px_#040802,-25px_30px_40px_rgba(0,0,0,0.95)] overflow-hidden relative">
                  {/* Subtle edge highlight for 3D realism */}
                  <div className="absolute inset-0 border-[2px] border-white/5 rounded-[1.8rem] sm:rounded-[2.8rem] z-20 pointer-events-none"></div>
                  {/* Glassmorphism reflection overlay */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent z-20 pointer-events-none skew-y-12 origin-top-left opacity-30"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/40 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute top-16 left-4 right-4 h-32 sm:h-40 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <div className="h-2 sm:h-3 w-1/3 bg-[#72b90d] rounded-full mb-4 sm:mb-6"></div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="h-6 sm:h-8 bg-white/10 rounded-lg w-full"></div>
                      <div className="h-6 sm:h-8 bg-white/10 rounded-lg w-5/6"></div>
                      <div className="h-6 sm:h-8 bg-white/10 rounded-lg w-full"></div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone 2 (Front/Main) */}
            <div className={`absolute top-[5%] sm:top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[10%] w-[65vw] max-w-[280px] sm:max-w-[320px] aspect-[1/2.1] z-20 opacity-0 transform-gpu preserve-3d ${mounted ? 'animate-fade-in delay-500' : ''}`}>
              <div className="animate-float-front w-full h-full pb-0 relative group">
                 {/* 3D Depth / Bevel Edge */}
                 <div className="absolute inset-0 bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[3.2rem] translate-x-[-15px] translate-y-[20px] -z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]"></div>
                 {/* Main Screen Container */}
                 <div className="w-full h-full bg-[#f9f6f6] border-[8px] sm:border-[14px] border-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden relative shadow-[-15px_20px_0px_#040802]">
                  {/* Outer Reflection/Glare overlay */}
                  <div className="absolute inset-0 z-50 pointer-events-none rounded-[2.5rem] sm:rounded-[3.2rem] bg-gradient-to-tr from-white/0 via-white/10 to-transparent mix-blend-overlay transition-opacity duration-1000 opacity-70 group-hover:opacity-100 hidden sm:block"></div>
                  <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-b from-white/10 to-transparent -rotate-45 transform origin-top pointer-events-none mix-blend-overlay z-50"></div>
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[20px] sm:h-[24px] bg-[#1a1a1a] rounded-full z-40 flex items-center justify-between px-2">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-800"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0a0a0a] border border-white/10"></div>
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-0 w-full h-10 z-30 flex justify-between items-center px-4 pt-1">
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-800 ml-1">9:41</span>
                    <div className="flex items-center gap-1 text-slate-800">
                      <iconify-icon icon="solar:cellular-line-bold" className="text-[10px]"></iconify-icon>
                      <iconify-icon icon="solar:wifi-bold" className="text-[10px]"></iconify-icon>
                      <iconify-icon icon="solar:battery-charge-minimalistic-bold" className="text-[12px]"></iconify-icon>
                    </div>
                  </div>

                  <div className="w-full h-full p-4 sm:p-5 pt-12 sm:pt-14 flex flex-col relative overflow-y-auto hide-scrollbar">
                    {/* Header */}
                  <div className="flex justify-between items-center mb-5 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden shadow-sm border border-slate-200">
                        <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-medium">Good morning</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#000000]">Ade</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                      <iconify-icon icon="solar:bell-linear" className="text-lg text-slate-600"></iconify-icon>
                    </div>
                  </div>
                  
                  {/* Balance Card */}
                  <div className="bg-[#000000] rounded-[1.25rem] p-4 sm:p-5 shadow-xl mb-4 relative overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[100%] bg-[#2a650a] rounded-full blur-[30px] opacity-60"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-[#72b90d] rounded-full blur-[30px] opacity-30"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-[9px] sm:text-[10px] font-medium text-[#f9f6f6]/70 uppercase tracking-widest">Total Balance</div>
                        <iconify-icon icon="solar:eye-linear" className="text-white/50 text-xs"></iconify-icon>
                      </div>
                      <div className="text-2xl sm:text-3xl font-semibold text-[#f9f6f6] tracking-tight mb-4 sm:mb-5">₦450,000<span className="text-white/50 text-lg">.00</span></div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-[#72b90d] py-2 sm:py-2.5 rounded-xl text-center text-[10px] sm:text-xs font-semibold text-[#000000] shadow-sm">Send</div>
                        <div className="flex-1 bg-white/10 text-[#f9f6f6] py-2 sm:py-2.5 rounded-xl text-center text-[10px] sm:text-xs font-semibold backdrop-blur-md border border-white/10">Add Money</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex justify-between items-center px-1 mb-5">
                    {[
                      { icon: 'solar:card-send-linear', label: 'Transfer' },
                      { icon: 'solar:bill-list-linear', label: 'Bills' },
                      { icon: 'solar:phone-calling-linear', label: 'Airtime' },
                      { icon: 'solar:shield-check-linear', label: 'Loans' }
                    ].map((act, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[1rem] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#2a650a]">
                          <iconify-icon icon={act.icon} className="text-lg sm:text-xl"></iconify-icon>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-medium text-slate-600">{act.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transactions */}
                  <div className="bg-white rounded-[1.25rem] p-3 sm:p-4 border border-slate-100 shadow-sm mb-16">
                    <div className="flex justify-between items-center mb-3 sm:mb-4 px-1">
                      <span className="text-xs sm:text-sm font-semibold text-[#000000]">Recent</span>
                      <span className="text-[10px] sm:text-xs font-medium text-[#72b90d]">See all</span>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-600">
                            <iconify-icon icon="solar:shop-linear" className="text-[14px] sm:text-base"></iconify-icon>
                          </div>
                          <div>
                            <div className="text-[10px] sm:text-xs font-semibold text-slate-800">Shoprite Ltd</div>
                            <div className="text-[8px] sm:text-[9px] text-slate-400">Today, 14:20</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-xs font-semibold text-[#000000]">-₦15,400</span>
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#72b90d]/10 flex items-center justify-center border border-[#72b90d]/20 text-[#2a650a]">
                            <iconify-icon icon="solar:arrow-left-down-linear" className="text-[14px] sm:text-base"></iconify-icon>
                          </div>
                          <div>
                            <div className="text-[10px] sm:text-xs font-semibold text-slate-800">Salary Deposit</div>
                            <div className="text-[8px] sm:text-[9px] text-slate-400">Yesterday</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-xs font-semibold text-[#72b90d]">+₦320,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav bar */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-2xl h-14 flex items-center justify-around px-2 border border-slate-100 z-10 pointer-events-auto">
                  <div className="flex flex-col items-center gap-0.5 text-[#2a650a]">
                    <iconify-icon icon="solar:home-2-bold" className="text-xl sm:text-2xl"></iconify-icon>
                    <div className="w-1 h-1 bg-[#2a650a] rounded-full"></div>
                  </div>
                  <iconify-icon icon="solar:card-linear" className="text-xl sm:text-2xl text-slate-400 hover:text-slate-600 transition-colors"></iconify-icon>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#000000] flex items-center justify-center -translate-y-4 shadow-lg border-4 border-[#f9f6f6] hover:scale-105 transition-transform cursor-pointer">
                    <iconify-icon icon="solar:qr-code-linear" className="text-xl text-[#f9f6f6]"></iconify-icon>
                  </div>
                  <iconify-icon icon="solar:chart-square-linear" className="text-xl sm:text-2xl text-slate-400 hover:text-slate-600 transition-colors"></iconify-icon>
                  <iconify-icon icon="solar:user-linear" className="text-xl sm:text-2xl text-slate-400 hover:text-slate-600 transition-colors"></iconify-icon>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;