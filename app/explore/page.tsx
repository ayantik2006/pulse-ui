"use client";

import LandingNavbar from "@/components/LandingNavbar";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { componentsList } from "@/lib/componentsList";

function page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <LandingNavbar />
      <HorizontalScale className="absolute top-20 left-0 w-full h-6" />
      <HorizontalScale className="absolute bottom-0 left-0 w-full h-6" />
      <VerticalScale className="absolute top-20 left-0 w-6 h-[calc(100%-5rem)]" />
      <VerticalScale className="absolute top-20 right-0 w-6 h-[calc(100%-5rem)]" />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-16 sm:px-10">
        <section className="rounded-md border border-border bg-card/80 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <h1 className="text-xl font-semibold tracking-tight">
            Explore premium Pulse UI components
          </h1>
          <p className="mt-3 max-w-2xl text-md text-muted-foreground">
            Pick a component below to view interactive demos and implementation
            examples.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x-2 divide-y-2 border-2 border-r-0">
            {componentsList.map((component, index) => {
              return (
                <Link
                  href={component.href}
                  key={index}
                  className="px-6 py-4 dark:hover:bg-neutral-700/50 hover:bg-neutral-100"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="">{component.name}</p>
                    {component.isPopular && (
                      <Sparkles size={16} className="shrink-0 text-amber-400" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
    </div>
  );
}

export default page;

const HorizontalScale = ({ className }: { className: string }) => {
  return <div className={`scale-stripes ${className}`}></div>;
};

const VerticalScale = ({ className }: { className: string }) => {
  return <div className={`scale-stripes ${className}`}></div>;
};
