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
import { CodeBlock } from "@/components/ui/code-block";
import { CodeBlockCommand } from "@/components/code-block-command";
import FilterSelector from "@/pulseui-components/FilterSelector/FilterSelector";

function Page() {
  const filterItems = [
    {
      id: "Genius",
      label: "Genius",
    },
    {
      id: "Billionaire",
      label: "Billionaire",
    },
    {
      id: "Playboy",
      label: "Playboy",
    },
    {
      id: "Philanthropist",
      label: "Philanthropist",
    },
    {
      id: "Vengeance",
      label: "Vengeance",
    },
  ];
  const [selectedList, setSelectedList] = useState<number[]>([]);

  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Filter Selector</h1>

            <h2 className="text-neutral-400">
              Below is a filter selector component with smooth and premium fluid
              animations
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-400">
                FilterSelector
              </h1>

              <FilterSelector
                items={filterItems}
                onSelection={setSelectedList}
              />

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/FilterSelector.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/FilterSelector.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/FilterSelector.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/FilterSelector.json"
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
                            <pre>items</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{'{id: string; label: string}[]'}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>the list of all the objects, each object has the name and id of a filter item</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-muted/60">
                        <TableCell className="font-medium">
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>onSelection</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>{'(values: number[]) => void'}</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-muted flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>sets the array of all the applied filters, the array contains indices of the applied filters from the array items</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock
                    language="tsx"
                    filename="Demo.tsx"
                    code={
                      "export function Demo(){\r\n    const filterItems = [\r\n    {\r\n      id: \"Genius\",\r\n      label: \"Genius\",\r\n    },\r\n    {\r\n      id: \"Billionaire\",\r\n      label: \"Billionaire\",\r\n    },\r\n    {\r\n      id: \"Playboy\",\r\n      label: \"Playboy\",\r\n    },\r\n    {\r\n      id: \"Philanthropist\",\r\n      label: \"Philanthropist\",\r\n    },\r\n    {\r\n      id: \"Vengeance\",\r\n      label: \"Vengeance\",\r\n    },\r\n  ];\r\n  const [selectedList, setSelectedList] = useState<number[]>([]);\r\n\r\n  return (\r\n    <FilterSelector\r\n        items={filterItems}\r\n        onSelection={setSelectedList}\r\n    />\r\n  );\r\n}"
                    }
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;




