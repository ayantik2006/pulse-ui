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
import SlideToUnlock from "@/pulseui-components/SlideToUnlock/SlideToUnlock";

function Page() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="bg-background text-foreground min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Slide To Unlock</h1>

            <h2 className="text-neutral-400">
              Below is an ios style slide to unlock component
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                SlideToUnlock
              </h1>

              <div className="duration-300">
                <SlideToUnlock onUnlock={setIsLocked} />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/SlideToUnlock.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/SlideToUnlock.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/SlideToUnlock.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/SlideToUnlock.json"
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
                            <pre>onUnlock</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>(val: boolean) =&gt; void</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>Sets the locked or unlocked state</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import SlideToUnlock from "@/components/SlideToUnlock";' />

                <CodeBlock code='const [isLocked, setIsLocked] = useState(true);' />

                <CodeBlock code="<SlideToUnlock onUnlock={setIsLocked} />" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;


