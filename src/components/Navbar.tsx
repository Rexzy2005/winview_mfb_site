"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import TimeZoneWidget from "./TimeZoneWidget";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        padding: "0.9rem 4%",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(249, 246, 246, 0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(42, 101, 10, 0.18)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1160px", margin: "0 auto", gap: "1rem" }}>
        <Link href="/" style={{ display: "inline-flex", flexDirection: "column" }}>
          <span style={{ fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.02em", background: "linear-gradient(135deg, #2a650a 0%, #72b90d 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            WinView
          </span>
          <span style={{ fontSize: "0.68rem", color: "#4e5d4e", fontWeight: 500 }}>Microfinance Bank</span>
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            border: "1px solid rgba(42, 101, 10, 0.25)",
            borderRadius: "10px",
            padding: "0.45rem 0.65rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#2a650a",
          }}
          className="mobile-menu-toggle"
        >
          Menu
        </button>

        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.55rem",
            fontSize: "0.92rem",
            fontWeight: 500,
          }}
        >
          <Link href="/#why-winview">Why WinView</Link>
          <Link href="/#police-cooperative">Police Cooperative</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/about-us">About</Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <TimeZoneWidget />
          <Link href="/#join" style={{
            padding: "0.62rem 1rem",
            background: "linear-gradient(135deg, #2a650a, #72b90d)",
            color: "#f9f6f6",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "0.88rem",
            fontWeight: 700,
            transition: "all 0.3s",
            boxShadow: "0 8px 20px rgba(42, 101, 10, 0.28)"
          }}>
            Join WinView
          </Link>
        </div>
      </div>

      {open && (
        <div style={{ maxWidth: "1160px", margin: "0.7rem auto 0", paddingTop: "0.8rem", borderTop: "1px solid rgba(42, 101, 10, 0.15)", display: "grid", gap: "0.65rem" }} className="mobile-drawer">
          <Link href="/#why-winview" onClick={() => setOpen(false)}>Why WinView</Link>
          <Link href="/#police-cooperative" onClick={() => setOpen(false)}>Police Cooperative</Link>
          <Link href="/#products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/#how-it-works" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="/about-us" onClick={() => setOpen(false)}>About</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact-us" onClick={() => setOpen(false)}>Contact us</Link>
        </div>
      )}

      <style jsx>{`
        .desktop-nav a {
          color: #101710;
          transition: color 0.2s ease;
        }

        .desktop-nav a:hover {
          color: #2a650a;
        }

        .mobile-drawer a {
          color: #101710;
          font-weight: 500;
        }

        @media (max-width: 1040px) {
          .desktop-nav {
            display: none !important;
          }

          :global(.mobile-menu-toggle) {
            display: inline-flex !important;
          }
        }

        @media (min-width: 1041px) {
          .mobile-drawer {
            display: none;
          }
        }

        @media (max-width: 700px) {
          :global(.timezone-widget) {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
}
