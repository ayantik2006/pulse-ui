"use client"

import { motion } from "framer-motion"

export default function Cursor2({ x, y }: any) {
  return (
    <motion.div
      animate={{
        x: x - 20,
        y: y - 20,
        scale: [1, 1.2, 1],
      }}
      transition={{
        scale: {
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        },
        x: { type: "spring", stiffness: 300, damping: 20 },
        y: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="
      fixed 
      w-10 h-10 
      rounded-full 
      border-2 border-black 
      pointer-events-none 
      z-[999999]
      mix-blend-difference
      shadow-[0_0_20px_rgba(255,255,255,0.6)]
      "
    />
  )
}