"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 border-0 pointer-events-none"}`}>
      <button 
        onClick={scrollToTop} 
        aria-label="Back to Top"
        className="p-3 bg-[#72b90d] text-white rounded-full shadow-xl hover:bg-[#2a650a] hover:-translate-y-1 transition-all duration-300 ring-4 ring-[#72b90d]/30"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
