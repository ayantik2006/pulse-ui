import { useEffect, useState } from "react";

function TypewriterEffect({
  words,
  className,
  speed,
}: {
  words: Array<string>;
  className?: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!isErasing) {
        setDisplay((prev) => prev.concat(words[wordIndex].charAt(charIndex)));
        setCharIndex((prev) => prev + 1);
        if (charIndex === words[wordIndex].length - 1) {
          setCharIndex((prev) => prev - 1);
          setIsErasing(true);
        }
      }
      if (isErasing) {
        setDisplay((prev) => prev.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
        if (charIndex == 0) {
          setIsErasing(false);
          setWordIndex((prev) => prev + 1);
          if (wordIndex === words.length - 1) {
            setWordIndex(0);
          }
        }
      }

      if (charIndex === 0) {
        setIsErasing(false);
      }
    }, speed);
  }, [charIndex, isErasing, wordIndex]);

  return (
    <div className={`${className} flex `}>
      <span>{display}</span>
      <span className=" text-black bg-black w-[0.15rem] ml-[0.1rem] text-[1.1rem]"></span>
    </div>
  );
}

export default TypewriterEffect;
