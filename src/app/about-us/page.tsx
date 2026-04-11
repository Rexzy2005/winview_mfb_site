"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/landing/template_components/Footer';
import Stats from '@/components/landing/template_components/Stats';
import '@/components/landing/template_components/template.css';

export default function AboutUsPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const values = [
    { icon: "solar:shield-check-linear", title: "Uncompromising Security", desc: "Enterprise-grade encryption and stringent compliance baked into every layer." },
    { icon: "solar:bolt-linear", title: "Relentless Innovation", desc: "We continually build bypasses around bloated legacy systems to deliver sheer performance." },
    { icon: "solar:users-group-rounded-linear", title: "Radical Inclusion", desc: "No Nigerian gets left behind. Our technology scales down to the most remote users." },
  ];

  return (
    <main className="min-h-screen bg-[#f9f6f6] selection:bg-[#72b90d] selection:text-white font-sans overflow-x-hidden">
      
      {/* Hero Section matching the exact Landing Page style */}
      <div className="px-4 md:px-6 pt-4 mb-16">
        <div className="bg-[#000000] rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden pb-24 lg:pb-32 pt-6 px-4 sm:px-6 md:px-12 lg:px-24">
          
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="animate-pulse-glow absolute top-[-10%] right-[-5%] w-[60%] sm:w-[40%] h-[50%] bg-[#2a650a] rounded-full blur-[100px] sm:blur-[120px] opacity-30"></div>
            <div className="animate-pulse-glow delay-500 absolute bottom-[-10%] left-[-5%] w-[50%] sm:w-[30%] h-[40%] bg-[#72b90d] rounded-full blur-[80px] sm:blur-[100px] opacity-10"></div>
          </div>

          {/* Navbar */}
          <nav className={`relative z-50 flex items-center justify-between mb-12 sm:mb-16 md:mb-24 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
            <Link href="/" className="flex items-center gap-2 text-[#f9f6f6] font-medium text-lg tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/brandLogo.png" alt="WinView Logo" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shadow-sm bg-[#72b90d] border border-white/10" />
              <div className="flex items-center gap-1">
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
                    <iconify-icon icon="solar:home-2-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                  </div>
                  Home
                </Link>
                <div className="h-px w-full bg-slate-100 my-1"></div>
                <Link href="/about-us" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-xl text-sm font-medium transition-colors text-slate-800 group">
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                    <iconify-icon icon="solar:info-circle-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                  </div>
                  About Us
                </Link>
                <div className="h-px w-full bg-slate-100 my-1"></div>
                <Link href="/faq" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-xl text-sm font-medium transition-colors text-slate-800 group">
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                    <iconify-icon icon="solar:question-circle-linear" className="text-lg text-[#2a650a]"></iconify-icon>
                  </div>
                  FAQ
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className={`inline-block border border-[#72b90d]/30 bg-[#72b90d]/10 px-4 py-1.5 rounded-full text-[#72b90d] text-xs font-semibold tracking-widest uppercase mb-8 opacity-0 ${mounted ? 'animate-fade-up delay-100' : ''}`}>
              Our Blueprint
            </div>
            <h1 className={`text-[#f9f6f6] text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 opacity-0 ${mounted ? 'animate-fade-up delay-200' : ''}`}>
              Building trust.<br />
              <span className="text-[#72b90d]">Engineering the future.</span>
            </h1>
            <p className={`text-slate-300 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-2xl mx-auto opacity-0 ${mounted ? 'animate-fade-up delay-300' : ''}`}>
              We architect financial systems that empower millions of Nigerians—rooted in stringent compliance, elite hardware, and unshakeable software security.
            </p>
          </div>
        </div>
      </div>

      {/* Regulators / Trust Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 opacity-0 ${mounted ? 'animate-fade-up delay-400' : ''}`}>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#000000]/40 uppercase">Regulated By</span>
            <img src="/cbn_logo.png" alt="Central Bank of Nigeria" className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
          <div className="w-px h-12 bg-black/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#000000]/40 uppercase">Insured By</span>
            <img src="/ndic.png" alt="NDIC Insured" className="h-8 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* Our Roots / History */}
      <div className="px-4 md:px-6 mb-24">
        <div className={`bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-black/5 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.05)] p-6 sm:p-12 lg:p-20 opacity-0 ${mounted ? 'animate-fade-up delay-500' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden group">
              <img 
                src="/police_cooperative_card_1775791407359.png" 
                alt="WinView Police Cooperative Origin" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/20 to-transparent"></div>
              
              {/* Badge Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#72b90d] flex items-center justify-center text-[#000000]">
                    <iconify-icon icon="solar:shield-check-bold" className="text-xl"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Industrial Grade</h3>
                    <p className="text-white/60 text-xs">Developed for High-Stakes Sectors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#000000] mb-8 leading-tight">
                From specialized roots <br /> to <span className="text-[#72b90d]">universal scale.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                <p>
                  WinView began by constructing a bespoke, fail-safe financial service layer for the Nigeria Police Cooperative. This foundational environment meant we engineered an architecture handling high-density transactions where utter reliability was never optional.
                </p>
                <p>
                  We recognized the persistent friction regular Nigerians faced, and we knew our infrastructure could solve it. Today, the exact same institutional security and hardware-integrated processing capabilities govern every single individual and business account on the platform.
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#2a650a]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-2xl"></iconify-icon>
                </div>
                <div className="text-sm font-medium text-[#000000] uppercase tracking-wider">
                  Proven Ecosystem
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className={`text-center mb-16 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#000000] mb-6">Fundamental Precepts</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">We operate under a strict framework designed to maximize stability and push performance boundaries.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-8 border border-black/5 hover:-translate-y-2 transition-transform duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(114,185,13,0.15)] group h-full relative overflow-hidden opacity-0 ${mounted ? `animate-fade-up delay-${(idx + 1) * 100}` : ''}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#72b90d]/5 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-14 h-14 bg-[#f9f6f6] border border-black/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#72b90d] transition-colors text-[#2a650a] group-hover:text-[#000000]">
                <iconify-icon icon={val.icon} className="text-3xl"></iconify-icon>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-[#000000] mb-3">{val.title}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware / POS Section */}
      <div className="px-4 md:px-6 mb-24">
        <div className={`bg-[#000000] rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden p-6 sm:p-12 lg:p-20 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
          
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="animate-pulse-glow absolute bottom-[-10%] right-[-5%] w-[60%] sm:w-[40%] h-[50%] bg-[#72b90d] rounded-full blur-[100px] opacity-20"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                Software is only half <br /> <span className="text-[#72b90d]">the equation.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed mb-10">
                <p>
                  We pair our cloud computing infrastructure with incredibly robust physical hardware. WinView&apos;s Point of Sale (POS) environments secure thousands of merchants daily.
                </p>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Industrial-grade physical security chips",
                  "Instant settlement pipelines",
                  "Deep-linked cooperative accounts integration"
                ].map((perk, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#72b90d]/20 border border-[#72b90d]/30 flex items-center justify-center text-[#72b90d]">
                      <iconify-icon icon="solar:check-read-linear" className="text-lg"></iconify-icon>
                    </div>
                    <span className="text-white/80 font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden group border border-white/10 bg-white/5">
              <img 
                src="/1.png" 
                alt="WinView POS Device" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] mix-blend-lighten"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className={`bg-white rounded-[2.5rem] shadow-sm border border-black/5 p-8 md:p-12 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
          <Stats />
        </div>
      </div>

      <Footer />
    </main>
  );
}
