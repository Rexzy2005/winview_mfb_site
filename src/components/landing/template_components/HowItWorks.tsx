"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.hiw-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: '.hiw-header',
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo('.hiw-image',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: '.hiw-image',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Steps animation
      gsap.fromTo('.hiw-step',
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: {
            trigger: '.hiw-steps-container',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="px-4 md:px-8 max-w-[85rem] mx-auto py-20 md:py-32 overflow-hidden">
      <div className="text-center mb-16 md:mb-24 relative z-10 hiw-header">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#72b90d]/10 text-[#2a650a] mb-4">
          <iconify-icon icon="solar:route-linear" className="text-2xl"></iconify-icon>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#000000] mb-4">How it works</h2>
        <p className="text-base md:text-lg text-slate-500 font-light max-w-xl mx-auto">
          Your journey to better banking in three simple, transparent steps.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10 max-w-6xl mx-auto">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end hiw-image">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square md:aspect-auto md:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/how_it_works.png" 
              alt="How it works" 
              className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
            />
            <img 
              src="/how_it_works_mobile.png" 
              alt="How it works" 
              className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Adding a subtle gradient overlay to blend perfectly, if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Steps */}
        <div className="w-full md:w-1/2 hiw-steps-container relative">
          {/* Vertical Connector Line */}
          <div className="absolute left-[1.35rem] md:left-[2.35rem] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#72b90d]/30 to-transparent z-0"></div>
          
          <div className="flex flex-col gap-10 md:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="hiw-step relative flex items-start gap-6 md:gap-8 group">
                
                {/* Step Circle */}
                <div className="w-12 h-12 md:w-20 md:h-20 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg relative z-10 group-hover:-translate-y-1 group-hover:border-[#72b90d] transition-all duration-500">
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
                <div className="pt-2">
                  <h3 className="text-lg md:text-2xl font-medium text-[#000000] mb-2 md:mb-3 tracking-tight group-hover:text-[#2a650a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HowItWorks;
