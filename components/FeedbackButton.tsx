import { AnimatePresence, delay, motion, useAnimate } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

function FeedbackButton() {
  const [isOpened, setIsOpened] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSend, setIsSend] = useState(false);

  return (
    <div className="relative w-fit">
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="w-80 h-fit bg-white absolute bottom-10 right -left-28 rounded-sm dark:shadow-[inset_0_0_4px_black] shadow-[inset_0_0_2px_black] origin-bottom flex flex-col py-4 px-6"
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
            }}
            transition={{
              ease: "easeOut",
            }}
          >
            <h1 className="text-black font-semibold text-sm">Feedback</h1>
            <p className="text-neutral-500 text-xs">
              Draft a genuine feedback message and click send
            </p>
            <Textarea
              placeholder="Type your message here."
              className="max-h-20 min-h-20 h-20 border border-neutral-200 mt-3 rounded placeholder:text-xs text-black selection:bg-black! selection:text-white! text-sm"
              autoFocus
              required
              value={feedback}
              onChange={(e) => {
                setFeedback(e.currentTarget.value);
              }}
            />
            <motion.button
              className="mt-3 bg-blue-600 font-semibold rounded-[5px] cursor-pointer shadow-[inset_0_0_2px_black] text-xs h-8 text-shadow-[0_0_1px_black] send-button active:scale-[0.98] text-white"
              style={{
                pointerEvents: isSend ? "none" : "all",
              }}
              animate={{
                background: isSend
                  ? ["#155dfc","#03c42a"]
                  : "#155dfc",
              }}
              transition={{
                ease:"easeOut",
                duration:0.3
              }}
              onClick={(e) => {
                if (feedback.trim() === "") return;
                let feedbackCpy;
                setFeedback((prev) => {
                  feedbackCpy = prev;
                  return "";
                });
                setIsSend(true);
                setTimeout(() => {
                  setIsSend(false);
                }, 3000);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={isSend ? "feedback" : "send"}
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                  transition={{ duration: 0.25 }}
                >
                  {isSend ? "Feedback Sent" : "Send"}
                </motion.p>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="text-sm w-25 h-8 flex items-center justify-center bg-linear-to-b from-blue-500 via-blue-600 to-blue-700 font-semibold rounded-[5px] cursor-pointer shadow-[inset_0_0_2px_black] origin-center feedback-button text-white"
        onClick={() => {
          setIsOpened((prev) => !prev);
        }}
        animate={{
          scaleX: isOpened ? 0.32 : 1,
          borderRadius: isOpened ? "50%" : "5px",
        }}
      >
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.p
              className="text-shadow-[0_0_1px_black]"
              exit={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              Feedback
            </motion.p>
          ) : (
            <motion.div
              exit={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
                scaleX: isOpened ? 3 : 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <X size={16} className="stroke-3 drop-shadow-[0_0_1px_black]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default FeedbackButton;
