"use client";

import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function page() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <LandingNavbar />
      <div className="flex flex-col gap-10 mx-20 min-h-screen items-center justify-center">
        <h1 className="text-white text-3xl font-semibold">
          Please share Your valuable feedback
        </h1>
        <form
          className="flex flex-col w-full gap-5 bg-neutral-800 p-8 rounded border border-neutral-600"
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
          <input type="hidden" name="redirectTo" value="http://localhost:3000/feedback" />
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="name"
            required
            placeholder="Your name"
          />

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            name="email"
            placeholder="example@gmail.com"
          />

          <label htmlFor="message" className="text-white">
            Your message
          </label>
          <Textarea
            id="message"
            required
            placeholder="What can we improve or what did you love about Pulse UI?"
            name="feedback message"
          />

          <button className="p-1 bg-white rounded group cursor-pointer hover:opacity-90 duration-300">
            <div className="bg-black rounded py-[0.4rem] px-20 text-sm bg-white text-black border-2 border-black flex gap-2 font-semibold items-center justify-center">
              <p>Submit Feedback</p>
            </div>
          </button>
        </form>
      </div>
      <LandingFooter />
    </div>
  );
}

export default page;
