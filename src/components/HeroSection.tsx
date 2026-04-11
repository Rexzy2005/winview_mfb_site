"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: "80px" }}>
      {/* Animated Background */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url('https://i.pinimg.com/736x/15/19/bf/1519bfe53d565a21d38023faf07e0d02.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        zIndex: 0
      }} />
      
      {/* Overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(circle at 60% 50%, rgba(42, 101, 10, 0.06) 0%, transparent 70%), radial-gradient(circle at 30% 70%, rgba(114, 185, 13, 0.03) 0%, transparent 60%)",
        zIndex: 1
      }} />

      {/* Floating Elements */}
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity }} style={{
        position: "absolute", top: "10%", left: "10%", width: "100px", height: "100px",
        background: "rgba(42, 101, 10, 0.05)", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        zIndex: 2
      }} />
      
      <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} style={{
        position: "absolute", bottom: "15%", right: "8%", width: "120px", height: "120px",
        background: "rgba(114, 185, 13, 0.04)", borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
        zIndex: 2
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1400px", margin: "0 auto", width: "100%", padding: "0 5%", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "4rem" }}>
        
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ 
              display: "inline-block",
              padding: "0.5rem 1rem",
              background: "rgba(42, 101, 10, 0.08)",
              border: "1px solid rgba(42, 101, 10, 0.2)",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#72b90d"
            }}
          >
            🚀 The Future of Banking is Here
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              lineHeight: "1.1",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "#0a0e0a"
            }}
          >
            Fast and <span style={{ color: "#72b90d" }}>Simple</span> Digital <br /> Payment Solution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: "1.1rem",
              color: "#666666",
              marginBottom: "2rem",
              lineHeight: "1.8",
              maxWidth: "550px"
            }}
          >
            Many credit cards are lost by the users, stolen, or expired. But these cards can still be used by others. This app can provide you with a card and necessary information.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: "flex", flexDirection: "row", gap: "0.5rem", marginBottom: "3rem" }}
          >
              {/* Apple App Store Button */}
              <motion.a href="#" whileHover={{ opacity: 0.85 }} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 0.8rem",
                background: "#000000",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.46 4.7 9.12c.9-1.56 2.64-2.59 4.54-2.63 1.33-.05 2.59.86 3.44.86.85 0 2.65-1.07 4.47-.91.76.03 2.85.52 3.72 3.9-.1.08-2.24.99-2.25 2.95-.02 1.78 1.46 2.74 1.48 2.8z"></path>
                  <path d="M12 2.02c.88-.88 2.3-1.47 3.51-1.4.13 1.29-.22 2.79-1.38 3.47-1.07.6-2.19.02-3.13-.65z"></path>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                  <span style={{ fontSize: "0.65rem", color: "#ffffff", fontWeight: 400 }}>Download on the</span>
                  <span style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 600 }}>App Store</span>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a href="#" whileHover={{ opacity: 0.85 }} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 0.8rem",
                background: "#000000",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3.609 1.814L13.792 12 3.609 22.186A1.5 1.5 0 0 1 1.5 20.886V3.114a1.5 1.5 0 0 1 2.109-1.3z" fill="#36C5F0"></path>
                  <path d="M16.5 10.883l4.567-4.567a1.5 1.5 0 0 0-2.121-2.121L14.379 8.762" fill="#34A853"></path>
                  <path d="M16.5 13.117l4.567 4.567a1.5 1.5 0 1 0 2.121-2.121L18.621 15.238" fill="#FBBC04"></path>
                  <path d="M22.067 10.883a1.5 1.5 0 0 0 0-2.121L20.946 7.641a1.5 1.5 0 0 1 2.121 2.121z" fill="#EA4335"></path>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                  <span style={{ fontSize: "0.65rem", color: "#ffffff", fontWeight: 400 }}>GET IT ON</span>
                  <span style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 600 }}>Google Play</span>
                </div>
              </motion.a>
          </motion.div>

        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          style={{ perspective: "1000px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Floating circles with staggered animation */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "-30px",
              left: "-30px",
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, rgba(114, 185, 13, 0.2), rgba(42, 101, 10, 0.1))",
              borderRadius: "50%",
              zIndex: 0
            }}
          />
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, rgba(42, 101, 10, 0.15), rgba(114, 185, 13, 0.08))",
              borderRadius: "50%",
              zIndex: 0
            }}
          />

          {/* 3D Card Stack Effect */}
          <motion.div animate={{ y: [0, -20, 0], rotateX: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <div style={{
              position: "relative",
              width: "350px",
              height: "220px"
            }}>
              {/* Back Card */}
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(245, 245, 245, 0.5)",
                borderRadius: "20px",
                border: "1px solid rgba(42, 101, 10, 0.15)",
                transform: "translateY(20px) scale(0.95)",
                backdropFilter: "blur(10px)"
              }} />

              {/* Front Card with Banking Illustration */}
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #2a650a 0%, #1a4505 100%)",
                borderRadius: "20px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#ffffff",
                fontWeight: "bold",
                boxShadow: "0 20px 40px rgba(42, 101, 10, 0.2)",
                overflow: "hidden"
              }}>
                {/* Card design with icons */}
                <div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "1rem" }}>CREDIT CARD</div>
                  <div style={{ fontSize: "1.5rem", letterSpacing: "0.1em" }}>1234 5678 9012 245</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", opacity: 0.8 }}>MM/YY</div>
                    <div style={{ fontSize: "1.2rem" }}>06/25</div>
                  </div>
                  <span style={{ fontSize: "1.5rem" }}>💳</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{
            position: "absolute", top: "-50px", right: "-50px",
            width: "120px", height: "120px",
            border: "2px solid rgba(42, 101, 10, 0.15)",
            borderRadius: "50%"
          }} />
        </motion.div>
      </div>


    </section>
  );
}
