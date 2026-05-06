import { useEffect, useRef, useState } from "react";

function getDecimalPlaces(num: number) {
  const str = num.toString();

  if (str.includes(".")) {
    return str.split(".")[1].length;
  }

  return 0;
}

function ElasticSlider({
  min,
  max,
  step,
  label,
  unit,
  defaultValue,
  onChange,
}: {
  min: number;
  max: number;
  step: number;
  label: string;
  unit?: string;
  defaultValue: number;
  onChange: (value: number) => void;
}) {
  const [value, setValue] = useState(
    defaultValue > max || defaultValue < min ? max : defaultValue,
  );
  const [isMainBoxHovered, setIsMainBoxHovered] = useState(false);
  const mainBoxRef = useRef<HTMLDivElement | null>(null);
  const [mainBoxDim, setMainBoxDim] = useState<DOMRect | undefined>(undefined);
  const [sliderWidth, setSliderWidth] = useState(
    (value / max) * (mainBoxDim?.width ? mainBoxDim?.width : 0),
  );
  const [isSliderHeld, setIsSliderHeld] = useState(false);

  useEffect(() => {
    const rect = mainBoxRef.current?.getBoundingClientRect();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMainBoxDim(rect);
    setSliderWidth((value / max) * (rect?.width ? rect?.width : 0));
  }, [max, value]);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsSliderHeld(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isSliderHeld) return;

      const x = e.clientX;
      const percentage = (x - (mainBoxDim?.x || 0)) / (mainBoxDim?.width || 1);

      const rawValue = percentage * max;

      const steppedValue = Math.round(rawValue / step) * step;
      const value = Number(steppedValue.toFixed(getDecimalPlaces(step)));

      const clampedValue = Math.min(max, Math.max(min, value));

      setValue(clampedValue);
      onChange(clampedValue);
      setSliderWidth(
        (clampedValue / max) * (mainBoxDim?.width ? mainBoxDim?.width : 0),
      );
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isSliderHeld, mainBoxDim?.width, mainBoxDim?.x, max]);

  return (
    <div
      className="flex items-center justify-between w-full max-w-50 dark:bg-neutral-800 py-2 pr-3 rounded-md cursor-pointer z-10 select-none"
      onMouseEnter={() => setIsMainBoxHovered(true)}
      onMouseLeave={() => setIsMainBoxHovered(false)}
      onClick={(e) => {
        const divRect = e.currentTarget.getBoundingClientRect();
        const percentage = (e.clientX - divRect.x) / divRect.width;

        const rawValue = percentage * max;

        const steppedValue = Math.round(rawValue / step) * step;

        if (Number(steppedValue.toFixed(getDecimalPlaces(step))) < min) return;

        setSliderWidth(e.clientX - divRect.x);
        setValue(Number(steppedValue.toFixed(getDecimalPlaces(step))));
        onChange(Number(steppedValue.toFixed(getDecimalPlaces(step))));
      }}
      ref={mainBoxRef}
    >
      <div className="">
        <p className="text-neutral-400 text-sm pl-3">{label}</p>
      </div>
      <div>
        <p
          className={`text-sm ${isMainBoxHovered ? "text-white" : "text-neutral-400"}`}
        >
          {value}
          {unit}
        </p>
      </div>
      <div
        className={`absolute ${!isSliderHeld ? "duration-300" : ""} z-0 bg-neutral-600/40 h-9 left-[${mainBoxDim?.left ? mainBoxDim.left : 0 + 2}] rounded-l-md ${value == max ? "rounded-r-md" : ""} ${value / max <= 0.06 ? "rounded-l-lg" : ""}`}
        style={{
          width: sliderWidth,
        }}
      >
        <div
          className={`absolute ${!isSliderHeld ? "duration-300" : ""} w-2 h-9 z-800`}
          style={{
            left: sliderWidth - 8,
          }}
          onMouseDown={() => setIsSliderHeld(true)}
        >
          {value / max >= 0.06 && (
            <div
              className={`rounded-t-full rounded-b-full duration-100 ${isMainBoxHovered ? "w-1" : "w-0"} h-5 bg-neutral-400 mt-2`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElasticSlider;
