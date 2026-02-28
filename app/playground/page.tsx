"use client";

import BasicLoader from "@/pulseui-components/Loaders/BasicLoader";

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
          <button className="px-3 py-1 bg-red-600 text-white rounded-[20px] cursor-pointer hover:opacity-85">
            Capsule
          </button>
          <div className="p-1 bg-yellow-500 rounded bg-gradient-to-r from-pink-500 to-purple-500">
            <button className="px-3 py-1 rounded bg-black text-white cursor-pointer">
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
        </div>
      </div>
      {/* Loaders */}
      <div className="h-fit w-full border-2 border-black border-dashed p-5 rounded-md flex-col">
        <h1 className="text-3xl font-bold mb-5">Loaders</h1>
        <h2 className="font-semibold text-neutral-600 mb-2">Basic Loader</h2>
        <BasicLoader color={"black"} size={40} thickness={6}/>

      </div>
    </div>
  );
}

export default page;
