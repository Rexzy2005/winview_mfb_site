"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function LifestyleSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const items = [
    {
      title: "The Midnight Hustle",
      desc: "Fast loans for the late-night creators and early-morning starters.",
      img: "🌇"
    },
    {
      title: "Family First",
      desc: "Secure savings plans for your children's education and your family's dreams.",
      img: "👨‍👩‍👧‍👦"
    },
    {
      title: "Global Reach",
      desc: "Seamless payments for international trade and local commerce.",
      img: "🌐"
    },
    {
      title: "Community Ties",
      desc: "Built with the cooperative spirit of the Nigeria Police Force.",
      img: "🤝"
    }
  ];

  return (
    <section ref={targetRef} style={{ position: "relative", height: "300vh", overflow: "hidden" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10vh", left: "5%", zIndex: 10 }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 4rem)",
            marginBottom: "1rem",
            fontWeight: 800
          }}>
            Banking For Your <span style={{
              background: "linear-gradient(135deg, #72b90d 0%, #2a650a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Life</span>
          </h2>
          <p style={{
            fontSize: "1rem",
            color: "#666666",
            fontWeight: 500
          }}>
            Scroll to explore the WinView lifestyle
          </p>
        </div>

        <motion.div style={{ x, display: "flex", gap: "3rem", paddingLeft: "5%", paddingRight: "2rem" }}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              style={{
                width: "400px",
                height: "500px",
                flexShrink: 0,
                position: "relative",
              }}
              whileHover={{ y: -20, boxShadow: "0 20px 40px rgba(114, 185, 13, 0.2)" }}
            >
              <div style={{
                width: "100%",
                height: "100%",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "linear-gradient(135deg, rgba(114, 185, 13, 0.1), rgba(42, 101, 10, 0.05))",
                border: "1px solid rgba(114, 185, 13, 0.2)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)"
              }}>
                <div style={{
                  fontSize: "120px",
                  marginBottom: "2rem",
                  lineHeight: "1"
                }}>
                  {item.img}
                </div>
                <h3 style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  color: "#0a0e0a",
                  fontWeight: 700
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#666666",
                  lineHeight: "1.6"
                }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
