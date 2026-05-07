"use client"

import React, { useState } from "react"
import { motion, MotionProps } from "framer-motion"
import { Heart, MessageCircle, ExternalLink } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from "./CardStructure/Card"

type CardProps = MotionProps & {
  Image?: string
  Name?: string
  Designation?: string
  Tag?: string
  Title?: string
  Description?: string
  onLike?: () => void
  onMessage?: () => void
  onExternalLink?: () => void
  children?: React.ReactNode
  className?: string
}

export default function Card1({
  Image,
  Name,
  Designation,
  Tag,
  Title,
  Description,
  onLike,
  onMessage,
  onExternalLink,
  className,
  ...motionProps
}: CardProps) {

  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    setRotate({
      x: -((y - midY) / midY) * 10,
      y: ((x - midX) / midX) * 10,
    })
  }

  const resetTilt = () => setRotate({ x: 0, y: 0 })

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
        {...motionProps}
      >
        <Card
          className={`
            relative overflow-hidden
            w-[320px] rounded-2xl shadow-2xl
            text-white ease-in-out duration-300
            ${className || ""}
          `}
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* IMAGE */}
          <CardContent style={{ transform: "translateZ(40px)" }} className="p-0 relative">
            {Image && (
              <img
                src={Image}
                alt={Name || "card image"}
                className="h-full w-full object-cover rounded-t-2xl"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            <div className="absolute bottom-4 left-4">
              {Name && <CardTitle>{Name}</CardTitle>}
              {Designation && <CardDescription>{Designation}</CardDescription>}
            </div>
          </CardContent>

          {/* TEXT */}
          <CardContent style={{ transform: "translateZ(20px)" }} className="p-5 bg-black">
            {Tag && (
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                {Tag}
              </span>
            )}
            {Title && <CardTitle className="mt-3">{Title}</CardTitle>}
            {Description && (
              <CardDescription className="mt-2 text-gray-400">
                {Description}
              </CardDescription>
            )}
          </CardContent>

          {/* FOOTER */}
          <CardFooter style={{ transform: "translateZ(30px)" }} className="p-5 pt-0 bg-black">
            <div className="flex gap-3">
              <button
                onClick={onLike}
                className="w-10 h-10 rounded-full bg-red-600 hover:scale-105 ease-in-out duration-100 flex items-center justify-center"
              >
                <Heart size={30} />
              </button>
              <button
                onClick={onMessage}
                className="w-10 h-10 rounded-full bg-blue-400 hover:scale-105 ease-in-out duration-100 flex items-center justify-center"
              >
                <MessageCircle size={30} />
              </button>
              <button
                onClick={onExternalLink}
                className="w-10 h-10 rounded-full bg-green-400 hover:scale-105 ease-in-out duration-100 flex items-center justify-center"
              >
                <ExternalLink size={30} />
              </button>
            </div>
          </CardFooter>

        </Card>
      </motion.div>
    </div>
  )
}