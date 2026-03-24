import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Carousal1({ images }: { images: Array<string> }) {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  return (
    <div className="rounded-lg w-full max-w-md">
      <div className="relative w-full aspect-4/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={displayImageIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: { scale: "70%", opacity: 0.1 },
              center: { scale: "100%", opacity: 1 },
              exit: { scale: "70%", opacity: 0.1 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[displayImageIndex]}
              alt="carousel image"
              fill
              className="object-cover rounded-lg z-0"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => {
            if (displayImageIndex === 0) {
              setDisplayImageIndex(images.length - 1);
            } else {
              setDisplayImageIndex((prev) => prev - 1);
            }
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => {
            if (displayImageIndex === images.length - 1) {
              setDisplayImageIndex(0);
            } else {
              setDisplayImageIndex((prev) => prev + 1);
            }
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousal1;
