"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import Cursor1 from "../Cursor1"
import Cursor2 from "../Cursor2"
import { useMouseCursor } from "@/context/MouseCursorContext"

export default function Cursor() {
    const { type } = useMouseCursor();

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 20, stiffness: 150 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [mouseX, mouseY])

    useEffect(() => {
        document.body.style.cursor = type === "default" ? "auto" : "none"
    }, [type])

    if (type === "default") return null

    if (type === "dot") {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />
                <motion.div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        x: x,
                        y: y,
                        translateX: "-50%",
                        translateY: "-50%",
                        pointerEvents: "none",
                        zIndex: 9999
                    }}
                >
                    <Cursor1 />
                </motion.div>
            </>
        )
    }
    if (type === "ring") return (
      <>
                <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />
                <motion.div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        x: x,
                        y: y,
                        translateX: "-50%",
                        translateY: "-50%",
                        pointerEvents: "none",
                        zIndex: 9999
                    }}
                >
                    <Cursor2 />
                </motion.div>
            </>
    )


    return null
}