"use client";

// import { useTheme } from "./context/ThemeContext";
// import { theme as THEME, themeType } from "@/types/themeType";
import LandingNavbar from "@/components/LandingNavbar";
import Hero from "@/components/Hero";

export default function Home() {
  // const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen text-black flex items-center bg-neutral-950 bg-[url('/grid.svg')]">
      <div
        className="absolute inset-0 
  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
  animate-pulse
  animation-duration-[6s]"
      ></div>
      <LandingNavbar />
      <Hero/>
    </div>
  );
}
