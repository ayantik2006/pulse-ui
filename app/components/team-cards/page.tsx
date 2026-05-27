"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";
import TeamCards from "@/pulseui-components/TeamCards/TeamCards";
import { CodeBlock } from "@/components/ui/code-block";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <div className="flex-1 min-w-0 p-4 py-10 pl-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Team Cards</h1>

            <h2 className="text-neutral-400">
              Below is an example of cards in a team section with beautiful
              animations, directly copy and use it with your own modifications
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
                    <TeamCards />
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
      filename="TeamCards.tsx"
      code={
        'import { BriefcaseBusiness, ChevronsUpDown, UserRound } from \"lucide-react\";\r\nimport { FaInstagram, FaLinkedinIn } from \"react-icons/fa\";\r\nimport Image from \"next/image\";\r\nimport Tooltip from \"../Tooltip/Tooltip\";\r\nimport Link from \"next/link\";\r\nimport { useEffect, useState } from \"react\";\r\nimport { AnimatePresence, motion } from \"framer-motion\";\r\n\r\ninterface teamType {\r\n  id: string;\r\n  img: string;\r\n  name: string;\r\n  role: string;\r\n  desc: string;\r\n  insta: string;\r\n  linkedin: string;\r\n}\r\n\r\nconst team: Array<teamType> = [\r\n  {\r\n    id: \"1\",\r\n    img: \"https://www.hoardspace.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdu5qoczcn%2Fimage%2Fupload%2Fv1773081079%2FIMG_2169_ealh6r.jpg&w=256&q=75\",\r\n    name: \"Debi Prasad Sahoo\",\r\n    role: \"Chief Executive Officer\",\r\n    desc: \"As the CEO of hoardSpace.in, Debi Prasad Sahoo leads the vision, product strategy, and execution behind a modern digital booking and space-management platform. His work focuses on building scalable systems that simplify how users discover, reserve, and manage spaces through a seamless online experience.\",\r\n    insta: \"https://www.instagram.com/_rajsahoo_/\",\r\n    linkedin: \"https://www.linkedin.com/in/debi-prasad-sahoo-a31824214/\",\r\n  },\r\n  {\r\n    id: \"2\",\r\n    img: \"https://www.hoardspace.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F99005057%3Fv%3D4&w=256&q=75\",\r\n    name: \"Ayantik Sarkar\",\r\n    role: \"Chief Technical Officer\",\r\n    desc: \"As the CTO of hoardSpace.in, Ayantik Sarkar leads the technical development and engineering strategy behind the platform. He focuses on building scalable, modern, and high-performance systems that deliver a smooth and intuitive user experience. With a strong interest in software engineering and modern web technologies, he contributes to creating a fast, reliable, and user-focused digital platform at HoardSpace.\",\r\n    insta: \"https://www.instagram.com/ayantik.sarkar/\",\r\n    linkedin: \"https://www.linkedin.com/in/ayantiksarkar/\",\r\n  },\r\n  {\r\n    id: \"3\",\r\n    img: \"https://www.hoardspace.in/_next/image?url=%2Fshuvam.jpeg&w=256&q=75\",\r\n    name: \"Shuvam Satapathi\",\r\n    role: \"Full Stack Developer\",\r\n    desc: \"As a Full Stack Developer at hoardSpace.in, Shuvam Satapathi contributes to building and maintaining both the frontend and backend systems of the platform. He works on creating responsive user interfaces, developing scalable server-side features, and ensuring seamless integration across the application. With a focus on clean development practices and efficient problem-solving, he helps deliver a reliable and modern experience for users on HoardSpace.\",\r\n    insta: \"https://www.instagram.com/shuvam._661/\",\r\n    linkedin: \"https://www.linkedin.com/in/shuvam-satapathi-9800coc/\",\r\n  },\r\n];\r\n\r\nfunction TeamCards() {\r\n  const [selectedData, setSelectedData] = useState<teamType | null>(null);\r\n\r\n  useEffect(() => {\r\n    if (selectedData) {\r\n      document.body.style.overflow = \"hidden\";\r\n    } else {\r\n      document.body.style.overflow = \"auto\";\r\n    }\r\n  }, [selectedData]);\r\n\r\n  return (\r\n    <div className=\"w-full h-fit flex flex-col gap-2\">\r\n      <AnimatePresence>\r\n        {selectedData && (\r\n          <motion.div\r\n            className=\"fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm z-80 flex items-center justify-center\"\r\n            onClick={() => {\r\n              setSelectedData(null);\r\n            }}\r\n            initial={{\r\n              backdropFilter: \"blur(0px)\",\r\n            }}\r\n            animate={{\r\n              backdropFilter: \"blur(10px)\",\r\n            }}\r\n            transition={{\r\n              duration: 0.2,\r\n            }}\r\n            exit={{\r\n              backdropFilter: \"blur(0px)\",\r\n            }}\r\n          >\r\n            <motion.div\r\n              layoutId={selectedData.id}\r\n              className=\"w-full max-w-150 h-fit p-8 dark:bg-neutral-950 bg-white border-2 dark:border-neutral-600 border-neutral-400 border-dashed rounded-md flex gap-6 mx-4\"\r\n              onClick={(e) => {\r\n                e.stopPropagation();\r\n              }}\r\n              transition={{\r\n                type: \"spring\",\r\n                stiffness: 70,\r\n                mass: 0.5,\r\n              }}\r\n            >\r\n              <motion.div layoutId={selectedData.img} className=\"w-full\">\r\n                <Image\r\n                  src={selectedData.img}\r\n                  alt={selectedData.name}\r\n                  height={100}\r\n                  width={100}\r\n                  className=\"rounded-md h-25\"\r\n                />\r\n              </motion.div>\r\n              <div className=\"flex flex-col gap-2\">\r\n                <motion.div\r\n                  className=\"font-semibold flex items-center gap-1 text-xl dark:text-white text-black\"\r\n                  layoutId={selectedData.name}\r\n                >\r\n                  <UserRound size={20} />\r\n                  <h1>{selectedData.name}</h1>\r\n                </motion.div>\r\n                <motion.div\r\n                  layoutId={selectedData.role}\r\n                  className=\"text-sm dark:text-neutral-300/80 text-neutral-500 flex items-center gap-1\"\r\n                >\r\n                  <BriefcaseBusiness size={17} />\r\n                  <h2>{selectedData.role}</h2>\r\n                </motion.div>\r\n                <motion.p\r\n                  className=\"text-sm dark:text-neutral-300 text-neutral-500 mt-4\"\r\n                  initial={{\r\n                    filter: \"blur(10px)\",\r\n                  }}\r\n                  animate={{\r\n                    filter: \"blur(0px)\",\r\n                  }}\r\n                  exit={{\r\n                    filter: \"blur(10px)\",\r\n                  }}\r\n                >\r\n                  {selectedData.desc}\r\n                </motion.p>\r\n              </div>\r\n            </motion.div>\r\n          </motion.div>\r\n        )}\r\n      </AnimatePresence>\r\n      <motion.div\r\n        className=\"flex flex-col gap-3\"\r\n        variants={{\r\n          hidden: {},\r\n          visible: {\r\n            transition: {\r\n              staggerChildren: 0.3,\r\n            },\r\n          },\r\n        }}\r\n        initial=\"hidden\"\r\n        animate=\"visible\"\r\n      >\r\n        {team.map((data, index) => {\r\n          return (\r\n            <motion.div\r\n              layoutId={data.id}\r\n              key={index}\r\n              className=\"flex justify-between items-center dark:bg-neutral-950 bg-white p-5 rounded-md border-2 border-dashed border-neutral-300 dark:border-neutral-700 [@media(max-width:542px)]:flex-col [@media(max-width:542px)]:items-start\"\r\n              variants={{\r\n                hidden: {\r\n                  opacity: 0,\r\n                  filter: \"blur(10px)\",\r\n                  y: 10,\r\n                },\r\n                visible: {\r\n                  opacity: 1,\r\n                  filter: \"blur(0px)\",\r\n                  y: 0,\r\n                  transition: {\r\n                    duration: 0.3,\r\n                  },\r\n                },\r\n              }}\r\n              transition={{\r\n                duration: 0.3,\r\n              }}\r\n            >\r\n              <div className=\"flex items-center gap-4 justify-center\">\r\n                <motion.div layoutId={data.img}>\r\n                  <Image\r\n                    src={data.img}\r\n                    alt={data.name}\r\n                    height={50}\r\n                    width={50}\r\n                    className=\"rounded-md\"\r\n                  />\r\n                </motion.div>\r\n                <div className=\"flex flex-col gap-1 items-start justify-center\">\r\n                  <motion.div\r\n                    className=\"font-semibold flex items-center gap-1 dark:text-white text-black\"\r\n                    layoutId={data.name}\r\n                  >\r\n                    <UserRound size={17} />\r\n                    <h1>{data.name}</h1>\r\n                  </motion.div>\r\n                  <motion.div\r\n                    layoutId={data.role}\r\n                    className=\"text-sm text-neutral-500 dark:text-neutral-300/80 flex items-center gap-1\"\r\n                  >\r\n                    <BriefcaseBusiness size={17} />\r\n                    <h2>{data.role}</h2>\r\n                  </motion.div>\r\n                </div>\r\n              </div>\r\n              <div className=\"flex gap-3 items-center justify-center [@media(max-width:542px)]:ml-16.5\">\r\n                <Tooltip text=\"Instagram\" position=\"top\" theme=\"dark\">\r\n                  <Link href={data.insta} target=\"_blank\">\r\n                    <FaInstagram className=\"dark:text-neutral-400 text-neutral-400\" />\r\n                  </Link>\r\n                </Tooltip>\r\n                <Tooltip text=\"LinkedIn\" position=\"top\" theme=\"dark\">\r\n                  <Link href={data.linkedin} target=\"_blank\">\r\n                    <FaLinkedinIn className=\"dark:text-neutral-400 text-neutral-400\" />\r\n                  </Link>\r\n                </Tooltip>\r\n                <Tooltip text=\"Details\" position=\"top\" theme=\"dark\">\r\n                  <button\r\n                    className=\"dark:bg-neutral-800 bg-neutral-400/20 p-1 rounded-md cursor-pointer\"\r\n                    onClick={() => {\r\n                      setSelectedData(data);\r\n                    }}\r\n                  >\r\n                    <ChevronsUpDown className=\"size-5 stroke-neutral-400 [@media(max-width:542px)]:size-4\" />\r\n                  </button>\r\n                </Tooltip>\r\n              </div>\r\n            </motion.div>\r\n          );\r\n        })}\r\n      </motion.div>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default TeamCards;\r\n'
      }
    />
  );
};
