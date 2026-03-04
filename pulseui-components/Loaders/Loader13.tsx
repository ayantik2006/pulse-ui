import React from "react";
import { motion } from "framer-motion";

function Loader13() {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">

      {/*square in place */}
      <div className="absolute top-2 left-1/2 w-8 h-8 bg-white rotate-45 -translate-x-1/2" />
      <div className="absolute right-2 top-1/2 w-8 h-8 bg-white rotate-45 -translate-y-1/2" />
      <div className="absolute bottom-2 left-1/2 w-8 h-8 bg-white rotate-45 -translate-x-1/2" />
      <div className="absolute left-2 top-1/2 w-8 h-8 bg-white rotate-45 -translate-y-1/2" />

      {/* moving square */}
      <motion.div
        className="absolute w-8 h-8 bg-[#ffee00]"
        style={{ rotate: 45 }}
        animate={{
          x: [-32, 0, 32, 0, -32],
          y: [0, -32, 0, 32, 0],
          rotate: [45, 135, 225, 315, 405],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default Loader13;