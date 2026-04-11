"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Fingerprint, EyeOff } from "lucide-react";

export default function SecuritySection() {
  const trustItems = [
    { icon: <Lock size={20} />, text: "NDIC Insured" },
    { icon: <Shield size={20} />, text: "CBN Licensed" },
    { icon: <Fingerprint size={20} />, text: "Biometric Security" },
    { icon: <EyeOff size={20} />, text: "256-bit Encryption" }
  ];

  return (
    <section style={{ padding: "4rem 5%" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "3rem",
            background: "#ffffff",
            border: "1px solid rgba(42, 101, 10, 0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)"
          }}
        >
          {/* Header */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem"
            }}
          >
            <div style={{
              width: "12px",
              height: "12px",
              background: "#72b90d",
              borderRadius: "50%",
              boxShadow: "0 0 12px #72b90d, 0 0 24px rgba(42, 101, 10, 0.4)"
            }} />
            <span style={{
              fontWeight: "700",
              letterSpacing: "1.5px",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #72b90d, #2a650a)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Solution Your Core
            </span>
          </motion.div>

          {/* Trust Items Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem"
          }}>
            {trustItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: "12px",
                  background: "#ffffff",
                  border: "1px solid rgba(42, 101, 10, 0.08)",
                  transition: "all 0.3s",
                  cursor: "pointer"
                }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "rgba(42, 101, 10, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#72b90d",
                  border: "1px solid rgba(42, 101, 10, 0.1)",
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <span style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#0a0e0a"
                }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
