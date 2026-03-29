import { motion } from "framer-motion";

function Loader3({ color }: { color?: string }) {
  const barClass =
    "w-[5px] rounded-lg";

  return (
    <div className="flex items-center gap-2 h-[2.5rem]">
      
      <motion.div
        animate={{ height: ["2.5rem", "1rem", "2.5rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className={`${barClass} bg-black`}
        style={{ backgroundColor: color }}
      />

      <motion.div
        animate={{ height: ["1rem", "2.5rem", "1rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className={`${barClass} bg-black`}
        style={{ backgroundColor: color }}
      />

      <motion.div
        animate={{ height: ["2.5rem", "1rem", "2.5rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className={`${barClass} bg-black`}
        style={{ backgroundColor: color }}
      />

      <motion.div
        animate={{ height: ["1rem", "2.5rem", "1rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className={`${barClass} bg-black`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default Loader3;