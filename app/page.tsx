"use client";

import Features from "@/components/Features";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import Hero from "@/components/Hero";
import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import TestimonialSection from "@/components/TestimonialSection";
import Testimonial from "@/components/TestimonialSection";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <LandingNavbar />
      <Hero />
      <Link
        href={"/components"}
        className="flex gap-1 items-center mb-6 w-full pl-5 group"
      >
        <p className="text-neutral-300/40 tracking-tight font-semibold group-hover:text-neutral-300/60 duration-300">
          Components
        </p>
        <ArrowRight
          className="stroke-neutral-300/40 stroke-3 group-hover:stroke-neutral-300/60 duration-300"
          size={15}
        />
      </Link>
      <Features />
      <p className="text-neutral-300/40 tracking-tight font-semibold group-hover:text-neutral-300/60 duration-300 w-full pl-5 mt-10">
        Testimonials
      </p>
      <TestimonialSection />
      <FluidGradientText text="Pulse UI" />
      <LandingFooter />
    </div>
  );
}
