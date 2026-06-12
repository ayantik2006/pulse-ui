import { Pause, Play, Square, StopCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current!);
      return;
    }

    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [isPlaying]);

  useEffect(() => {
    if (sec === 60) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSec(0);
      setMin((m) => m + 1);
    }
  }, [sec]);

  return (
    <div className="flex items-center justify-center gap-10 w-fit h-fit px-5 py-3 dark:bg-neutral-800 bg-neutral-100 rounded-lg borde dark:shadow-[inset_0_0_3px_gray] shadow-[inset_0_0_3px_gray]">
      <div className="flex gap-2 w-fit">
        <button
          className="bg-green-600 w-9 h-9 rounded-full hover:opacity-85 duration-300 cursor-pointer flex items-center justify-center"
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key={"playing"}
                initial={{
                  scale: 0,
                }}
                exit={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                <Pause
                  size={19}
                  className="dark:fill-neutral-800 dark:stroke-neutral-800 fill-neutral-200 stroke-neutral-200"
                />
              </motion.div>
            ) : (
              <motion.div
                key={"not-playing"}
                initial={{
                  scale: 0,
                }}
                exit={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                <Play
                  size={19}
                  className="dark:fill-neutral-800 dark:stroke-neutral-800 fill-neutral-200 stroke-neutral-200"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <button
          onClick={() => {
            setMin(0);
            setSec(0);
            setIsPlaying(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
          }}
          className=" dark:bg-neutral-950 bg-neutral-300 p-2 w-9 h-9 rounded-full hover:opacity-80 duration-300 cursor-pointer flex items-center justify-center active:scale-[0.90]"
        >
          <Square size={17} className="fill-neutral-700 stroke-neutral-700" />
        </button>
      </div>
      <div className="flex gap-2 items-center justify-center h-full">
        <p className="text-sm text-neutral-400 h-full self-end">Timer</p>
        <div className="text-3xl flex font-semibold w-18">
          <AnimatePresence>
            <AnimatePresence mode="wait">
            <motion.div
              key={min}
              initial={{
                // y: 5,
                // opacity: 0,
                // filter:"blur(2px)"
              }}
              animate={{
                // y: 0,
                // opacity: 1,
                // filter:"blur(0px)"
              }}
              exit={{
                // y: -5,
                // opacity: 0,
                // filter:"blur(2px)"
              }}
            >
              {String(min).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
          </AnimatePresence>
          <span>:</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={sec}
              initial={{
                // y: 5,
                // opacity: 0,
                // filter:"blur(2px)"
              }}
              animate={{
                // y: 0,
                // opacity: 1,
                // filter:"blur(0px)"
              }}
              exit={{
                // y: -5,
                // opacity: 0,
                // filter:"blur(2px)"
              }}
            >
              {String(sec).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Timer;
