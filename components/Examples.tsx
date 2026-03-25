import DatePicker1 from "@/pulseui-components/Date Picker/DatePicker1";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import Carousal1 from "@/pulseui-components/Carousel/Carousal1";
import TypewriterEffect from "@/pulseui-components/Typewriter Effect/TypewriterEffect";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

function Examples() {
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  return (
    <div className="flex flex-col gap-10 mb-20 items-center w-full" id="examples">
      <h1 className={`text-white ${playfair.className} text-3xl font-bold`}>
        Some of our components
      </h1>
      <div className="flex flex-col items-center gap-10">
        <h1 className="mb-[-2rem] font-semibold text-neutral-300">
          Date Picker
        </h1>
        <div className="bg-white rounded">
          <DatePicker1
            selectedDate={setDate}
            selectedMonth={setMonth}
            selectedYear={setYear}
          />
        </div>
        <h1 className="mb-[-2rem] font-semibold text-neutral-300">Carousal</h1>
        <Carousal1
          images={[
            "https://blog.ipleaders.in/wp-content/uploads/2021/01/OIP.jpg",
            "https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802_640.jpg",
            "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
          ]}
        />
        <h1 className="mb-[-2rem] font-semibold text-neutral-300">
          TypeWriter Effect
        </h1>
        <div className="min-h-13 h-fit bg-amber-50 p-2 rounded-lg shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),inset_0_-2px_6px_rgba(0,0,0,0.6)]">
          <TypewriterEffect
            words={["Hello", "Developers"]}
            speed={200}
            className={`text-orange-600 text-2xl font-semibold `}
          />
        </div>
        <button className="flex items-center gap-2 bg-neutral-900 text-white px-3 py-2 rounded shadow-[0_0_4px_gray] cursor-pointer font-semibold mt-10 hover:shadow-[0_0_10px_gray] duration-300">View more</button>
      </div>
    </div>
  );
}

export default Examples;
