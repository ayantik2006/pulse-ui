"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
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
              Below is a collections of beautifully designed tailwind buttons.
              Just copy the code and use it.
            </h2>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
