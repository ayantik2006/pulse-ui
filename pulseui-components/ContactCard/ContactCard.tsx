import { Globe, Instagram, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function ContactCard() {
  const [isNameActive, setIsNameActive] = useState<boolean | null>(null);
  const [isDomainActive, setIsDomainActive] = useState<boolean | null>(null);
  const [isEmailActive, setIsEmailActive] = useState<boolean | null>(null);
  const [isInstaActive, setIsInstaActive] = useState<boolean | null>(null);

  const isActive =
    isDomainActive || isNameActive || isEmailActive || isInstaActive;

  const getActiveName = () => {
    if (isEmailActive) return "Email";
    if (isDomainActive) return "Website";
    if (isInstaActive) return "Instagram";
    if (isNameActive) return "Name";
  };

  const segmentRef1 = useRef<HTMLDivElement>(null);
  const segmentRef2 = useRef<HTMLDivElement>(null);
  const segmentRef3 = useRef<HTMLDivElement>(null);
  const segmentRef4 = useRef<HTMLDivElement>(null);

  const mainDivRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <div
      className="flex flex-col gap-10 items-center justify-center relative w-fit"
      ref={mainDivRef}
    >
      <div className="flex items-center justify-center">
        <div
          ref={segmentRef1}
          className="duration-200 rounded-full"
          style={{
            filter:
              isDomainActive == true || isInstaActive == true
                ? "blur(2px)"
                : "blur(0px)",
            color: isNameActive || isEmailActive ? "#fc671d" : "",
          }}
        >
          <Segment text="debi" />
        </div>
        <div
          ref={segmentRef2}
          className="duration-300 rounded-md"
          style={{
            filter:
              isDomainActive == true ||
              isInstaActive == true ||
              isNameActive == true
                ? "blur(2px)"
                : "blur(0px)",
            color: isEmailActive ? "#fc671d" : "",
          }}
        >
          <Segment text="@" />
        </div>
        <div
          ref={segmentRef3}
          className="duration-300 rounded-md"
          style={{
            filter: isNameActive == true ? "blur(2px)" : "blur(0px)",
            color:
              isEmailActive || isDomainActive || isInstaActive ? "#fc671d" : "",
          }}
        >
          <Segment text="hoardspace" />
        </div>
        <div
          ref={segmentRef4}
          className="duration-300 rounded-md"
          style={{
            filter:
              isInstaActive == true || isNameActive == true
                ? "blur(2px)"
                : "blur(0px)",
            color: isDomainActive || isEmailActive ? "#fc671d" : "",
          }}
        >
          <Segment text=".in" />
        </div>
      </div>
      {isActive && (
        <motion.div
          className="absolute top-6 border-b-3 h-4 border-l-3 border-r-3 border-dashed"
          animate={{
            left,
            width,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <p className="left-1 text-sm translate-y-4 text-neutral-400">
            {getActiveName()}
          </p>
        </motion.div>
      )}
      <div className="flex items-center justify-center gap-3">
        <motion.button
          className="cursor-pointer"
          whileHover={{
            translateY: "-4px",
          }}
          onMouseEnter={() => {
            setIsNameActive(true);
            setIsEmailActive(false);
            setIsDomainActive(false);
            setIsInstaActive(false);
            setLeft(
              (segmentRef1.current?.getBoundingClientRect().left || 0) -
                (mainDivRef.current?.getBoundingClientRect().left || 0),
            );
            setWidth(segmentRef1.current?.getBoundingClientRect().width || 0);
          }}
          onMouseLeave={() => {
            setIsEmailActive(null);
            setIsDomainActive(null);
            setIsNameActive(null);
            setIsInstaActive(null);
          }}
        >
          <UserRound size={16} className="stroke-neutral-400" />
        </motion.button>
        <motion.button
          className="cursor-pointer"
          whileHover={{
            translateY: "-4px",
          }}
          onMouseEnter={() => {
            setIsNameActive(false);
            setIsEmailActive(false);
            setIsDomainActive(true);
            setIsInstaActive(false);
            setLeft(
              (segmentRef3.current?.getBoundingClientRect().left || 0) -
                (mainDivRef.current?.getBoundingClientRect().left || 0),
            );
            setWidth(
              (segmentRef3.current?.getBoundingClientRect().width || 0) +
                (segmentRef4.current?.getBoundingClientRect().width || 0),
            );
          }}
          onMouseLeave={() => {
            setIsEmailActive(null);
            setIsDomainActive(null);
            setIsNameActive(null);
            setIsInstaActive(null);
          }}
        >
          <Globe size={16} className="stroke-neutral-400" />
        </motion.button>
        <motion.button
          className="cursor-pointer"
          whileHover={{
            translateY: "-4px",
          }}
          onMouseEnter={() => {
            setIsNameActive(false);
            setIsEmailActive(true);
            setIsDomainActive(false);
            setIsInstaActive(false);
            setLeft(
              (segmentRef1.current?.getBoundingClientRect().left || 0) -
                (mainDivRef.current?.getBoundingClientRect().left || 0),
            );
            setWidth(
              (segmentRef3.current?.getBoundingClientRect().width || 0) +
                (segmentRef4.current?.getBoundingClientRect().width || 0) +
                (segmentRef1.current?.getBoundingClientRect().width || 0) +
                (segmentRef2.current?.getBoundingClientRect().width || 0),
            );
          }}
          onMouseLeave={() => {
            setIsEmailActive(null);
            setIsDomainActive(null);
            setIsNameActive(null);
            setIsInstaActive(null);
          }}
        >
          <Mail size={16} className="stroke-neutral-400" />
        </motion.button>
        <motion.button
          className="cursor-pointer"
          whileHover={{
            translateY: "-4px",
          }}
          onMouseEnter={() => {
            setIsNameActive(false);
            setIsEmailActive(false);
            setIsDomainActive(false);
            setIsInstaActive(true);
            setLeft(
              (segmentRef3.current?.getBoundingClientRect().left || 0) -
                (mainDivRef.current?.getBoundingClientRect().left || 0),
            );
            setWidth(segmentRef3.current?.getBoundingClientRect().width || 0);
          }}
          onMouseLeave={() => {
            setIsEmailActive(null);
            setIsDomainActive(null);
            setIsNameActive(null);
            setIsInstaActive(null);
          }}
        >
          <Instagram size={16} className="stroke-neutral-400" />
        </motion.button>
      </div>
    </div>
  );
}

export default ContactCard;

const Segment = ({ text }: { text: string }) => {
  return (
    <div>
      <p className="text-xl select-none">{text}</p>
    </div>
  );
};
