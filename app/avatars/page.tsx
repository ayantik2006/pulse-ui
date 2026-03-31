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
import { useState } from "react";
import Accordian1 from "@/pulseui-components/Accordian/Accordian1";
import Accordian2 from "@/pulseui-components/Accordian/Accordian2";
import Avatar1 from "@/pulseui-components/Avatars/Avatar1";
import Avatar2 from "@/pulseui-components/Avatars/Avatar2";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <ComponentNavbar />
      <div className="w-full h-full p-4 py-10 pl-15">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-self-start">
            <h1 className="text-4xl font-semibold">Avatars</h1>
            <h2 className="text-neutral-400">
              Below is a collections of various avatars
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
                <h1 className="text-xl font-semibold text-neutral-200">
                  Avatar1
                </h1>
                <Avatar1 src="/avatar1.png" fallBackText="AS" size={40} />
                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>
                <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-2 pl-3">
                  <p className="text-neutral-400 text-sm">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Avatar1.json
                  </p>
                  <button
                    className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                    onClick={async (e) => {
                      const el = e.currentTarget;
                      await navigator.clipboard.writeText(
                        "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Avatar1.json",
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
                            <pre>src</pre>
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
                            <p>The url of the image</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>fallBackText</pre>
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
                              The text displayed when the url does not exist
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>size</pre>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>number</pre>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>-</pre>
                          </div>
                        </TableCell>
                        <TableCell className="text-right ">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>The size of the avatar</p>
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
                            <pre>-</pre>
                          </div>
                        </TableCell>
                        <TableCell className="text-right ">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>
                              Optional prop; Tailwind classes applied when src
                              url is invalid
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>
                  <CodeBlock code='import Avatar1 from "@/components/Avatar1";' />
                  <CodeBlock code='<Avatar1 src="/avatar1.png" fallBackText="AS" size={40} />' />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
                <h1 className="text-xl font-semibold text-neutral-200">
                  Avatar2
                </h1>
                <Avatar2
                  src="/avatar1.png"
                  fallBackText="AS"
                  size={40}
                  title="Project Lead"
                />
                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>
                <div className="bg-neutral-950 rounded flex border border-neutral-700 justify-between px-2 py-2 pl-3">
                  <p className="text-neutral-400 text-sm">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Avatar2.json
                  </p>
                  <button
                    className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                    onClick={async (e) => {
                      const el = e.currentTarget;
                      await navigator.clipboard.writeText(
                        "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Avatar2.json",
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
                            <pre>src</pre>
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
                            <p>The url of the image</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>fallBackText</pre>
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
                              The text displayed when the url does not exist
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium mr-100">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>size</pre>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>number</pre>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>-</pre>
                          </div>
                        </TableCell>
                        <TableCell className="text-right ">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>The size of the avatar</p>
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
                            <pre>-</pre>
                          </div>
                        </TableCell>
                        <TableCell className="text-right ">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>
                              Optional prop; Tailwind classes applied when src
                              url is invalid
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
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
                            <p>The text displayed on hover</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>
                  <CodeBlock code='import Avatar2 from "@/components/Avatar2";' />
                  <CodeBlock code='<Avatar2 src="/avatar1.png" fallBackText="AS" size={40} title="Project Lead" />' />
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
