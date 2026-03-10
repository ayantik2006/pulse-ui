"use client";

import { useEffect, useState } from "react";
import { subscribe } from "./toast";
import { createPortal } from "react-dom";
import { Check, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface toastPropsType {
  message: string;
  duration?: number;
  className?: string;
  id?: string;
  type?: "success" | "failure";
  icon?: "string" | React.ReactNode;
  closeButton?: boolean;
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
  const [deletedToasts, setDeletedToasts] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = subscribe(setToasts);
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
        <AnimatePresence>
          {toasts.map((toast, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`shadow-[0_2px_6px_gray] px-4 py-2 bg-[#fff] rounded-md ${toast.className} flex w-fit min-w-30 gap-2 items-center max-w-80 text-wrap wrap-anywhere ${deletedToasts.includes(String(toast.id))?"hidden":""}`}
              key={index}
            >
              {toast.type === "success" && !toast.icon && (
                <div className="bg-green-500 rounded-full p-1 w-5 h-5 flex items-center justify-center">
                  <Check
                    className="stroke-4 stroke-neutral-100 mt-[0.15rem] "
                    size={12}
                  />
                </div>
              )}
              {toast.type === "failure" && !toast.icon && (
                <div className="bg-red-500 rounded-full p-1 w-5 h-5 flex items-center justify-center">
                  <X
                    className="stroke-4 stroke-neutral-100 mt-[0.15rem] "
                    size={12}
                  />
                </div>
              )}
              {toast.icon}
              <p>{toast.message}</p>
              {toast.closeButton && (
                <div
                  className="hover:bg-neutral-200 w-fit ml-5 mt-[0.1rem] p-[0.15rem] rounded duration-300"
                  onClick={() => {
                    setDeletedToasts((prev)=>{
                      const newDeletedToasts:string[]=[...prev,String(toast.id)];
                      return newDeletedToasts;
                    })
                  }}
                >
                  <X
                    size={15}
                    className="stroke-neutral-400 stroke-3 cursor-pointer"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>,
    document.body,
  );
}
