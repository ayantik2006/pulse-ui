"use client";

import Examples from "@/components/Examples";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import Hero from "@/components/Hero";
import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import TestimonialSection from "@/components/TestimonialSection";
import Testimonial from "@/components/TestimonialSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { componentsList } from "@/lib/componentsList";

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
        <p className="text-muted-foreground mb-2 text-sm font-semibold">[{componentsList.length}]</p>
      </div>
      <Examples />
      <motion.div
        whileHover="hover"
        className="w-35"
        initial={{
          width: "125px",
        }}
        variants={{
          hover: {
            width: "137px",
          },
        }}
      >
        <Link
          href={"/explore"}
          className="flex items-center gap-1 mt-4 text-sm bg-primary text-primary-foreground font-semibold pl-3 py-1 rounded-md hover:opacity-88 duration-300 w-full"
        >
          <p className="mb-[1px]">All components</p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              display: "none",
            }}
            variants={{
              hover: {
                display: "flex",
                transition: {
                  delay: 0.3,
                },
              },
            }}
            transition={{
              duration: 0.3,
              delay: -0.3,
            }}
          >
            <motion.path
              variants={{
                hover: { pathLength: 1, opacity: 1 },
              }}
              initial={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              d="M5 12h14"
            />
            <motion.path
              variants={{
                hover: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                  },
                },
              }}
              initial={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              d="m12 5 7 7-7 7"
            />
          </motion.svg>
        </Link>
      </motion.div>
      <HorizontalScale className="w-full h-5 mt-5" />
      <TestimonialSection />
      <FluidGradientText text="Pulse UI" />
      <LandingFooter />
    </div>
  );
}

const HorizontalScale = ({ className }: { className: string }) => {
  return <div className={`scale-stripes ${className}`}></div>;
};
