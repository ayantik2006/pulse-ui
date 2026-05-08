"use client";

import Examples from "@/components/Examples";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <LandingNavbar/>
      <Hero/>
      <div className="w-full bg-neutral-950 h-1 mb-20"/>
      <Features/>
      <div className="w-full bg-neutral-950 h-1 mb-20"/>
      {/* <Examples/> */}
      <div>
        <p className={`text-black text-center text-9xl text-shadow-[0_0_2px_white] my-[-2rem] font-bold tracking-[2rem] ${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-9xl [@media(max-width:640px)]:text-3xl`}>PULSE UI</p>
      </div>
      <LandingFooter/>
    </div>
  );
}
