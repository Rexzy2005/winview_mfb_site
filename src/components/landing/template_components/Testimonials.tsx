"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Reveal from './Reveal';

const testimonials = [
  {
    text: `"Getting a loan used to take weeks of paperwork. With WinView's salary-linked loan, I was approved in hours. It changed how I handle emergencies for my family."`,
    initials: 'CO',
    name: 'Chukwudi O.',
    role: 'Police Officer',
    color: 'bg-[#2a650a]',
    textColor: 'text-[#f9f6f6]'
  },
  {
    text: `"As a market woman, my daily sales need a safe place. WinView's app is so easy to use, and I don't get charged useless hidden fees anymore. They really back my hustle."`,
    initials: 'FA',
    name: 'Folake A.',
    role: 'Small-scale Trader',
    color: 'bg-[#72b90d]',
    textColor: 'text-[#000000]'
  },
  {
    text: `"Managing our cooperative funds used to be a nightmare. WinView structured our savings and investment pools directly into the app. Everything is transparent now."`,
    initials: 'MI',
    name: 'Musa I.',
    role: 'Cooperative Group Leader',
    color: 'bg-[#2a650a]',
    textColor: 'text-[#f9f6f6]'
  }
];

const Testimonials = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Automated Card Cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Three.js Community Network Animation
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Create Nodes (Particles)
    const particleCount = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount * 3; i++) {
      // Spread particles in a wide area
      positions[i] = (Math.random() - 0.5) * 80;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x72b90d,
      size: 0.6,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(geometry, material);
    group.add(particles);

    // Create Connections (Lines)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2a650a,
      transparent: true,
      opacity: 0.25
    });

    const linePositions = [];
    for(let i = 0; i < particleCount; i++) {
      for(let j = i + 1; j < particleCount; j++) {
        const x1 = positions[i*3], y1 = positions[i*3+1], z1 = positions[i*3+2];
        const x2 = positions[j*3], y2 = positions[j*3+1], z2 = positions[j*3+2];
        const dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2) + Math.pow(z2-z1, 2));
        
        // Connect nodes that are close to each other
        if(dist < 15) {
          linePositions.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      group.rotation.y += 0.0015;
      group.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="px-4 md:px-8 py-8 max-w-[85rem] mx-auto">
      <div className="bg-[#000000] rounded-[3rem] p-10 md:p-16 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
        
        {/* Three.js Canvas Container */}
        <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-60"></div>
        
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-0 pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#72b90d] text-xs font-medium tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#72b90d] animate-pulse"></span>
              Live Community
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f6] mb-4">Stories from our community</h2>
          </Reveal>
        </div>

        {/* Automated Carousel Container */}
        <div className="grid w-full max-w-3xl mx-auto z-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`col-start-1 row-start-1 w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === activeIndex 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'
              }`}
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <iconify-icon key={i} icon="solar:star-fall-bold" className="text-xl text-[#72b90d]"></iconify-icon>
                    ))}
                  </div>
                  <p className="text-slate-200 text-lg md:text-xl font-light mb-8 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center ${item.textColor} font-medium text-base shadow-lg`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-[#f9f6f6] font-medium text-base">{item.name}</div>
                    <div className="text-[#72b90d] text-sm">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? 'w-8 bg-[#72b90d]' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;