import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col relative gap-1">
      <motion.div
        className="bg-blue-300 h-1 rounded-4xl w-10 animate-pulse relative"
        animate={{ opacity: 2, x: ["0%", "150%","0%"] }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        {" "}
      </motion.div>
      <motion.div
        className="bg-blue-300 h-1 rounded-4xl w-10 animate-pulse relative left-4"
        animate={{ opacity: 2, x: ["0%", "150%","0%"] }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        {" "}
      </motion.div>
    </div>
  );
}
