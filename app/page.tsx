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
    <div className="flex flex-col items-center justify-center bg-background text-foreground min-h-screen">
      <LandingNavbar />
      <Hero />
      <div className="flex gap-1 items-center mb-6 w-full pl-5">
        <p className="text-muted-foreground tracking-tight font-semibold duration-300 text-xl">
          Components
        </p>
        <p className="text-muted-foreground mb-2 text-sm font-semibold">[43]</p>
      </div>
      <Features />
      <Link
        href={"/explore"}
        className="flex items-center gap-1 mt-4 text-sm bg-primary text-primary-foreground font-semibold px-3 py-1 rounded-md hover:opacity-88 duration-300"
      >
        <p className="mb-[1px]">All components</p>
        <ArrowRight size={16} />
      </Link>
      <HorizontalScale className="w-full h-5 mt-5"/>
      <TestimonialSection />
      <FluidGradientText text="Pulse UI" />
      <LandingFooter />
    </div>
  );
}

const HorizontalScale = ({ className }: { className: string }) => {
  return (
    <div
      className={`scale-stripes ${className}`}
    ></div>
  );
};
