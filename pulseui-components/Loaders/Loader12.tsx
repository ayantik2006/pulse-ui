import React from "react";
import { motion } from "framer-motion";
function Loader12() {
  return (
    <div className="relative w-24
    h-24">
        {/* top */}
      <motion.div
        className="absolute top-2 left-10 w-8 h-8 border-black"
        style={{ transform: "translateX(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#fff", "#FFFF12", "#fff","#fff"] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* right */}
      <motion.div
        className="absolute right-4 top-12 w-8 h-8 border-black"
        style={{ transform: "translateY(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#fff", "#fff","#FFFF12", "#fff"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",

        }}
      />
      {/* bottom */}
      <motion.div
        className="absolute bottom-2 left-10 w-8 h-8 border-black"
        style={{ transform: "translateX(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#fff", "#fff", "#fff","#FFFF12"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",

        }}
      />
    {/* left */}
      <motion.div
        className="absolute left-1 top-1/2 w-8 h-8 border-black"
        style={{ transform: "translateY(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#FFFF12", "#FFF", "#fff", "#fff"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          
        }}
      />
    </div>
  );
}

export default Loader12;
