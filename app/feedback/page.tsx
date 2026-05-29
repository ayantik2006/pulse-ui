"use client";

import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background text-foreground">
      <LandingNavbar />
      <HorizontalScale className="absolute top-20 left-0 h-6 w-full" />
      <VerticalScale className="absolute top-20 left-0 h-[72.2%] w-6" />
      <VerticalScale className="absolute top-20 right-0 h-[72.2%] w-6" />

      <main className="relative z-10 flex w-full flex-1 items-center justify-center px-6 pt-28 pb-14 sm:px-10">
        <div className="flex w-full max-w-2xl flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:shadow-[0_25px_70px_rgba(0,0,0,0.55)] sm:p-10">
          <div className="mb-8 space-y-3">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Share your feedback with us
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Tell us what worked, what did not, and what you want to see next in Pulse UI.
            </p>
          </div>
          <form
            className="flex w-full flex-col gap-5"
            action="https://api.staticforms.dev/submit"
            method="POST"
            onSubmit={() => {
              toast.success("Feedback shared with Ayantik!");
            }}
          >
            <input
              type="hidden"
              name="apiKey"
              value="sf_a5d8ancfkdacn74di8e5cg7a"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="http://localhost:3000/feedback"
            />
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="name"
              required
              placeholder="Your name"
              className="h-12 border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50"
            />

            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              name="email"
              placeholder="example@gmail.com"
              className="h-12 border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50"
            />

            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Your message
            </label>
            <Textarea
              id="message"
              required
              placeholder="What can we improve or what did you love about Pulse UI?"
              name="feedback message"
              className="min-h-28 border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50"
            />

            <button className="group mt-1 rounded-lg border border-border bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              Submit Feedback
            </button>
          </form>
        </div>
      </main>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_52%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%)]" />
      <LandingFooter />
    </div>
  );
}

export default page;

const HorizontalScale = ({ className }: { className: string }) => {
  return (
    <div
      className={`scale-stripes ${className}`}
    ></div>
  );
};

const VerticalScale = ({ className }: { className: string }) => {
  return (
    <div
      className={`scale-stripes ${className}`}
    ></div>
  );
};
