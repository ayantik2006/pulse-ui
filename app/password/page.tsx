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
import Password1 from "@/pulseui-components/Password/Password1";
import Password2 from "@/pulseui-components/Password/Password2";

function Page() {
  const [password, setPassword] = useState("");
  const [isPasswordValid1, setIsPasswordValid1] = useState(false);
  const [isPasswordValid2, setIsPasswordValid2] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex">
      <ComponentNavbar />

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Password</h1>

            <h2 className="text-neutral-400">
              Below is a set of password components indicating password
              strengths
            </h2>
          </div>

          {/* PASSWORD 1 */}
          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                Password1
              </h1>

              <div className="flex flex-col gap-2">
                <Password1
                  onPasswordChange={setPassword}
                  passwordValid={setIsPasswordValid1}
                />

                <button
                  className={`bg-white text-black text-sm w-fit px-3 py-1 mt-2 font-semibold rounded ml-1 hover:opacity-90 cursor-pointer ${
                    !isPasswordValid1
                      ? "pointer-events-none opacity-60"
                      : ""
                  }`}
                >
                  Submit
                </button>
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <p className="text-neutral-400 text-sm truncate">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/Password1.json
                </p>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Password1.json",
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
                            <pre>onPasswordChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>{"(password: string) => void"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the password that is input</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>passwordValid</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>{"(isValid: boolean) => void"}</pre>
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
                              checks whether the input password is satisfying
                              all the conditions
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

                <CodeBlock code='import Password1 from "@/components/Password1";' />

                <CodeBlock code='const [password,setPassword]=useState("");' />

                <CodeBlock code="const [isPasswordValid,setIsPasswordValid]=useState(false);" />

                <CodeBlock code="<Password1 onPasswordChange={setPassword} passwordValid={setIsPasswordValid1}/>" />
              </div>
            </div>
          </div>

          {/* PASSWORD 2 */}
          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                Password2
              </h1>

              <div className="flex flex-col gap-2">
                <Password2
                  onPasswordChange={setPassword}
                  passwordValid={setIsPasswordValid2}
                />

                <button
                  className={`bg-white text-black text-sm w-fit px-3 py-1 mt-2 font-semibold rounded ml-1 hover:opacity-90 cursor-pointer ${
                    !isPasswordValid2
                      ? "pointer-events-none opacity-60"
                      : ""
                  }`}
                >
                  Submit
                </button>
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <p className="text-neutral-400 text-sm truncate">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/Password2.json
                </p>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Password2.json",
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
                            <pre>onPasswordChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>{"(password: string) => void"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the password that is input</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>passwordValid</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>{"(isValid: boolean) => void"}</pre>
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
                              checks whether the input password is satisfying
                              all the conditions
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

                <CodeBlock code='import Password2 from "@/components/Password2";' />

                <CodeBlock code='const [password,setPassword]=useState("");' />

                <CodeBlock code="const [isPasswordValid,setIsPasswordValid]=useState(false);" />

                <CodeBlock code="<Password2 onPasswordChange={setPassword} passwordValid={setIsPasswordValid}/>" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;