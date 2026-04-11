"use client";

import { motion } from "framer-motion";
import { UserPlus, ArrowDownToLine, Rocket, Check } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus size={32} />,
      title: "Sign up",
      desc: "Download the app or open our web portal. Verification takes 2 minutes with your BVN/NIN."
    },
    {
      number: "02",
      icon: <ArrowDownToLine size={32} />,
      title: "Fund account",
      desc: "Instantly transfer funds from any bank or use our USSD code for seamless deposits."
    },
    {
      number: "03",
      icon: <Rocket size={32} />,
      title: "Start using WinView",
      desc: "Request loans, send money, or start building wealth securely."
    }
  ];

  return (
    <section style={{ padding: "6rem 5%", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(circle at 40% 0%, rgba(42, 101, 10, 0.04) 0%, transparent 60%)",
        zIndex: 0
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            marginBottom: "1rem",
            lineHeight: "1.2",
            color: "#0a0e0a"
          }}>
            How It Works
          </h2>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#666666",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Simple, secure, and designed for you
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          position: "relative"
        }}>
          {/* Connection Line */}
          <div style={{
            position: "absolute",
            top: "100px",
            left: "calc(33.33% - 1rem)",
            right: "calc(33.33% - 1rem)",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(42, 101, 10, 0.1), transparent)",
            pointerEvents: "none",
            display: steps.length <= 2 ? "none" : undefined
          }} />

          {steps.map((step, idx) => {
            // Alternate animation directions
            const animationsSequence = [
              { initial: { opacity: 0, x: -80, rotateY: -10 }, direction: "left" },
              { initial: { opacity: 0, y: 60, scale: 0.7 }, direction: "bottom" },
              { initial: { opacity: 0, x: 80, rotateY: 10 }, direction: "right" }
            ];
            const anim = animationsSequence[idx % 3];

            return (
              <motion.div
                key={idx}
                initial={anim.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(42, 101, 10, 0.12)", scale: 1.02 }}
                style={{
                  padding: "2.5rem",
                  background: "#ffffff",
                  border: "1px solid rgba(42, 101, 10, 0.1)",
                  borderRadius: "16px",
                  position: "relative",
                  transition: "all 0.3s",
                  overflow: "hidden"
                }}
              >
                {/* Animated Background Illustration */}
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: "150px",
                    height: "150px",
                    background: `linear-gradient(135deg, rgba(42, 101, 10, 0.05), rgba(114, 185, 13, 0.02))`,
                    borderRadius: "50%",
                    pointerEvents: "none"
                  }}
                />

                {/* Step Number */}
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "2rem",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "rgba(42, 101, 10, 0.08)",
                    lineHeight: "1"
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "14px",
                    background: "rgba(42, 101, 10, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#72b90d",
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(42, 101, 10, 0.1)",
                    transition: "all 0.3s",
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.8rem",
                  color: "#0a0e0a",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: "0.95rem",
                  color: "#666666",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1
                }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
