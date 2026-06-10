"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import FeedbackButton from "@/components/FeedbackButton";

function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Feedback Button</h1>

            <h2 className="text-neutral-400">
              Below is an example of a animated feedback input component, copy, modify and use it in your project
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
                  <div className="p-2 mt-3 ml-19">
                   <FeedbackButton/>
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
      filename="FeedbackButton.tsx"
      code={
        "import { AnimatePresence, motion } from \"framer-motion\";\r\nimport { X } from \"lucide-react\";\r\nimport { useState } from \"react\";\r\nimport { Textarea } from \"./ui/textarea\";\r\n\r\nfunction FeedbackButton() {\r\n  const [isOpened, setIsOpened] = useState(false);\r\n  const [feedback, setFeedback] = useState(\"\");\r\n  const [isSend, setIsSend] = useState(false);\r\n\r\n  return (\r\n    <div className=\"relative w-fit\">\r\n      <AnimatePresence>\r\n        {isOpened && (\r\n          <motion.div\r\n            className=\"w-80 h-fit bg-white absolute bottom-10 right -left-28 rounded-sm dark:shadow-[inset_0_0_4px_black] shadow-[inset_0_0_2px_black] origin-bottom flex flex-col py-4 px-6\"\r\n            initial={{\r\n              opacity: 0,\r\n              scale: 0.8,\r\n              filter: \"blur(10px)\",\r\n            }}\r\n            animate={{\r\n              opacity: 1,\r\n              scale: 1,\r\n              filter: \"blur(0px)\",\r\n            }}\r\n            exit={{\r\n              opacity: 0,\r\n              scale: 0.8,\r\n              filter: \"blur(10px)\",\r\n            }}\r\n            transition={{\r\n              ease: \"easeOut\",\r\n            }}\r\n          >\r\n            <h1 className=\"text-black font-semibold text-sm\">Feedback</h1>\r\n            <p className=\"text-neutral-500 text-xs\">\r\n              Draft a genuine feedback message and click send\r\n            </p>\r\n            <Textarea\r\n              placeholder=\"Type your message here.\"\r\n              className=\"max-h-20 min-h-20 h-20 border border-neutral-200 mt-3 rounded placeholder:text-xs text-black selection:bg-black! selection:text-white! text-sm\"\r\n              autoFocus\r\n              required\r\n              value={feedback}\r\n              onChange={(e) => {\r\n                setFeedback(e.currentTarget.value);\r\n              }}\r\n            />\r\n            <motion.button\r\n              className=\"mt-3 bg-blue-600 font-semibold rounded-[5px] cursor-pointer shadow-[inset_0_0_2px_black] text-xs h-8 text-shadow-[0_0_1px_black] send-button active:scale-[0.98] text-white\"\r\n              style={{\r\n                pointerEvents: isSend ? \"none\" : \"all\",\r\n              }}\r\n              animate={{\r\n                background: isSend\r\n                  ? [\"#155dfc\",\"#03c42a\"]\r\n                  : \"#155dfc\",\r\n              }}\r\n              transition={{\r\n                ease:\"easeOut\",\r\n                duration:0.3\r\n              }}\r\n              onClick={(e) => {\r\n                if (feedback.trim() === \"\") return;\r\n                let feedbackCpy;\r\n                setFeedback((prev) => {\r\n                  feedbackCpy = prev;\r\n                  return \"\";\r\n                });\r\n                setIsSend(true);\r\n                setTimeout(() => {\r\n                  setIsSend(false);\r\n                }, 3000);\r\n              }}\r\n            >\r\n              <AnimatePresence mode=\"wait\">\r\n                <motion.p\r\n                  key={isSend ? \"feedback\" : \"send\"}\r\n                  initial={{ opacity: 0, y: 10, filter: \"blur(10px)\" }}\r\n                  animate={{ opacity: 1, y: 0, filter: \"blur(0px)\" }}\r\n                  exit={{ opacity: 0, y: -10, filter: \"blur(10px)\" }}\r\n                  transition={{ duration: 0.25 }}\r\n                >\r\n                  {isSend ? \"Feedback Sent\" : \"Send\"}\r\n                </motion.p>\r\n              </AnimatePresence>\r\n            </motion.button>\r\n          </motion.div>\r\n        )}\r\n      </AnimatePresence>\r\n      <motion.button\r\n        className=\"text-sm w-25 h-8 flex items-center justify-center bg-linear-to-b from-blue-500 via-blue-600 to-blue-700 font-semibold rounded-[5px] cursor-pointer shadow-[inset_0_0_2px_black] origin-center feedback-button text-white\"\r\n        onClick={() => {\r\n          setIsOpened((prev) => !prev);\r\n        }}\r\n        animate={{\r\n          scaleX: isOpened ? 0.32 : 1,\r\n          borderRadius: isOpened ? \"50%\" : \"5px\",\r\n        }}\r\n      >\r\n        <AnimatePresence mode=\"wait\">\r\n          {!isOpened ? (\r\n            <motion.p\r\n              className=\"text-shadow-[0_0_1px_black]\"\r\n              exit={{\r\n                filter: \"blur(10px)\",\r\n                opacity: 0,\r\n              }}\r\n              initial={{\r\n                filter: \"blur(10px)\",\r\n                opacity: 0,\r\n              }}\r\n              animate={{\r\n                filter: \"blur(0px)\",\r\n                opacity: 1,\r\n              }}\r\n              transition={{\r\n                delay: 0.1,\r\n              }}\r\n            >\r\n              Feedback\r\n            </motion.p>\r\n          ) : (\r\n            <motion.div\r\n              exit={{\r\n                filter: \"blur(10px)\",\r\n                opacity: 0,\r\n              }}\r\n              initial={{\r\n                filter: \"blur(10px)\",\r\n                opacity: 0,\r\n              }}\r\n              animate={{\r\n                filter: \"blur(0px)\",\r\n                opacity: 1,\r\n                scaleX: isOpened ? 3 : 1,\r\n              }}\r\n              transition={{\r\n                delay: 0.1,\r\n              }}\r\n            >\r\n              <X size={16} className=\"stroke-3 drop-shadow-[0_0_1px_black]\" />\r\n            </motion.div>\r\n          )}\r\n        </AnimatePresence>\r\n      </motion.button>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default FeedbackButton;\r\n"
      }
    />
  );
};
