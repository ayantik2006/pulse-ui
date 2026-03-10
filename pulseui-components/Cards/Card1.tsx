"use client"

import React from "react"
import { motion, MotionProps } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./CardStructure/Card"

type CardProps = MotionProps & {
  children: React.ReactNode
  className?: string
}

export default function Card1({ children, className, ...motionProps }: CardProps) {
  return (
   <Card className="bg-white rounded-2xl shadow-2xl hover:scale-101 ease-in-out duration-300 w-[320px] overflow-hidden ">

  <CardContent className="relative p-0">

    <img
      src="https://res.cloudinary.com/dpju1wia5/image/upload/v1773058342/467120601_9484919178189518_6991019461191973247_n_bw0gmk.jpg"
      className="h-70 w-full object-cover"
    />

    <div className="absolute bottom-4 left-4 text-white">
      <CardTitle className="text-xl font-semibold">
       Hitesh Chowdhury
      </CardTitle>

      <CardDescription className="text-[15px] opacity-200 hover:scale-90 ease-in-out duration-300 text-white ">
        Guru Ji
      </CardDescription>
    </div>

  </CardContent>


  <CardContent className="p-6">

    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
      DESIGN
    </span>

    <CardTitle className="text-xl mt-3">
      Chai Aur Code
    </CardTitle>

    <CardDescription className="text-gray-600 mt-2">
     Hanji to kaisi lagi Pulse Ui?
    </CardDescription>

  </CardContent>


  <CardFooter className="flex gap-3 p-6 pt-0">

    <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:scale-120 ease-in-out  duration-300">
      ❤
    </button>

    <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:scale-120 ease-in-out  duration-300 ">
      💬
    </button>

    <button className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center hover:scale-120 ease-in-out  duration-300 ">
      ↗
    </button>

  </CardFooter>

</Card>
  )
}