"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CodeBlock from "@/components/CodeBlock";
import ElasticSlider from "@/pulseui-components/ElasticSlider/ElasticSlider";
import { House, Terminal, RefreshCcw } from "lucide-react";
import FloatingDock from "@/pulseui-components/FloatingDock/FloatingDock";

function Page() {
  const links = [
    {
      title: "Home",
      icon: (
        <House
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Terminal",
      icon: (
        <Terminal
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Refresh",
      icon: (
        <RefreshCcw
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Floating Dock</h1>

            <h2 className="text-neutral-400">
              Below is a beautiful ios style floating doc component that can be used as a navigation bar
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                FloatingDock
              </h1>

              <div className="flex flex-col gap-2">
                <FloatingDock links={links} />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <p className="text-neutral-400 text-sm truncate">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/FloatingDock.json
                </p>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/FloatingDock.json",
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
                          isCompulsory
                        </TableHead>

                        <TableHead className="text-white text-center">
                          Description
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>links</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>
                              {
                                "{ title: string; icon: React.ReactNode; href: string }[]"
                              }
                            </pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>The list of all the navigation items</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock
                  code={`import FloatingDock from "@/components/FloatingDock";

export default function NavBar(){
    const links = [
    {
      title: "Home",
      icon: (
        <House
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Terminal",
      icon: (
        <Terminal
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Refresh",
      icon: (
        <RefreshCcw
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
 ];

    return (
        <FloatingDock links={links}/>
    );
}
`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

