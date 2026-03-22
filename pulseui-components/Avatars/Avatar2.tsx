"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Avatar2({
  src,
  fallBackText,
  className = "",
  size,
  title,
}: {
  src: string;
  fallBackText: string;
  className?: string;
  size: number;
  title: string;
}) {
  const [isImageExisting, setIsImageExisting] = useState(true);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => setIsAvatarHovered(true)}
      onMouseLeave={() => setIsAvatarHovered(false)}
    >
      <AnimatePresence>
        {isAvatarHovered && (
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-700 px-2 py-1 rounded text-sm whitespace-nowrap z-50 shadow text-white font-semibold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ scale: 0 }}
          >
            <p>{title}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {isImageExisting ? (
        <div className="rounded-full border-2 border-neutral-900">
          <Image
            className="rounded-full"
            src={src}
            height={size}
            width={size}
            alt=""
            onError={() => setIsImageExisting(false)}
          />
        </div>
      ) : (
        <div
          style={{
            height: `${size}px`,
            width: `${size}px`,
            fontSize: `${size / 2.2}px`,
            userSelect: "none",
          }}
          className={`rounded-full flex items-center justify-center bg-black font-semibold text-white ${className}`}
        >
          {fallBackText}
        </div>
      )}
    </div>
  );
}

export default Avatar2;
