"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
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
import HoldToConfirm from "@/pulseui-components/HoldToConfirm/HoldToConfirm";

function Page() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex">
      <ComponentNavbar />

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Hold To Confirm</h1>

            <h2 className="text-neutral-400">
              Below is a hold to confirm button, long press it to confirm a
              particular task maybe form submission, payment confirmation etc.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                HoldToConfirm
              </h1>

              <HoldToConfirm
                confirmationMessage={"Confirmed"}
                className="bg-green-600 px-4 py-2 text-lg cursor-pointer font-semibold"
                onConfirmation={setIsConfirmed}
              >
                <p>Hold to Confirm</p>
              </HoldToConfirm>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <p className="text-neutral-400 text-sm truncate">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/HoldToConfirm.json
                </p>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/HoldToConfirm.json",
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
                            <pre>children</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>React.ReactNode</pre>
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
                              The children that is wrapped inside the
                              component&apos;s opening and closing tags
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>confirmationMessage</pre>
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
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>
                              The message to be shown when the confirmation is
                              over
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
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

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>
                              Tailwind classes to be passed to style the button
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>onConfirmation</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>(val: boolean) =&gt; void</pre>
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
                              Sets the confirmed state to be true or false
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

                <CodeBlock code='import HoldToConfirm from "@/components/HoldToConfirm";' />

                <CodeBlock code='const [isConfirmed,setIsConfirmed] = useState(false);' />

                <CodeBlock code='<HoldToConfirm confirmationMessage={"Confirmed"} className="bg-green-600 px-4 py-2 text-lg cursor-pointer font-semibold" onConfirmation={setIsConfirmed}> <p>Hold to Confirm</p> </HoldToConfirm>' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;