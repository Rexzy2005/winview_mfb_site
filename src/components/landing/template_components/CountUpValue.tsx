"use client";

import React, { useEffect, useState, useRef } from 'react';

const CountUpValue = ({ value }: { value: string }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const rawNum = match ? match[2].replace(/,/g, '') : '0';
  const targetNum = parseFloat(rawNum);
  const suffix = match ? match[3] : value;
  const isFloat = rawNum.includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let rafId: number;

    if (!isVisible) {
      setCurrentValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrentValue(targetNum * easeProgress);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setCurrentValue(targetNum);
      }
    };

    rafId = window.requestAnimationFrame(step);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isVisible, targetNum]);

  if (!match) return <div ref={ref} className="inline-block">{value}</div>;

  const displayValue = isFloat 
    ? currentValue.toFixed(1)
    : Math.floor(currentValue);

  return (
    <div ref={ref} className="inline-block">
      {prefix}{displayValue}{suffix}
    </div>
  );
};

export default CountUpValue;
