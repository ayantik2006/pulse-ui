"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 150,
    damping: 15,
  });

  const y = useSpring(mouseY, {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    mouseX.set(distanceX);
    mouseY.set(distanceY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.button
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.button>
  );
}

export default MagneticButton;