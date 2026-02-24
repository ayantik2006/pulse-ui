import { IndianRupee, Menu, SquareArrowOutUpRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function LandingNavbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  return (
    <div className="fixed top-0 w-full">
      <div className="flex items-center justify-between bg-[#1a1919b2] h-18 mx-10 my-5 rounded-lg backdrop-blur-[0rem] border border-[#2b2a2a] px-4 [@media(max-width:424px)]:mx-3">
        <div className="flex items-center gap-">
          <Image src="/logo.png" width={40} height={40} alt="logo"></Image>
          <h1 className="text-white text-2xl italic [@media(max-width:740px)]:hidden">
            ulse UI
          </h1>
        </div>
        <div className="flex gap-4 [@media(max-width:740px)]:hidden">
          <Link
            className="bg-[#dddddd] text-neutral-700 px-4 py-[0.4rem] rounded-lg duration-300 flex gap-1 text-[0.95rem] items-center font-semibold hover:bg-white"
            href="/"
          >
            <p>Get Started</p>
          </Link>
          <Link
            className="text-neutral-300 px-4 py-[0.4rem] rounded-lg duration-300 flex gap-2 text-[0.95rem] items-center font-semibold hover:text-white underline-offset-6 underline"
            href="/"
          >
            <IndianRupee size={18} className="mt-[0.1rem]" />
            <p>Pricing</p>
          </Link>
          <Link
            className="text-neutral-300 px-4 py-[0.4rem] rounded-lg duration-300 flex gap-2 text-[0.95rem] items-center font-semibold hover:text-white underline-offset-6 underline"
            href="https://github.com/ayantik2006/pulse-ui"
            target="_blank"
          >
            <SquareArrowOutUpRight size={18} className="mb-[0.1rem]" />
            <p>View GitHub</p>
          </Link>
        </div>
        <div
          className="[@media(min-width:740px)]:hidden hover:bg-neutral-800 rounded-full p-1 cursor-pointer"
          onClick={() => {
            setIsHamburgerActive((prev) => !prev);
          }}
        >
          {!isHamburgerActive && <Menu className="stroke-white" />}
          {isHamburgerActive && <X className="stroke-white" />}
        </div>
      </div>

      <div
        className={`bg-black border-2 border-neutral-900 mx-10 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isHamburgerActive ? "h-44 opacity-100" : "h-0 opacity-0"} flex flex-col gap-2 text-neutral-400 justify-center px-3 z-100`}
      >
        <div className="bg-neutral-300  py-2 px-3 rounded-lg text-black cursor-pointer flex items-center gap-2 duration-300">
          <p>Get Started</p>
        </div>
        <div className="hover:bg-neutral-950 py-2 px-3 rounded-lg hover:text-white cursor-pointer flex items-center gap-2 duration-300">
          <IndianRupee size={16} className="mb-[rem]" />
          <p>Pricing</p>
        </div>
        <Link
          className="hover:bg-neutral-950 py-2 px-3 rounded-lg hover:text-white cursor-pointer flex items-center gap-2 duration-300"
          href="https://github.com/ayantik2006/pulse-ui"
          target="_blank"
        >
          <SquareArrowOutUpRight size={16} className="mb-[rem]" />
          <p> View GitHub</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingNavbar;
