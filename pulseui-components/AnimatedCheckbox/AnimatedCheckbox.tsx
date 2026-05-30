"use client";

import { motion, useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

function AnimatedCheckbox({
  size,
  text,
  accentColor,
  className,
  defaultChecked,
  onChange,
  disabled,
}: {
  size?: number;
  text: string;
  accentColor?: string;
  className?: string;
  defaultChecked?: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}) {
  const { theme } = useTheme();
  const [isSelected, setIsSelected] = useState(defaultChecked || false);
  const [scope, animate] = useAnimate();

  async function doAnimateCheck() {
    await animate(
      ".box",
      {
        pathLength: [0, 1],
      },
      {
        duration: 0.5,
      },
    );

    animate(".box", {
      fill: !isSelected
        ? accentColor
          ? accentColor
          : "#006FFE"
        : "background",
      stroke: !isSelected ? (accentColor ? accentColor : "#006FFE") : "gray",
    });

    animate(".tick", {
      pathLength: !isSelected ? [0, 1] : [1, 0],
      strokeWidth: !isSelected ? 2 : 0,
    });

    animate(".text", {
      opacity: "0.8",
    });

    animate(".line", {
      width: "100%",
    });

    animate(
      ".text",
      {
        translateX: [0, 4, 0],
      },
      {
        duration: 0.8,
      },
    );
  }

  async function doAnimateUncheck() {
    await animate(".line", {
      width: "0",
    });

    animate(
      ".text",
      {
        translateX: [0, -4, 0],
      },
      {
        duration: 0.8,
      },
    );

    await animate(".box", {
      fill: !isSelected ? "#006FFE" : "none",
      stroke: !isSelected ? "#006FFE" : "gray",
    });

    await animate(".tick", {
      pathLength: [1, 0],
      strokeWidth: [2, 0],
    });

    await animate(
      ".box",
      {
        pathLength: [0, 1],
      },
      {
        duration: 0.5,
      },
    );

    animate(".text", {
      opacity: "1",
    });
  }

  return (
    <div ref={scope}>
      <motion.div
        className="flex items-center justify-center gap-2 dark:hover:bg-neutral-700/40 hover:bg-neutral-200/50 cursor-pointer duration-300 py-2 px-3 rounded-md main-box"
        onClick={() => {
          const prev = isSelected;
          if (!prev) doAnimateCheck();
          else doAnimateUncheck();
          setIsSelected(!prev);
          onChange(!prev);
        }}
        style={{
          pointerEvents: disabled ? "none" : "all",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size || 24}
          height={size || 24}
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex items-center justify-center"
        >
          <motion.rect
            width={18}
            height={18}
            x={3}
            y={3}
            rx={2}
            className={"box"}
            initial={{
              fill: defaultChecked
                ? accentColor
                  ? accentColor
                  : "#006FFE"
                : "none",
              stroke: defaultChecked
                ? accentColor
                  ? accentColor
                  : "#006FFE"
                : "gray",
            }}
          />

          <motion.path
            d="M4 12l5 5L20 6"
            stroke="white"
            width={11}
            height={11}
            fill={"none"}
            initial={{
              pathLength: defaultChecked ? 1 : 0,
              strokeWidth: defaultChecked ? 2 : 0,
            }}
            className={"tick"}
          />
        </motion.svg>

        <motion.div className="relative">
          <motion.p className={className + " text"}>{text}</motion.p>
          <motion.div
            className="dark:bg-neutral-300 bg-neutral-500 h-[0.1rem] absolute top-1/2 line"
            initial={{
              width: defaultChecked ? "100%" : 0,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AnimatedCheckbox;
