"use client";

import Hero from "@/components/Hero";
import LandingNavbar from "@/components/LandingNavbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <LandingNavbar/>
      <Hero/>
    </div>
  );
}
