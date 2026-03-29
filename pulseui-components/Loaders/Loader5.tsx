import { motion } from "framer-motion";

function Loader5({ color }: { color?: string }) {
  return (
    <div className="flex gap-2">
      <motion.div
        className="w-4 h-4 rounded-full bg-neutral-700"
        animate={{ y: ["4px", "-4px", "4px"] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          backgroundColor: color ? color : "black",
        }}
      />
      <motion.div
        className="w-4 h-4 rounded-full bg-neutral-700"
        animate={{ y: ["-4px", "4px", "-4px"] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          backgroundColor: color ? color : "black",
        }}
      />
      <motion.div
        className="w-4 h-4 rounded-full bg-neutral-700"
        animate={{ y: ["0", "4px", "-4px", "0"] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          backgroundColor: color ? color : "black",
        }}
      />
    </div>
  );
}

export default Loader5;
