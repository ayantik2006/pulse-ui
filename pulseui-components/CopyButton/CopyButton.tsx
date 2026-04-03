import { Copy } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";

function CopyButton({ size, text }: { size?: number; text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      className="bg-neutral-200 dark:bg-neutral-800 p-2 rounded group"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        setIsCopied(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      }}
    >
      {!isCopied && (
        <Copy
          size={size?size:15}
          className={`duration-300 stroke-neutral-500 dark:stroke-neutral-500 ${isHovered ? "stroke-neutral-700 dark:stroke-white" : ""}`}
        />
      )}
      {isCopied && (
        <Check
          size={size?size:15}
          className={`duration-300 stroke-neutral-500 dark:stroke-neutral-500 ${isHovered ? "stroke-neutral-700 dark:stroke-white" : ""}`}
        />
      )}
    </div>
  );
}

export default CopyButton;
