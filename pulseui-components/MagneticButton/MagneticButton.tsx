import { motion } from "framer-motion";
import { useState } from "react";

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const distFromLeft = e.clientX - rect.x;
        const distFromRight = rect.width - distFromLeft;

        setX((distFromLeft - distFromRight) / 2);

        const distFromTop = e.clientY - rect.y;
        const distFromBottom = rect.height - distFromTop;

        setY((distFromTop - distFromBottom) / 2);
      }}
      onMouseLeave={() => {
        setX(0);
        setY(0);
      }}
      style={{
        x: x,
        y: y,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      animate={{
        x: x,
        y: y,
      }}
      transition={{
        duration: 0.3,
        // type: "spring",
        // stiffness: 50,
      }}
    >
      <button className={className}>{children}</button>
    </motion.div>
  );
}

export default MagneticButton;
