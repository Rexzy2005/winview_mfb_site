"use client";

import React, { useState, useEffect, useRef } from 'react';
import MobileCarousel from './MobileCarousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Image Animation (Left Side)
      gsap.fromTo('.contact-hero-image', 
        { scale: 1.2, opacity: 0, filter: 'blur(10px)' },
        { 
          scale: 1, 
          opacity: 1, 
          filter: 'blur(0px)',
          duration: 1.8, 
          ease: 'power3.out',
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: '.contact-image-container',
            start: 'top 80%',
          }
        }
      );

      // 2. Floating Badges Animation
      gsap.fromTo('.contact-badge-1', 
        { x: -50, opacity: 0, rotate: -5 },
        { 
          x: 0, opacity: 1, rotate: 0,
          duration: 1, 
          ease: 'back.out(1.5)',
          delay: 0.6,
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: '.contact-image-container',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.contact-badge-2', 
        { x: 50, opacity: 0, rotate: 5 },
        { 
          x: 0, opacity: 1, rotate: 0,
          duration: 1, 
          ease: 'back.out(1.5)',
          delay: 0.8,
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: '.contact-image-container',
            start: 'top 80%',
          }
        }
      );

      // Continuous subtle float for badges
      gsap.to('.contact-badge-1', {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.6
      });
      gsap.to('.contact-badge-2', {
        y: 10,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.8
      });

      // 3. Text Content (Right Side Header)
      const tlText = gsap.timeline({
        scrollTrigger: {
            toggleActions: "play none none reverse",
          trigger: '.contact-text-container',
          start: 'top 85%',
        }
      });

      tlText.fromTo('.contact-pill',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo('.contact-heading span',
        { y: 50, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: 'back.out(1.2)', stagger: 0.1 },
        '-=0.4'
      )
      .fromTo('.contact-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.6'
      );

      // 4. Form Fields Stagger Reveal
      gsap.fromTo('.contact-form-item',
        { y: 30, opacity: 0, scale: 0.98 },
        { 
          y: 0, opacity: 1, scale: 1, 
          duration: 0.7, 
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: '.contact-form-container',
            start: 'top 85%',
          }
        }
      );

      // 5. Social Links
      gsap.fromTo('.contact-social',
        { scale: 0, opacity: 0, rotate: -90 },
        { 
          scale: 1, opacity: 1, rotate: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'back.out(2)',
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: '.contact-social-container',
            start: 'top 90%',
          }
        }
      );

      // 6. Bottom Cards Stagger Reveal
      gsap.fromTo('.contact-method-card',
        { y: 60, opacity: 0, filter: 'blur(5px)' },
        { 
          y: 0, opacity: 1, filter: 'blur(0px)',
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: '.contact-methods-container',
            start: 'top 85%',
          }
        }
      );

    }, containerRef);

    // Cleanup to prevent React memory leaks or NextJS routing issues
    return () => ctx.revert();
  }, [mounted, submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section ref={containerRef} id="contact" className="w-full bg-[#f9f6f6] font-sans selection:bg-[#72b90d] selection:text-[#000000] py-16 lg:py-24 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#72b90d]/5 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Main Contact Section: Two Columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between mb-24">
          
          {/* Left Column: Professional Illustration */}
          <div className="contact-image-container w-full lg:w-[45%] xl:w-[50%]">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/4.5] xl:aspect-[4/4] rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-[#112a06] via-[#1c440a] to-[#0a1803] overflow-visible shadow-[0_30px_60px_-15px_rgba(28,68,10,0.5)] flex items-end justify-center border border-white/10 group">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay rounded-[2rem] lg:rounded-[3rem] pointer-events-none overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              
              {/* Ambient Glow behind the subject */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#72b90d]/30 blur-[80px] rounded-full pointer-events-none"></div>

              {/* The Real Subject (Customer Service Image with Background) */}
              <div className="absolute inset-0 w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                {mounted && (
                  <img 
                    src="/cutomer_service.jpeg" 
                    alt="WinView Contact Specialist"
                    className="contact-hero-image absolute inset-0 w-full h-full object-cover object-center"
                  />
                )}
              </div>

              {/* Floating Interactive Badge 1: Response Time */}
              {mounted && (
                <div className="contact-badge-1 absolute top-[15%] right-[-10%] sm:right-[-5%] lg:right-[-12%] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20 w-[200px] opacity-0">
                  <div className="w-10 h-10 rounded-full bg-[#72b90d] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(114,185,13,0.5)]">
                    <iconify-icon icon="solar:clock-circle-bold" className="text-xl text-[#000000]"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold tracking-tight">Fast Response</p>
                    <p className="text-white/70 text-xs">Replies in &lt; 5 mins</p>
                  </div>
                </div>
              )}

              {/* Floating Interactive Badge 2: Expert Team */}
              {mounted && (
                <div className="contact-badge-2 absolute bottom-[20%] left-[-5%] sm:left-[-5%] lg:left-[-10%] bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center gap-4 z-20 w-[220px] opacity-0">
                  <div className="w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#72b90d]/20 flex items-center justify-center shrink-0 text-[#2a650a]">
                    <iconify-icon icon="solar:shield-check-bold" className="text-xl"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-[#000000] text-sm font-semibold tracking-tight">Expert Support</p>
                    <p className="text-slate-500 text-xs">Here for you 24/7</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form & Info */}
          <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center">
            
            <div className="contact-text-container mb-10 text-center lg:text-left">
              <div className="contact-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#72b90d]/10 border border-[#72b90d]/20 text-[#2a650a] text-xs font-semibold tracking-widest uppercase mb-6 opacity-0">
                <span className="w-2 h-2 rounded-full bg-[#72b90d] animate-pulse"></span>
                We're Here For You
              </div>
              <h2 className="contact-heading text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] tracking-tighter text-[#000000] font-medium mb-6" style={{ perspective: '1000px' }}>
                <span className="inline-block opacity-0">Get</span> <span className="inline-block opacity-0">in</span> <span className="inline-block text-[#72b90d] opacity-0">touch</span>
              </h2>
              <p className="contact-desc text-slate-500 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0">
                Whether you have questions about your accounts, need assistance with loans, or want to explore our cooperative integration, our team is ready to help.
              </p>
            </div>

            {/* Clean Enterprise Form Container */}
            <div className="contact-form-container bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="contact-form-item space-y-1.5 opacity-0">
                      <label className="block text-slate-700 text-sm font-medium ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#72b90d]/50 focus:border-[#72b90d] transition-all placeholder:text-slate-400 font-light"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="contact-form-item space-y-1.5 opacity-0">
                      <label className="block text-slate-700 text-sm font-medium ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#72b90d]/50 focus:border-[#72b90d] transition-all placeholder:text-slate-400 font-light"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="contact-form-item space-y-1.5 opacity-0">
                    <label className="block text-slate-700 text-sm font-medium ml-1">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#72b90d]/50 focus:border-[#72b90d] transition-all placeholder:text-slate-400 font-light resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-form-item w-full bg-[#000000] text-[#f9f6f6] font-medium py-4 rounded-xl hover:bg-[#72b90d] hover:text-[#000000] transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_rgba(114,185,13,0.3)] hover:-translate-y-1 opacity-0">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-[#72b90d]/10 text-[#2a650a] rounded-full flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:check-circle-bold" className="text-4xl"></iconify-icon>
                  </div>
                  <h4 className="text-[#000000] text-2xl font-medium tracking-tight mb-3">Message Sent Successfully!</h4>
                  <p className="text-slate-500 text-base font-light max-w-sm mx-auto">We have received your message and our support team will get back to you shortly.</p>
                </div>
              )}
            </div>

            {/* Social Links Row */}
            <div className="contact-social-container mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-sm font-medium text-slate-400 mr-2">Or connect via:</span>
              <a href="#" className="contact-social w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#72b90d] hover:text-[#000000] hover:border-transparent transition-all shadow-sm opacity-0">
                <iconify-icon icon="lucide:facebook" style={{fontSize: "18px"}}></iconify-icon>
              </a>
              <a href="#" className="contact-social w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#72b90d] hover:text-[#000000] hover:border-transparent transition-all shadow-sm opacity-0">
                <iconify-icon icon="lucide:twitter" style={{fontSize: "18px"}}></iconify-icon>
              </a>
              <a href="#" className="contact-social w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#72b90d] hover:text-[#000000] hover:border-transparent transition-all shadow-sm opacity-0">
                <iconify-icon icon="lucide:linkedin" style={{fontSize: "18px"}}></iconify-icon>
              </a>
              <a href="#" className="contact-social w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#72b90d] hover:text-[#000000] hover:border-transparent transition-all shadow-sm opacity-0">
                <iconify-icon icon="lucide:instagram" style={{fontSize: "18px"}}></iconify-icon>
              </a>
            </div>

          </div>
        </div>

        {/* Alternative Contact Methods (Grid Cards Below) */}
        <div className="contact-methods-container pt-12 border-t border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#000000] mb-4">Other ways to reach us</h3>
            <p className="text-slate-500 font-light text-base max-w-lg mx-auto">Prefer speaking to someone directly or visiting our branch? Here are our primary contacts.</p>
          </div>

          {/* Mobile Swipe Carousel */}
          <div className="relative z-10 block md:hidden w-full overflow-hidden mt-8 -mx-4 px-4 pb-8">
            <MobileCarousel>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
                <div className="w-16 h-16 bg-[#72b90d]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2a650a] transition-colors group-hover:bg-[#72b90d] group-hover:text-black">
                  <iconify-icon icon="solar:letter-linear" className="text-3xl"></iconify-icon>
                </div>
                <h4 className="text-2xl font-medium tracking-tight text-[#000000] mb-3">Email Support</h4>
                <p className="text-sm text-slate-500 font-light mb-6">Our team typically responds in under 2 hours during normal business operation.</p>
                <a href="mailto:admin@winviewmfb.com" className="text-sm font-medium text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2">
                  admin@winviewmfb.com
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>

              <div className="bg-[#1a1a1a] rounded-[2rem] p-8 border border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
                <div className="w-16 h-16 bg-[#72b90d] rounded-2xl flex items-center justify-center mb-6 text-[#000000] shadow-[0_0_20px_rgba(114,185,13,0.2)]">
                  <iconify-icon icon="solar:phone-calling-linear" className="text-3xl"></iconify-icon>
                </div>
                <h4 className="text-2xl font-medium tracking-tight text-[#f9f6f6] mb-3">24/7 Helpline</h4>
                <p className="text-sm text-slate-400 font-light mb-6">For urgent banking queries, suspected fraud, or lost ATM cards.</p>
                <a href="tel:+2348060776556" className="text-sm font-medium text-[#72b90d] hover:text-white transition-colors inline-flex items-center gap-2">
                  +234 (0)80 6077 6556
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col h-full items-center text-center justify-center relative overflow-hidden group">
                <div className="w-16 h-16 bg-[#72b90d]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2a650a] transition-colors group-hover:bg-[#72b90d] group-hover:text-black">
                  <iconify-icon icon="solar:map-point-linear" className="text-3xl"></iconify-icon>
                </div>
                <h4 className="text-2xl font-medium tracking-tight text-[#000000] mb-3">Branch Network</h4>
                <p className="text-sm text-slate-500 font-light mb-6">Locate a WinView Microfinance branch or affiliated cooperative center.</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Plot+102A+Collins+Aimuan+Road,+Kuje,+Abuja,+FCT" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2">
                  Find a branch
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>
            </MobileCarousel>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="contact-method-card opacity-0 bg-white rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 transition-transform duration-500 shadow-[0_5px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group h-full flex flex-col">
              <div className="w-14 h-14 bg-[#72b90d]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#72b90d] transition-colors text-[#2a650a] group-hover:text-[#000000]">
                <iconify-icon icon="solar:letter-linear" className="text-3xl"></iconify-icon>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#000000] mb-2">Email Support</h4>
              <p className="text-slate-500 font-light text-sm mb-8 flex-grow">Our team typically responds in under 2 hours during normal business operation.</p>
              <a href="mailto:admin@winviewmfb.com" className="text-sm font-semibold text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2 mt-auto">
                admin@winviewmfb.com
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>

            <div className="contact-method-card opacity-0 bg-[#1a1a1a] rounded-3xl p-8 border border-slate-800 hover:-translate-y-2 transition-transform duration-500 shadow-[0_5px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#72b90d]/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="w-14 h-14 bg-[#72b90d] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(114,185,13,0.2)] text-[#000000] relative z-10">
                <iconify-icon icon="solar:phone-calling-linear" className="text-3xl"></iconify-icon>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#f9f6f6] mb-2 relative z-10">24/7 Helpline</h4>
              <p className="text-slate-400 font-light text-sm mb-8 flex-grow relative z-10">For urgent banking queries, suspected fraud, or lost ATM cards.</p>
              <a href="tel:+2348060776556" className="text-sm font-semibold text-[#72b90d] hover:text-white transition-colors inline-flex items-center gap-2 mt-auto relative z-10">
                +234 (0)80 6077 6556
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>

            <div className="contact-method-card opacity-0 bg-white rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 transition-transform duration-500 shadow-[0_5px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group h-full flex flex-col">
              <div className="w-14 h-14 bg-[#72b90d]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#72b90d] transition-colors text-[#2a650a] group-hover:text-[#000000]">
                <iconify-icon icon="solar:map-point-linear" className="text-3xl"></iconify-icon>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#000000] mb-2">Headquarters</h4>
              <p className="text-slate-500 font-light text-sm mb-8 flex-grow">Plot 102A Collins Aimuan Road, Kuje, Abuja, FCT.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Plot+102A+Collins+Aimuan+Road,+Kuje,+Abuja,+FCT" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#2a650a] hover:text-[#72b90d] transition-colors inline-flex items-center gap-2 mt-auto">
                Get Directions
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
