"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import SuccessStateButton from "@/pulseui-components/SuccessStateButton/SuccessStateButton";
import Timer from "@/pulseui-components/Timer/Timer";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Timer</h1>

            <h2 className="text-neutral-400">
              Below is an example of an animated and interactive timer/stopwatch component
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
              <Tabs defaultValue="preview" className="w-full">
                <TabsList>
                  <TabsTrigger
                    value="preview"
                    className="flex items-center gap-2"
                  >
                    <Eye />
                    <p>Preview</p>
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code />
                    <p>Code</p>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                  <div className="p-2 mt-3">
                    <Timer/>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <SourceCode />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

const SourceCode = () => {
  return (
    <CodeBlock
      language="tsx"
      filename="SuccessStateButton.tsx"
      code={
        ''
      }
    />
  );
};
