import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function FontWaveAnimation({
  text,
  className,
  infinite
}: {
  text: string;
  className?: string;
  infinite?: boolean
}) {
  const [char, setChar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (char + 1 === text.length && infinite) {
        setChar(0);
      } else {
        setChar((prev) => prev + 1);
      }
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, [char, infinite, text.length]);

  return (
    <div className={className}>
      <div className="flex">
        {[...text].map((letter, index) => (
          <motion.span
            key={index}
            animate={{
              y: index === char ? [0, -4] : [-4, 0],
            }}
            transition={{
                ease:"easeInOut",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default FontWaveAnimation;
