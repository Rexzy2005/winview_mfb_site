import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "WinView Microfinance Bank | Secure Banking for Cooperatives & Nigerians",
  description: "WinView Microfinance Bank is a trusted, digital-first financial institution offering secure, rapid, and highly tailored banking solutions for the Nigeria Police Cooperative and every Nigerian. Open an account today to enjoy fast transfers, priority support, and seamless mobile banking.",
  keywords: "WinView, Microfinance Bank, Nigeria Police Cooperative, NPF banking, SME banking Nigeria, digital banking Nigeria, secure banking, cooperative finance, Kuje Abuja, open bank account online",
  openGraph: {
    title: "WinView Microfinance Bank | Secure Banking for Cooperatives",
    description: "Experience secure and innovative banking designed for cooperatives and individuals in Nigeria.",
    type: "website",
    locale: "en_NG",
    url: "https://winviewbank.com",
    siteName: "WinView MFB",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js" strategy="lazyOnload" />
        <div className="bg-morphing"></div>
        
        
        
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
