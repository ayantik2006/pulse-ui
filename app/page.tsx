"use client";

import Examples from "@/components/Examples";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LandingNavbar from "@/components/LandingNavbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <LandingNavbar/>
      <Hero/>
      <div className="w-full bg-neutral-950 h-1 shadow-[0_4px_25px_gray] mb-20"/>
      <Features/>
      <Examples/>
      <Experience/>
    </div>
  );
}
