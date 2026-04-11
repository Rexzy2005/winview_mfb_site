"use client";

import React from 'react';
import Reveal from './Reveal';

const steps = [
  {
    num: 1,
    icon: 'solar:user-id-linear',
    title: 'Sign up in minutes',
    desc: 'Open an account online or via the app. Only your BVN or NIN is required. No long branch queues.'
  },
  {
    num: 2,
    icon: 'solar:wallet-money-linear',
    title: 'Fund your account',
    desc: 'Instantly transfer from other banks, deposit cash at partner agents, or link your salary account.'
  },
  {
    num: 3,
    icon: 'solar:rocket-linear',
    title: 'Start growing',
    desc: 'Save for your future, borrow safely for your business, or invest intelligently in cooperative pools.'
  }
];

const HowItWorks = () => {
  return (
    <div className="px-4 md:px-8 max-w-[85rem] mx-auto mb-20 md:mb-32 overflow-hidden">
      <div className="text-center mb-16 md:mb-24 relative z-10">
        <Reveal>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#72b90d]/10 text-[#2a650a] mb-4">
            <iconify-icon icon="solar:route-linear" className="text-2xl"></iconify-icon>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#000000] mb-4">How it works</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base md:text-lg text-slate-500 font-light max-w-xl mx-auto">
            Your journey to better banking in three simple, transparent steps.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pl-4 md:pl-0">
        
        {/* Connector Line (Horizontal on Desktop) */}
        <div className="absolute hidden md:block top-[2.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#72b90d]/30 to-transparent"></div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-6 relative">
          
          {/* Connector Line (Vertical on Mobile) */}
          <div className="absolute md:hidden left-[1.35rem] top-[4rem] bottom-0 w-[2px] bg-gradient-to-b from-[#72b90d]/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 200} className="flex-1">
              <div className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 group">
                
                {/* Step Circle */}
                <div className="w-12 h-12 md:w-20 md:h-20 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg relative z-10 md:mb-8 group-hover:-translate-y-2 group-hover:border-[#72b90d] transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-[#72b90d] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out opacity-10"></div>
                  
                  {/* Default State (Number) */}
                  <span className="text-xl md:text-2xl font-semibold text-[#2a650a] group-hover:opacity-0 transition-opacity absolute">
                    {step.num}
                  </span>
                  
                  {/* Hover State (Icon) */}
                  <iconify-icon 
                    icon={step.icon} 
                    className="text-2xl md:text-3xl text-[#2a650a] opacity-0 group-hover:opacity-100 transition-opacity absolute"
                  ></iconify-icon>
                </div>

                {/* Content Area */}
                <div className="pt-2 md:pt-0 md:text-center pb-8 md:pb-0 relative">
                  <h3 className="text-lg md:text-xl font-medium text-[#000000] mb-2 md:mb-3 tracking-tight group-hover:text-[#2a650a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed md:px-4">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;