"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
import { Copy } from "lucide-react";

function page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
      <ComponentNavbar />
      <div className="w-full h-full p-4 py-10 pl-15">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold sticky">Buttons</h1>
          <h2 className="text-muted-foreground">
            Below is a collections of beautifully designed tailwind buttons.
            Just copy the code and use it.
          </h2>
          <div className="flex flex-wrap gap-5 mt-5">
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="dark:bg-black dark:text-white px-3 py-1 rounded cursor-pointer hover:opacity-85 bg-white text-black">
                  Basic
                </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="dark:bg-black dark:text-white px-3 py-1 rounded cursor-pointer hover:opacity-85 bg-white text-black">
                  Basic
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button
            className="bg-pink-700 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1"
          >
            Lift Up
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button
                  className="bg-pink-700 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1"
                >
                  Lift Up
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button
            className="bg-purple-800 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1 hover:shadow-[0_5px_10px_2px_black]"
          >
            Lift Up Shadow
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button
                  className="bg-purple-800 text-white px-3 py-1 rounded
                cursor-pointer duration-300 hover:-translate-y-1 hover:shadow-[0_5px_10px_2px_black]"
                >
                  Lift Up Shadow
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="px-3 py-1 rounded               cursor-pointer duration-300 border-2 border-black bg-yellow-600 text-white font-semibold hover:bg-blue-700">
            Inversion
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="px-3 py-1 rounded               cursor-pointer duration-300 border-2 border-black bg-yellow-600 text-white font-semibold hover:bg-blue-700">
                  Inversion
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="font-semibold underline-offset-5 underline cursor-pointer">
            Underline Button
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="font-semibold underline-offset-5 underline cursor-pointer">
                  Underline Button
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="font-semibold underline-offset-5 hover:underline duration-300 cursor-pointer">
            Hover Underline Button
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="font-semibold underline-offset-5 hover:underline duration-300 cursor-pointer">
                  Hover Underline Button
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="bg-yellow-400 px-3 py-1 font-semibold shadow-[0_0_0px_5px_black] cursor-pointer hover:opacity-90">
            Sharp Shadow
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="bg-yellow-400 px-3 py-1 font-semibold shadow-[0_0_0px_5px_black] cursor-pointer hover:opacity-90">
                  Sharp Shadow
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="bg-yellow-400 px-3 py-1 font-semibold shadow-[5px_5px_0px_1px_black] cursor-pointer hover:opacity-90">
            Angle Shadow
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="bg-yellow-400 px-3 py-1 font-semibold shadow-[5px_5px_0px_1px_black] cursor-pointer hover:opacity-90">
                  Angle Shadow
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="bg-yellow-400 px-3 py-1 font-semibold hover:shadow-[5px_5px_0px_1px_black] cursor-pointer hover:-translate-y-1 duration-300">
            Hover Angle Shadow
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="bg-yellow-400 px-3 py-1 font-semibold hover:shadow-[5px_5px_0px_1px_black] cursor-pointer hover:-translate-y-1 duration-300">
                  Hover Angle Shadow
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="px-3 py-1 bg-orange-600 font-semibold text-white rounded cursor-pointer hover:scale-[1.1] duration-200">
            Expansion
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="px-3 py-1 bg-orange-600 font-semibold text-white rounded cursor-pointer hover:scale-[1.1] duration-200">
                  Expansion
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="px-3 py-1 bg-orange-600 font-semibold text-white rounded cursor-pointer hover:scale-[0.9] duration-200">
            Contraction
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="px-3 py-1 bg-orange-600 font-semibold text-white rounded cursor-pointer hover:scale-[0.9] duration-200">
                  Contraction
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="px-4 py-1 bg-red-600 text-white rounded-[40px] cursor-pointer hover:opacity-85">
            Capsule
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="px-4 py-1 bg-red-600 text-white rounded-[40px] cursor-pointer hover:opacity-85">
                  Capsule
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <div className="p-1 bg-yellow-500 rounded bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <button className="px-3 py-2 rounded bg-black text-white cursor-pointer">
              Gradient Border
            </button>
          </div>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <div className="p-1 bg-yellow-500 rounded bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <button className="px-3 py-2 rounded bg-black text-white cursor-pointer">
                    Gradient Border
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button
            className="px-5 py-2 bg-black text-white rounded duration-300 cursor-pointer hover:opacity-85"
            onMouseDown={(e) => (e.currentTarget.style.scale = "0.8")}
            onMouseUp={(e) => (e.currentTarget.style.scale = "1")}
          >
            Click Push
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button
                  className="px-5 py-2 bg-black text-white rounded duration-300 cursor-pointer hover:opacity-85"
                  onMouseDown={(e) => (e.currentTarget.style.scale = "0.8")}
                  onMouseUp={(e) => (e.currentTarget.style.scale = "1")}
                >
                  Click Push
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button
            className="bg-white text-black py-2 px-4 rounded-lg 
                border-black
               transition-all duration-100 ease-in-out
               shadow-md hover:bg-gray-200 hover:animate-pulse cursor-pointer"
          >
            Fading
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button
                  className="bg-white text-black py-2 px-4 rounded-lg 
                border-black
               transition-all duration-100 ease-in-out
               shadow-md hover:bg-gray-200 hover:animate-pulse cursor-pointer"
                >
                  Fading
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="bg-green-600 border-4 border-black text-black font-semibold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:rotate-4 cursor-pointer">
            Wiggly Clockwise
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="bg-green-600 border-4 border-black text-black font-semibold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:rotate-4 cursor-pointer">
                  Wiggly Clockwise
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-neutral-900 rounded p-1 w-70 h-60 items-center border border-neutral-700 group">
              <div
                className="self-end p-1 cursor-pointer hover:bg-neutral-800 rounded"
                onClick={async (e) => {
                  const el = e.currentTarget;
                  await navigator.clipboard.writeText(`
                  <button className="bg-green-600 border-4 border-black text-black px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:-rotate-4 font-semibold cursor-pointer">
            Wiggly Anticlockwise
          </button>
                `);
                  el.innerHTML = "copied!";
                  el.style.fontSize = "0.9rem";
                  el.style.color = "gray";
                  setTimeout(() => {
                    el.innerHTML = "copy";
                    el.style.fontSize = "0.9rem";
                    el.style.color = "gray";
                  }, 3000);
                }}
              >
                <p className="text-neutral-900  group-hover:text-neutral-500 text-[0.9rem]">
                  copy
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full">
                <button className="bg-green-600 border-4 border-black text-black px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:-rotate-4 font-semibold cursor-pointer">
                  Wiggly Anticlockwise
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
