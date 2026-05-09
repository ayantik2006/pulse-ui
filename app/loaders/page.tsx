"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
import BasicLoader from "@/pulseui-components/Loaders/BasicLoader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loader3 from "@/pulseui-components/Loaders/Loader3";
import Loader5 from "@/pulseui-components/Loaders/Loader5";
import Loader2 from "@/pulseui-components/Loaders/Loader2";
import Loader4 from "@/pulseui-components/Loaders/Loader4";
import CodeBlock from "@/components/CodeBlock";
import Loader6 from "@/pulseui-components/Loaders/Loader6";
import Loader7 from "@/pulseui-components/Loaders/Loader7";
import Loader8 from "@/pulseui-components/Loaders/Loader8";
import Loader9 from "@/pulseui-components/Loaders/Loader9";
import Loader11 from "@/pulseui-components/Loaders/Loader11";

function page() {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <ComponentNavbar />

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Loaders</h1>

            <h2 className="text-neutral-400">
              Below is a collections of various loader/spinner components
            </h2>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <h1 className="text-xl font-semibold text-neutral-200">
                BasicLoader
              </h1>

              <BasicLoader color="orange" />

              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>

              <div className="bg-neutral-950 rounded flex border border-neutral-700 items-center justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                <p className="text-neutral-400 text-sm truncate">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/basic-loader.json
                </p>

                <button
                  className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                  onClick={async (e) => {
                    const el = e.currentTarget;

                    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/basic-loader.json",
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
                          Default
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
                            <pre>color</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>string</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>black</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center justify-center p-1 rounded text-center">
                            <p>Color of the loader</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>size</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>number</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>40</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center justify-center p-1 rounded text-center">
                            <p>The size of the loader in pixels</p>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-black">
                        <TableCell className="font-medium">
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>thickness</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>number</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="bg-black flex items-center justify-center p-1 rounded">
                            <pre>6</pre>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center justify-center p-1 rounded text-center">
                            <p>The thickness of the loader in pixels</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">Usage</h1>

                <CodeBlock code='import BasicLoader from "@/components/basic-loader";' />

                <CodeBlock code='<BasicLoader color="yellow" />' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;