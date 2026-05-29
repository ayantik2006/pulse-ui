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

function Page() {
  const [onOff, setOnOff] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Switch</h1>

            <h2 className="text-neutral-400">
              Below is a sliding switch button component
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                Switch
              </h1>

              <div className="flex gap-2">
                <Switch onOnOff={setOnOff} />

                <p className="text-sm text-neutral-500">
                  {onOff ? "ON" : "OFF"}
                </p>
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/Switch.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/Switch.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Switch.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/Switch.json"
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
                            <pre>onOnOff</pre>
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
                            <p>handles the on/off state of the button</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>defaultValue</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>boolean</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>false</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the default on or off state</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import Switch from "@/components/Switch";' />

                <CodeBlock code="const [onOff, setOnOff] = useState(false);" />

                <CodeBlock code="<Switch onOnOff={setOnOff} />" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;


