import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Tooltip({
  children,
  text,
  theme,
  position,
}: {
  children: React.ReactNode;
  text: string;
  theme: "dark" | "light";
  position: "top" | "bottom" | "left" | "right";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`
              absolute whitespace-nowrap rounded-md border
              px-2 py-1.5 text-sm font-semibold
              pointer-events-none z-9999999999999
              ${positionClasses[position]}
            `}
            style={{
              backgroundColor: theme === "dark" ? "#303030" : "white",
              color: theme === "dark" ? "white" : "black",
              borderColor: "#646668",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
}

export default Tooltip;