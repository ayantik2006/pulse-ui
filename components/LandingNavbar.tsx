import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function LandingNavbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  return (
    <div className="text-white fixed top-0 w-full h-20 flex items-center justify-between  shadow-[0_0_20px_gray] backdrop-blur-lg">
      <div className="flex gap-1 items-center pl-20 [@media(max-width:655px)]:pl-10 ">
        <Image src="/logo.png" height={38} width={38} alt="logo" />
        <p className="italic font-semibold text-2xl">ulse</p>
        <p className="italic font-semibold text-2xl ml-1">UI</p>
      </div>
      <div className="flex gap-10 items-center [@media(max-width:655px)]:hidden pr-20 [@media(max-width:655px)]:pr-10">
        <Link href={""} className="font-semibold hover:text-neutral-300">
          Documentation
        </Link>
        <Link href={""} className="font-semibold hover:text-neutral-300">
          Examples
        </Link>
        <Link
          href={"https://github.com/ayantik2006/pulse-ui"}
          className="font-semibold hover:text-neutral-300"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <div
        className="[@media(min-width:655px)]:hidden pr-10 cursor-pointer"
        onClick={() => setIsHamburgerActive((prev) => !prev)}
      >
        {!isHamburgerActive && (
          <div className="flex flex-col gap-2">
            <div className="h-[0.1rem] w-5 bg-white " />
            <div className="h-[0.1rem] w-5 bg-white " />
          </div>
        )}
        {
            isHamburgerActive && (
                <div>
                    <X/>
                </div>
            )
        }
      </div>
      <AnimatePresence>
        {isHamburgerActive && (
          <div className="absolute top-20 w-full h-fit z-80 px-3 pt-2 flex items-center justify-center">
            <motion.div
              className="flex flex-col gap-5 w-full items-center justify-center p-2 py-4 bg-black border-2 border-neutral-800 rounded shadow-[0_15px_15px_black]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Link href={""} className="font-semibold hover:text-neutral-300">
                Documentation
              </Link>
              <Link href={""} className="font-semibold hover:text-neutral-300">
                Examples
              </Link>
              <Link href={"https://github.com/ayantik2006/pulse-ui"} className="font-semibold hover:text-neutral-300">
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
