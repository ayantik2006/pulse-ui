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
import SingleFileUpload from "@/pulseui-components/File Upload/SingleFileUpload";
import { useState } from "react";
import MultipleFileUpload from "@/pulseui-components/File Upload/MultipleFileUpload";
import ImageUpload from "@/pulseui-components/File Upload/ImageUpload";
import { toast } from "@/pulseui-components/Toast/toast";
import { Toaster } from "@/pulseui-components/Toast/Toaster";

function Page() {
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <ComponentNavbar />
      <div className="w-full h-full p-4 py-10 pl-15">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-self-start">
            <h1 className="text-4xl font-semibold">Toasts</h1>
            <h2 className="text-neutral-400">
              Below is a collection of lightweight, customizable and modern
              toast notification components
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col bg-neutral-900 rounded p-5 w-full h-fit items-center border border-neutral-700">
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
            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700">
              <div className="">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-2 pl-3">
                <div className="flex gap-2 items-center">
                  <div className="text-[0.85rem] bg-neutral-700 p-3 rounded-full w-3 h-3 flex items-center justify-center text-neutral-400">
                    <p>1</p>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Toaster.json
                  </p>
                </div>
                <button
                  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
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
              <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-2 pl-3">
                <div className="flex gap-2 items-center">
                  <div className="text-[0.85rem] bg-neutral-700 p-3 rounded-full w-3 h-3 flex items-center justify-center text-neutral-400">
                    <p>2</p>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/toast.json
                  </p>
                </div>
                <button
                  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
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
            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700">
              <div className="">
                <p className="font-semibold">Usage</p>
              </div>
              <CodeBlock code='import Toast from "@/components/Toaster";' />
              <CodeBlock code='import toast from "@/components/toast";' />
              <div className="">
                <p className="text-sm text-neutral-400">
                  Add the below code to top of file inside return()
                </p>
              </div>
              <CodeBlock code='<Toaster position="top-center" />' />
              <div className="">
                <p className="text-sm text-neutral-400">
                  Add the below code to the onClick event listener of any button
                </p>
              </div>
              <CodeBlock code='toast({ message:"Hello Developer" })' />
            </div>
            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700">
              <div className="">
                <p className="font-semibold">Props</p>
              </div>
              <div className="">
                <p className="text-sm text-neutral-400">Toaster</p>
              </div>
              <Table className="border border-neutral-700">
                <TableHeader className="">
                  <TableRow className="hover:bg-neutral-900">
                    <TableHead className="w-[100px] text-white text-center">
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
                    <TableCell className="font-medium mr-100">
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
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          {
                            '"top-center" | "bottom-center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"'
                          }
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex flex-col gap-3 bg-neutral-900 rounded p-5 w-full h-fit border border-neutral-700">
              <div className="">
                <p className="font-semibold">Description of toast function</p>
              </div>
              <div className="">
                <p className="text-sm text-neutral-400">The toast function takes an object as an argument which has the following properties</p>
              </div>
              <Table className="border border-neutral-700">
                <TableHeader className="">
                  <TableRow className="hover:bg-neutral-900">
                    <TableHead className="w-[100px] text-white text-center">
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
                    <TableCell className="font-medium mr-100">
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
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          The toast message that will be displayed
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-black">
                    <TableCell className="font-medium mr-100">
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>duration</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>number</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>false</pre>
                      </div>
                    </TableCell>
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          The duration in milliseconds after which toast is dismissed; default is 3000ms
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-black">
                    <TableCell className="font-medium mr-100">
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>className</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>string</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>false</pre>
                      </div>
                    </TableCell>
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          Tailwind CSS classes for custom styling of the toast like text-color, bg-color etc.
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-black">
                    <TableCell className="font-medium mr-100">
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>type</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>string</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>false</pre>
                      </div>
                    </TableCell>
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          {'Has two possible values "success" or "failure"'}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-black">
                    <TableCell className="font-medium mr-100">
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>icon</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>string | React.ReactNode</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>false</pre>
                      </div>
                    </TableCell>
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          Custom icon for toast messages - emojis of React components like lucide-react or tabler icons
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-black">
                    <TableCell className="font-medium mr-100">
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>closeButton</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>boolean</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>false</pre>
                      </div>
                    </TableCell>
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          Adds a cross button to the toast to dismiss the toast immediately
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-black">
                    <TableCell className="font-medium mr-100">
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>theme</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>string</pre>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="bg-black flex items-center justify-center p-1 rounded">
                        <pre>false</pre>
                      </div>
                    </TableCell>
                    <TableCell className="text-right ">
                      <div className="flex items-center justify-center p-1 rounded">
                        <p>
                          {'Has two values - "dark" or "default"; "dark" modifies the toast for dark themes'}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
