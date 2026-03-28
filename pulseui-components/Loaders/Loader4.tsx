"use client";

import { motion } from "framer-motion";

function Loader4() {
  return (
    <div className="flex gap-2">
      <motion.div
        className="rounded-full w-4 h-4"
        animate={{
          backgroundColor: [
            "#3b82f6",
            "#ef4444",
            "#eab308",
            "#22c55e",
            "#3b82f6",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="rounded-full w-4 h-4"
        animate={{
          backgroundColor: [
            "#ef4444",
            "#eab308",
            "#22c55e",
            "#3b82f6",
            "#ef4444",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        //   ease: "linear",
        }}
      />
      <motion.div
        className="rounded-full w-4 h-4"
        animate={{
          backgroundColor: [
            "#eab308",
            "#22c55e",
            "#3b82f6",
            "#ef4444",
            "#eab308",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        //   ease: "linear",
        }}
      />
      <motion.div
        className="rounded-full w-4 h-4"
        animate={{
          backgroundColor: [
            "#22c55e",
            "#3b82f6",
            "#ef4444",
            "#eab308",
            "#22c55e",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default Loader4;
