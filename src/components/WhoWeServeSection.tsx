"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function WhoWeServeSection() {
  const cards = [
    {
      image: "/police_cooperative_card_1775791407359.png",
      title: "Nigeria Police Cooperative",
      description: "Fast-tracked loans and specialized savings rates designed specifically for the men and women of the Nigeria Police Force."
    },
    {
      image: "/entrepreneur_card_1775791446568.png",
      title: "The Hustlers & Creators",
      description: "From motorcycle riders and fashion designers to tech startups—we provide the capital to back your hustle."
    },
    {
      icon: <Users size={40} />,
      title: "Everyday Nigerians",
      description: "Zero fees, instant transfers, and wealth tools for every Nigerian building a better future for their family."
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
        background: "radial-gradient(circle at 70% 50%, rgba(42, 101, 10, 0.1) 0%, transparent 60%)",
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
            Who We Serve
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#666666",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            We are democratizing access to wealth creation by building specialized tools for the communities we serve.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem"
        }}>
          {cards.map((card, idx) => {
            // Varied animations
            const animationPresets = [
              { initial: { opacity: 0, x: -60, rotate: -8 }, direction: "left" },
              { initial: { opacity: 0, y: 50, scale: 0.85 }, direction: "bottom" },
              { initial: { opacity: 0, x: 60, rotate: 8 }, direction: "right" }
            ];
            const preset = animationPresets[idx % 3];

            return (
              <motion.div
                key={idx}
                initial={preset.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(42, 101, 10, 0.2)", scale: 1.02 }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "rgba(42, 101, 10, 0.05)",
                  border: "1px solid rgba(42, 101, 10, 0.2)",
                  transition: "all 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative"
                }}
              >
                {/* Image or Icon Container */}
                {card.image ? (
                  <motion.div 
                    style={{
                      height: "280px",
                      overflow: "hidden",
                      background: "rgba(42, 101, 10, 0.1)"
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease-out"
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    style={{
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(42, 101, 10, 0.15), rgba(114, 185, 13, 0.1))",
                      color: "#72b90d"
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {card.icon}
                    </motion.div>
                  </motion.div>
                )}

                {/* Content */}
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    color: "#0a0e0a",
                    fontWeight: 700
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    color: "#666666",
                    lineHeight: "1.7",
                    fontSize: "0.95rem"
                  }}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
