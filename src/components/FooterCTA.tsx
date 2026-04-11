"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function FooterCTA() {
  return (
    <section style={{ padding: "6rem 5%", position: "relative", overflow: "hidden" }}>
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "-50%",
        right: "-20%",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(42, 101, 10, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0
      }} />

      <div style={{
        position: "absolute",
        bottom: "-30%",
        left: "-10%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(42, 101, 10, 0.04) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              display: "inline-block",
              padding: "0.6rem 1.2rem",
              background: "rgba(114, 185, 13, 0.15)",
              border: "1px solid rgba(114, 185, 13, 0.3)",
              borderRadius: "50px",
              marginBottom: "2rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#72b90d"
            }}
          >
            Ready to Get Started?
          </motion.div>

          {/* Heading */}
          <h2 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: "1.1",
            marginBottom: "1.5rem",
            fontWeight: 800
          }}>
            Join WinView <span style={{
              background: "linear-gradient(135deg, #72b90d 0%, #2a650a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>today</span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: "1.15rem",
            color: "#666666",
            marginBottom: "3rem",
            maxWidth: "700px",
            margin: "0 auto 3rem",
            lineHeight: "1.7"
          }}>
            Experience banking that sees the real you. Fast. Secure. Built for your growth.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(42, 101, 10, 0.3)" }}
              style={{
                padding: "1rem 2.5rem",
                background: "#2a650a",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 4px 20px rgba(42, 101, 10, 0.3)",
                transition: "all 0.3s"
              }}
            >
              Open an Account <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, background: "rgba(114, 185, 13, 0.15)" }}
              style={{
                padding: "1rem 2.5rem",
                background: "rgba(114, 185, 13, 0.1)",
                color: "#72b90d",
                border: "1px solid #72b90d",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                transition: "all 0.3s"
              }}
            >
              <Download size={20} /> Download App
            </motion.button>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(114, 185, 13, 0.1)",
              color: "#666666",
              fontSize: "0.9rem"
            }}
          >
            <p>&copy; {new Date().getFullYear()} WinView Microfinance Bank. All rights reserved. | <a href="#" style={{ color: "#72b90d", textDecoration: "none" }}>Privacy Policy</a> | <a href="#" style={{ color: "#72b90d", textDecoration: "none" }}>Terms of Service</a></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
