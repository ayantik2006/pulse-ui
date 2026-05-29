"use client";

import ComponentNavbar from "@/components/ComponentNavbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CodeBlock from "@/components/CodeBlock";
import Avatar1 from "@/pulseui-components/Avatars/Avatar1";
import Avatar2 from "@/pulseui-components/Avatars/Avatar2";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <ComponentNavbar />

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Avatars</h1>

            <h2 className="text-neutral-400">
              Below is a collections of various avatars
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {/* AVATAR 1 */}
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
                <h1 className="text-xl font-semibold text-neutral-400">
                  Avatar1
                </h1>

                <Avatar1
                  src="/avatar1.png"
                  fallBackText="AS"
                  size={40}
                />

                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>

                <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                  <p className="text-neutral-400 text-sm truncate">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Avatar1.json
                  </p>

                  <button
                    className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                    onClick={async (e) => {
                      const el = e.currentTarget;

                      await navigator.clipboard.writeText(
                        "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Avatar1.json",
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
                            Default
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
                              <pre>src</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>string</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell className="text-center">
                            <div className="flex items-center justify-center p-1 rounded">
                              <p>The url of the image</p>
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-muted/60">
                          <TableCell className="font-medium">
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>fallBackText</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>string</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell className="text-center">
                            <div className="flex items-center justify-center p-1 rounded">
                              <p>
                                The text displayed when the url does not exist
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-muted/60">
                          <TableCell className="font-medium">
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>size</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>number</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell className="text-center">
                            <div className="flex items-center justify-center p-1 rounded">
                              <p>The size of the avatar</p>
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
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell className="text-center">
                            <div className="flex items-center justify-center p-1 rounded">
                              <p>
                                Optional prop; Tailwind classes applied when src
                                url is invalid
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>

                  <CodeBlock code='import Avatar1 from "@/components/Avatar1";' />

                  <CodeBlock code='<Avatar1 src="/avatar1.png" fallBackText="AS" size={40} />' />
                </div>
              </div>
            </div>

            {/* AVATAR 2 */}
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
                <h1 className="text-xl font-semibold text-neutral-400">
                  Avatar2
                </h1>

                <Avatar2
                  src="/avatar1.png"
                  fallBackText="AS"
                  size={40}
                  title="Project Lead"
                />

                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>

                <div className="bg-neutral-950 rounded flex items-center border border-neutral-700 justify-between gap-3 px-2 py-2 pl-3 overflow-hidden">
                  <p className="text-neutral-400 text-sm truncate">
                    npx shadcn@latest add
                    https://pulseui-henna.vercel.app/registry/Avatar2.json
                  </p>

                  <button
                    className="shrink-0 text-sm duration-300 hover:bg-neutral-800 px-2 rounded cursor-pointer text-neutral-400 pb-[0.1rem]"
                    onClick={async (e) => {
                      const el = e.currentTarget;

                      await navigator.clipboard.writeText(
                        "npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Avatar2.json",
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
                            Default
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
                              <pre>src</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>string</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-muted flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell className="text-center">
                            <div className="flex items-center justify-center p-1 rounded">
                              <p>The url of the image</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>

                  <CodeBlock code='import Avatar2 from "@/components/Avatar2";' />

                  <CodeBlock code='<Avatar2 src="/avatar1.png" fallBackText="AS" size={40} title="Project Lead" />' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;



