import { Spinner } from "@/components/ui/spinner";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function SuccessIllustration() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-65 h-20 bg-neutral-200 dark:bg-neutral-800 rounded-xl flex flex-col gap-4 items-center justify-center"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.div className="w-50 h-8 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center gap-3">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key={"spinner"}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
            >
              <Spinner color="gray" />
            </motion.div>
          ) : (
            <motion.div
              key={"check"}
              className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-icon lucide-check"
              >
                <motion.path
                  d="M4 12l5 5L20 6"
                  initial={{
                    pathLength: 0,
                    width: 0,
                    height: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    width: 10,
                    height: 10,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isHovered ? (
            <motion.div
              className="dark:bg-neutral-700/90 bg-neutral-300 w-33 h-3 rounded-full animate-pulse"
              transition={{
                delay: 0.5,
              }}
            />
          ) : (
            <motion.div className="w-33 h-3 flex items-center justify-center">
              <motion.p
                className="text-xs text-neutral-500"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                }}
              >
                Process completed
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default SuccessIllustration;
