import { useEffect, useRef, useState } from "react";

function ScratchCard({
  height,
  width,
  src,
}: {
  height: number;
  width: number;
  src: string;
}) {
  const [hasEntered, setHasEntered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#737373";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText("Scratch to reveal", width / 2, height / 2);

    let isDrawing = false;

    const start = (e: MouseEvent) => {
      isDrawing = true;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const end = () => {
      isDrawing = false;
      ctx.beginPath();
    };

    const scratch = (e: MouseEvent) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";

      ctx.lineWidth = 30;
      ctx.lineCap = "round";

      ctx.lineTo(x, y);
      ctx.stroke();
    };

    canvas.addEventListener("mousedown", start);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", scratch);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", scratch);
      window.removeEventListener("mouseup", end);
    };
  }, [height, width]);

  return (
    <div
      className="relative rounded-[0.5rem] overflow-hidden cursor-none shadow-[0_0_5px_gray]"
      style={{
        height,
        width,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setHasEntered(true)}
      onMouseLeave={() => setHasEntered(false)}
    >
      {hasEntered && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 bg-transparent backdrop-blur-md rounded-full pointer-events-none z-[9999] shadow-[0_0_4px]"
        />
      )}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

export default ScratchCard;
