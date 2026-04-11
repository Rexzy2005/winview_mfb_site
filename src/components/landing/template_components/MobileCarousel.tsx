"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileCarousel = ({ children, dotColor = '#72b90d' }: { children: React.ReactNode[], dotColor?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentIndex < children.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.2,
        duration: 0.8
      }
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        transition: {
          type: "spring" as const,
          bounce: 0.2,
          duration: 0.8
        }
      };
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden py-10 px-4 md:hidden">
      <div className="relative w-full aspect-[4/5] min-h-[450px] max-w-sm w-full mx-auto perspect-[1000px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing hover:shadow-2xl"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Swipe Controls */}
      <div className="flex justify-center items-center gap-6 mt-8 z-20">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-slate-800 disabled:opacity-30 active:scale-90 transition-all hover:bg-black/10"
        >
          <iconify-icon icon="solar:alt-arrow-left-linear" className="text-2xl"></iconify-icon>
        </button>
        
        <div className="flex gap-2.5">
          {children.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              style={{ backgroundColor: idx === currentIndex ? dotColor : '#cbd5e1' }}
              className={`transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-8 h-2' : 'w-2 h-2 hover:opacity-80'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentIndex === children.length - 1}
          className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-slate-800 disabled:opacity-30 active:scale-90 transition-all hover:bg-black/10"
        >
          <iconify-icon icon="solar:alt-arrow-right-linear" className="text-2xl"></iconify-icon>
        </button>
      </div>
    </div>
  );
};

export default MobileCarousel;
