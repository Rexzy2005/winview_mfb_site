"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TimeZoneWidget() {
  const [timeState, setTimeState] = useState({
    usa: "",
    wat: "",
    china: ""
  });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeState({
        usa: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
        wat: now.toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }),
        china: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit' })
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="timezone-widget glass-panel" 
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((value) => !value)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setExpanded((value) => !value);
        }
      }}
      aria-label="Open timezone panel"
    >
      <div className="timezone-header d-flex items-center gap-2">
        <Globe size={16} className="glow-text" style={{ color: "var(--lemon-green)" }} />
        <span className="timezone-primary">WAT: {timeState.wat}</span>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="timezone-dropdown"
          >
            <div className="timezone-item">
              <span className="timezone-label">USA:</span>
              <span>{timeState.usa}</span>
            </div>
            <div className="timezone-item">
              <span className="timezone-label">CHN:</span>
              <span>{timeState.china}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
