
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileCarousel from '@/components/landing/template_components/MobileCarousel';
import Footer from '@/components/landing/template_components/Footer';
import Leadership from '@/components/landing/template_components/Leadership';
import '@/components/landing/template_components/template.css';

export default function AboutUsPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whoWeServe = [
    { title: "The Nigeria Police Cooperative", desc: "Trusted banking partner for the Nigeria Police Cooperative, providing tailored savings, loans, and investment products that understand the unique needs of police officers, retirees, and their families.", icon: "solar:shield-check-bold" },
    { title: "Small Businesses & Entrepreneurs", desc: "From roadside traders to small-scale manufacturers, we give entrepreneurs fast access to smart working-capital loans, flexible repayment cycles, and digital-only banking tools.", icon: "solar:shop-bold" },
    { title: "The Everyday Nigerian", desc: "Students, civil servants, market women, and skilled workers all deserve banking that is simple, transparent, and affordable—not confusing or hidden-fee-laden.", icon: "solar:users-group-two-rounded-bold" }
  ];

  const promises = [
    { title: "Simple onboarding", desc: "Open an account in minutes, online or via USSD. No paperwork-heavy processes; leverage BVN and NIN for instant verification." },
    { title: "Human-first experience", desc: "A clean, intuitive website and mobile app that speak plain English, not banking jargon. 24/7 chat support with real agents." },
    { title: "Transparent pricing", desc: "No hidden fees. All charges clearly shown before you confirm." },
    { title: "Community-driven", desc: "Loans and savings built with our customers, not just for them. Feedback-driven product updates released quarterly." }
  ];

  return (
    <main className="min-h-screen bg-[#f9f6f6] selection:bg-[#72b90d] selection:text-white font-sans overflow-x-hidden">
      
      {/* Hero Header */}
      <div className="px-0 sm:px-6 pt-0 sm:pt-4">
        <div className="bg-[#000000] rounded-b-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden pb-16 lg:pb-32 pt-6 px-4 sm:px-6 md:px-12 lg:px-24 z-0">
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="animate-pulse-glow absolute top-[-10%] right-[-5%] w-[60%] sm:w-[40%] h-[50%] bg-[#2a650a] rounded-full blur-[100px] sm:blur-[120px] opacity-30"></div>
            <div className="animate-pulse-glow delay-500 absolute bottom-[-10%] left-[-5%] w-[50%] sm:w-[30%] h-[40%] bg-[#72b90d] rounded-full blur-[80px] sm:blur-[100px] opacity-10"></div>
          </div>

          <nav className={`relative z-50 flex items-center justify-between mb-12 sm:mb-16 md:mb-24 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
            <Link href="/" className="flex items-center gap-2 text-[#f9f6f6] font-medium text-lg tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/brandLogo.png" alt="WinView Logo" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shadow-sm bg-[#72b90d] border border-white/10" />
              <div className="flex items-center">
                Win<span className="text-[#72b90d]">View</span>
              </div>
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-[#72b90d] text-[#000000] px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform duration-300 relative z-50"
              >
                Menu
                <div className={`w-1.5 h-1.5 bg-[#000000] rounded-full transition-transform duration-300 ${menuOpen ? 'scale-150' : ''}`}></div>
              </button>

              <div 
                className={`absolute top-full right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20 origin-top-right transition-all duration-300 ease-out z-40 ${
                  menuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <Link href="/" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-xl text-sm font-medium transition-colors text-slate-800 group">
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                    <iconify-icon icon="solar:home-smile-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                  </div>
                  Home
                </Link>
                <div className="h-px w-full bg-slate-100 my-1"></div>
                <Link href="/#contact" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-xl text-sm font-medium transition-colors text-slate-800 group" onClick={() => setMenuOpen(false)}>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                    <iconify-icon icon="solar:phone-calling-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                  </div>
                  Contact
                </Link>
              </div>
            </div>
          </nav>

          <div className="relative z-20 max-w-4xl mx-auto text-center mt-12 pb-10 sm:pb-0">
            <h1 className={`text-[#f9f6f6] text-[clamp(2.5rem,6vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-6 opacity-0 ${mounted ? 'animate-fade-up delay-100' : ''}`}>
              Banking Built <span className="text-[#72b90d]">Around You.</span>
            </h1>
            <p className={`text-slate-300 text-[clamp(1rem,1.8vw,1.25rem)] font-light leading-relaxed max-w-2xl mx-auto mb-8 opacity-0 ${mounted ? 'animate-fade-up delay-200' : ''}`}>
              At WinView Microfinance Bank, we’re not just another bank. We’re reimagining how Nigerians save, borrow, and grow their money, starting with how we treat our customers.
            </p>
            
            {/* Trust Badges */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 ${mounted ? 'animate-fade-up delay-[250ms]' : ''}`}>
              <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-xl px-3 py-1.5 sm:px-4 sm:py-2.5 shadow-sm border border-white/10">
                {/* CBN License */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-white/80 text-[10px] sm:text-[13px] font-medium whitespace-nowrap">Fully licensed by CBN</span>
                  <img src="/cbn_logo.png" alt="CBN Logo" className="h-4 sm:h-6 w-auto object-contain drop-shadow-sm filter brightness-0 invert" />
                </div>
                
                {/* Divider */}
                <div className="h-4 sm:h-5 w-[1px] bg-white/20 mx-2.5 sm:mx-4"></div>
                
                {/* NDIC License */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-white/80 text-[10px] sm:text-[13px] font-medium whitespace-nowrap">Deposits Insured by</span>
                  <img src="/ndic_logo.png" alt="NDIC Logo" className="h-3 sm:h-4 w-auto object-contain rounded-sm mix-blend-screen bg-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className={`opacity-0 ${mounted ? 'animate-fade-up delay-300' : ''}`}>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                Our <span className="text-[#2a650a]">Mission</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To revolutionize the Nigerian banking sector with a customer-centred, efficient, and digital-first microfinance model that serves the Nigeria Police Cooperative and the wider public with speed, safety, and trust.
              </p>
              <div className="bg-[#2a650a]/5 border-l-4 border-[#72b90d] p-6 rounded-r-2xl">
                <p className="text-xl text-[#2a650a] font-medium italic">
                  "Where others see transactions, we see people. Where others see risk, we see opportunity."
                </p>
              </div>
            </div>
            
            <div className={`relative opacity-0 ${mounted ? 'animate-fade-in delay-500' : ''} group`}>
              {/* Premium Glow Underlay */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#2a650a] to-[#72b90d] rounded-[2.5rem] md:rounded-[3.5rem] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
              
              {/* High-End Card Container */}
              <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#131413] relative flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-700">
                
                {/* Diagonal Glass Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10 pointer-events-none"></div>
                
                {/* Logo Fill */}
                <img src="/brand.png" alt="WinView Brand Mission Logo" className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03] scale-[1.01]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-32 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
              Who We <span className="text-[#2a650a]">Serve</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From cooperative members to everyday hardworking Nigerians, our doors and digital channels are open to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whoWeServe.map((item, idx) => (
              <div key={idx} className="bg-[#f9f6f6] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group">
                <div className="w-14 h-14 bg-[#2a650a]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#72b90d] transition-colors duration-300">
                  <iconify-icon icon={item.icon} className="text-3xl text-[#2a650a] group-hover:text-white transition-colors"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer-Centred Promise */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#000000] text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#2a650a]/20 to-transparent blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#72b90d]/10 to-transparent blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Our Customer-Centred <span className="text-[#72b90d]">Promise</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We don’t just say “customer-centred”—we design our entire banking infrastructure around these four non-negotiable principles.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#72b90d] text-black px-6 py-3 rounded-full font-medium hover:bg-white transition-colors duration-300">
                Open an Account
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </Link>
            </div>
            
                        <div className="block sm:hidden w-full relative z-10 overflow-hidden -mx-4 w-[calc(100%+2rem)]">
              <MobileCarousel>
                {promises.map((promise, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col justify-center">
                    <div className="text-[#72b90d] font-bold text-3xl mb-5 opacity-50">0{idx + 1}</div>
                    <h3 className="text-xl font-medium text-white mb-4">{promise.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed">
                      {promise.desc}
                    </p>
                  </div>
                ))}
              </MobileCarousel>
            </div>
            
            <div className="hidden sm:grid sm:grid-cols-2 gap-6 relative z-10">
              {promises.map((promise, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-[#72b90d] font-bold text-2xl mb-3 opacity-50">0{idx + 1}</div>
                  <h3 className="text-xl font-medium text-white mb-3">{promise.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {promise.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Leadership />

      {/* Headquarters Location */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#f9f6f6]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#72b90d]/10 text-[#2a650a] rounded-full mb-6">
            <iconify-icon icon="solar:map-point-linear" className="text-3xl"></iconify-icon>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#000000] mb-4">
            Visit Our Headquarters
          </h2>
          <p className="text-lg text-slate-500 font-light mb-8 max-w-2xl mx-auto">
             Whether you want to discuss a large co-operative transition, have questions about your account, or just prefer to chat in person, our doors are always open.
          </p>
          <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm inline-block text-left w-full max-w-lg">
            <h4 className="text-[#000000] font-medium text-xl mb-1">WinView Microfinance Bank</h4>
            <p className="text-slate-500 font-light leading-relaxed">
              Plot 102A Collins Aimuan Road,<br/>
              Kuje, Abuja, FCT.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
