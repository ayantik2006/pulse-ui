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
      href: "/loaders",
      isPopular: false,
    },
    {
      name: "File Upload",
      href: "/file-upload",
      isPopular: false,
    },
    {
      name: "Toasts",
      href: "/toasts",
      isPopular: false,
    },
    {
      name: "Accordian",
      href: "/accordians",
      isPopular: false,
    },
    {
      name: "Typewriter Effect",
      href: "/typewriter-effects",
      isPopular: false,
    },
    {
      name: "Rating",
      href: "/ratings",
      isPopular: false,
    },
    {
      name: "Wheel Picker",
      href: "/wheel-pickers",
      isPopular: true,
    },
    {
      name: "Copy Button",
      href: "/copy-button",
      isPopular: false,
    },
    {
      name: "Switch",
      href: "/switch",
      isPopular: false,
    },
    {
      name: "Date Picker",
      href: "/date-picker",
      isPopular: false,
    },
    {
      name: "Time Picker",
      href: "/time-picker",
      isPopular: false,
    },
    {
      name: "Password",
      href: "/password",
      isPopular: false,
    },
    {
      name: "Elastic Slider",
      href: "/elastic-slider",
      isPopular: true,
    },
    {
      name: "Cards",
      href: "/cards",
      isPopular: false,
    },
    {
      name: "Slide To Unlock",
      href: "/slide-to-unlock",
      isPopular: true,
    },
    {
      name: "OTP Input",
      href: "/otp-input",
      isPopular: false,
    },
    {
      name: "Hold To Confirm Button",
      href: "/hold-to-confirm",
      isPopular: true,
    },
    {
      name: "Text Flip",
      href: "/text-flip",
      isPopular: false,
    },
    {
      name: "Magnetic Button",
      href: "/magnetic-button",
      isPopular: true,
    },
    {
      name: "Floating Dock",
      href: "/floating-dock",
      isPopular: true,
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
            Pick a component below to view interactive demos and implementation examples.
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
                      <Sparkles
                        size={16}
                        className="shrink-0 text-amber-300"
                      />
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
