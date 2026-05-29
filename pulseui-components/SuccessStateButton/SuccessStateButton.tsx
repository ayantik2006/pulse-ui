import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

function SuccessStateButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [scope, animate] = useAnimate();

  async function startAnimation() {
    animate(".text", {
      right: "19px",
    });

    await animate(
      ".main-div",
      {
        width: "130px",
        justifyContent: "between",
      },
      {
        duration: 0.1,
      },
    );

    await animate(
      ".loader",
      {
        display: "flex",
        opacity: [0, 1],
      },
      {
        delay: 0.4,
        type: "spring",
      },
    );

    animate(
      ".main-div",
      {
        width: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: ["#155dfc", "#02bb0e"],
      },
      {
        delay: 0.5,
      },
    );

    animate(".text", {
      display: "none",
    });

    await animate(".loader", {
      display: "none",
    });

    await animate(
      ".tick-svg",
      {
        pathLength: 1,
        display: "flex",
      },
      {
        delay: 1,
      },
    );
  }

  return (
    <div ref={scope}>
      <motion.div
        className={`bg-blue-600 w-28 relative h-8 font-semibold rounded-2xl cursor-pointer duration-300 gap-2 hover:opacity-90 main-div ${isClicked ? "pointer-events-none opacity-90" : ""}`}
        onClick={() => {
          setIsClicked(true);
          startAnimation();
        }}
      >
        <motion.div
          className="rounded-full h-3 w-3 border-t-2 border-white loader hidden animate-spin absolute left-4 my-2.5"
          initial={{
            opacity: 0,
          }}
        />
        <p className="absolute right-5.5 left-auto my-1 text text-white">Checkout</p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check-icon lucide-check"
        >
          <motion.path
            d="M4 12l5 5L20 6"
            className="tick-svg"
            initial={{
              pathLength: 0,
              display: "none",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default SuccessStateButton;
