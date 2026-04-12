"use client";

import Script from "next/script";
import Hero from "./template_components/Hero";
import Stats from "./template_components/Stats";
import Promise from "./template_components/Promise";
import Cooperative from "./template_components/Cooperative";
import PoliceTrust from "./template_components/PoliceTrust";
import Products from "./template_components/Products";
import HowItWorks from "./template_components/HowItWorks";
import Testimonials from "./template_components/Testimonials";
import Contact from "./template_components/Contact";
import Footer from "./template_components/Footer";
import "./template_components/template.css";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "iconify-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          icon: string;
        };
      }
    }
  }
}

export default function LandingPage() {
    return (
        <main className="max-w-[1600px] mx-auto relative bg-[#f9f6f6] text-[#000000] antialiased selection:bg-[#72b90d] selection:text-[#000000] overflow-x-hidden min-h-screen font-sans">
            <Script src="https://cdn.tailwindcss.com"  />
            <Script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"  />

            <Hero />
            <Stats />
            <Promise />
            <Cooperative />
            <PoliceTrust />
            <Products />
            <HowItWorks />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
