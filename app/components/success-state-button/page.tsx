"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import SuccessStateButton from "@/pulseui-components/SuccessStateButton/SuccessStateButton";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Success State Button</h1>

            <h2 className="text-neutral-400">
              Below is an example of a button with a beautiful success animation
              on clicking, copy the code, modify and use it in your project.
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
                    <SuccessStateButton />
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
        'import { motion, useAnimate } from "framer-motion";\r\nimport { useState } from "react";\r\n\r\nfunction SuccessStateButton() {\r\n  const [isClicked, setIsClicked] = useState(false);\r\n  const [scope, animate] = useAnimate();\r\n\r\n  async function startAnimation() {\r\n    animate(".text", {\r\n      right: "19px",\r\n    });\r\n\r\n    await animate(\r\n      ".main-div",\r\n      {\r\n        width: "130px",\r\n        justifyContent: "between",\r\n      },\r\n      {\r\n        duration: 0.1,\r\n      },\r\n    );\r\n\r\n    await animate(\r\n      ".loader",\r\n      {\r\n        display: "flex",\r\n        opacity: [0, 1],\r\n      },\r\n      {\r\n        delay: 0.4,\r\n        type: "spring",\r\n      },\r\n    );\r\n\r\n    animate(\r\n      ".main-div",\r\n      {\r\n        width: "32px",\r\n        display: "flex",\r\n        justifyContent: "center",\r\n        alignItems: "center",\r\n        background: ["#155dfc", "#02bb0e"],\r\n      },\r\n      {\r\n        delay: 0.5,\r\n      },\r\n    );\r\n\r\n    animate(".text", {\r\n      display: "none",\r\n    });\r\n\r\n    await animate(".loader", {\r\n      display: "none",\r\n    });\r\n\r\n    await animate(\r\n      ".tick-svg",\r\n      {\r\n        pathLength: 1,\r\n        display: "flex",\r\n      },\r\n      {\r\n        delay: 1,\r\n      },\r\n    );\r\n  }\r\n\r\n  return (\r\n    <div ref={scope}>\r\n      <motion.div\r\n        className={`bg-blue-600 w-28 relative h-8 font-semibold rounded-2xl cursor-pointer duration-300 gap-2 hover:opacity-90 main-div ${isClicked ? "pointer-events-none opacity-90" : ""}`}\r\n        onClick={() => {\r\n          setIsClicked(true);\r\n          startAnimation();\r\n        }}\r\n      >\r\n        <motion.div\r\n          className="rounded-full h-3 w-3 border-t-2 border-white loader hidden animate-spin absolute left-4 my-2.5"\r\n          initial={{\r\n            opacity: 0,\r\n          }}\r\n        />\r\n        <p className="absolute right-5.5 left-auto my-1 text">Checkout</p>\r\n        <motion.svg\r\n          xmlns="http://www.w3.org/2000/svg"\r\n          width={20}\r\n          height={20}\r\n          viewBox="0 0 24 24"\r\n          fill="none"\r\n          stroke="currentColor"\r\n          strokeWidth={3}\r\n          strokeLinecap="round"\r\n          strokeLinejoin="round"\r\n          className="lucide lucide-check-icon lucide-check"\r\n        >\r\n          <motion.path\r\n            d="M4 12l5 5L20 6"\r\n            className="tick-svg"\r\n            initial={{\r\n              pathLength: 0,\r\n              display: "none",\r\n            }}\r\n          />\r\n        </motion.svg>\r\n      </motion.div>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default SuccessStateButton;\r\n'
      }
    />
  );
};
