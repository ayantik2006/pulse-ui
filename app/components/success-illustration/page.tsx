"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import SuccessIllustration from "@/pulseui-components/SuccessIllustration/SuccessIllustration";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Success Illustration</h1>

            <h2 className="text-neutral-400">
              Below is an animated illustration that sets the state to success on hover showing a success animation
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-card border border-border py-6 px-6 rounded flex flex-col gap-5 overflow-hidde">
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
                   <SuccessIllustration/>
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
      filename="SuccessIllustration.tsx"
      code={
        "import { Spinner } from \"@/components/ui/spinner\";\r\nimport { AnimatePresence, motion } from \"framer-motion\";\r\nimport { useState } from \"react\";\r\n\r\nfunction SuccessIllustration() {\r\n  const [isHovered, setIsHovered] = useState(false);\r\n\r\n  return (\r\n    <motion.div\r\n      className=\"w-65 h-20 bg-neutral-200 dark:bg-neutral-800 rounded-xl flex flex-col gap-4 items-center justify-center\"\r\n      onMouseEnter={() => {\r\n        setIsHovered(true);\r\n      }}\r\n      onMouseLeave={() => {\r\n        setIsHovered(false);\r\n      }}\r\n    >\r\n      <motion.div className=\"w-50 h-8 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center gap-3\">\r\n        <AnimatePresence mode=\"wait\">\r\n          {!isHovered ? (\r\n            <motion.div\r\n              key={\"spinner\"}\r\n              initial={{\r\n                opacity: 0,\r\n                scale: 0.8,\r\n              }}\r\n              animate={{\r\n                opacity: 1,\r\n                scale: 1,\r\n              }}\r\n              exit={{\r\n                opacity: 0,\r\n                scale: 0.8,\r\n              }}\r\n            >\r\n              <Spinner color=\"gray\" />\r\n            </motion.div>\r\n          ) : (\r\n            <motion.div\r\n              key={\"check\"}\r\n              className=\"w-4 h-4 rounded-full bg-green-600 flex items-center justify-center\"\r\n              initial={{\r\n                opacity: 0,\r\n                scale: 0.8,\r\n              }}\r\n              animate={{\r\n                opacity: 1,\r\n                scale: 1,\r\n              }}\r\n              exit={{\r\n                opacity: 0,\r\n                scale: 0.8,\r\n              }}\r\n            >\r\n              <motion.svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                width={10}\r\n                height={10}\r\n                viewBox=\"0 0 24 24\"\r\n                fill=\"none\"\r\n                stroke=\"white\"\r\n                strokeWidth={3}\r\n                strokeLinecap=\"round\"\r\n                strokeLinejoin=\"round\"\r\n                className=\"lucide lucide-check-icon lucide-check\"\r\n              >\r\n                <motion.path\r\n                  d=\"M4 12l5 5L20 6\"\r\n                  initial={{\r\n                    pathLength: 0,\r\n                    width: 0,\r\n                    height: 0,\r\n                  }}\r\n                  animate={{\r\n                    pathLength: 1,\r\n                    width: 10,\r\n                    height: 10,\r\n                  }}\r\n                  transition={{\r\n                    delay: 0.2,\r\n                  }}\r\n                />\r\n              </motion.svg>\r\n            </motion.div>\r\n          )}\r\n        </AnimatePresence>\r\n        <AnimatePresence>\r\n          {!isHovered ? (\r\n            <motion.div\r\n              className=\"dark:bg-neutral-700/90 bg-neutral-300 w-33 h-3 rounded-full animate-pulse\"\r\n              transition={{\r\n                delay: 0.5,\r\n              }}\r\n            />\r\n          ) : (\r\n            <motion.div className=\"w-33 h-3 flex items-center justify-center\">\r\n              <motion.p\r\n                className=\"text-xs text-neutral-500\"\r\n                initial={{\r\n                  opacity: 0,\r\n                }}\r\n                animate={{\r\n                  opacity: 1,\r\n                }}\r\n                transition={{\r\n                  delay: 1,\r\n                }}\r\n              >\r\n                Process completed\r\n              </motion.p>\r\n            </motion.div>\r\n          )}\r\n        </AnimatePresence>\r\n      </motion.div>\r\n    </motion.div>\r\n  );\r\n}\r\n\r\nexport default SuccessIllustration;\r\n"
      }
    />
  );
};
