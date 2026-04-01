"use client"

import React, { useState } from "react"
import { motion, MotionProps } from "framer-motion"
import { Heart } from "lucide-react"
import { MessageCircle } from "lucide-react"
import { ExternalLink } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from "./CardStructure/Card"

type CardProps = MotionProps & {
  children?: React.ReactNode
  className?: string
}


export default function Card1({ className, ...motionProps }: CardProps) {

  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const midX = rect.width / 2
    const midY = rect.height / 2

    const rotateY = ((x - midX) / midX) * 10   // left-right tilt
    const rotateX = -((y - midY) / midY) * 10  // top-bottom tilt

    setRotate({ x: rotateX, y: rotateY })
  }

  const resetTilt = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div style={{ perspective: 1000 }}>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        <Card
          className={`
          relative overflow-hidden
          w-[320px]
          rounded-2xl
          shadow-2xl
          text-white
          ease-in-out duration-300
          ${className || ""}
          `}
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* IMAGE */}
          <CardContent style={{ transform: "translateZ(40px)" }} className="p-0 relative">

            <img
              src="https://res.cloudinary.com/dpju1wia5/image/upload/v1773058342/467120601_9484919178189518_6991019461191973247_n_bw0gmk.jpg"
              className="h-full w-full object-cover rounded-t-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

            <div className="absolute bottom-4 left-4">
              <CardTitle>Hitesh Chowdhury</CardTitle>
              <CardDescription>Guru Ji</CardDescription>
            </div>

          </CardContent>

          {/* TEXT */}
          <CardContent style={{ transform: "translateZ(20px)" }} className="p-5 bg-black  ">

            <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
              DESIGN
            </span>

            <CardTitle className="mt-3">
              Chai Aur Code
            </CardTitle>

            <CardDescription className="mt-2 text-gray-400">
              Hanji to kaisi lagi Pulse UI?
            </CardDescription>

          </CardContent>

          {/* FOOTER */}
          <CardFooter style={{ transform: "translateZ(30px)" }} className="p-5 pt-0 bg-black">

            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-red-600 ease-in-out hover:scale-105 duration-100 flex items-center justify-center"><Heart size={30} /></button>
              <button className="w-10 h-10  rounded-full bg-blue-400 ease-in-out duration-100 scale-105 flex items-center justify-center"><MessageCircle size={30}/></button>
              <button className="w-10 h-10  rounded-full hover:scale-105 bg-green-400 duration-100 ease-in-out flex items-center justify-center"><ExternalLink size={30}/></button>
            </div>

          </CardFooter>

        </Card>

      </motion.div>
    </div>
  )
}