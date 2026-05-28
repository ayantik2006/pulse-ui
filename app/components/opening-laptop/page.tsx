"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import TeamCards from "@/pulseui-components/TeamCards/TeamCards";
import { CodeBlock } from "@/components/ui/code-block";
import OpeningLaptop from "@/pulseui-components/OpeningLaptop/OpeningLaptop";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Opening Laptop</h1>

            <h2 className="text-neutral-400">
              Below is an example of a cinematic laptop animation component with smooth motion and premium interactions — copy, customize, and use it in your own landing pages or showcases.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full bg-neutral-900 border border-neutral-700 py-6 px-6 rounded flex flex-col gap-5 overflow-hidden">
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
                    <OpeningLaptop/>
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
      filename="OpeningLaptop.tsx"
      code={
        'import { AnimatePresence, motion } from \"framer-motion\";\r\nimport { useState } from \"react\";\r\nimport Image from \"next/image\";\r\nimport Link from \"next/link\";\r\nimport { Component } from \"lucide-react\";\r\n\r\nfunction OpeningLaptop() {\r\n  const [isHovered, setIsHovered] = useState(false);\r\n\r\n  return (\r\n    <motion.div\r\n      className=\"relative w-fit\"\r\n      onMouseEnter={() => setIsHovered(true)}\r\n      onMouseLeave={() => {\r\n        setIsHovered(false);\r\n      }}\r\n    >\r\n      <motion.div\r\n        className=\"w-65 h-40 bg-neutral-700 ml-5 flex items-center justify-center p-2 rounded-t-md origin-bottom\"\r\n        initial={{\r\n          rotateX: -65,\r\n        }}\r\n        animate={{\r\n          rotateX: isHovered ? 0 : -65,\r\n        }}\r\n        transition={{\r\n          type: \"spring\",\r\n          stiffness: 90,\r\n          mass: 0.8,\r\n        }}\r\n      >\r\n        <motion.div className=\"bg-neutral-900 w-full h-full rounded-sm flex flex-col gap-2 items-center justify-center\">\r\n          <AnimatePresence>\r\n            {isHovered && (\r\n              <motion.div\r\n                initial={{\r\n                  filter: \"blur(10px)\",\r\n                  opacity: \"0\",\r\n                }}\r\n                animate={{\r\n                  filter: \"blur(0px)\",\r\n                  opacity: 1,\r\n                }}\r\n                exit={{\r\n                  filter: \"blur(10px)\",\r\n                  opacity: \"0\",\r\n                }}\r\n              >\r\n                <Image src={\"/logo.png\"} alt=\"logo\" width={40} height={40} />\r\n              </motion.div>\r\n            )}\r\n          </AnimatePresence>\r\n          <AnimatePresence>\r\n            {isHovered && (\r\n              <motion.div\r\n                className=\"flex items-center gap-1\"\r\n                variants={{\r\n                  open: {\r\n                    transition: {\r\n                      staggerChildren: 0.03,\r\n                    },\r\n                  },\r\n                  closed: {\r\n                    transition: {\r\n                      staggerChildren: 0.02,\r\n                      staggerDirection: -1,\r\n                    },\r\n                  },\r\n                }}\r\n                initial=\"closed\"\r\n                animate=\"open\"\r\n                exit=\"closed\"\r\n              >\r\n                {[\"P\", \"u\", \"l\", \"s\", \"e\", \" \", \"U\", \"I\"].map((char, index) => {\r\n                  return (\r\n                    <motion.p\r\n                      key={index}\r\n                      className=\"font-semibold\"\r\n                      variants={{\r\n                        closed: {\r\n                          opacity: 0,\r\n                          filter: \"blur(10px)\",\r\n                        },\r\n                        open: {\r\n                          opacity: 1,\r\n                          filter: \"blur(0px)\",\r\n                        },\r\n                      }}\r\n                      transition={{\r\n                        duration: 0.5,\r\n                      }}\r\n                    >\r\n                      {char}\r\n                    </motion.p>\r\n                  );\r\n                })}\r\n              </motion.div>\r\n            )}\r\n          </AnimatePresence>\r\n          <AnimatePresence>\r\n            {isHovered && (\r\n              <motion.div\r\n                initial={{\r\n                  opacity: 0,\r\n                  filter: \"blur(10px)\",\r\n                }}\r\n                animate={{\r\n                  opacity: 1,\r\n                  filter: \"blur(0px)\",\r\n                }}\r\n                transition={{\r\n                  duration: 0.3,\r\n                }}\r\n                exit={{\r\n                  opacity: 0,\r\n                  filter: \"blur(10px)\",\r\n                }}\r\n              >\r\n                <Link\r\n                  href={\"/explore\"}\r\n                  className=\"bg-neutral-700 px-2 py-0.5 rounded-2xl border flex gap-1 items-center justify-center\"\r\n                >\r\n                  <motion.div\r\n                    animate={{\r\n                      rotate: 360,\r\n                    }}\r\n                    transition={{\r\n                        delay:0.4,\r\n                        duration:0.4\r\n                    }}\r\n                  >\r\n                    <Component size={12} />\r\n                  </motion.div>\r\n                  <p className=\"text-xs\">Components</p>\r\n                </Link>\r\n              </motion.div>\r\n            )}\r\n          </AnimatePresence>\r\n        </motion.div>\r\n      </motion.div>\r\n\r\n      <div className=\"bg-linear-to-t from-neutral-800 via-neutral-700 to-neutral-600 w-75 h-4.5 rounded-b-2xl rounded-t-sm relative\">\r\n        <div className=\"rounded-b-2xl absolute mx-auto w-13 left-31 h-2 bg-neutral-500\" />\r\n      </div>\r\n    </motion.div>\r\n  );\r\n}\r\n\r\nexport default OpeningLaptop;\r\n'
      }
    />
  );
};
