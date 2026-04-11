"use client";

import { motion } from "framer-motion";
import { Zap, HeartHandshake, Eye, Globe2 } from "lucide-react";

export default function PromiseSection() {
  const promises = [
    {
      icon: <Zap size={40} />,
      title: "Simple Onboarding",
      desc: "Get an account number in less than 5 minutes."
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Human-first Experience",
      desc: "Support from real people when you need it."
    },
    {
      icon: <Eye size={40} />,
      title: "Transparent Pricing",
      desc: "No hidden charges, no maintenance fees."
    },
    {
      icon: <Globe2 size={40} />,
      title: "Community-driven",
      desc: "Products structured around community wealth."
    }
  ];

  return (
    <section style={{ padding: "6rem 5%", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 40% 100%, rgba(42, 101, 10, 0.1) 0%, transparent 60%)",
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
            lineHeight: "1.2"
          }}>
            Our Promise
          </h2>
        </motion.div>

        {/* Promises Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem"
        }}>
          {promises.map((item, idx) => {
            // Varied animations with staggered effects
            const animations = [
              { initial: { opacity: 0, scale: 0.5, rotateZ: -10 }, name: "scale-rotate" },
              { initial: { opacity: 0, y: 50, x: -30 }, name: "bottom-left" },
              { initial: { opacity: 0, y: -50, x: 30 }, name: "top-right" },
              { initial: { opacity: 0, x: 60, rotateZ: 10 }, name: "right-rotate" }
            ];
            const anim = animations[idx % 4];

            return (
              <motion.div
                key={idx}
                initial={anim.initial}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 45px rgba(42, 101, 10, 0.2)" }}
                style={{
                  padding: "2.5rem",
                  background: "rgba(42, 101, 10, 0.06)",
                  border: "1px solid rgba(42, 101, 10, 0.2)",
                  borderRadius: "16px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Animated background circle */}
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: "120px",
                    height: "120px",
                    background: "linear-gradient(135deg, rgba(42, 101, 10, 0.08), rgba(114, 185, 13, 0.03))",
                    borderRadius: "50%",
                    pointerEvents: "none"
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(42, 101, 10, 0.3), rgba(114, 185, 13, 0.2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#72b90d",
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(42, 101, 10, 0.3)",
                    transition: "all 0.3s",
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  {item.icon}
                </motion.div>

                <h3 style={{
                  fontSize: "1.3rem",
                  marginBottom: "0.8rem",
                  color: "#0a0e0a",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1
                }}>
                  {item.title}
                </h3>

                <p style={{
                  color: "#666666",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  position: "relative",
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
