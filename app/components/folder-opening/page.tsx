"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import TeamCards from "@/pulseui-components/TeamCards/TeamCards";
import { CodeBlock } from "@/components/ui/code-block";
import OpeningLaptop from "@/pulseui-components/OpeningLaptop/OpeningLaptop";
import FolderOpening from "@/pulseui-components/FolderOpening/FolderOpening";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Folder Opening</h1>

            <h2 className="text-neutral-400">
              A playful folder animation that reveals its contents with smooth shared-layout transitions on hover.
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
                  <div className="pt-50 pl-2">
                    <FolderOpening/>
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
        "import { AnimatePresence, LayoutGroup, motion } from \"framer-motion\";\r\nimport Image from \"next/image\";\r\nimport { useState } from \"react\";\r\n\r\nconst IMAGES = [\r\n  \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHYp9-vX2IZzZB2xF1np_GXU4FvtDMsT8_Q&s\",\r\n  \"https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds\",\r\n  \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJgBxrh5Jbaf-VWLR1duu6WrSyT8n5PQ9EQ&s\",\r\n];\r\n\r\nfunction FolderOpening() {\r\n  const [isHovered, setIsHovered] = useState(false);\r\n\r\n  return (\r\n    <div\r\n      className=\"relative cursor-pointer h-10 w-fit\"\r\n      onMouseEnter={() => setIsHovered(true)}\r\n      onMouseLeave={() => setIsHovered(false)}\r\n    >\r\n      <motion.div\r\n        className=\"bg-[#FFAD00] w-13 h-10 rounded-lg relative z-20 shadow-[0_0_3px_gray] origin-bottom perspective-origin-right\"\r\n        initial={{\r\n          rotateX: \"25deg\",\r\n        }}\r\n        animate={{\r\n          rotateX: isHovered ? \"45deg\" : \"25deg\",\r\n        }}\r\n      >\r\n        <div className=\"absolute w-8 h-1 top-2 left-[0.6rem] bg-[#FFC118] rounded-full\"></div>\r\n      </motion.div>\r\n\r\n      <motion.div className=\"bg-linear-to-b from-[#FFAD00] to-[#c28603] w-13 h-12.5 rounded-lg relative bottom-12 z-10\"></motion.div>\r\n\r\n      <div className=\"absolute -top-3.5 left-2 z-9 w-5 h-4 rounded-sm bg-[#FEAC00]\"></div>\r\n\r\n      <LayoutGroup>\r\n        <AnimatePresence>\r\n          {!isHovered ? (\r\n            <motion.div className=\"absolute z-19\">\r\n              {IMAGES.map((image, index) => {\r\n                return (\r\n                  <motion.div\r\n                    key={index}\r\n                    className={`absolute bottom-17 rounded-md left-1 w-[45px]`}\r\n                    layoutId={image}\r\n                  >\r\n                    <Image\r\n                      src={image}\r\n                      width={60}\r\n                      height={60}\r\n                      alt=\"image\"\r\n                      className=\"rounded-sm\"\r\n                    />\r\n                  </motion.div>\r\n                );\r\n              })}\r\n            </motion.div>\r\n          ) : (\r\n            <motion.div className=\"absolute bottom-20 flex flex-col gap-2 z-19 left-1/2 -translate-x-1/2\">\r\n              {IMAGES.map((image, index) => {\r\n                return (\r\n                  <motion.div\r\n                    key={index}\r\n                    className={`bottom-40 rounded-md w-20`}\r\n                    layoutId={image}\r\n                    transition={{\r\n                      type: \"spring\",\r\n                      stiffness: 120,\r\n                      mass: 0.7,\r\n                    }}\r\n                  >\r\n                    <Image\r\n                      src={image}\r\n                      width={80}\r\n                      height={120}\r\n                      alt=\"image\"\r\n                      className=\"rounded-md object-cover\"\r\n                    />\r\n                  </motion.div>\r\n                );\r\n              })}\r\n            </motion.div>\r\n          )}\r\n        </AnimatePresence>\r\n      </LayoutGroup>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default FolderOpening;\r\n"
      }
    />
  );
};
