"use client";

import Link from "next/link";
import { BookOpenText, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <div className="text-white w-full h-full mx-10 flex flex-col items-center gap-10">
      <motion.div className="flex flex-col items-center text-6xl gap-7 font-bold">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl flex flex-wrap items-center justify-center gap-3 [@media(max-width:1145px)_and_(min-width:534px)]:text-5xl [@media(max-width:534px)]:text-4xl text-center bg-linear-to-t from-neutral-500 via-neutral-300 to-white text-transparent bg-clip-text"
        >
          {/* <div className="bg-white animate-pulse w-14 h-14 rounded-full mr-4"></div> */}
          <p className="tracking-[0.4rem]">Build Faster.</p>
          <p className="tracking-[0.4rem]">Design Smarter.</p>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay:0.4 }}
          className="bg-linear-to-t from-neutral-500 via-neutral-300 to-white text-transparent bg-clip-text [@media(max-width:1145px)_and_(min-width:534px)]:text-5xl [@media(max-width:534px)]:text-4xl"
        >
          Ship Better.
        </motion.h1>
      </motion.div>
      <div className="flex gap-5 z-80">
        <Link
          href="/"
          className="flex items-center gap-3 hover:bg-black cursor-pointer px-3 py-1 rounded-lg border border-neutral-400"
        >
          <BookOpenText size={19} />
          <p className="text-[1.1rem] [@media(max-width:425px)]:text-[0.9rem]">
            View Docs
          </p>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 bg-white text-black font-semibold cursor-pointer px-4 py-1 rounded-lg"
        >
          <IndianRupee size={19} />
          <p className="text-[1.1rem] [@media(max-width:425px)]:text-[0.9rem]">
            Pricing
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
