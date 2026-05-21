import HoldToConfirm from "@/pulseui-components/HoldToConfirm/HoldToConfirm";
import SlideToUnlock from "@/pulseui-components/SlideToUnlock/SlideToUnlock";
import WheelPicker1 from "@/pulseui-components/WheelPicker/WheelPicker1";
import TextFlip from "@/pulseui-components/TextFlip/TextFlip";

import { useState } from "react";
import ElasticSlider from "@/pulseui-components/ElasticSlider/ElasticSlider";
import { House, Terminal, RefreshCcw } from "lucide-react";
import FloatingDock from "@/pulseui-components/FloatingDock/FloatingDock";
import TypewriterEffect1 from "@/pulseui-components/Typewriter Effect/TypewriterEffect1";

function Features() {
  const [option, setOption] = useState("");
  const [isLocked, setIsLocked] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [value, setValue] = useState(30);
  const links = [
    {
      title: "Home",
      icon: (
        <House
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Terminal",
      icon: (
        <Terminal
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Refresh",
      icon: (
        <RefreshCcw
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
  ];

  return (
    <div className="w-[98%] h-fit p-2 border mx-4 flex flex-wrap gap-4 items-center justify-center">
      <div className="p-2 border rounded-md w-full min-h-50 max-w-60 hover:border-neutral-500/40 duration-300">
        <WheelPicker1
          options={[
            "Java",
            "C++",
            "TypeScript",
            "JavaScript",
            "Rust",
            "Ruby",
            "Golang",
          ]}
          onChange={setOption}
        />
      </div>
      <div className="p-2 border flex items-center justify-center rounded-md w-full min-h-50 max-w-70 hover:border-neutral-500/40 duration-300">
        <SlideToUnlock onUnlock={setIsLocked} />
      </div>
      <div className="p-2 border flex items-center justify-center rounded-md w-full min-h-50 max-w-60 hover:border-neutral-500/40 duration-300">
        <HoldToConfirm
          confirmationMessage={"Confirmed"}
          className="bg-green-600 px-4 py-2 text-lg cursor-pointer font-semibold"
          onConfirmation={setIsConfirmed}
        >
          <p>Hold to Confirm</p>{" "}
        </HoldToConfirm>
      </div>
      <div className="p-2 border flex items-center justify-center rounded-md w-full min-h-50 max-w-60 hover:border-neutral-500/40 duration-300">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <p className="">Hello</p>
          <TextFlip
            words={["Developers", "Designers", "Students"]}
            duration={2000}
            className="text-orange-600"
          />
        </div>
      </div>
      <div className="p-2 border flex items-center justify-center rounded-md w-full min-h-50 max-w-60 hover:border-neutral-500/40 duration-300">
        <FloatingDock links={links} />
      </div>
      <div className="p-2 border flex items-center justify-center rounded-md w-full min-h-50 max-w-60 hover:border-neutral-500/40 duration-300">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <ElasticSlider
            min={0}
            max={100}
            label="Volume"
            step={1}
            defaultValue={30}
            unit="%"
            onChange={setValue}
          />

          <ElasticSlider
            min={0}
            max={30}
            label="Width"
            step={1}
            defaultValue={10}
            unit="px"
            onChange={setValue}
          />

          <ElasticSlider
            min={0}
            max={1}
            label="Efficiency"
            step={0.01}
            defaultValue={0.95}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="p-2 border flex items-center justify-center rounded-md w-full min-h-50 max-w-60 hover:border-neutral-500/40 duration-300">
        <div className="flex items-center gap-1">
          <p className="font-semibold text-lg">Hello</p>
          <TypewriterEffect1
            words={["Designers", "Developers", "Students"]}
            className="text-yellow-200 font-semibold text-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
