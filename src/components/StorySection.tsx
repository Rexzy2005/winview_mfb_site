"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section style={{ padding: "6rem 5%", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(42, 101, 10, 0.04) 0%, transparent 70%)",
        zIndex: 0
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4rem" }}
        >
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: "1.2",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "#0a0e0a"
          }}>
            Where others see transactions…
            <br />
            <span style={{
              color: "#72b90d"
            }}>
              we see people.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: "1.2",
            fontWeight: 800
          }}>
            Where others see risk…
            <br />
            <span style={{
              background: "linear-gradient(135deg, #72b90d 0%, #2a650a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              we see opportunity.
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
