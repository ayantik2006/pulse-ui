import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHYp9-vX2IZzZB2xF1np_GXU4FvtDMsT8_Q&s",
  "https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJgBxrh5Jbaf-VWLR1duu6WrSyT8n5PQ9EQ&s",
];

function FolderOpening() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer h-10 w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-[#FFAD00] w-13 h-10 rounded-lg relative z-20 shadow-[0_0_3px_gray] origin-bottom perspective-origin-right"
        initial={{
          rotateX: "25deg",
        }}
        animate={{
          rotateX: isHovered ? "45deg" : "25deg",
        }}
      >
        <div className="absolute w-8 h-1 top-2 left-[0.6rem] bg-[#FFC118] rounded-full"></div>
      </motion.div>

      <motion.div className="bg-linear-to-b from-[#FFAD00] to-[#c28603] w-13 h-12.5 rounded-lg relative bottom-12 z-10"></motion.div>

      <div className="absolute -top-3.5 left-2 z-9 w-5 h-4 rounded-sm bg-[#FEAC00]"></div>

      <LayoutGroup>
        <AnimatePresence>
          {!isHovered ? (
            <motion.div className="absolute z-19">
              {IMAGES.map((image, index) => {
                return (
                  <motion.div
                    key={index}
                    className={`absolute bottom-17 rounded-md left-1 w-[45px]`}
                    layoutId={image}
                  >
                    <Image
                      src={image}
                      width={60}
                      height={60}
                      alt="image"
                      className="rounded-sm"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div className="absolute bottom-20 flex flex-col gap-2 z-19 left-1/2 -translate-x-1/2">
              {IMAGES.map((image, index) => {
                return (
                  <motion.div
                    key={index}
                    className={`bottom-40 rounded-md w-20`}
                    layoutId={image}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      mass: 0.7,
                    }}
                  >
                    <Image
                      src={image}
                      width={80}
                      height={120}
                      alt="image"
                      className="rounded-md object-cover"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

export default FolderOpening;
