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
import { CodeBlockCommand } from "@/components/code-block-command";
import WheelPicker1 from "@/pulseui-components/WheelPicker/WheelPicker1";

function Page() {
  const [option, setOption] = useState("");

  return (
    <div className="bg-black text-white min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Wheel Pickers</h1>

            <h2 className="text-neutral-400">
              Below is a collections of various wheel picker components
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                Wheel Picker 1
              </h1>

              <div className="w-60">
                <WheelPicker1
                  options={[
                    "Java",
                    "C++",
                    "TypeScript",
                    "JavaScript",
                    "Rust",
                    "Ruby",
                    "Golang",
                  ]}
                  onChange={setOption}
                />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/WheelPicker1.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/WheelPicker1.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/WheelPicker1.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/WheelPicker1.json"
                />
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
                            <pre>options</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>string[]</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>
                              list of all visible options in the wheel picker
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>onChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>(value: string) =&gt; void</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>
                              The function which sets the option is passed to it
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import WheelPicker1 from "@/components/WheelPicker1";' />

                <CodeBlock code='const [option, setOption] = useState("");' />

                <CodeBlock code='<WheelPicker1 options={["Java", "C++", "TypeScript", "JavaScript", "Rust", "Ruby", "Golang"]} onChange={setOption} />' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
