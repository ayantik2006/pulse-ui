"use client";

import { useEffect, useState } from "react";
import { subscribe } from "./toast";
import { createPortal } from "react-dom";
import { Check, Info, X } from "lucide-react";
import { motion } from "framer-motion";

interface toastPropsType {
  message: string;
  duration?: number;
  className?: string;
  id?: string;
  type?: "success" | "failure";
}

export function Toaster({
  position,
}: {
  position:
    | "top-center"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}) {
  const [toasts, setToasts] = useState<toastPropsType[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribe(setToasts);
    setMounted(true);
    return unsubscribe;
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`flex flex-col ${position === "top-center" ? "items-center" : ""} ${position === "bottom-center" ? "items-center" : ""} gap-3`}
    >
      <div
        className={`flex flex-col items-center gap-2 ${position === "top-center" ? "fixed top-4 h-fit text-wrap mx-auto" : ""} ${position === "bottom-center" ? "fixed bottom-4 h-fit text-wrap mx-auto" : ""} ${position === "top-left" ? "fixed top-4 left-4 h-fit text-wrap mx-auto" : ""} ${position === "top-right" ? "fixed top-4 right-4 h-fit text-wrap mx-auto" : ""} ${position === "bottom-left" ? "fixed bottom-4 left-4 h-fit text-wrap mx-auto" : ""} ${position === "bottom-right" ? "fixed bottom-4 right-4 h-fit text-wrap mx-auto" : ""}`}
      >
        {toasts.map((toast, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex w-fit min-w-30 gap-2 items-baseline shadow-[0_2px_6px_gray] px-4 py-2 bg-white rounded-md max-w-80 text-wrap wrap-anywhere`}
            key={index}
          >
            {toast.type === "success" && (
              <div className="bg-green-500 rounded-full p-1 w-5 h-5 flex items-center justify-center">
                <Check
                  className="stroke-4 stroke-neutral-100 mt-[0.15rem] "
                  size={12}
                />
              </div>
            )}
            {toast.type === "failure" && (
              <div className="bg-red-500 rounded-full p-1 w-5 h-5 flex items-center justify-center">
                <X
                  className="stroke-4 stroke-neutral-100 mt-[0.15rem] "
                  size={12}
                />
              </div>
            )}
            <p>{toast.message}</p>
          </motion.div>
        ))}
      </div>
    </div>,
    document.body,
  );
}
