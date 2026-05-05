import { useState } from "react";

function Switch({
  onOnOff,
  defaultValue,
}: {
  onOnOff: (val: boolean) => void;
  defaultValue? : boolean;
}) {
  const [isOn, setIsOn] = useState(defaultValue?defaultValue:false);

  return (
    <div
      className={`w-9 h-5 rounded-[1rem] border dark:border-neutral-700 flex px-[0.1rem] items-center cursor-pointer ${isOn ? "dark:bg-white bg-black" : "dark:bg-neutral-800 bg-neutral-300"}`}
      onClick={() => {
        setIsOn((prev) => !prev);
        onOnOff(!isOn);
      }}
    >
      <div
        className={`rounded-full w-4 h-4 ${isOn ? "translate-x-[0.95rem] dark:bg-neutral-800 bg-white" : "dark:bg-white bg-white"} duration-300`}
      ></div>
    </div>
  );
}

export default Switch;
