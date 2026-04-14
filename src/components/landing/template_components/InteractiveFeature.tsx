"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Reveal from './Reveal';

const InteractiveFeature = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax effects for images
  const y1 = useTransform(smoothProgress, [0, 1], [100, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [-50, 150]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotate = useTransform(smoothProgress, [0, 1], [-5, 5]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#f9f6f6] to-[#ebf5df]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#72b90d]/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a650a]/10 border border-[#2a650a]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#72b90d] animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2a650a]">Built for you</span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Banking that <br />
                <span className="text-[#2a650a] relative">
                  feels human.
                  <motion.svg className="absolute -bottom-2 left-0 w-full h-3 text-[#72b90d]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <motion.path 
                      d="M0 5 Q 50 10 100 5" 
                      fill="transparent" 
                      stroke="currentColor" 
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </motion.svg>
                </span>
              </h2>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                WinView isn't just an app; it's a financial companion. We blend cutting-edge technology with real human empathy to ensure your wealth grows securely and intuitively.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-6">
                <button className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#72b90d] to-[#2a650a] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Experience it Now
                    <iconify-icon icon="solar:arrow-right-line-duotone" className="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
                  </span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Interactive Image Collage */}
          <div className="relative h-[600px] w-full mt-10 lg:mt-0">
            {/* Primary Interactive Woman */}
            <motion.div 
              style={{ y: y1, scale }}
              className="absolute right-0 top-0 w-3/4 h-[90%] z-20 drop-shadow-2xl"
            >
              <div className="relative w-full h-full group">
                <img src="/winpic1.png" alt="Interactive UI Interaction" className="object-contain w-full h-full object-bottom" />
                
                {/* Floating "Touch" UI Element syncing with her finger */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-[20%] left-[10%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-3 animate-bounce-slow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#72b90d]/20 flex items-center justify-center text-[#2a650a]">
                    <iconify-icon icon="solar:wallet-money-bold-duotone" className="text-2xl"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Balance</p>
                    <p className="text-lg font-bold text-slate-900">₦2,450,000</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Secondary Smiling Woman Layered Behind */}
            <motion.div 
              style={{ y: y2, rotate }}
              className="absolute left-0 bottom-0 w-[55%] h-[70%] z-10 opacity-90 drop-shadow-xl"
            >
               <img src="/winpic4.png" alt="Happy Customer" className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl border-4 border-white shadow-xl" />
            </motion.div>

            {/* Floating Trust Badge */}
             <motion.div 
                style={{ y: y1 }}
                className="absolute -left-5 top-1/3 bg-[#2a650a] text-white p-5 rounded-2xl shadow-xl z-30 flex flex-col gap-1 w-[160px]"
              >
                <iconify-icon icon="solar:shield-check-bold" className="text-3xl text-[#72b90d] mb-2"></iconify-icon>
                <span className="text-2xl font-bold">100%</span>
                <span className="text-xs text-white/80 leading-tight">Secure & Backed by NDIC</span>
              </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeature;
