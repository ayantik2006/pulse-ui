"use client";

import BasicLoader from "@/pulseui-components/Loaders/BasicLoader";
import Loader2 from "@/pulseui-components/Loaders/Loader2";
import Loader3 from "@/pulseui-components/Loaders/Loader3";
import Loader4 from "@/pulseui-components/Loaders/Loader4";
import Loader5 from "@/pulseui-components/Loaders/Loader5";
import Loader6 from "@/pulseui-components/Loaders/Loader6";
import Loader7 from "@/pulseui-components/Loaders/Loader7";
import Loader8 from "@/pulseui-components/Loaders/Loader8";
import Loader9 from "@/pulseui-components/Loaders/Loader9";
import Loader10 from "@/pulseui-components/Loaders/Loader10"
function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10">
      {/* Buttons */}
      <div className="h-fit w-full border-2 border-black border-dashed p-5 rounded-md flex-col">
        <h1 className="text-3xl font-bold">Buttons</h1>
        <h2 className="mt-3 font-semibold text-neutral-600">
          Basic Tailwind CSS Buttons
        </h2>
        <div className="flex flex-wrap gap-4 mt-3">
          <button className="bg-black text-white px-3 py-1 rounded cursor-pointer hover:opacity-85">
            Basic
          </button>
          <button
            className="bg-pink-700 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1"
          >
            Lift Up
          </button>
          <button
            className="bg-purple-800 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1 hover:shadow-[0_5px_10px_2px_gray]"
          >
            Lift Up Shadow
          </button>
          <button className="px-3 py-1 rounded               cursor-pointer duration-300 border-2 border-black bg-yellow-600 text-white font-semibold hover:bg-blue-700">
            Inversion
          </button>
          <button className="font-semibold underline-offset-5 underline cursor-pointer">
            Underline Button
          </button>
          <button className="font-semibold underline-offset-5 hover:underline duration-300 cursor-pointer">
            Hover Underline Button
          </button>
          <button className="bg-yellow-400 px-3 py-1 font-semibold shadow-[0_0_0px_5px_black] cursor-pointer hover:opacity-90">
            Sharp Shadow
          </button>
          <button className="bg-yellow-400 px-3 py-1 font-semibold shadow-[5px_5px_0px_1px_black] cursor-pointer hover:opacity-90">
            Angle Shadow
          </button>
          <button className="bg-yellow-400 px-3 py-1 font-semibold hover:shadow-[5px_5px_0px_1px_black] cursor-pointer hover:-translate-y-1 duration-300">
            Hover Angle Shadow
          </button>
          <button className="px-3 py-1 bg-orange-600 font-semibold text-white rounded cursor-pointer hover:scale-[1.1] duration-200">
            Expansion
          </button>
          <button className="px-3 py-1 bg-orange-600 font-semibold text-white rounded cursor-pointer hover:scale-[0.9] duration-200">
            Contraction
          </button>
          <button className="px-4 py-1 bg-red-600 text-white rounded-[40px] cursor-pointer hover:opacity-85">
            Capsule
          </button>
          <div className="p-1 bg-yellow-500 rounded bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <button className="px-3 py-2 rounded bg-black text-white cursor-pointer">
              Gradient Border
            </button>
          </div>
          <button
            className="px-5 py-1 bg-black text-white rounded duration-300 cursor-pointer hover:opacity-85"
            onMouseDown={(e) => (e.currentTarget.style.scale = "0.8")}
            onMouseUp={(e) => (e.currentTarget.style.scale = "1")}
          >
            Click Push
          </button>
          <button
            className="bg-white text-black py-2 px-4 rounded-lg 
                border-black
               transition-all duration-100 ease-in-out
               shadow-md hover:bg-gray-200 hover:animate-pulse cursor-pointer"
          >
            Fading
          </button>
          <button className="bg-green-600 border-4 border-black text-black font-semibold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:rotate-4 cursor-pointer">
            Wiggly Clockwise
          </button>
          <button className="bg-green-600 border-4 border-black text-black px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:-rotate-4 font-semibold cursor-pointer">
            Wiggly Anticlockwise
          </button>
        </div>
      </div>
      {/* Loaders */}
      <div className="h-fit w-full border-2 border-black border-dashed p-5 rounded-md flex-col">
        <h1 className="text-3xl font-bold mb-5">Loaders</h1>
        <h2 className="font-semibold text-neutral-600 mb-2">Basic Loader</h2>
        <BasicLoader color={"black"} size={40} thickness={6} />
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 2</h2>
        <Loader2/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 3</h2>
        <Loader3/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 4</h2>
        <Loader4/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 5</h2>
        <Loader5/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 6</h2>
        <Loader6/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 7</h2>
        <Loader7/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 8</h2>
        <Loader8/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 9</h2>
        <Loader9/>
        <h2 className="font-semibold text-neutral-600 mb-2 mt-5">Loader 10</h2>
        <Loader10/>
      </div>
    </div>
  );
}

export default page;
