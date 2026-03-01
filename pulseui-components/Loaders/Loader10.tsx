import { motion } from "framer-motion";

export default function Loader10() {
  return (
    <div className="relative w-24 h-24">
      <motion.div
        className="absolute top-3 left-8 w-8  h-8 rounded-full  border-black"
        style={{ transform: "translateX(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#fff", "#000", "#fff"] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-7 top-12 w-8  h-8 rounded-full  border-black"
        style={{ transform: "translateY(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#000", "#fff", "#000"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "linear",
          delay: 0.15,
        }}
      />
      <motion.div
        className="absolute bottom-4 left-8.5 w-8  h-8 rounded-full  border-black"
        style={{ transform: "translateX(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#fff", "#000", "#fff"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "linear",
          delay: 0.3,
        }}
      />
      <motion.div
        className="absolute left-0 top-1/2 w-8  h-8 rounded-full  border-black"
        style={{ transform: "translateY(-50%) rotate(45deg)" }}
        animate={{ backgroundColor: ["#000", "#fff", "#000"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "linear",
          delay: 0.45,
        }}
      />
    </div>
  );
}