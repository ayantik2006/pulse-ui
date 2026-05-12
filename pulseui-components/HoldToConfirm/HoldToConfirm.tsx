import { useEffect, useRef, useState } from "react";

function HoldToConfirm({
  children,
  className,
  confirmationMessage,
  onConfirmation,
}: {
  children: React.ReactNode;
  className?: string;
  confirmationMessage: string;
  onConfirmation: (val: boolean) => void;
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [width, setWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(
    // eslint-disable-next-line react-hooks/refs
    Number(buttonRef.current?.getBoundingClientRect().width),
  );
  const widthIncreaseRef = useRef<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setMaxWidth(Number(buttonRef.current?.getBoundingClientRect().width));
  }, []);

  useEffect(() => {
    if (width === Math.floor(maxWidth)) {
      setIsConfirmed(true);
      onConfirmation(true);
      if (widthIncreaseRef.current) {
        clearInterval(widthIncreaseRef.current);
        widthIncreaseRef.current = null;
      }
    }
  }, [maxWidth, width]);

  return (
    <div>
      <button
        className={`${className} ${isConfirmed ? "pointer-events-none" : ""} ${isConfirmed ? "opacity-90" : ""}`}
        style={{
          width: isConfirmed ? `${maxWidth}px` : "",
        }}
        onMouseDown={() => {
          if (isConfirmed) return;
          setIsMouseDown(true);
          widthIncreaseRef.current = window.setInterval(() => {
            setWidth((prev) => prev + 1);
          }, 10);
        }}
        onMouseUp={() => {
          if (isConfirmed) return;
          setIsMouseDown(false);
          setWidth(0);
          if (widthIncreaseRef.current) {
            clearInterval(widthIncreaseRef.current);
            widthIncreaseRef.current = null;
          }
        }}
        ref={buttonRef}
      >
        {width === Math.floor(maxWidth) && <p>{confirmationMessage}</p>}
        {width !== Math.floor(maxWidth) && children}
      </button>
      {!isConfirmed && (
        <div
          className="relative h-1 bg-white/20 pointer-events-none"
          style={{
            // eslint-disable-next-line react-hooks/refs
            height: `${buttonRef.current?.getBoundingClientRect().height}px`,
            // eslint-disable-next-line react-hooks/refs
            bottom: `${buttonRef.current?.getBoundingClientRect().height}px`,
            // eslint-disable-next-line react-hooks/refs
            borderTopLeftRadius: buttonRef.current
              ? // eslint-disable-next-line react-hooks/refs
                window.getComputedStyle(buttonRef.current).borderTopLeftRadius
              : undefined,
            // eslint-disable-next-line react-hooks/refs
            borderBottomLeftRadius: buttonRef.current
              ? // eslint-disable-next-line react-hooks/refs
                window.getComputedStyle(buttonRef.current).borderTopLeftRadius
              : undefined,
            // eslint-disable-next-line react-hooks/refs
            borderTopRightRadius: buttonRef.current
              ? // eslint-disable-next-line react-hooks/refs
                window.getComputedStyle(buttonRef.current).borderTopLeftRadius
              : undefined,
            // eslint-disable-next-line react-hooks/refs
            borderBottomRightRadius: buttonRef.current
              ? // eslint-disable-next-line react-hooks/refs
                window.getComputedStyle(buttonRef.current).borderTopLeftRadius
              : undefined,
            width: `${width}px`,
          }}
        />
      )}
    </div>
  );
}

export default HoldToConfirm;
