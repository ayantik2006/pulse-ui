"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import StackCards from "@/pulseui-components/StackCards/StackCards";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Stack Cards</h1>

            <h2 className="text-neutral-400">
              Below is an example of a stack of cards, drag it with the mouse to
              an end and then release it - it will position itself to the end
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
                  <div className="p-10 mb-100 mt-3">
                    <StackCards />
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
  return <CodeBlock language="tsx" filename="OpeningLaptop.tsx" code={"import { animate, LayoutGroup, motion, useMotionValue } from \"framer-motion\";\r\nimport Image from \"next/image\";\r\nimport { useState } from \"react\";\r\n\r\nfunction StackCards() {\r\n  const x = useMotionValue(0);\r\n  const [images, setImages] = useState([\r\n    \"https://img.magnific.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg\",\r\n    \"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=\",\r\n    \"https://www.shutterstock.com/image-photo/serenity-summer-day-durmitor-national-600nw-2623341111.jpg\",\r\n    \"https://i.pinimg.com/videos/thumbnails/originals/84/d0/1f/84d01f4c4031ea1af5211c32f0df54f0.0000000.jpg\",\r\n  ]);\r\n\r\n  return (\r\n    <LayoutGroup>\r\n      <motion.div className=\"m-2\">\r\n        <motion.div className=\"flex gap-2\">\r\n          {[...images].map((img, index) => {\r\n            return (\r\n              <motion.div\r\n                key={img}\r\n                className=\"w-fit h-fit cursor-grab\"\r\n                whileTap={{\r\n                  cursor: \"grabbing\",\r\n                }}\r\n                style={{\r\n                  zIndex: 10 + index * 10,\r\n                }}\r\n              >\r\n                <motion.div\r\n                  className=\"absolute w-70 h-100\"\r\n                  layout\r\n                  layoutId={img}\r\n                  transition={{\r\n                    layout: {\r\n                      type: \"spring\",\r\n                      stiffness: 300,\r\n                      damping: 30,\r\n                    },\r\n                  }}\r\n                  style={{\r\n                    bottom: -index * 10,\r\n                    x: index == images.length - 1 ? x : 0,\r\n                  }}\r\n                  drag={index == images.length - 1 ? \"x\" : undefined}\r\n                  dragConstraints={{\r\n                    left: -288,\r\n                    right: 288,\r\n                  }}\r\n                  initial={{\r\n                    x: 0,\r\n                  }}\r\n                  onDragEnd={async (_, data) => {\r\n                    if (Math.abs(data.offset.x) < 288) {\r\n                      animate(x, 0, {\r\n                        type: \"spring\",\r\n                        stiffness: 300,\r\n                        damping: 30,\r\n                      });\r\n                    } else {\r\n                      animate(x,280,{\r\n                        duration:0.16,\r\n                        type:\"spring\"\r\n                      }) \r\n                      setImages((prev) => {\r\n                        const temp = [...prev];\r\n                        const last = temp.pop();\r\n\r\n                        if (last) temp.unshift(last);\r\n\r\n                        return temp;\r\n                      });\r\n                    }\r\n                  }}\r\n                >\r\n                  <Image\r\n                    src={img}\r\n                    fill\r\n                    alt=\"image\"\r\n                    draggable={false}\r\n                    className=\"object-cover p-2 bg-white rounded-md shadow-[0_0_3px_gray]\"\r\n                  />\r\n                </motion.div>\r\n              </motion.div>\r\n            );\r\n          })}\r\n        </motion.div>\r\n      </motion.div>\r\n    </LayoutGroup>\r\n  );\r\n}\r\n\r\nexport default StackCards;\r\n"} />;
};
