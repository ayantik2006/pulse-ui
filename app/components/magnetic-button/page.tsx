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
import MagneticButton from "@/pulseui-components/MagneticButton/MagneticButton";

function Page() {
  const [onOff, setOnOff] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Magnetic Button</h1>

            <h2 className="text-neutral-400">Below is a fun magnetic button</h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                MagneticButton
              </h1>

              <div className="flex gap-2">
                <MagneticButton className="bg-blue-600 py-2 px-3 rounded-lg cursor-pointer">
                  <p>Magnetic Button</p>
                </MagneticButton>
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/MagneticButton.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/MagneticButton.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/MagneticButton.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/MagneticButton.json"
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
                            <pre>children</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>React.ReactNode</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>The children that is wrapped inside the component&apos;s opening and closing tags</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>className</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>string</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>false</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>Tailwind classes to be passed to style the button</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>
                <CodeBlock code='import MagneticButton from "@/components/MagneticButton";' />
                <CodeBlock code='<MagneticButton className="bg-blue-600 py-2 px-3 rounded-lg cursor-pointer"> <p>Magnetic Button</p> </MagneticButton>' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;



