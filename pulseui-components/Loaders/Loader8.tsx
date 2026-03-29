import { motion } from "framer-motion";

function Loader8({color}:{color:string}) {
  return (
    <div className="h-6 w-62 border-3 p-1 border-black rounded flex gap-1 overflow-hidden">
      <motion.div
        className="flex gap-1 px-1"
        animate={{ x: ["0%","-50%"] }}
        transition={{ repeat: Infinity, duration: 3, ease:"linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-3 w-5 bg-black" style={{
            backgroundColor:color
          }} />
        ))}

        {[...Array(10)].map((_, i) => (
          <div key={`dup-${i}`} className="h-3 w-5 bg-black" style={{
            backgroundColor:color
          }} />
        ))}
      </motion.div>
    </div>
  );
}

export default Loader8;
