"use client";
import { CirclePlay, Code, ExternalLink, Package, Sparkles, Star, University } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

function Hero() {
  return (
    <div className="text-white w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className={`${playfair.className} text-6xl font-bold [@media(max-width:793px)]:text-4xl shine-text flex underline underline-offset-3`}>
          <p>Ship Beautiful UIs Faster</p>
        </div>
        <h2 className={`${playfair.className} text-3xl text-neutral-300 [@media(max-width:793px)]:text-2xl`}>
          Without the Headache
        </h2>
      </div>
      <div className="flex gap-5">
        <button className="bg-neutral-200 text-black px-3 py-2 rounded-lg shadow-[0_0_15px_gray] font-semibold flex items-center gap-2 cursor-pointer hover:-translate-y-1 duration-300">
          <CirclePlay size={20} className="mt-[0.1rem] stroke-[2px]"/>
          <p>Get Started</p>
        </button>
        <Link href={"https://github.com/ayantik2006/pulse-ui"} target="_blank" className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-[0_0_5px_gray] cursor-pointer hover:-translate-y-1 duration-300">
          <Star size={20} className="mt-[0.1rem] stroke-[2px] fill-amber-300 stroke-amber-300"/>
          <p>GitHub</p>          
        </Link>
      </div>
      <Link href="/playground" target="_blank" className="flex gap-1 text-neutral-300 text-sm underline underline-offset-2 cursor-pointer">
        <ExternalLink size={17} className="mt-[0.1rem] stroke-[2px]"/>
        <p>Visit Playground</p>
      </Link>
      <div className="flex flex-wrap mx-5 items-center justify-center gap-3">
        <div className="bg-neutral-800 px-3 py-1 pb-[0.3rem] rounded-[20px] border border-neutral-600 flex items-center gap-2">
          <University size={15} className="stroke-white" />
          <p className="text-sm">Used by developers at NITs</p>
        </div>
        <div className="bg-neutral-800 px-3 py-1 pb-[0.3rem] rounded-[20px] border border-neutral-600 flex items-center gap-2">
          <Package size={15} className="stroke-white" />
          <p className="text-sm">Open Source</p>
        </div>
        <div className="bg-neutral-800 px-3 py-1 pb-[0.3rem] rounded-[20px] border border-neutral-600 flex items-center gap-2">
          <Code size={15} className="stroke-white" />
          <p className="text-sm">Built for modern web apps</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
