import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function LandingNavbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  return (
    <div className="text-white fixed top-0 w-full h-20 flex items-center justify-between bg-black z-80">
      <Link
        href={"/"}
        className="flex gap-1 items-center pl-20 [@media(max-width:780px)]:pl-10 "
      >
        <Image src="/logo.png" height={38} width={38} alt="logo" />
        <p className="italic font-semibold text-2xl">ulse</p>
        <p className="italic font-semibold text-2xl ml-1">UI</p>
      </Link>
      <div className="flex gap-10 items-center [@media(max-width:780px)]:hidden pr-20 [@media(max-width:780px)]:pr-10">
        <Link
          href={"/"}
          className="font-semibold text-neutral-400 hover:bg-neutral-700/30 rounded-md py-2 px-3 hover:text-neutral-300 text-[0.9rem]"
        >
          Home
        </Link>
        <Link
          href={"/buttons"}
          className="font-semibold text-neutral-400 hover:bg-neutral-700/30 rounded-md py-2 px-3 hover:text-neutral-300 text-[0.9rem]"
        >
          Documentation
        </Link>
        {/* <Link
          href={"#examples"}
          className="font-semibold hover:text-neutral-300 text-[0.9rem]"
        >
          Examples
        </Link> */}
        <Link
          href={"/feedback"}
          className="font-semibold text-neutral-400 hover:bg-neutral-700/30 rounded-md py-2 px-3 hover:text-neutral-300 text-[0.9rem]"
        >
          Feedback
        </Link>
        <Tooltip>
          <TooltipTrigger className="z-81">
            <Link
              href={"https://github.com/ayantik2006/pulse-ui"}
              className="font-semibold hover:text-neutral-300 text-[0.9rem] hover:bg-neutral-900 p-[0.4rem] px-2 rounded flex items-center gap-2 duration-300"
              target="_blank"
            >
              <i className="devicon-github-original" />
              <p className="text-[0.8rem]">GitHub</p>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="z-90" side="top">
            <p className="font-semibold">View in GitHub</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div
        className="[@media(min-width:780px)]:hidden pr-10 cursor-pointer"
        onClick={() => setIsHamburgerActive((prev) => !prev)}
      >
        <AnimatePresence mode="wait">
          {!isHamburgerActive ? (
            <motion.div
              key="hamburger"
              className="flex flex-col gap-1"
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-[0.1rem] w-4.5 bg-white" />
              <div className="h-[0.1rem] w-4.5 bg-white" />
            </motion.div>
          ) : (
            <motion.div
              key="x"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isHamburgerActive && (
          <div className="absolute top-20 w-full h-fit z-80 px-3 pt-2 flex items-center justify-center">
            <motion.div
              className="flex flex-col gap-5 w-full items-center justify-center p-2 py-4 bg-black border-2 border-neutral-800/50 rounded shadow-[0_15px_15px_black]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Link href={"/"} className="font-semibold hover:text-neutral-300 text-neutral-400 hover:bg-neutral-500/25 w-full px-4 py-2 duration-300 rounded-sm text-sm">
                Home
              </Link>
              <Link
                href={"/buttons"}
                className="font-semibold hover:text-neutral-300 text-neutral-400 hover:bg-neutral-500/25 w-full px-4 py-2 duration-300 rounded-sm text-sm"
              >
                Documentation
              </Link>
              <Link
                href={"/feedback"}
                className="font-semibold hover:text-neutral-300 text-neutral-400 hover:bg-neutral-500/25 w-full px-4 py-2 duration-300 rounded-sm text-sm"
              >
                Feedback
              </Link>
              <Link
                href={"https://github.com/ayantik2006/pulse-ui"}
                target="_blank"
                className="font-semibold hover:text-neutral-300 text-neutral-400 hover:bg-neutral-500/25 w-full px-4 py-2 duration-300 rounded-sm text-sm"
              >
                GitHub
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingNavbar;

const HorizontalScale = () => {
  return (
    <div className="bg-[repeating-linear-gradient(-45deg,#000_0px,#0a0a0a_10px,#111111_10px,#111111_12px)] h-5 w-20"></div>
  );
};
