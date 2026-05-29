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
import TimePicker from "@/pulseui-components/TimePicker/TimePicker";

function Page() {
  const [hr, setHr] = useState(10);
  const [min, setMin] = useState(10);
  const [amOrPm, setAmOrPm] = useState<"AM" | "PM">("AM");

  return (
    <div className="bg-background text-foreground min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Time Picker</h1>

            <h2 className="text-neutral-400">
              Below is a time picker component
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                TimePicker
              </h1>

              <div className="flex gap-2">
                <TimePicker
                  onHrChange={setHr}
                  onMinChange={setMin}
                  onAmPmChange={setAmOrPm}
                />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/TimePicker.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/TimePicker.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/TimePicker.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/TimePicker.json"
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
                            <pre>onHrChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>(hr: number) =&gt; void</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the hour value of the time</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>onMinChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>(min: number) =&gt; void</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the minute value of the time</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>onAmPmChange</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{'(amOrPm: "AM" | "PM") => void'}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets whether it&apos;s AM or PM time</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import TimePicker from "@/components/TimePicker";' />

                <CodeBlock code="const [hr, setHr] = useState(10);" />

                <CodeBlock code="const [min, setMin] = useState(10);" />

                <CodeBlock code='const [amOrPm, setAmOrPm] = useState<"AM" | "PM">("AM");' />

                <CodeBlock code="<TimePicker onHrChange={setHr} onMinChange={setMin} onAmPmChange={setAmOrPm} />" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;


