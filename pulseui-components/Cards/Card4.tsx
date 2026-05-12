"use client"

import React, { useRef, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/pulseui-components/Cards/CardStructure/Card"

export default function CardFace() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [streamOn, setStreamOn] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setStreamOn(true)
    } catch (err) {
      console.error(err)
    }
  }

  const capture = () => {
    const video = videoRef.current
    if (!video) return

    const canvas = document.createElement("canvas")
    canvas.width = video.videoWidth || 320
    canvas.height = video.videoHeight || 260

    const ctx = canvas.getContext("2d")
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height)

    const img = canvas.toDataURL("image/png")
    setImage(img)

    const stream = video.srcObject as MediaStream
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }

    setStreamOn(false)
  }


  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const midX = rect.width / 2
    const midY = rect.height / 2

    const rotateY = ((x - midX) / midX) * 8
    const rotateX = -((y - midY) / midY) * 8

    setRotate({ x: rotateX, y: rotateY })
  }

  const reset = () => setRotate({ x: 0, y: 0 })

  return (
    <div style={{ perspective: 1000 }}>
      <div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.2s ease",
        }}
      >
        <Card className="w-[320px] rounded-2xl overflow-hidden border-2 border-yellow-400 bg-black text-white shadow-2xl">
          {/* IMAGE */}
          <CardContent className="p-0 relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`h-[260px] w-full object-cover border-b-4 border-yellow-400 ${!streamOn ? "hidden" : ""
                }`}
            />

            {image && (
              <img
                src={image}
                className="h-[260px] w-full object-cover border-b-4 border-yellow-400"
              />
            )}

            {!streamOn && !image && (
              <div className="h-[260px] flex items-center justify-center bg-white border-b-4 border-yellow-400">
                <span className="text-yellow-400 font-bold text-lg">
                  No Face Yet
                </span>
              </div>
            )}

            {(image || streamOn) && (
              <div className="absolute bottom-3 left-3 text-sm bg-black/70 px-3 py-1.5 rounded-full border border-yellow-400 text-yellow-100 font-medium">
                You
              </div>
            )}
          </CardContent>

          {/* TEXT */}
          <CardContent className="p-6 bg-zinc-950">
            <CardTitle className="text-3xl font-bold text-yellow-400 tracking-tighter">
              Selfie Card
            </CardTitle>
            <CardDescription className="text-yellow-100/80 mt-1">
              Your real-time face inside a framed card
            </CardDescription>
          </CardContent>

          {/* BUTTONS */}
          <CardFooter className="flex gap-3 p-6 pt-0 bg-zinc-950">
            {!streamOn && !image && (
              <button
                onClick={startCamera}
                className="px-5 py-2.5 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors shadow-md"
              >
                Selfie
              </button>
            )}

            {streamOn && (
              <button
                onClick={capture}
                className="px-5 py-2.5 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors shadow-md"
              >
                Capture
              </button>
            )}

            {image && (
              <button
                onClick={() => setImage(null)}
                className="px-5 py-2.5 border-2 border-yellow-400 text-yellow-400 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Retake
              </button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}