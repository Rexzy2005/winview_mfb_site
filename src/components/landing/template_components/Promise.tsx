"use client";

import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import MobileCarousel from './MobileCarousel';

const promises = [
  {
    icon: 'solar:user-id-linear',
    title: 'Simple onboarding',
    desc: 'Open an account in minutes, online or via USSD. No heavy paperwork.'
  },
  {
    icon: 'solar:chat-round-line-linear',
    title: 'Human-first design',
    desc: 'A clean, intuitive app that speaks plain English, not banking jargon.'
  },
  {
    icon: 'solar:tag-price-linear',
    title: 'Transparent pricing',
    desc: 'No hidden fees. All charges are clearly shown before you confirm.'
  },
  {
    icon: 'solar:users-group-two-rounded-linear',
    title: 'Community-driven',
    desc: 'Loans and savings built with our customers, not just for them.'
  }
];

const PromiseSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-6 md:mb-16">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#000000] mb-4">Our Customer-Centred Promise</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base md:text-lg text-slate-500 font-light max-w-2xl mx-auto">We don't just say "customer-centred" we design our bank around these four core principles.</p>
        </Reveal>
      </div>

      {/* Mobile Swipe Carousel */}
      <div className="relative z-10 block md:hidden w-full overflow-hidden">
        <MobileCarousel>
          {promises.map((item, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] p-8 border border-slate-200/60 flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#72b90d] opacity-50"></div>
              <div className="w-20 h-20 bg-[#f9f6f6] rounded-3xl flex items-center justify-center mb-8 border border-slate-100/50">
                <iconify-icon icon={item.icon} className="text-4xl text-[#2a650a]"></iconify-icon>
              </div>
              <h3 className="text-3xl font-medium tracking-tight text-[#000000] mb-4">{item.title}</h3>
              <p className="text-base text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </MobileCarousel>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {promises.map((item, index) => (
          <Reveal key={index} delay={index * 150}>
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm flex flex-col hover:-translate-y-2 transition-all duration-300 group h-full">
              <div className="w-14 h-14 bg-[#f9f6f6] rounded-2xl flex items-center justify-center mb-6">
                <iconify-icon icon={item.icon} className="text-2xl text-[#2a650a]"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-[#000000] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default PromiseSection;
