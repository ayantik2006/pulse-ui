"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
import BasicLoader from "@/pulseui-components/Loaders/BasicLoader";
import { Copy } from "lucide-react";

function page() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <ComponentNavbar />
      <div className="w-full h-full p-4 py-10 pl-15">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-self-start">
            <h1 className="text-4xl font-semibold">Loaders</h1>
            <h2 className="text-neutral-400">
              Below is a collections of various loader/spinner components
            </h2>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Basic Loader
              </h1>
              <BasicLoader/>
              <div className="mb-[-1rem] text-neutral-300 bg-neutral-950 w-fit px-2 border border-neutral-600 rounded font-semibold">
                <p>Install</p>
              </div>
              <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-1">
                <p className="text-neutral-400 text-sm">npx shadcn@latest add https://pulseui-henna.vercel.app/registry/basic-loader.json</p>
                <button className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]" onClick={async (e)=>{
                  const el=e.currentTarget;
                  await navigator.clipboard.writeText("npx shadcn@latest add https://pulseui-henna.vercel.app/registry/basic-loader.json");
                  el.innerText="copied!"
                  setTimeout(() => {
                    el.innerText="copy"
                  }, 3000);
                }}>
                  copy
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
