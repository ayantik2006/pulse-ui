import { motion } from "framer-motion";

const sweepTransition = {
  duration: 1.2,
  ease: "easeInOut",
  repeat: Infinity,
};

export default function Loader() {
  return (
    <div className="flex flex-col relative gap-1">
        <motion.div className="bg-blue-300 h-1 rounded-4xl w-10 animate-pulse relative"  animate={{opacity : 2,x: ["0%","150%"] }} transition={{ repeat: Infinity, duration: 0.4, ease:"linear", }}> </motion.div>
        <motion.div className="bg-blue-300 h-1 rounded-4xl w-10 animate-pulse relative left-4"  animate={{opacity : 2,x: ["0%","150%"] }} transition={{ repeat: Infinity, duration: 0.4,  ease: "linear", }}> </motion.div>
    </div>
  );
}