"use client"

import React from "react"
import { motion, MotionProps } from "framer-motion"

type CardProps = MotionProps & {
  children?: React.ReactNode
  className?: string
}

function Card({ children, className, ...motionProps }: CardProps) {
  return (
    <motion.div
      {...motionProps}
      className={
        className ||
        "w-[360px] rounded-xl border border-black bg-white p-6 shadow-md hover:scale-105 easeInOut duration-300"
      }
    >
      {children}
    </motion.div>
  )
}

function CardTitle({ children, className, ...motionProps }: CardProps) {
  return (
    <motion.div
      {...motionProps}
      className={className || "text-xl font-semibold"}
    >
      {children}
    </motion.div>
  )
}

function CardDescription({ children, className, ...motionProps }: CardProps) {
  return (
    <motion.div
      {...motionProps}
      className={className || "text-sm opacity-70"}
    >
      {children}
    </motion.div>
  )
}

function CardContent({ children, className, ...motionProps }: CardProps) {
  return (
    <motion.div
      {...motionProps}
      className={className || "mt-3 text-sm"}
    >
      {children}
    </motion.div>
  )
}

function CardFooter({ children, className, ...motionProps }: CardProps) {
  return (
    <motion.div
      {...motionProps}
      className={className || "mt-4 border-t pt-3"}
    >
      {children}
    </motion.div>
  )
}

export { Card, CardTitle, CardDescription, CardContent, CardFooter }