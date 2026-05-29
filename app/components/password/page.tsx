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
import Password1 from "@/pulseui-components/Password/Password1";
import Password2 from "@/pulseui-components/Password/Password2";

function Page() {
  const [password, setPassword] = useState("");
  const [isPasswordValid1, setIsPasswordValid1] = useState(false);
  const [isPasswordValid2, setIsPasswordValid2] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen flex">

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
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                Password1
              </h1>

              <div className="flex flex-col gap-2">
                <Password1
                  onPasswordChange={setPassword}
                  passwordValid={setIsPasswordValid1}
                />

                <button
                  className={`bg-foreground text-background text-sm w-fit px-3 py-1 mt-2 font-semibold rounded ml-1 hover:opacity-90 cursor-pointer ${
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

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/Password1.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/Password1.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Password1.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/Password1.json"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Props</h1>

                <div className="overflow-x-auto">
                  <Table className="border border-border min-w-[700px]">
                    <TableHeader>
                      <TableRow className="hover:bg-muted/60">
                        <TableHead className="text-foreground text-center">
                          Prop
                        </TableHead>

                        <TableHead className="text-foreground text-center">
                          Type
                        </TableHead>

                        <TableHead className="text-foreground text-center">
                          isCompulsory
                        </TableHead>

                        <TableHead className="text-foreground text-center">
                          Description
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>onPasswordChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{"(password: string) => void"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the password that is input</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>passwordValid</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{"(isValid: boolean) => void"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
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
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                Password2
              </h1>

              <div className="flex flex-col gap-2">
                <Password2
                  onPasswordChange={setPassword}
                  passwordValid={setIsPasswordValid2}
                />

                <button
                  className={`bg-foreground text-background text-sm w-fit px-3 py-1 mt-2 font-semibold rounded ml-1 hover:opacity-90 cursor-pointer ${
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

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/Password2.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/Password2.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Password2.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/Password2.json"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Props</h1>

                <div className="overflow-x-auto">
                  <Table className="border border-border min-w-[700px]">
                    <TableHeader>
                      <TableRow className="hover:bg-muted/60">
                        <TableHead className="text-foreground text-center">
                          Prop
                        </TableHead>

                        <TableHead className="text-foreground text-center">
                          Type
                        </TableHead>

                        <TableHead className="text-foreground text-center">
                          isCompulsory
                        </TableHead>

                        <TableHead className="text-foreground text-center">
                          Description
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>onPasswordChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{"(password: string) => void"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the password that is input</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>passwordValid</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{"(isValid: boolean) => void"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
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



