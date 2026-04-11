"use client";

import React from 'react';
import Reveal from './Reveal';
import CountUpValue from './CountUpValue';

const stats = [
  { value: '100k+', label: 'Active Users' },
  { value: '₦50B+', label: 'Processed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Real Support' },
];

const Stats = () => {
  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {stats.map((stat, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="text-center">
              <div className="text-3xl font-medium tracking-tight text-[#000000]">
                <CountUpValue value={stat.value} />
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Stats;