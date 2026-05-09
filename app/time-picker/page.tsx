"use client";`r`n`r`nimport CopyButton from "@/pulseui-components/CopyButton/CopyButton";`r`n
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
import Switch from "@/pulseui-components/Switch/Switch";
import TimePicker from "@/pulseui-components/TimePicker/TimePicker";

function Page() {
  const [hr, setHr] = useState(10);
  const [min, setMin] = useState(10);
  const [amOrPm, setAmOrPm] = useState<"AM" | "PM">("AM");

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <ComponentNavbar />
      <div className="w-full h-full px-4 sm:px-6 md:px-8 py-8 md:py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-self-start">
            <h1 className="text-4xl font-semibold">Time Picker</h1>
            <h2 className="text-neutral-400">
              Below is a time picker component
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
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
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/TimePicker.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/TimePicker.json",
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
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
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
                      <TableCell className="font-medium mr-100">
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>onHrChange</pre>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>(hr: number) =&gt; void</pre>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>true</pre>
                        </div>
                      </TableCell>
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>sets the hour value of the time</p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>onMinChange</pre>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>(min: number) =&gt; void</pre>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>true</pre>
                        </div>
                      </TableCell>
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>sets the minute value of the time</p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>onAmPmChange</pre>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>{'(amOrPm: "AM" | "PM") => void'}</pre>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-black flex items-center justify-center p-1 rounded">
                          <pre>true</pre>
                        </div>
                      </TableCell>
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>sets whether it&apos;s AM or PM time</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>
                <CodeBlock code='import TimePicker from "@/components/TimePicker";' />
                <CodeBlock code="const [hr, setHr] = useState(10);" />
                <CodeBlock code="const [min, setMin] = useState(10);" />
                <CodeBlock code='const [amOrPm, setAmOrPm] = useState<"AM" | "PM">("AM");' />
                <CodeBlock code='<TimePicker onHrChange={setHr} onMinChange={setMin} onAmPmChange={setAmOrPm} />' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;





