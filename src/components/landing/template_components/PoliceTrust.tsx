"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const PoliceTrust = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#f9f6f6] border-y border-slate-200/50">
      {/* Background Grid Pattern for Tech/Infrastructure Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#2a650a]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#72b90d]/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content / Typography */}
          <div className="text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#72b90d]/10 border border-[#72b90d]/20 text-[#2a650a] text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8 shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#72b90d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#72b90d]"></span>
                </span>
                Official Finance Partner
              </div>
            </Reveal>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#000000] mb-4 sm:mb-6 leading-[1.1] md:leading-[1.1]">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                Trusted by the 
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a650a] to-[#72b90d] relative inline-block mt-1 sm:mt-2 pb-1"
              >
                Nigeria Police Force
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#72b90d]/50 to-transparent origin-left"
                ></motion.div>
              </motion.span>
            </h2>

            <Reveal delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We exclusively power the financial infrastructure of the Nigeria Police Cooperative, delivering secure, rapid, and highly tailored banking solutions to thousands of officers nationwide.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-row justify-center lg:justify-start gap-8 md:gap-12 border-t border-slate-200 pt-8 mt-2">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#000000] font-medium mb-1 tracking-tight">100%</div>
                  <div className="text-[10px] sm:text-xs text-[#2a650a] uppercase tracking-wider font-semibold">Encrypted & Secure</div>
                </div>
                <div className="w-[1px] h-10 sm:h-12 bg-slate-200 block"></div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#000000] font-medium mb-1 tracking-tight">24/7</div>
                  <div className="text-[10px] sm:text-xs text-[#2a650a] uppercase tracking-wider font-semibold">Priority Support</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Animation / Visual Hero */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[550px] w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square flex items-center justify-center">
              
              {/* Surrounding Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-slate-200 border-l-[#72b90d]/40 animate-[spin_25s_linear_infinite]"></div>
              <div className="absolute inset-[15%] rounded-full border border-[#72b90d]/10 border-t-[#72b90d]/60 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-[30%] rounded-full border border-dashed border-slate-300 animate-[spin_35s_linear_infinite]"></div>
              
              {/* Central Glow Spot */}
              <div className="absolute inset-[25%] bg-gradient-to-tr from-[#72b90d]/20 to-[#2a650a]/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>

              {/* Shield / Logo Core Container */}
              <div className="relative z-10 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center group overflow-hidden transition-transform duration-700 hover:scale-[1.03]">
                
                {/* Glass Glare Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <img 
                  src="/plice_logo.png" 
                  alt="Nigeria Police Force Logo" 
                  className="w-[60%] h-[60%] object-contain drop-shadow-sm relative z-20 group-hover:scale-105 group-hover:drop-shadow-[0_10px_15px_rgba(114,185,13,0.2)] transition-all duration-700"
                />
                
                {/* Subtle inner ring sweep */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-slate-50 group-hover:border-[#72b90d]/20 transition-colors duration-500"></div>
              </div>

              {/* Floating Satellite Nodes */}
              <div className="absolute top-[10%] right-[20%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#72b90d] shadow-[0_0_10px_#72b90d] animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3s' }}></div>
              <div className="absolute bottom-[20%] left-[10%] w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#2a650a] shadow-[0_0_8px_#2a650a] animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '4s' }}></div>
              <div className="absolute top-[40%] left-[5%] w-1 h-1 rounded-full bg-[#72b90d] animate-pulse"></div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PoliceTrust;
