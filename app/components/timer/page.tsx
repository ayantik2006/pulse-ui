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
      filename="Timer.tsx"
      code={
        "import { Pause, Play, Square, StopCircle } from \"lucide-react\";\r\nimport { AnimatePresence, motion } from \"framer-motion\";\r\nimport { useEffect, useRef, useState } from \"react\";\r\n\r\nfunction Timer() {\r\n  const [isPlaying, setIsPlaying] = useState(false);\r\n  const [min, setMin] = useState(0);\r\n  const [sec, setSec] = useState(0);\r\n  const intervalRef = useRef<NodeJS.Timeout | null>(null);\r\n\r\n  useEffect(() => {\r\n    if (!isPlaying) {\r\n      clearInterval(intervalRef.current!);\r\n      return;\r\n    }\r\n\r\n    intervalRef.current = setInterval(() => {\r\n      setSec((prev) => prev + 1);\r\n    }, 1000);\r\n\r\n    return () => clearInterval(intervalRef.current!);\r\n  }, [isPlaying]);\r\n\r\n  useEffect(() => {\r\n    if (sec === 60) {\r\n      // eslint-disable-next-line react-hooks/set-state-in-effect\r\n      setSec(0);\r\n      setMin((m) => m + 1);\r\n    }\r\n  }, [sec]);\r\n\r\n  return (\r\n    <div className=\"flex items-center justify-center gap-10 w-fit h-fit px-5 py-3 dark:bg-neutral-800 bg-neutral-100 rounded-lg borde dark:shadow-[inset_0_0_3px_gray] shadow-[inset_0_0_3px_gray]\">\r\n      <div className=\"flex gap-2 w-fit\">\r\n        <button\r\n          className=\"bg-green-600 w-9 h-9 rounded-full hover:opacity-85 duration-300 cursor-pointer flex items-center justify-center\"\r\n          onClick={() => {\r\n            setIsPlaying((prev) => !prev);\r\n          }}\r\n        >\r\n          <AnimatePresence mode=\"wait\">\r\n            {isPlaying ? (\r\n              <motion.div\r\n                key={\"playing\"}\r\n                initial={{\r\n                  scale: 0,\r\n                }}\r\n                exit={{\r\n                  scale: 0,\r\n                }}\r\n                animate={{\r\n                  scale: 1,\r\n                }}\r\n                transition={{\r\n                  duration: 0.15,\r\n                }}\r\n              >\r\n                <Pause\r\n                  size={19}\r\n                  className=\"dark:fill-neutral-800 dark:stroke-neutral-800 fill-neutral-200 stroke-neutral-200\"\r\n                />\r\n              </motion.div>\r\n            ) : (\r\n              <motion.div\r\n                key={\"not-playing\"}\r\n                initial={{\r\n                  scale: 0,\r\n                }}\r\n                exit={{\r\n                  scale: 0,\r\n                }}\r\n                animate={{\r\n                  scale: 1,\r\n                }}\r\n                transition={{\r\n                  duration: 0.15,\r\n                }}\r\n              >\r\n                <Play\r\n                  size={19}\r\n                  className=\"dark:fill-neutral-800 dark:stroke-neutral-800 fill-neutral-200 stroke-neutral-200\"\r\n                />\r\n              </motion.div>\r\n            )}\r\n          </AnimatePresence>\r\n        </button>\r\n        <button\r\n          onClick={() => {\r\n            setMin(0);\r\n            setSec(0);\r\n            setIsPlaying(false);\r\n            if (intervalRef.current) clearInterval(intervalRef.current);\r\n          }}\r\n          className=\" dark:bg-neutral-950 bg-neutral-300 p-2 w-9 h-9 rounded-full hover:opacity-80 duration-300 cursor-pointer flex items-center justify-center active:scale-[0.90]\"\r\n        >\r\n          <Square size={17} className=\"fill-neutral-700 stroke-neutral-700\" />\r\n        </button>\r\n      </div>\r\n      <div className=\"flex gap-2 items-center justify-center h-full\">\r\n        <p className=\"text-sm text-neutral-400 h-full self-end\">Timer</p>\r\n        <div className=\"text-3xl flex font-semibold w-18\">\r\n          <AnimatePresence>\r\n            <AnimatePresence mode=\"wait\">\r\n            <motion.div\r\n              key={min}\r\n              initial={{\r\n                // y: 5,\r\n                // opacity: 0,\r\n                // filter:\"blur(2px)\"\r\n              }}\r\n              animate={{\r\n                // y: 0,\r\n                // opacity: 1,\r\n                // filter:\"blur(0px)\"\r\n              }}\r\n              exit={{\r\n                // y: -5,\r\n                // opacity: 0,\r\n                // filter:\"blur(2px)\"\r\n              }}\r\n            >\r\n              {String(min).padStart(2, \"0\")}\r\n            </motion.div>\r\n          </AnimatePresence>\r\n          </AnimatePresence>\r\n          <span>:</span>\r\n          <AnimatePresence mode=\"wait\">\r\n            <motion.div\r\n              key={sec}\r\n              initial={{\r\n                // y: 5,\r\n                // opacity: 0,\r\n                // filter:\"blur(2px)\"\r\n              }}\r\n              animate={{\r\n                // y: 0,\r\n                // opacity: 1,\r\n                // filter:\"blur(0px)\"\r\n              }}\r\n              exit={{\r\n                // y: -5,\r\n                // opacity: 0,\r\n                // filter:\"blur(2px)\"\r\n              }}\r\n            >\r\n              {String(sec).padStart(2, \"0\")}\r\n            </motion.div>\r\n          </AnimatePresence>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default Timer;\r\n"
      }
    />
  );
};
