"use client";

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
import SingleFileUpload from "@/pulseui-components/File Upload/SingleFileUpload";
import { useState } from "react";
import MultipleFileUpload from "@/pulseui-components/File Upload/MultipleFileUpload";
import ImageUpload from "@/pulseui-components/File Upload/ImageUpload";

function Page() {
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="bg-black text-white min-h-screen flex">

      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">File Upload</h1>

            <h2 className="text-neutral-400">
              Below is a collections of various file upload components for
              single file, multiple files, image files
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {/* SINGLE FILE UPLOAD */}
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
                <h1 className="text-xl font-semibold text-neutral-200">
                  SingleFileUpload
                </h1>

                <SingleFileUpload onFileChange={setFile} />

                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>

                <div className="w-full max-w-full">
                  <CodeBlockCommand
                    pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/SingleFileUpload.json"
                    yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/SingleFileUpload.json"
                    npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/SingleFileUpload.json"
                    bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/SingleFileUpload.json"
                  />
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
                              <pre>onFileChange</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-black flex items-center justify-center p-1 rounded">
                              <pre>(files: File) =&gt; void</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-black flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center justify-center p-1 rounded text-center">
                              <p>sets the selected file</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>

                  <CodeBlock code='import SingleFileUpload from "@/components/SingleFileUpload";' />

                  <CodeBlock code="const [file, setFile] = useState<File>();" />

                  <CodeBlock code="<SingleFileUpload onFileChange={setFile} />" />
                </div>
              </div>
            </div>

            {/* MULTIPLE FILE UPLOAD */}
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
                <h1 className="text-xl font-semibold text-neutral-200">
                  MultipleFileUpload
                </h1>

                <MultipleFileUpload onFilesChange={setFiles} />

                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>

                <div className="w-full max-w-full">
                  <CodeBlockCommand
                    pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/MultipleFileUpload.json"
                    yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/MultipleFileUpload.json"
                    npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/MultipleFileUpload.json"
                    bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/MultipleFileUpload.json"
                  />
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
                              <pre>onFilesChange</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-black flex items-center justify-center p-1 rounded">
                              <pre>(files: File[]) =&gt; void</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-black flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center justify-center p-1 rounded text-center">
                              <p>sets the list of selected files</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>

                  <CodeBlock code='import MultipleFileUpload from "@/components/MultipleFileUpload";' />

                  <CodeBlock code="const [files, setFiles] = useState<File[]>();" />

                  <CodeBlock code="<MultipleFileUpload onFilesChange={setFiles} />" />
                </div>
              </div>
            </div>

            {/* IMAGE UPLOAD */}
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
                <h1 className="text-xl font-semibold text-neutral-200">
                  ImageUpload
                </h1>

                <ImageUpload onFilesChange={setFiles} />

                <div className="mb-[-0.5rem]">
                  <p className="font-semibold">Installation</p>
                </div>

                <div className="w-full max-w-full">
                  <CodeBlockCommand
                    pnpm="pnpm dlx shadcn@latest add https://pulseui-henna.vercel.app/registry/ImageUpload.json"
                    yarn="yarn shadcn@latest add https://pulseui-henna.vercel.app/registry/ImageUpload.json"
                    npm="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/ImageUpload.json"
                    bun="bunx --bun shadcn@latest add https://pulseui-henna.vercel.app/registry/ImageUpload.json"
                  />
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
                              <pre>onFilesChange</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-black flex items-center justify-center p-1 rounded">
                              <pre>(files: File[]) =&gt; void</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="bg-black flex items-center justify-center p-1 rounded">
                              <pre>-</pre>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center justify-center p-1 rounded text-center">
                              <p>sets the list of selected image files</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold">Usage</h1>

                  <CodeBlock code='import ImageUpload from "@/components/ImageUpload";' />

                  <CodeBlock code="const [files, setFiles] = useState<File[]>();" />

                  <CodeBlock code="<ImageUpload onFilesChange={setFiles} />" />
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
