import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Hanken_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Mishan Poudel",
  description: "Uncover deeper insights into my journey and capabilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} scroll-smooth antialiased bg-bg_black text-text_white`}
      >
        <div className="mx-6 md:max-w-xl md:mx-auto">
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
