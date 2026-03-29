"use client";
import { ChevronRight, CirclePlay, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

function Hero() {
  const router = useRouter();

  return (
    <div className="text-white w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <div
          className={`${playfair.className} text-6xl font-bold [@media(max-width:793px)]:text-4xl shine-text flex underline underline-offset-3`}
        >
          <p>Ship Beautiful UIs Faster</p>
        </div>
        <h2
          className={`${playfair.className} text-3xl text-neutral-300 [@media(max-width:793px)]:text-2xl`}
        >
          Without the Headache
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="p-1 bg-yellow-500 rounded bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center group">
          <button
            className="px-20 text-sm py-[0.5rem] rounded bg-black text-white cursor-pointer font-semibold flex items-center gap-2"
            onClick={() => {
              router.push("/buttons");
            }}
          >
            <p>Browse Components</p>
            <ChevronRight size={15} className="mt-[0.2rem] ml-3 group-hover:translate-x-2 duration-300" />
          </button>
        </div>
        <Link
          href={"https://github.com/ayantik2006/pulse-ui"}
          className="p-1 bg-white rounded group"
          target="_blank"
        >
          <div className="bg-black rounded py-[0.4rem] px-20 text-sm bg-white text-black border-2 border-black flex gap-2 font-semibold">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              width={20}
              height={20}
              alt="github-icon"
            />
            <p>View on Github</p>
            <ChevronRight size={15} className="mt-[0.2rem] ml-3 group-hover:translate-x-2 duration-300" />
          </div>
        </Link>
      </div>
      {/* <Link href="/playground" target="_blank" className="flex gap-1 text-neutral-300 text-sm underline underline-offset-2 cursor-pointer">
        <ExternalLink size={17} className="mt-[0.1rem] stroke-[2px]"/>
        <p>Visit Playground</p>
      </Link> */}
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              height={35}
              width={35}
              alt="react"
              className=""
            />
          </TooltipTrigger>
          <TooltipContent className="bg-white font-semibold">
            <p>React</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              height={35}
              width={35}
              alt="ts"
              className=""
            />
          </TooltipTrigger>
          <TooltipContent className="bg-white font-semibold">
            <p>Typescript</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              height={35}
              width={35}
              alt="ts"
              className=""
            />
          </TooltipTrigger>
          <TooltipContent className="bg-white font-semibold">
            <p>Tailwind CSS</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div className="p-[0.1rem] rounded bg-white ">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                height={35}
                width={35}
                alt="motion"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white font-semibold">
            <p>Motion</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src="https://ui.shadcn.com/apple-touch-icon.png"
              height={35}
              width={35}
              alt="shadcn"
              className=""
            />
          </TooltipTrigger>
          <TooltipContent className="bg-white font-semibold">
            <p>shadcn</p>
          </TooltipContent>
        </Tooltip>
      </div>
      {/* <div className="flex flex-wrap mx-5 items-center justify-center gap-3">
        <div className="bg-neutral-800 px-3 py-1 pb-[0.3rem] rounded-[20px] border border-neutral-600 flex items-center gap-2">
          <University size={15} className="stroke-white" />
          <p className="text-sm">Used by developers at NITs</p>
        </div>
        <div className="bg-neutral-800 px-3 py-1 pb-[0.3rem] rounded-[20px] border border-neutral-600 flex items-center gap-2">
          <Package size={15} className="stroke-white" />
          <p className="text-sm">Open Source</p>
        </div>
        <div className="bg-neutral-800 px-3 py-1 pb-[0.3rem] rounded-[20px] border border-neutral-600 flex items-center gap-2">
          <Code size={15} className="stroke-white" />
          <p className="text-sm">Built for modern web apps</p>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
