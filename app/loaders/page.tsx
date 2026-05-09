"use client";
import ComponentNavbar from "@/components/ComponentNavbar";
import BasicLoader from "@/pulseui-components/Loaders/BasicLoader";
import {
  Table,
  TableBody,
  TableCaption,
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
    <div className="bg-black text-white min-h-screen flex justify-center">
      <ComponentNavbar />
      <div className="w-full h-full px-4 sm:px-6 md:px-8 py-8 md:py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-self-start">
            <h1 className="text-4xl font-semibold">Loaders</h1>
            <h2 className="text-neutral-400">
              Below is a collections of various loader/spinner components
            </h2>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                BasicLoader
              </h1>
              <BasicLoader color="orange" />
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/basic-loader.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>The size of the loader in pixels</p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>The thickness of the loader in pixels</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import BasicLoader from "@/components/basic-loader";'/>
                <CodeBlock code='<BasicLoader color="yellow" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader2
              </h1>
              <Loader2 color="blue"/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader2.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader2.json",
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>The size of the loader in pixels</p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>The thickness of the loader in pixels</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader2 from "@/components/loader2";'/>
                <CodeBlock code='<Loader2 color="blue" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader3
              </h1>
              <Loader3 color="green"/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader3.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader3.json",
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader3 from "@/components/loader3";'/>
                <CodeBlock code='<Loader3 color="green" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader4
              </h1>
              <Loader4/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader4.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader3.json",
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
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader4 from "@/components/loader4";'/>
                <CodeBlock code='<Loader4 />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader5
              </h1>
              <Loader5 color="pink"/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader5.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader5.json",
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader5 from "@/components/loader5";'/>
                <CodeBlock code='<Loader5 color="pink" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader6
              </h1>
              <Loader6 color="yellow"/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader6.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader6.json",
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader6 from "@/components/loader6";'/>
                <CodeBlock code='<Loader6 color="yellow" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader7
              </h1>
              <Loader7/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader7.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader7.json",
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
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader6 from "@/components/loader7";'/>
                <CodeBlock code='<Loader7/>'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader8
              </h1>
              <Loader8 color="white"/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader8.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader8.json",
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader8 from "@/components/loader8";'/>
                <CodeBlock code='<Loader8 color="white" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader9
              </h1>
              <Loader9 color="#5f95ec"/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader9.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader9.json",
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
                <h1 className="font-semibold">
                  Props
                </h1>
                <Table className="border border-neutral-700">
                  <TableHeader className="">
                    <TableRow className="hover:bg-neutral-900">
                      <TableHead className="w-[100px] text-white text-center">
                        Prop
                      </TableHead>
                      <TableHead className="text-white text-center">Type</TableHead>
                      <TableHead className="text-white text-center">Default</TableHead>
                      <TableHead className="text-white text-center">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-black">
                      <TableCell className="font-medium mr-100">
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
                      <TableCell className="text-right ">
                        <div className="flex items-center justify-center p-1 rounded">
                          <p>Color of the loader</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader9 from "@/components/loader9";'/>
                <CodeBlock code='<Loader9 color="#5f95ec" />'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader10
              </h1>
              <Loader7/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader10.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader10.json",
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
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader10 from "@/components/loader10";'/>
                <CodeBlock code='<Loader10/>'/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-neutral-200">
                Loader11
              </h1>
              <Loader11/>
              <div className="mb-[-0.5rem]">
                <p className="font-semibold">Installation</p>
              </div>
              <div className="bg-neutral-950 rounded border border-neutral-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2">
                <p className="text-neutral-400 text-sm break-all">
                  npx shadcn@latest add
                  https://pulseui-henna.vercel.app/registry/loader11.json
                </p>
                <button
  className="text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem] self-end sm:self-auto shrink-0"
  onClick={async (e) => {
    const el = e.currentTarget;
    await navigator.clipboard.writeText(
                      "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/loader11.json",
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
                <h1 className="font-semibold">
                  Usage
                </h1>
                <CodeBlock code='import Loader11 from "@/components/loader11";'/>
                <CodeBlock code='<Loader11/>'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;





