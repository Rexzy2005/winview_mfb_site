"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CommunityStoriesSection() {
  const stories = [
    {
      role: "Police Officer",
      quote: "WinView gave me the loan I needed for my children's fees when traditional banks asked for impossible collateral. Their cooperative rate is a lifesaver.",
      name: "Sgt. Ibrahim A."
    },
    {
      role: "Market Trader",
      quote: "No maintenance fees means all my profit stays with me. The transfer speeds are amazing, and I’ve never had a failed transaction at the shop.",
      name: "Chioma E."
    },
    {
      role: "Cooperative Leader",
      quote: "Managing funds used to be a nightmare. With WinView's business tools, we have full transparency and fast disbursements.",
      name: "Olumide B."
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
        background: "radial-gradient(circle at 50% 0%, rgba(42, 101, 10, 0.1) 0%, transparent 70%)",
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
            Community Stories
          </h2>
          <p style={{
            fontSize: "1.05rem",
            color: "#666666"
          }}>
            Real stories from real people in our community
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem"
        }}>
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(42, 101, 10, 0.2)" }}
              style={{
                padding: "2.5rem",
                background: "rgba(42, 101, 10, 0.06)",
                border: "1px solid rgba(42, 101, 10, 0.2)",
                borderRadius: "16px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s"
              }}
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                style={{
                  color: "#72b90d",
                  opacity: 0.2,
                  position: "absolute",
                  top: "2rem",
                  right: "2rem"
                }}
              />

              {/* Quote */}
              <p style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                marginBottom: "2rem",
                color: "#0a0e0a",
                fontStyle: "italic",
                flex: 1,
                paddingRight: "1rem"
              }}>
                "{story.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #72b90d, #2a650a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  flexShrink: 0
                }}>
                  {story.name[0]}
                </div>
                <div>
                  <h4 style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "0.3rem",
                    color: "#0a0e0a"
                  }}>
                    {story.name}
                  </h4>
                  <span style={{
                    fontSize: "0.85rem",
                    color: "#72b90d",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {story.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
