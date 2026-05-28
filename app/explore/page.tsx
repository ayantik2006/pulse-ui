"use client";

import LandingNavbar from "@/components/LandingNavbar";
import { Sparkles } from "lucide-react";
import Link from "next/link";

function page() {
  const componentsList = [
    // {
    //   name: "Buttons",
    //   href: "/buttons",
    //   isPopular: false,
    // },
    {
      name: "Loaders",
      href: "/components/loaders",
      isPopular: false,
    },
    {
      name: "File Upload",
      href: "/components/file-upload",
      isPopular: false,
    },
    {
      name: "Toasts",
      href: "/components/toasts",
      isPopular: false,
    },
    {
      name: "Accordian",
      href: "/components/accordians",
      isPopular: false,
    },
    {
      name: "Typewriter Effect",
      href: "/components/typewriter-effects",
      isPopular: false,
    },
    {
      name: "Rating",
      href: "/components/ratings",
      isPopular: false,
    },
    {
      name: "Wheel Picker",
      href: "/components/wheel-pickers",
      isPopular: true,
    },
    {
      name: "Copy Button",
      href: "/components/copy-button",
      isPopular: false,
    },
    {
      name: "Switch",
      href: "/components/switch",
      isPopular: false,
    },
    {
      name: "Date Picker",
      href: "/components/date-picker",
      isPopular: false,
    },
    {
      name: "Time Picker",
      href: "/components/time-picker",
      isPopular: false,
    },
    {
      name: "Password",
      href: "/components/password",
      isPopular: false,
    },
    {
      name: "Elastic Slider",
      href: "/components/elastic-slider",
      isPopular: true,
    },
    {
      name: "Cards",
      href: "/components/cards",
      isPopular: false,
    },
    {
      name: "Slide To Unlock",
      href: "/components/slide-to-unlock",
      isPopular: true,
    },
    {
      name: "OTP Input",
      href: "/components/otp-input",
      isPopular: false,
    },
    {
      name: "Hold To Confirm Button",
      href: "/components/hold-to-confirm",
      isPopular: true,
    },
    {
      name: "Text Flip",
      href: "/components/text-flip",
      isPopular: false,
    },
    {
      name: "Magnetic Button",
      href: "/components/magnetic-button",
      isPopular: true,
    },
    {
      name: "Floating Dock",
      href: "/components/floating-dock",
      isPopular: true,
    },
    {
      name: "Tooltip",
      href: "/components/tooltip",
      isPopular: true,
    },
    {
      name: "Filter Selector",
      href: "/components/filter-selector",
      isPopular: true,
    },
    {
      name: "Gooey Input",
      href: "/components/gooey-input",
      isPopular: true,
    },
    {
      name: "Team Cards",
      href: "/components/team-cards",
      isPopular: false,
    },
    {
      name: "Opening Laptop",
      href: "/components/opening-laptop",
      isPopular: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <LandingNavbar />
      <HorizontalScale className="absolute top-20 left-0 w-full h-6" />
      <HorizontalScale className="absolute bottom-0 left-0 w-full h-6" />
      <VerticalScale className="absolute top-20 left-0 w-6 h-[calc(100%-5rem)]" />
      <VerticalScale className="absolute top-20 right-0 w-6 h-[calc(100%-5rem)]" />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-16 sm:px-10">
        <section className="rounded-2xl border border-neutral-800 bg-black/80 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Explore premium Pulse UI components
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-400">
            Pick a component below to view interactive demos and implementation
            examples.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {componentsList.map((component, index) => {
              return (
                <Link
                  href={component.href}
                  key={index}
                  className="group rounded-lg border border-neutral-800 bg-neutral-950/60 px-4 py-3 transition hover:border-neutral-600 hover:bg-neutral-900/80"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm sm:text-base text-neutral-200 group-hover:text-white">
                      {component.name}
                    </p>
                    {component.isPopular && (
                      <Sparkles size={16} className="shrink-0 text-amber-300" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
    </div>
  );
}

export default page;

const HorizontalScale = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-[repeating-linear-gradient(-45deg,#000_0px,#0a0a0a_10px,#111111_10px,#111111_12px)] ${className}`}
    ></div>
  );
};

const VerticalScale = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-[repeating-linear-gradient(-45deg,#000_0px,#0a0a0a_10px,#111111_10px,#111111_12px)] ${className}`}
    ></div>
  );
};
