"use client";

import { motion } from "framer-motion";
import { Wallet, Landmark, TrendingUp, Building2, ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      icon: <Wallet size={28} />,
      name: "Savings Accounts",
      benefit: "Up to 15% annual yield",
      summary: "High-yield options designed to help your wealth grow securely."
    },
    {
      icon: <Landmark size={28} />,
      name: "Loans",
      benefit: "Approval in minutes",
      summary: "Low-interest lines of credit structured for cooperatives and individuals."
    },
    {
      icon: <Building2 size={28} />,
      name: "Business Banking",
      benefit: "Zero maintenance fees",
      summary: "Invoicing, payroll, and corporate cards to scale your business."
    },
    {
      icon: <TrendingUp size={28} />,
      name: "Investments",
      benefit: "Diversified portfolios",
      summary: "Regulated mutual funds and fixed deposits to secure your future."
    }
  ];

  return (
    <section style={{ padding: "6rem 5%", position: "relative", overflow: "hidden" }}>
      {/* Background Gradient */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(circle at 60% 100%, rgba(42, 101, 10, 0.04) 0%, transparent 60%)",
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
            Our Products
          </h2>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#666666",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Built for flexibility. Structured for growth. Designed around your life.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}>
          {products.map((prod, idx) => {
            // Vary animation directions based on index
            const animationVariants = [
              { initial: { opacity: 0, x: -50, rotateZ: -5 }, direction: "left" },
              { initial: { opacity: 0, y: 50, scale: 0.8 }, direction: "bottom" },
              { initial: { opacity: 0, x: 50, rotateZ: 5 }, direction: "right" },
              { initial: { opacity: 0, y: -50, scale: 0.8 }, direction: "top" }
            ];
            const variant = animationVariants[idx % 4];
            
            return (
              <motion.div
                key={idx}
                initial={variant.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                whileHover={{ y: -12, boxShadow: "0 25px 40px rgba(42, 101, 10, 0.15)", scale: 1.02 }}
                style={{
                  padding: "2rem",
                  background: "#ffffff",
                  border: "1px solid rgba(42, 101, 10, 0.12)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Illustration Background */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: -20,
                  width: "120px",
                  height: "120px",
                  background: `linear-gradient(135deg, rgba(42, 101, 10, 0.08), rgba(114, 185, 13, 0.04))`,
                  borderRadius: "50%",
                  zIndex: 0
                }} />

                <div 
                  style={{ 
                    width: "56px", 
                    height: "56px", 
                    borderRadius: "12px", 
                    background: "rgba(42, 101, 10, 0.08)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "#72b90d",
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(42, 101, 10, 0.1)",
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  {prod.icon}
                </div>

                <h3 style={{ 
                  fontSize: "1.3rem", 
                  marginBottom: "0.5rem", 
                  color: "#0a0e0a",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1
                }}>
                  {prod.name}
                </h3>

                <div style={{ 
                  color: "#72b90d", 
                  fontSize: "0.85rem", 
                  fontWeight: "700",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  position: "relative",
                  zIndex: 1
                }}>
                  {prod.benefit}
                </div>

                <p style={{ 
                  color: "#666666", 
                  fontSize: "0.95rem", 
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                  flex: 1,
                  position: "relative",
                  zIndex: 1
                }}>
                  {prod.summary}
                </p>
                
                <motion.div 
                  whileHover={{ gap: "0.75rem", x: 5 }}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem", 
                    color: "#72b90d", 
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  Explore <ArrowRight size={18} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
