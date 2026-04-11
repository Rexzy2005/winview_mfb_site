import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "WinView Microfinance Bank | Banking that works for you",
  description: "A digital-first microfinance bank built for the Nigeria Police Cooperative and every Nigerian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="bg-morphing"></div>
        
        
        
        {children}
      </body>
    </html>
  );
}
