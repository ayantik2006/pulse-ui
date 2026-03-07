import { ChevronUp, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Accordian2({ title, body }: { title: string; body: string }) {
  const [isBodyOpen, setIsBodyOpen] = useState(false);

  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="border border-neutral-400 flex flex-col gap-2 hover: shadow-[3px_3px_0px_3px_black] duration-300">
        <div
          className="flex items-center justify-between py-3 px-5 cursor-pointer"
          onClick={() => {
            setIsBodyOpen((prev) => !prev);
          }}
        >
          <p className="text-md font-semibold ">{title}</p>
          {!isBodyOpen && <Plus className="stroke-1" size={18}/>}
          {isBodyOpen && <Minus className="stroke-1" size={18}/>}
        </div>
        <AnimatePresence initial={false}>
          {isBodyOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-neutral-100 rounded-b-lg overflow-hidden"
            >
              <p className="py-3 px-5">{body}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Accordian2;
