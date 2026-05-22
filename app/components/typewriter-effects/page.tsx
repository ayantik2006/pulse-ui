"use client";

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
import TypewriterEffect1 from "@/pulseui-components/Typewriter Effect/TypewriterEffect1";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex overflow-hidden">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16 overflow-x-hidden">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Typewriter Effects</h1>

            <h2 className="text-neutral-400">
              Below is a collections of various Typewriter Effect components
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                TypewriterEffect 1
              </h1>

              <div className="min-h-8">
                <TypewriterEffect1
                  words={["Hello", "Developers"]}
                  className="text-yellow-200 font-semibold text-lg"
                />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/TypewriterEffect1.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/TypewriterEffect1.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/TypewriterEffect1.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/TypewriterEffect1.json"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Props</h1>

                <div className="w-full overflow-x-auto">
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
                            <pre>words</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>{"string[]"}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center justify-center p-1 rounded text-center">
                            <p>The list of words to be displayed</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>speed</pre>
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

                        <TableCell>
                          <div className="flex items-center justify-center p-1 rounded text-center">
                            <p>The speed of the writing</p>
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

                        <TableCell>
                          <div className="flex items-center justify-center p-1 rounded text-center">
                            <p>Tailwind classes applied to the text</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import TypewriterEffect1 from "@/components/TypewriterEffect1";' />

                <CodeBlock code='<TypewriterEffect1 words={["Hello","Developers"]} className="text-yellow-200 font-semibold text-lg" />' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
