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
        <div className="flex w-full max-w-140 flex-col rounded-md border border-border bg-card/80 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:shadow-[0_25px_70px_rgba(0,0,0,0.55)] sm:p-10">
          <div className="mb-8 space-y-3">
            <h1 className="text-balance font-semibold tracking-tight text-foreground">
              Share your feedback with us
            </h1>
            <p className="text-sm text-muted-foreground">
              Tell us what worked, what did not, and what you want to see next
              in Pulse UI.
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
              value="https://pulseui-henna.vercel.app"
            />
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="name"
              required
              placeholder="Your name"
              className="h-10 border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50"
            />

            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              name="email"
              placeholder="example@gmail.com"
              className="h-10 border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50"
            />

            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Your message
            </label>
            <Textarea
              id="message"
              required
              placeholder="What can we improve or what did you love about Pulse UI?"
              name="feedback message"
              className="min-h-28 border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50"
            />

            <div
              className="bg-primary group p-1 cursor-pointer rounded-md w-full [@media(max-width:581px)]:w-[78%] duration-300"
            >
              <button className="text-primary-foreground text-sm py-2 border-2 rounded-md font-semibold cursor-pointer dark:border dark:border-neutral-400 dark:hover:border-neutral-500 hover:bg-radial dark:hover:from-white dark:hover:to-neutral-400/55 border-neutral-700 hover:border-neutral-600 from-neutral-900 to-neutral-500/35 duration-300 w-full [@media(max-width:581px)]:w-full">
                <p>View GitHub</p>
              </button>
            </div>
          </form>
        </div>
      </main>
      <LandingFooter />
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
