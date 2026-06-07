"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import ContactCard from "@/pulseui-components/ContactCard/ContactCard";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Contact Card</h1>

            <h2 className="text-neutral-400">
              Below is an example of a animated card component displaying
              contact details with micro interactions
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
                    <ContactCard />
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
      filename="ContactCard.tsx"
      code={
        'import { Globe, Instagram, Mail, UserRound } from "lucide-react";\r\nimport { motion } from "framer-motion";\r\nimport { useRef, useState } from "react";\r\n\r\nfunction ContactCard() {\r\n  const [isNameActive, setIsNameActive] = useState<boolean | null>(null);\r\n  const [isDomainActive, setIsDomainActive] = useState<boolean | null>(null);\r\n  const [isEmailActive, setIsEmailActive] = useState<boolean | null>(null);\r\n  const [isInstaActive, setIsInstaActive] = useState<boolean | null>(null);\r\n\r\n  const isActive =\r\n    isDomainActive || isNameActive || isEmailActive || isInstaActive;\r\n\r\n  const getActiveName = () => {\r\n    if (isEmailActive) return "Email";\r\n    if (isDomainActive) return "Website";\r\n    if (isInstaActive) return "Instagram";\r\n    if (isNameActive) return "Name";\r\n  };\r\n\r\n  const segmentRef1 = useRef<HTMLDivElement>(null);\r\n  const segmentRef2 = useRef<HTMLDivElement>(null);\r\n  const segmentRef3 = useRef<HTMLDivElement>(null);\r\n  const segmentRef4 = useRef<HTMLDivElement>(null);\r\n\r\n  const mainDivRef = useRef<HTMLDivElement>(null);\r\n\r\n  const [width, setWidth] = useState(0);\r\n  const [left, setLeft] = useState(0);\r\n\r\n  return (\r\n    <div\r\n      className="flex flex-col gap-10 items-center justify-center relative w-fit"\r\n      ref={mainDivRef}\r\n    >\r\n      <div className="flex items-center justify-center">\r\n        <div\r\n          ref={segmentRef1}\r\n          className="duration-200 rounded-full"\r\n          style={{\r\n            filter:\r\n              isDomainActive == true || isInstaActive == true\r\n                ? "blur(2px)"\r\n                : "blur(0px)",\r\n            color: isNameActive || isEmailActive ? "#fc671d" : "",\r\n          }}\r\n        >\r\n          <Segment text="debi" />\r\n        </div>\r\n        <div\r\n          ref={segmentRef2}\r\n          className="duration-300 rounded-md"\r\n          style={{\r\n            filter:\r\n              isDomainActive == true ||\r\n              isInstaActive == true ||\r\n              isNameActive == true\r\n                ? "blur(2px)"\r\n                : "blur(0px)",\r\n            color: isEmailActive ? "#fc671d" : "",\r\n          }}\r\n        >\r\n          <Segment text="@" />\r\n        </div>\r\n        <div\r\n          ref={segmentRef3}\r\n          className="duration-300 rounded-md"\r\n          style={{\r\n            filter: isNameActive == true ? "blur(2px)" : "blur(0px)",\r\n            color:\r\n              isEmailActive || isDomainActive || isInstaActive ? "#fc671d" : "",\r\n          }}\r\n        >\r\n          <Segment text="hoardspace" />\r\n        </div>\r\n        <div\r\n          ref={segmentRef4}\r\n          className="duration-300 rounded-md"\r\n          style={{\r\n            filter:\r\n              isInstaActive == true || isNameActive == true\r\n                ? "blur(2px)"\r\n                : "blur(0px)",\r\n            color: isDomainActive || isEmailActive ? "#fc671d" : "",\r\n          }}\r\n        >\r\n          <Segment text=".in" />\r\n        </div>\r\n      </div>\r\n      {isActive && (\r\n        <motion.div\r\n          className="absolute top-6 border-b-3 h-4 border-l-3 border-r-3 border-dashed"\r\n          animate={{\r\n            left,\r\n            width,\r\n          }}\r\n          transition={{\r\n            type: "spring",\r\n            stiffness: 300,\r\n            damping: 30,\r\n          }}\r\n        >\r\n          <p className="left-1 text-sm translate-y-4 text-neutral-400">\r\n            {getActiveName()}\r\n          </p>\r\n        </motion.div>\r\n      )}\r\n      <div className="flex items-center justify-center gap-3">\r\n        <motion.button\r\n          className="cursor-pointer"\r\n          whileHover={{\r\n            translateY: "-4px",\r\n          }}\r\n          onMouseEnter={() => {\r\n            setIsNameActive(true);\r\n            setIsEmailActive(false);\r\n            setIsDomainActive(false);\r\n            setIsInstaActive(false);\r\n            setLeft(\r\n              (segmentRef1.current?.getBoundingClientRect().left || 0) -\r\n                (mainDivRef.current?.getBoundingClientRect().left || 0),\r\n            );\r\n            setWidth(segmentRef1.current?.getBoundingClientRect().width || 0);\r\n          }}\r\n          onMouseLeave={() => {\r\n            setIsEmailActive(null);\r\n            setIsDomainActive(null);\r\n            setIsNameActive(null);\r\n            setIsInstaActive(null);\r\n          }}\r\n        >\r\n          <UserRound size={16} className="stroke-neutral-400" />\r\n        </motion.button>\r\n        <motion.button\r\n          className="cursor-pointer"\r\n          whileHover={{\r\n            translateY: "-4px",\r\n          }}\r\n          onMouseEnter={() => {\r\n            setIsNameActive(false);\r\n            setIsEmailActive(false);\r\n            setIsDomainActive(true);\r\n            setIsInstaActive(false);\r\n            setLeft(\r\n              (segmentRef3.current?.getBoundingClientRect().left || 0) -\r\n                (mainDivRef.current?.getBoundingClientRect().left || 0),\r\n            );\r\n            setWidth(\r\n              (segmentRef3.current?.getBoundingClientRect().width || 0) +\r\n                (segmentRef4.current?.getBoundingClientRect().width || 0),\r\n            );\r\n          }}\r\n          onMouseLeave={() => {\r\n            setIsEmailActive(null);\r\n            setIsDomainActive(null);\r\n            setIsNameActive(null);\r\n            setIsInstaActive(null);\r\n          }}\r\n        >\r\n          <Globe size={16} className="stroke-neutral-400" />\r\n        </motion.button>\r\n        <motion.button\r\n          className="cursor-pointer"\r\n          whileHover={{\r\n            translateY: "-4px",\r\n          }}\r\n          onMouseEnter={() => {\r\n            setIsNameActive(false);\r\n            setIsEmailActive(true);\r\n            setIsDomainActive(false);\r\n            setIsInstaActive(false);\r\n            setLeft(\r\n              (segmentRef1.current?.getBoundingClientRect().left || 0) -\r\n                (mainDivRef.current?.getBoundingClientRect().left || 0),\r\n            );\r\n            setWidth(\r\n              (segmentRef3.current?.getBoundingClientRect().width || 0) +\r\n                (segmentRef4.current?.getBoundingClientRect().width || 0) +\r\n                (segmentRef1.current?.getBoundingClientRect().width || 0) +\r\n                (segmentRef2.current?.getBoundingClientRect().width || 0),\r\n            );\r\n          }}\r\n          onMouseLeave={() => {\r\n            setIsEmailActive(null);\r\n            setIsDomainActive(null);\r\n            setIsNameActive(null);\r\n            setIsInstaActive(null);\r\n          }}\r\n        >\r\n          <Mail size={16} className="stroke-neutral-400" />\r\n        </motion.button>\r\n        <motion.button\r\n          className="cursor-pointer"\r\n          whileHover={{\r\n            translateY: "-4px",\r\n          }}\r\n          onMouseEnter={() => {\r\n            setIsNameActive(false);\r\n            setIsEmailActive(false);\r\n            setIsDomainActive(false);\r\n            setIsInstaActive(true);\r\n            setLeft(\r\n              (segmentRef3.current?.getBoundingClientRect().left || 0) -\r\n                (mainDivRef.current?.getBoundingClientRect().left || 0),\r\n            );\r\n            setWidth(segmentRef3.current?.getBoundingClientRect().width || 0);\r\n          }}\r\n          onMouseLeave={() => {\r\n            setIsEmailActive(null);\r\n            setIsDomainActive(null);\r\n            setIsNameActive(null);\r\n            setIsInstaActive(null);\r\n          }}\r\n        >\r\n          <Instagram size={16} className="stroke-neutral-400" />\r\n        </motion.button>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default ContactCard;\r\n\r\nconst Segment = ({ text }: { text: string }) => {\r\n  return (\r\n    <div>\r\n      <p className="text-xl select-none">{text}</p>\r\n    </div>\r\n  );\r\n};\r\n'
      }
    />
  );
};
