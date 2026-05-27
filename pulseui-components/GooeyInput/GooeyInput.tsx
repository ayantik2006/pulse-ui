import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function GooeyInput({ onChange }: { onChange: (value: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <GooeyFilter />
      <motion.div
        style={{ filter: "url(#goo-effect)" }}
        className="dark:bg-white bg-neutral-900 w-30 h-13 rounded-4xl relative flex pr-5"
        initial={{
          width: "120px",
        }}
        animate={{
          width: isExpanded ? "230px" : "120px",
        }}
        onBlur={() => {
          if (inputValue !== "") return;
          setIsExpanded(false);
        }}
        onFocus={() => setIsExpanded(true)}
      >
        <motion.div
          style={{
            width: "40px",
          }}
          className={`flex items-center justify-center   ${isExpanded ? "dark:bg-white bg-neutral-900 rounded-full h-13 min-w-13" : "h-13 min-w-11"}`}
          initial={{
            translate: "0",
          }}
          animate={{
            translateX: isExpanded ? "-3.5rem" : "0rem",
          }}
          transition={{
            duration: 0.3,
            bounce: 0.5,
          }}
        >
          <Search className=" dark:stroke-neutral-600/30 stroke-neutral-500" size={17} />
        </motion.div>
        <motion.input
          type="text"
          placeholder="Search..."
          className="placeholder:text-sm placeholder:text-neutral-400 dark:text-black text-white outline-none overflow-hidden rounded-r-4xl"
          ref={inputRef}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
            onChange(e.currentTarget.value);
          }}
          initial={{
            translate: "0",
          }}
          animate={{
            translateX: isExpanded ? "-1rem" : "0rem",
            width: isExpanded ? "150px" : "80px",
          }}
          transition={{
            duration: 0.3,
          }}
        />
        {isExpanded && inputValue !== "" && (
          <div
            className="absolute top-4.5 left-[85%]"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
                setInputValue("");
                onChange("");
                inputRef.current.focus();
              }
            }}
          >
            <X className="dark:stroke-neutral-700/35 stroke-neutral-500" size={16} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default GooeyInput;

const GooeyFilter = () => {
  return (
    <svg className="absolute hidden h-0 w-0">
      <defs>
        <filter
          id="goo-effect"
          className="goo"
          x={"-50%"}
          y={"-50%"}
          width={"200%"}
          height={"200%"}
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};
