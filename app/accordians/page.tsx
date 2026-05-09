"use client";`r`n`r`nimport CopyButton from "@/pulseui-components/CopyButton/CopyButton";`r`n
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
import { useState } from "react";
import Accordian1 from "@/pulseui-components/Accordian/Accordian1";
import Accordian2 from "@/pulseui-components/Accordian/Accordian2";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <ComponentNavbar />
      <div className="w-full h-full p-4 py-10 pl-15">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-self-start">
            <h1 className="text-4xl font-semibold">Accordians</h1>
            <h2 className="text-neutral-400">
              Below is a collections of various accordians
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
                <h1 className="text-xl font-semibold text-neutral-200">
                  Accordian1
                </h1>
                <Accordian1
                  title="What is an UI Component?"
                  body="UI components are the reusable, interactive building blocks of a digital interface, such as buttons, form fields, navigation bars, and cards. They combine functionality and design to enable user interaction with applications and websites. Components maintain consistency and efficiency in design and development, often organized into libraries like Pulse UI."
                />
                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>
                <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-2 pl-3">
                  <p className="text-neutral-400 text-sm">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Accordian1.json
                  </p>
                  <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                        "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Accordian1.json",
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
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Props</h1>
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
                          Description
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>title</pre>
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
                            <p>The text displayed on the Accordian banner</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>body</pre>
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
                              The detailed text visible on opening the Accordian
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>
                  <CodeBlock code='import Accordian1 from "@/components/Accordian1";' />
                  <CodeBlock code='<Accordian1 title={"What is an UI Component"} body={"UI components..."} />' />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
                <h1 className="text-xl font-semibold text-neutral-200">
                  Accordian2
                </h1>
                <Accordian2
                  title="What is an UI Component?"
                  body="UI components are the reusable, interactive building blocks of a digital interface, such as buttons, form fields, navigation bars, and cards. They combine functionality and design to enable user interaction with applications and websites. Components maintain consistency and efficiency in design and development, often organized into libraries like Pulse UI."
                />
                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>
                <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-2 pl-3">
                  <p className="text-neutral-400 text-sm">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Accordian2.json
                  </p>
                  <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                        "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Accordian2.json",
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
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Props</h1>
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
                          Description
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>title</pre>
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
                            <p>The text displayed on the Accordian banner</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>body</pre>
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
                              The detailed text visible on opening the Accordian
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>
                  <CodeBlock code='import Accordian2 from "@/components/Accordian2";' />
                  <CodeBlock code='<Accordian2 title={"What is an UI Component"} body={"UI components..."} />' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;


