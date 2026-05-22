"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CodeBlock } from "@/components/ui/code-block";
import { House, Terminal, RefreshCcw } from "lucide-react";
import FloatingDock from "@/pulseui-components/FloatingDock/FloatingDock";
import { CodeBlockCommand } from "@/components/code-block-command";

function Page() {
  const links = [
    {
      title: "Home",
      icon: (
        <House
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Terminal",
      icon: (
        <Terminal
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "Refresh",
      icon: (
        <RefreshCcw
          size={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Floating Dock</h1>

            <h2 className="text-neutral-400">
              Below is a beautiful ios style floating doc component that can be
              used as a navigation bar
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                FloatingDock
              </h1>

              <div className="flex flex-col gap-2">
                <FloatingDock links={links} />
              </div>

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="w-full max-w-full">
                <CodeBlockCommand
                  pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/FloatingDock.json"
                  yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/FloatingDock.json"
                  npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/FloatingDock.json"
                  bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/FloatingDock.json"
                />
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
                            <pre>links</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>
                              {
                                "{ title: string; icon: React.ReactNode; href: string }[]"
                              }
                            </pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>true</pre>
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center p-1 rounded">
                            <p>The list of all the navigation items</p>
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
                  filename="Navbar.tsx"
                  highlightLines={[37,2]}
                  code={
                    'import { House, Terminal, RefreshCcw } from "lucide-react";\nimport FloatingDock from \"@/components/FloatingDock\";\nexport default function NavBar(){    \nconst links = [    \n\t{\r\n      title: \"Home\",\r\n      icon: (\r\n        <House\r\n          size={20}\r\n          className=\"h-full w-full text-neutral-500 dark:text-neutral-300\"\r\n        />\r\n      ),\r\n      href: \"#\",\r\n    },\r\n    {\r\n      title: \"Terminal\",\r\n      icon: (\r\n        <Terminal\r\n          size={20}\r\n          className=\"h-full w-full text-neutral-500 dark:text-neutral-300\"\r\n        />\r\n      ),\r\n      href: \"#\",\r\n    },\r\n    {\r\n      title: \"Refresh\",\r\n      icon: (\r\n        <RefreshCcw\r\n          size={20}\r\n          className=\"h-full w-full text-neutral-500 dark:text-neutral-300\"\r\n        />\r\n      ),\r\n      href: \"#\",\r\n    },\r\n ];\r\n\r\n    return (\r\n        <FloatingDock links={links}/>\r\n    );\r\n}'
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
