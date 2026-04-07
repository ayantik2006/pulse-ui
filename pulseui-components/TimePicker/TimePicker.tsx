import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function TimePicker({
  onHrChange,
  onMinChange,
  onAmPmChange,
}: {
  onHrChange: (hr: number) => void;
  onMinChange: (min: number) => void;
  onAmPmChange: (amOrPm: "AM" | "PM") => void;
}) {
  const [hr, setHr] = useState(10);
  const [min, setMin] = useState(10);
  const [amOrPm, setAmOrPm] = useState<"AM" | "PM">("AM");
  return (
    <div className="flex items-center border-2 border-neutral-300 dark:border-neutral-700 h-11 w-39 rounded-md p-1">
      <div className="flex-1 flex gap-1 items-center justify-center dark:text-neutral-400 dark:bg-neutral-800 bg-neutral-300 text-neutral-500 w-full h-full cursor-default rounded-l">
        <p>{hr.toString().padStart(2, "0")}</p>
        <div className="flex flex-col items-center">
          <ChevronUp
            size={12}
            className="cursor-pointer"
            onClick={() => {
              if (hr == 12) {
                setHr(1);
                onHrChange(1);
                return;
              }
              setHr((prev) => {
                onHrChange(prev + 1);
                return prev + 1;
              });
            }}
          />
          <ChevronDown
            size={12}
            className="cursor-pointer"
            onClick={() => {
              if (hr == 1) {
                setHr(12);
                onHrChange(12);
                return;
              }
              setHr((prev) => {
                onHrChange(prev - 1);
                return prev - 1;
              });
            }}
          />
        </div>
      </div>
      <div className="flex-1 gap-1 flex items-center justify-center dark:text-neutral-400 dark:bg-neutral-800 bg-neutral-300 text-neutral-500 w-full h-full border-l border-r cursor-default">
        <p>{min.toString().padStart(2, "0")}</p>
        <div className="flex flex-col items-center">
          <ChevronUp
            size={12}
            className="cursor-pointer"
            onClick={() => {
              if (min == 59) {
                setMin(0);
                onMinChange(0);
                return;
              }
              setMin((prev) => {
                onMinChange(prev + 1);
                return prev + 1;
              });
            }}
          />
          <ChevronDown
            size={12}
            className="cursor-pointer"
            onClick={() => {
              if (min == 0) {
                setMin(59);
                onMinChange(59);
                return;
              }
              setMin((prev) => {
                onMinChange(prev - 1);
                return prev - 1;
              });
            }}
          />
        </div>
      </div>
      <div className="flex-1 flex gap-1 items-center justify-center dark:text-neutral-400 dark:bg-neutral-800 bg-neutral-300 text-neutral-500 w-full h-full cursor-default rounded-r">
        <p>{amOrPm}</p>
        <div className="flex flex-col items-center">
          <ChevronUp
            size={12}
            className="cursor-pointer"
            onClick={() => {
              if (amOrPm == "AM") {
                setAmOrPm("PM");
                onAmPmChange("PM");
              } else {
                setAmOrPm("AM");
                onAmPmChange("AM");
              }
            }}
          />
          <ChevronDown
            size={12}
            className="cursor-pointer"
            onClick={() => {
              if (amOrPm == "AM") {
                setAmOrPm("PM");
                onAmPmChange("PM");
              } else {
                setAmOrPm("AM");
                onAmPmChange("AM");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
