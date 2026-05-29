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
import Switch from "@/pulseui-components/Switch/Switch";
import GooeyInput from "@/pulseui-components/GooeyInput/GooeyInput";

function Page() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Gooey Input</h1>

            <h2 className="text-neutral-400">
              Below is a gooey search input component with smooth expanding
              animations and a fluid SVG filter effect that blends elements
              together organically.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                GooeyInput
              </h1>

              <div className="ml-10">
                <GooeyInput onChange={setInputValue} />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/GooeyInput.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/GooeyInput.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/GooeyInput.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/GooeyInput.json"
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
                            <pre>onChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{'onChange: (value: string) => void'}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the input that is typed into the search box</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import GooeyInput from "@/components/GooeyInput";' />

                <CodeBlock code='const [inputValue, setInputValue] = useState("");' />

                <CodeBlock code="<GooeyInput onChange={setInputValue} />" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

