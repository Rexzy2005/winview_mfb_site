"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingCoins from './FloatingCoins';
import PhoneMockupUI from './PhoneMockupUI';
import AnimatedArrow3D from './AnimatedArrow3D';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
    <>
      <div className="p-0 md:px-6 md:p-4">
        <div className="bg-[#000000] h-[100svh] lg:h-auto lg:min-h-0 rounded-t-none rounded-b-[2rem] md:rounded-b-[3rem] md:rounded-t-[3rem] relative overflow-hidden pb-16 lg:pb-32 pt-6 px-4 sm:px-6 md:px-12 lg:px-[4rem] flex flex-col z-0 lg:py-[3rem]">
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
            <div className={`flex flex-col items-center lg:items-start gap-2 opacity-0 w-full sm:w-auto ${mounted ? 'animate-fade-up delay-300' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4
                }}
                className="flex flex-col items-center lg:items-start gap-1"
              >
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#72b90d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 z-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#72b90d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-[#72b90d]"></span>
                  </div>
                  
                  <span className="text-xs sm:text-sm md:text-base text-white/90 font-medium tracking-wide whitespace-nowrap z-10">
                    Download the app to <span className="text-[#72b90d] font-semibold">create an account</span>
                  </span>
                </div>
                
                {/* 3D Arrow pointing down to the badges */}
                <div className="h-16 w-full flex justify-center lg:justify-start lg:pl-12 mt-1 mb-2 relative z-20 overflow-visible pointer-events-none drop-shadow-[0_4px_12px_rgba(114,185,13,0.3)]">
                  <AnimatedArrow3D />
                </div>
              </motion.div>
            </div>

            {/* App Store Badges */}
            <div className={`flex flex-row items-center justify-center lg:justify-start gap-3 mt-4 opacity-0 ${mounted ? 'animate-fade-up delay-[350ms]' : ''}`}>
              <a href="#" className="flex items-center gap-2.5 bg-black hover:bg-[#1a1a1a] text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/20 hover:scale-105 transition-all w-[140px] sm:w-[160px] h-[46px] sm:h-[52px] shadow-lg group whitespace-nowrap" onClick={handleAppClick}>
                <iconify-icon icon="ic:baseline-apple" className="text-3xl sm:text-4xl shrink-0 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
                <div className="flex flex-col items-start justify-center leading-none">
                  <span className="text-[8px] sm:text-[10px] font-medium text-white/80 mb-0.5 whitespace-nowrap">Download on the</span>
                  <span className="text-[14px] sm:text-[17px] font-semibold tracking-tight -mt-0.5 whitespace-nowrap">App Store</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-black hover:bg-[#1a1a1a] text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/20 hover:scale-105 transition-all w-[140px] sm:w-[160px] h-[46px] sm:h-[52px] shadow-lg group whitespace-nowrap" onClick={handleAppClick}>
                <iconify-icon icon="logos:google-play-icon" className="text-[24px] sm:text-[30px] shrink-0 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
                <div className="flex flex-col items-start justify-center leading-none">
                  <span className="text-[8px] sm:text-[10px] font-medium text-white/80 uppercase tracking-widest mb-0.5 whitespace-nowrap">GET IT ON</span>
                  <span className="text-[14px] sm:text-[17px] font-semibold tracking-tight -mt-0.5 whitespace-nowrap">Google Play</span>
                </div>
              </a>
            </div>
          </div>


          {/* Hero Mockups */}
          <div className="flex absolute lg:relative bottom-0 lg:bottom-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 translate-y-[20%] sm:translate-y-[15%] lg:translate-y-0 h-[380px] sm:h-[500px] lg:h-[650px] w-full lg:w-full justify-center lg:justify-end perspective-[1000px] z-0 lg:z-20 mix-blend-screen lg:mix-blend-normal">
            
            {/* Phone 1 (Back/Secondary) */}
            <div className={`absolute top-[10%] sm:top-[12%] left-1/2 -translate-x-[60%] sm:-translate-x-[65%] lg:left-auto lg:translate-x-0 lg:right-[15%] w-[50vw] max-w-[220px] sm:max-w-[260px] aspect-[1/2.1] z-0 opacity-0 ${mounted ? 'animate-fade-in delay-400' : ''}`}>
              <div className="animate-float-back lg:animate-none w-full h-full pb-0 transform-gpu preserve-3d">
                
                    <div className="absolute left-[-2px] sm:left-[-3px] top-[15%] w-[2px] sm:w-[3px] h-[5%] bg-gradient-to-r from-[#2c2c2c] to-[#4a4a4a] rounded-l-md border-y border-l border-white/10 shadow-[-1px_0_2px_rgba(255,255,255,0.1)] z-[-1]"></div>
                    <div className="absolute left-[-2px] sm:left-[-3px] top-[22%] w-[2px] sm:w-[3px] h-[9%] bg-gradient-to-r from-[#2c2c2c] to-[#4a4a4a] rounded-l-md border-y border-l border-white/10 shadow-[-1px_0_2px_rgba(255,255,255,0.1)] z-[-1]"></div>
                    <div className="absolute left-[-2px] sm:left-[-3px] top-[32%] w-[2px] sm:w-[3px] h-[9%] bg-gradient-to-r from-[#2c2c2c] to-[#4a4a4a] rounded-l-md border-y border-l border-white/10 shadow-[-1px_0_2px_rgba(255,255,255,0.1)] z-[-1]"></div>
                    <div className="absolute right-[-2px] sm:right-[-3px] top-[25%] w-[2px] sm:w-[3px] h-[12%] bg-gradient-to-l from-[#2c2c2c] to-[#4a4a4a] rounded-r-md border-y border-r border-[#111] shadow-[1px_0_2px_rgba(0,0,0,0.5)] z-[-1]"></div>
                    <div className="w-full h-full bg-gradient-to-b from-[#152e0c] to-[#081204] border-[4px] sm:border-[6px] border-x-[#2a2a2a] border-t-[#3b3b3b] border-b-[#111111] rounded-[2.2rem] sm:rounded-[3.2rem] shadow-[-12px_15px_0px_#0a0a0a,-25px_30px_40px_rgba(0,0,0,0.95)] overflow-hidden relative">

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
            <div className={`absolute top-[5%] sm:top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[10%] w-[60vw] max-w-[260px] sm:max-w-[300px] aspect-[1/2.1] z-20 opacity-0 transform-gpu preserve-3d  ${mounted ? 'animate-fade-in delay-500' : ''}`}>
              <div className="animate-float-front lg:animate-none w-full h-full pb-0 relative group overflow-hidden">
                 {/* 3D Depth / Bevel Edge */}
                 
                 {/* Hardware Buttons - Left Side */}
                 <div className="absolute left-[-2px] sm:left-[-4px] top-[14%] w-[2px] sm:w-[4px] h-[5%] bg-gradient-to-r from-[#1c1c1c] to-[#3a3a3a] rounded-l-sm sm:rounded-l-md border-y border-l border-[#444] shadow-[-1px_0_2px_rgba(255,255,255,0.1)] z-[-1]"></div>
                 <div className="absolute left-[-2px] sm:left-[-4px] top-[21%] w-[2px] sm:w-[4px] h-[9%] bg-gradient-to-r from-[#1c1c1c] to-[#3a3a3a] rounded-l-sm sm:rounded-l-md border-y border-l border-[#444] shadow-[-1px_0_2px_rgba(255,255,255,0.1)] z-[-1]"></div>
                 <div className="absolute left-[-2px] sm:left-[-4px] top-[31%] w-[2px] sm:w-[4px] h-[9%] bg-gradient-to-r from-[#1c1c1c] to-[#3a3a3a] rounded-l-sm sm:rounded-l-md border-y border-l border-[#444] shadow-[-1px_0_2px_rgba(255,255,255,0.1)] z-[-1]"></div>
                 {/* Hardware Buttons - Right Side */}
                 <div className="absolute right-[-2px] sm:right-[-4px] top-[24%] w-[2px] sm:w-[4px] h-[12%] bg-gradient-to-l from-[#1c1c1c] to-[#3a3a3a] rounded-r-sm sm:rounded-r-md border-y border-r border-[#111] shadow-[2px_0_4px_rgba(0,0,0,0.8)] z-[-1]"></div>
                 
                 {/* 3D Depth / Bevel Edge (Black polished titanium base) */}
                 {/* <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#111111] to-[#050505] rounded-[2.5rem] sm:rounded-[3.2rem] translate-x-[-12px] translate-y-[15px] sm:translate-x-[-18px] sm:translate-y-[25px] -z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.95)] border border-white/5"></div> */}

                 {/* Main Screen Container */}
                 <div 
                  className="w-full h-full bg-[#f9f6f6] border-[4px] sm:border-[10px] border-x-[#1c1c1c] border-t-[#333333] border-b-[#000000] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden relative"
                  style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                 >
                  {/* Outer Reflection/Glare overlay */}
                  <div className="absolute inset-0 z-50 pointer-events-none rounded-[2.5rem] sm:rounded-[3.2rem] bg-gradient-to-tr from-white/0 via-white/10 to-transparent mix-blend-overlay transition-opacity duration-1000 opacity-70 group-hover:opacity-100 hidden sm:block"></div>
                  <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-b from-white/10 to-transparent -rotate-45 transform origin-top pointer-events-none mix-blend-overlay z-50"></div>
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[20px] sm:h-[24px] bg-[#1a1a1a] rounded-full z-40 flex items-center justify-between px-2">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-800"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0a0a0a] border border-white/10"></div>
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-0 w-full backdrop-blur-md h-10 z-30 flex justify-between items-center px-4 pt-1">
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-800 ml-1">9:41</span>
                    <div className="flex items-center gap-1 z-[40] text-slate-800">
                      <iconify-icon icon="solar:cellular-line-bold" className="text-[10px]"></iconify-icon>
                      <iconify-icon icon="solar:wifi-bold" className="text-[10px]"></iconify-icon>
                      <iconify-icon icon="solar:battery-charge-minimalistic-bold" className="text-[12px]"></iconify-icon>
                    </div>
                  </div>

                  <PhoneMockupUI />
                 </div>
              </div>
             </div>
            </div>
          </div>
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
    </>
  );
};

export default Hero;
