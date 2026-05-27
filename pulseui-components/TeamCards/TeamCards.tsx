import { BriefcaseBusiness, ChevronsUpDown, UserRound } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface teamType {
  id: string;
  img: string;
  name: string;
  role: string;
  desc: string;
  insta: string;
  linkedin: string;
}

const team: Array<teamType> = [
  {
    id: "1",
    img: "https://www.hoardspace.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdu5qoczcn%2Fimage%2Fupload%2Fv1773081079%2FIMG_2169_ealh6r.jpg&w=256&q=75",
    name: "Debi Prasad Sahoo",
    role: "Chief Executive Officer",
    desc: "As the CEO of hoardSpace.in, Debi Prasad Sahoo leads the vision, product strategy, and execution behind a modern digital booking and space-management platform. His work focuses on building scalable systems that simplify how users discover, reserve, and manage spaces through a seamless online experience.",
    insta: "https://www.instagram.com/_rajsahoo_/",
    linkedin: "https://www.linkedin.com/in/debi-prasad-sahoo-a31824214/",
  },
  {
    id: "2",
    img: "https://www.hoardspace.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F99005057%3Fv%3D4&w=256&q=75",
    name: "Ayantik Sarkar",
    role: "Chief Technical Officer",
    desc: "As the CTO of hoardSpace.in, Ayantik Sarkar leads the technical development and engineering strategy behind the platform. He focuses on building scalable, modern, and high-performance systems that deliver a smooth and intuitive user experience. With a strong interest in software engineering and modern web technologies, he contributes to creating a fast, reliable, and user-focused digital platform at HoardSpace.",
    insta: "https://www.instagram.com/ayantik.sarkar/",
    linkedin: "https://www.linkedin.com/in/ayantiksarkar/",
  },
  {
    id: "3",
    img: "https://www.hoardspace.in/_next/image?url=%2Fshuvam.jpeg&w=256&q=75",
    name: "Shuvam Satapathi",
    role: "Full Stack Developer",
    desc: "As a Full Stack Developer at hoardSpace.in, Shuvam Satapathi contributes to building and maintaining both the frontend and backend systems of the platform. He works on creating responsive user interfaces, developing scalable server-side features, and ensuring seamless integration across the application. With a focus on clean development practices and efficient problem-solving, he helps deliver a reliable and modern experience for users on HoardSpace.",
    insta: "https://www.instagram.com/shuvam._661/",
    linkedin: "https://www.linkedin.com/in/shuvam-satapathi-9800coc/",
  },
];

function TeamCards() {
  const [selectedData, setSelectedData] = useState<teamType | null>(null);

  useEffect(() => {
    if (selectedData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedData]);

  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <AnimatePresence>
        {selectedData && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm z-80 flex items-center justify-center"
            onClick={() => {
              setSelectedData(null);
            }}
            initial={{
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backdropFilter: "blur(10px)",
            }}
            transition={{
              duration: 0.2,
            }}
            exit={{
              backdropFilter: "blur(0px)",
            }}
          >
            <motion.div
              layoutId={selectedData.id}
              className="w-full max-w-150 h-fit p-8 dark:bg-neutral-950 bg-white border-2 dark:border-neutral-600 border-neutral-400 border-dashed rounded-md flex gap-6 mx-4"
              onClick={(e) => {
                e.stopPropagation();
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                mass: 0.5,
              }}
            >
              <motion.div layoutId={selectedData.img} className="w-full">
                <Image
                  src={selectedData.img}
                  alt={selectedData.name}
                  height={100}
                  width={100}
                  className="rounded-md h-25"
                />
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.div
                  className="font-semibold flex items-center gap-1 text-xl dark:text-white text-black"
                  layoutId={selectedData.name}
                >
                  <UserRound size={20} />
                  <h1>{selectedData.name}</h1>
                </motion.div>
                <motion.div
                  layoutId={selectedData.role}
                  className="text-sm dark:text-neutral-300/80 text-neutral-500 flex items-center gap-1"
                >
                  <BriefcaseBusiness size={17} />
                  <h2>{selectedData.role}</h2>
                </motion.div>
                <motion.p
                  className="text-sm dark:text-neutral-300 text-neutral-500 mt-4"
                  initial={{
                    filter: "blur(10px)",
                  }}
                  animate={{
                    filter: "blur(0px)",
                  }}
                  exit={{
                    filter: "blur(10px)",
                  }}
                >
                  {selectedData.desc}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="flex flex-col gap-3"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {team.map((data, index) => {
          return (
            <motion.div
              layoutId={data.id}
              key={index}
              className="flex justify-between items-center dark:bg-neutral-950 bg-white p-5 rounded-md border-2 border-dashed border-neutral-300 dark:border-neutral-700 [@media(max-width:542px)]:flex-col [@media(max-width:542px)]:items-start"
              variants={{
                hidden: {
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <div className="flex items-center gap-4 justify-center">
                <motion.div layoutId={data.img}>
                  <Image
                    src={data.img}
                    alt={data.name}
                    height={50}
                    width={50}
                    className="rounded-md"
                  />
                </motion.div>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <motion.div
                    className="font-semibold flex items-center gap-1 dark:text-white text-black"
                    layoutId={data.name}
                  >
                    <UserRound size={17} />
                    <h1>{data.name}</h1>
                  </motion.div>
                  <motion.div
                    layoutId={data.role}
                    className="text-sm text-neutral-500 dark:text-neutral-300/80 flex items-center gap-1"
                  >
                    <BriefcaseBusiness size={17} />
                    <h2>{data.role}</h2>
                  </motion.div>
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center [@media(max-width:542px)]:ml-16.5">
                <Tooltip text="Instagram" position="top" theme="dark">
                  <Link href={data.insta} target="_blank">
                    <FaInstagram className="dark:text-neutral-400 text-neutral-400" />
                  </Link>
                </Tooltip>
                <Tooltip text="LinkedIn" position="top" theme="dark">
                  <Link href={data.linkedin} target="_blank">
                    <FaLinkedinIn className="dark:text-neutral-400 text-neutral-400" />
                  </Link>
                </Tooltip>
                <Tooltip text="Details" position="top" theme="dark">
                  <button
                    className="dark:bg-neutral-800 bg-neutral-400/20 p-1 rounded-md cursor-pointer"
                    onClick={() => {
                      setSelectedData(data);
                    }}
                  >
                    <ChevronsUpDown className="size-5 stroke-neutral-400 [@media(max-width:542px)]:size-4" />
                  </button>
                </Tooltip>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TeamCards;
