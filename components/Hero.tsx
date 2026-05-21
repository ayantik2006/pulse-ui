"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import MagneticButton from "@/components/MagneticButton";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "./ui/avatar";

const inter = Inter({
  subsets: ["latin"],
});

function Hero() {
  const router = useRouter();

  return (
    <div className="text-white w-full h-screen flex flex-col gap-10 items-center justify-center">
      <HorizontalScale className="absolute top-20 left-0 w-full h-8" />
      <HorizontalScale className="absolute top-[92%] left-0 w-full h-8" />
      <VerticalScale className="absolute top-20 left-0 w-8 h-[85%]" />
      <VerticalScale className="absolute top-20 right-0 w-8 h-[85%]" />
      <div className="flex flex-col w-full pl-20 pr-20 gap-6 [@media(max-width:565px)]:px-10 [@media(max-width:565px)]:items-center [@media(max-width:527px)]:mt-10">
        <div
          className={`text-6xl font-bold shine-text flex tracking-tight [@media(max-width:943px)_and_(min-width:789px)_and_(min-width:657px)]:text-5xl [@media(max-width:789px)_and_(min-width:653px)]:text-4xl [@media(max-width:653px)_and_(min-width:494px)]:text-3xl [@media(max-width:494px)_and_(min-width:403px)]:text-2xl [@media(max-width:403px)]:text-xl text-center`}
        >
          <p>Build interfaces that feel alive.</p>
        </div>
        <h2
          className={`${inter.className} text-[1rem] text-neutral-200/80 w-full pl-1 pr-10 [@media(max-width:565px)]:text-center [@media(max-width:565px)]:pr-0 [@media(max-width:494px)]:text-xs`}
        >
          Production-ready animated UI components for React, Next.js and
          Tailwind.
        </h2>
      </div>
      <div className="flex [@media(max-width:581px)]:flex-col items-center w-full pl-20 gap-5 mx-3 [@media(max-width:581px)]:px-0 [@media(max-width:581px)]:mx-0">
        <Link
          href={"/components"}
          className="h-fit p-1 border-blue-500 border-2 border-dashed cursor-pointer rounded-md w-48 [@media(max-width:581px)]:w-[78%]"
        >
          <MagneticButton className="text-sm bg-linear-to-b from-blue-700 to-blue-500 py-2 cursor-pointer font-semibold rounded-sm w-45  [@media(max-width:581px)]:w-full">
            <p>Explore Components</p>
          </MagneticButton>
        </Link>
        <Link
          href={"https://github.com/ayantik2006/pulse-ui"}
          target="_blank"
          className="bg-white group p-1 cursor-pointer rounded-md w-48 [@media(max-width:581px)]:w-[78%]"
        >
          <button className="text-black text-sm py-2 border-2 border-neutral-600/40 rounded-md font-semibold cursor-pointer bg-neutral-400/10 group-hover:border-neutral-600/60 group-hover:bg-radial from-white to-neutral-400/25 duration-300 w-46  [@media(max-width:581px)]:w-full">
            <p>View GitHub</p>
          </button>
        </Link>
      </div>
      <p className="w-full px-20 [@media(max-width:565px)]:text-center -mb-6 text-[1rem] text-neutral-200/80">
        Trusted by 1000+ founders, developers and creators
      </p>
      <div className="w-full flex [@media(max-width:565px)]:flex-col [@media(max-width:565px)]:justify-center items-center gap-3">
        <AvatarGroup className="pl-20 [@media(max-width:565px)]:pr-20">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/av1.jpg" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/av2.jpg" alt="@maxleiter" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/av3.jpg" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/av4.jpg" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/av5.jpg" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <div className="flex gap-1">
          <Star size={20} className="fill-amber-400 stroke-amber-400" />
          <Star size={20} className="fill-amber-400 stroke-amber-400" />
          <Star size={20} className="fill-amber-400 stroke-amber-400" />
          <Star size={20} className="fill-amber-400 stroke-amber-400" />
          <Star size={20} className="fill-amber-400 stroke-amber-400" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

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
