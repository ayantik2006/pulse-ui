"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CodeBlock from "@/components/CodeBlock";
import { toast } from "@/pulseui-components/Toast/toast";
import { Toaster } from "@/pulseui-components/Toast/Toaster";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <ComponentNavbar />

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Toasts</h1>

            <h2 className="text-neutral-400">
              Below is a collection of lightweight, customizable and modern
              toast notification components
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col bg-neutral-900 rounded p-5 w-full h-fit items-center border border-neutral-700 overflow-hidden">
              <Toaster position="top-center" />

              <div className="flex flex-wrap gap-2 items-center">
                <button
                  className="bg-green-600 px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer"
                  onClick={() =>
                    toast({
                      message: "This is a success message!",
                      duration: 3000,
                      type: "success",
                    })
                  }
                >
                  Get Success
                </button>

                <button
                  className="bg-red-600 px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer"
                  onClick={() =>
                    toast({
                      message: "This is a failure message!",
                      duration: 3000,
                      type: "failure",
                    })
                  }
                >
                  Get Failure
                </button>

                <button
                  className="bg-black px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer dark:bg-white dark:text-black"
                  onClick={() =>
                    toast({
                      message: "This is a normal message!",
                      duration: 3000,
                    })
                  }
                >
                  Get Default
                </button>

                <button
                  className="bg-yellow-600 px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer"
                  onClick={() =>
                    toast({
                      message: "This is an icon message!",
                      duration: 3000,
                      type: "failure",
                      icon: "😁",
                    })
                  }
                >
                  Get Icon
                </button>

                <button
                  className="bg-orange-600 px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer"
                  onClick={() =>
                    toast({
                      message: "This is a CSS message!",
                      duration: 3000,
                      type: "failure",
                      className: "bg-yellow-200 text-red-600",
                    })
                  }
                >
                  Get Custom CSS
                </button>

                <button
                  className="bg-pink-700 px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer"
                  onClick={() =>
                    toast({
                      message: "Hi! I have a close button",
                      duration: 3000,
                      closeButton: true,
                    })
                  }
                >
                  With Close Button
                </button>

                <button
                  className="bg-neutral-700 px-3 py-1 text-white rounded font-semibold hover:opacity-85 cursor-pointer"
                  onClick={() =>
                    toast({
                      message: "Hi! I have a dark theme",
                      duration: 3000,
                      closeButton: true,
                      theme: "dark",
                    })
                  }
                >
                  With Dark Theme
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700 overflow-hidden">
              <p className="font-semibold">Installation</p>

              <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <div className="flex gap-2 items-center min-w-0">
                  <div className="text-[0.85rem] bg-neutral-700 p-3 rounded-full w-3 h-3 flex items-center justify-center text-neutral-400 shrink-0">
                    <p>1</p>
                  </div>

                  <p className="text-neutral-400 text-sm truncate">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Toaster.json
                  </p>
                </div>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Toaster.json",
                    );

                    el.innerText = "copied!";

                    setTimeout(() => {
                      el.innerText = "copy";
                    }, 3000);
                  }}
                >
                  copy
                </button>
              </div>

              <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <div className="flex gap-2 items-center min-w-0">
                  <div className="text-[0.85rem] bg-neutral-700 p-3 rounded-full w-3 h-3 flex items-center justify-center text-neutral-400 shrink-0">
                    <p>2</p>
                  </div>

                  <p className="text-neutral-400 text-sm truncate">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/toast.json
                  </p>
                </div>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/toast.json",
                    );

                    el.innerText = "copied!";

                    setTimeout(() => {
                      el.innerText = "copy";
                    }, 3000);
                  }}
                >
                  copy
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700 overflow-hidden">
              <p className="font-semibold">Usage</p>

              <CodeBlock code='import Toast from "@/components/Toaster";' />

              <CodeBlock code='import toast from "@/components/toast";' />

              <p className="text-sm text-neutral-400">
                Add the below code to top of file inside return()
              </p>

              <CodeBlock code='<Toaster position="top-center" />' />

              <p className="text-sm text-neutral-400">
                Add the below code to the onClick event listener of any button
              </p>

              <CodeBlock code='toast({ message:"Hello Developer" })' />
            </div>

            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700 overflow-hidden">
              <p className="font-semibold">Props</p>

              <p className="text-sm text-neutral-400">Toaster</p>

              <div className="overflow-x-auto">
                <Table className="border border-neutral-700 min-w-[700px]">
                  <TableHeader>
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="text-white text-center">
                        Prop
                      </TableHead>

                      <TableHead className="text-white text-center">
                        Type
                      </TableHead>

                      <TableHead className="text-white text-center">
                        Default
                      </TableHead>

                      <TableHead className="text-white text-center">
                        Values
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium">
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>position</pre>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>string</pre>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>-</pre>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center justify-center p-1 rounded text-center">
                          <p>
                            "top-center" | "bottom-center" | "top-left" |
                            "top-right" | "bottom-left" | "bottom-right"
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700 overflow-hidden">
              <p className="font-semibold">
                Description of toast function
              </p>

              <p className="text-sm text-neutral-400">
                The toast function takes an object as an argument which has the
                following properties
              </p>

              <div className="overflow-x-auto">
                <Table className="border border-neutral-700 min-w-[700px]">
                  <TableHeader>
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="text-white text-center">
                        Property
                      </TableHead>

                      <TableHead className="text-white text-center">
                        Type
                      </TableHead>

                      <TableHead className="text-white text-center">
                        isCompulsory
                      </TableHead>

                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>message</pre>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>string</pre>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>true</pre>
                        </div>
                      </TableCell>

                      <TableCell className="text-center">
                        The toast message that will be displayed
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;