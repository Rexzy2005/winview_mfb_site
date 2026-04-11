"use client";
import React from "react";
import Reveal from "./Reveal";
import MobileCarousel from "./MobileCarousel";
import { motion } from "framer-motion";

const Products = () => {
  const cards = [
    // Card 1
    <motion.div 
      key="card1" 
      whileHover={{ y: -8 }}
      className="bg-[#0e160a] border border-[#72b90d]/30 backdrop-blur-md rounded-[2.5rem] p-8 h-full flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] group hover:border-[#72b90d]/50"
    >
      <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#72b90d]/20 to-transparent rounded-bl-full opacity-60"></div>
      <div className="relative z-10 mb-12">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }} 
          className="w-14 h-14 bg-[#1d2d16] rounded-2xl flex items-center justify-center mb-6 text-[#72b90d] border border-white/5 group-hover:bg-[#72b90d] group-hover:text-[#000000] transition-colors duration-500"
        >
          <iconify-icon icon="solar:safe-circle-bold-duotone" className="text-3xl"></iconify-icon>
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f9f6f6] mb-4">Efficient Savings</h3>
        <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base pr-4">
          Target savings, kids' accounts, and emergency funds with automated round-up features and highly competitive interest rates.
        </p>
      </div>
      {/* UI Element */}
      <div className="relative z-10 bg-[#0a0f07] border border-white/5 rounded-2xl p-5 mt-auto shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 bg-[#72b90d] rounded-full shadow-[0_0_10px_#72b90d]"
            ></motion.div>
            <span className="text-white text-sm font-medium">New Home Fund</span>
          </div>
          <span className="text-white text-sm font-bold">75%</span>
        </div>
        <div className="w-full bg-[#1d2d16] rounded-full h-2 mb-3 overflow-hidden flex">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '75%' }}
            transition={{ duration: 1.5, type: "spring", bounce: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            className="bg-[#72b90d] h-2 rounded-full"
          ></motion.div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500 text-xs font-medium tracking-wide">₦7,500,000 saved</span>
          <span className="text-slate-500 text-xs font-medium tracking-wide">Goal: ₦10M</span>
        </div>
      </div>
    </motion.div>,

    // Card 2
    <motion.div 
      key="card2" 
      whileHover={{ y: -8 }}
      className="bg-[#152010] border border-[#72b90d]/20 backdrop-blur-md rounded-[2.5rem] p-8 h-full flex flex-col justify-between relative overflow-hidden group hover:border-[#72b90d]/40"
    >
      <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#72b90d]/10 to-transparent rounded-bl-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10 mb-12">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: -5 }} 
          className="w-14 h-14 bg-[#1d2d16] rounded-2xl flex items-center justify-center mb-6 text-[#72b90d] border border-white/5 group-hover:bg-[#72b90d] group-hover:text-[#000000] transition-colors duration-500"
        >
          <iconify-icon icon="solar:hand-money-bold-duotone" className="text-3xl"></iconify-icon>
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f9f6f6] mb-4">Responsible Lending</h3>
        <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
          Quick-approval loans for traders and artisans backed by alternative soft-credit assessments.
        </p>
      </div>
      {/* UI Element */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring" }}
        className="relative z-10 bg-[#1d2d16]/30 border border-[#72b90d]/20 rounded-2xl p-5 mt-auto flex justify-between items-center group-hover:border-[#72b90d]/50 transition-colors"
      >
        <div>
          <p className="text-[#72b90d] text-xs font-semibold mb-1">Pre-approved Limit</p>
          <p className="text-white text-2xl font-bold">₦250,000</p>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#72b90d] flex items-center justify-center text-[#0e160a]">
          <iconify-icon icon="solar:check-circle-bold" className="text-lg"></iconify-icon>
        </div>
      </motion.div>
    </motion.div>,

    // Card 3
    <motion.div 
      key="card3" 
      whileHover={{ y: -8 }}
      className="bg-[#152010] border border-[#72b90d]/20 backdrop-blur-md rounded-[2.5rem] p-8 h-full flex flex-col justify-between relative overflow-hidden group hover:border-[#72b90d]/40"
    >
      <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#72b90d]/10 to-transparent rounded-bl-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10 mb-12">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }} 
          className="w-14 h-14 bg-[#1d2d16] rounded-2xl flex items-center justify-center mb-6 text-[#72b90d] border border-white/5 group-hover:bg-[#72b90d] group-hover:text-[#000000] transition-colors duration-500"
        >
          <iconify-icon icon="solar:wallet-2-bold-duotone" className="text-3xl"></iconify-icon>
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f9f6f6] mb-4">Digital Wallets</h3>
        <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
          Instant transfers, QR-based payments, and seamless in-app bill collections.
        </p>
      </div>
      {/* UI Element */}
      <div className="relative z-10 mt-auto flex gap-3">
        {[
          { icon: 'solar:minus-circle-line-duotone', label: 'MTN' },
          { icon: 'solar:tv-bold-duotone', label: 'DSTV' },
          { icon: 'solar:lightbulb-bolt-bold-duotone', label: 'EKEDC' }
        ].map((item, idx) => (
          <motion.div 
            whileHover={{ y: -4, scale: 1.05 }}
            key={idx} 
            className="flex-1 bg-[#0a0f07] border border-white/5 rounded-2xl py-4 px-2 flex flex-col items-center justify-center gap-2 hover:bg-[#1d2d16] transition-colors cursor-pointer group/pill"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
              <iconify-icon icon={item.icon} className="text-sm text-slate-400 group-hover/pill:text-[#f9f6f6] transition-colors"></iconify-icon>
            </div>
            <span className="text-slate-500 text-[9px] font-bold tracking-wider">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>,

    // Card 4
    <motion.div 
      key="card4" 
      whileHover={{ y: -8 }}
      className="bg-[#0e160a] border border-[#72b90d]/30 backdrop-blur-md rounded-[2.5rem] p-8 h-full flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] md:col-span-1 lg:col-span-2 group hover:border-[#72b90d]/50"
    >
      <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-[#72b90d]/20 to-transparent rounded-bl-full opacity-60"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full h-full justify-between gap-8">
        <div className="flex-1 w-full lg:w-1/2 mb-8 lg:mb-0">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -5 }} 
            className="w-14 h-14 bg-[#72b90d] rounded-2xl flex items-center justify-center mb-6 text-[#000000] border border-[#72b90d]/50 shadow-[0_0_20px_rgba(114,185,13,0.3)] transition-colors duration-500"
          >
            <iconify-icon icon="solar:chart-square-bold-duotone" className="text-3xl"></iconify-icon>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f9f6f6] mb-4">Investments & Pools</h3>
          <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base pr-0 md:pr-4">
            Access cooperative pools, low-entry fixed-income products, and group savings plans designed for predictable growth.
          </p>
        </div>

        {/* UI Element */}
        <div className="relative w-full lg:w-[45%] z-10 bg-[#0a0f07] border border-white/5 rounded-3xl p-6 flex flex-col justify-end overflow-hidden group/chart">
          <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">PORTFOLIO YIELD</p>
          <p className="text-[#72b90d] text-2xl font-bold mb-8">+14.5% APY</p>
          <div className="flex items-end gap-2 h-20 w-full relative">
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/5"></div>
            {[30, 45, 35, 60, 50, 75, 40, 90, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full cursor-pointer relative z-10">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: height + "%" }}
                  viewport={{ once: false, margin: '-50px' }}
                  transition={{ duration: 1, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                  whileHover={{ backgroundColor: "#72b90d", boxShadow: "0 0 10px #72b90d" }}
                  className="w-full bg-white/10 rounded-t-[4px] relative" 
                ></motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  ];

  return (
    <div className="bg-[#050a02] py-16 md:py-24 rounded-none rounded-b-[2.5rem] md:rounded-[3.5rem] mx-0 md:mx-6 px-0 md:px-12 relative overflow-hidden mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b border-[#72b90d]/10">
      {/* Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[80%] md:w-[60%] h-[60%] bg-[#72b90d]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="text-center mb-6 md:mb-16 relative z-10 px-6">
        <Reveal>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#72b90d]/10 border border-[#72b90d]/30 rounded-full text-[#72b90d] text-xs font-semibold tracking-widest uppercase mb-6 cursor-pointer"
          >
            <iconify-icon icon="solar:star-fall-bold"></iconify-icon>
            Digital Ecosystem
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#f9f6f6] mb-6">Core Products & Services</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base md:text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            A complete suite of financial tools. From everyday Nigerians to growing enterprises, we have solutions crafted for your goals.
          </p>
        </Reveal>
      </div>

      {/* Renders Swipe Carousel on Mobile, standard CSS Grid on Desktop */}
      <div className="relative z-10 block md:hidden w-full overflow-hidden">
         <MobileCarousel>{cards}</MobileCarousel>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 max-w-7xl mx-auto">
        <Reveal className="md:col-span-12 lg:col-span-7" delay={150}>
          {cards[0]}
        </Reveal>
        <Reveal className="md:col-span-6 lg:col-span-5" delay={250}>
          {cards[1]}
        </Reveal>
        <Reveal className="md:col-span-6 lg:col-span-5" delay={350}>
          {cards[2]}
        </Reveal>
        <Reveal className="md:col-span-12 lg:col-span-7" delay={450}>
          {cards[3]}
        </Reveal>
      </div>
    </div>
  );
};

export default Products;
