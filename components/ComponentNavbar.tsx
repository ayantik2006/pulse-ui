import { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

function ComponentNavbar() {
  const [isCompressed, setIsCompressed] = useState(false);
  const componentsList = [
    {
      name: "Loaders",
      href: "/components/loaders",
      isPopular: false,
    },
    {
      name: "File Upload",
      href: "/components/file-upload",
      isPopular: false,
    },
    {
      name: "Toasts",
      href: "/components/toasts",
      isPopular: false,
    },
    {
      name: "Accordian",
      href: "/components/accordians",
      isPopular: false,
    },
    {
      name: "Typewriter Effect",
      href: "/components/typewriter-effects",
      isPopular: false,
    },
    {
      name: "Rating",
      href: "/components/ratings",
      isPopular: false,
    },
    {
      name: "Wheel Picker",
      href: "/components/wheel-pickers",
      isPopular: true,
    },
    {
      name: "Copy Button",
      href: "/components/copy-button",
      isPopular: false,
    },
    {
      name: "Switch",
      href: "/components/switch",
      isPopular: false,
    },
    {
      name: "Date Picker",
      href: "/components/date-picker",
      isPopular: false,
    },
    {
      name: "Time Picker",
      href: "/components/time-picker",
      isPopular: false,
    },
    {
      name: "Password",
      href: "/components/password",
      isPopular: false,
    },
    {
      name: "Elastic Slider",
      href: "/components/elastic-slider",
      isPopular: true,
    },
    {
      name: "Cards",
      href: "/components/cards",
      isPopular: false,
    },
    {
      name: "Slide To Unlock",
      href: "/components/slide-to-unlock",
      isPopular: true,
    },
    {
      name: "OTP Input",
      href: "/components/otp-input",
      isPopular: false,
    },
    {
      name: "Hold To Confirm Button",
      href: "/components/hold-to-confirm",
      isPopular: true,
    },
    {
      name: "Text Flip",
      href: "/components/text-flip",
      isPopular: false,
    },
    {
      name: "Magnetic Button",
      href: "/components/magnetic-button",
      isPopular: true,
    },
    {
      name: "Floating Dock",
      href: "/components/floating-dock",
      isPopular: true,
    },
    {
      name: "Tooltip",
      href: "/components/tooltip",
      isPopular: true,
    },
    {
      name: "Filter Selector",
      href: "/components/filter-selector",
      isPopular: true,
    },
    {
      name: "Gooey Input",
      href: "/components/gooey-input",
      isPopular: true,
    },
    {
      name: "Team Cards",
      href: "/components/team-cards",
      isPopular: false,
    },
  ].reverse();
  const [visibleComponents, setVisibleComponents] = useState(componentsList);
  const [width, setWidth] = useState<number>();
  const [isComponentNavbarVisible, setIsComponentNavbarVisible] =
    useState<boolean>();
  const [isFloatingNavbarVisible, setIsFloatingNavbarVisible] =
    useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFloatingNavbarVisible(false);
    window.addEventListener("resize", handleResize);
    if (Number(width) <= 767) {
      setIsComponentNavbarVisible(false);
    } else {
      setIsComponentNavbarVisible(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div
      className={`z-80 ${isFloatingNavbarVisible && !isComponentNavbarVisible ? "fixed top-0 left-0 h-full" : ""} ${isComponentNavbarVisible ? "sticky top-0 bottom-0" : ""}`}
    >
      <div
        className={`relative left-0 h-full p4 pr-0 ${!isComponentNavbarVisible ? "hidden" : ""}`}
      >
        <div
          className={`bg-neutral900 w-65 h-fll borde border-neutral-800 rounded p-4 flex flex-col sticky top-0`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              {/* <h1 className="font-semibold text-neutral-400">COMPONENTS</h1> */}
              <div className="flex items-center justify-center px-2 py-1 text-sm rounded bg-neutral-950 text-neutral-400">
                {/* <p>{visibleComponents.length}</p> */}
              </div>
            </div>
            <InputGroup className="max-w-xs">
              <InputGroupInput
                placeholder="Search components"
                className="selection:bg-blue-600"
                onInput={(e) => {
                  const search = e.currentTarget.value.trim();
                  if (search === "") {
                    setVisibleComponents(componentsList);
                  }
                  const compos = [];
                  for (const compo of componentsList) {
                    if (compo.name.toLowerCase().includes(search)) {
                      compos.push(compo);
                    }
                  }
                  setVisibleComponents(compos);
                }}
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="p-4 flex flex-col gap-4 mt-4 bg-neutral-800/0 rounded max-h-[25rem] overflow-auto component-list-scrollbar component-list-scrollbar mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            {visibleComponents.length == 0 && (
              <div>
                <p className="text-sm text-neutral-500">No components</p>
              </div>
            )}
            {visibleComponents.map((component, index) => (
              <Link
                href={component.href}
                key={index}
                className="text-sm cursor-pointer hover:bg-neutral-600/50 p-2 rounded-md"
              >
                <p>{component.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 p-4 mt-10 ml-2 text-sm duration-300 rounded bg-neutral-950/0">
            <Link
              href={"/"}
              className="text-neutral-500 hover:text-neutral-400"
            >
              Home
            </Link>
            <Link
              href={"/feedback"}
              className="text-neutral-500 hover:text-neutral-400"
            >
              Feedback
            </Link>
            <Link
              href={"https://github.com/ayantik2006/pulse-ui"}
              className="text-neutral-500 text-[0.9rem] rounded flex items-center gap-2 duration-300 hover:text-neutral-400"
              target="_blank"
            >
              {/* <i className="devicon-github-original" /> */}
              <p className="text-[0.8rem mt-[0.1rem]">GitHub</p>
            </Link>
          </div>
        </div>
      </div>

      {!isFloatingNavbarVisible && (
        <div
          className={`fixed top-0 m-2 h-fit w-fit p-2 pr-0 bg-neutral-800/40 mx-2 rounded cursor-pointer hover:opacity-90 ${isComponentNavbarVisible ? "hidden" : ""}`}
          onClick={() => {
            setIsFloatingNavbarVisible((prev) => !prev);
          }}
        >
          <div className="mr-2">
            <Menu size={20} />
          </div>
        </div>
      )}

      <AnimatePresence>
        {isFloatingNavbarVisible && (
          <motion.div
            className={`bg-black w-65 h-full border border-neutral-800 p-4 flex flex-col absolute left-0 top-0 `}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center justify-between">
                {/* <h1 className="font-semibold text-neutral-400">COMPONENTS</h1> */}
                <div className="flex items-center justify-center px-2 py-1 text-sm rounded bg-neutral-950 text-neutral-400">
                  {/* <p>{visibleComponents.length}</p> */}
                </div>
                <div
                  className="p-1 rounded cursor-pointer hover:bg-neutral-950"
                  onClick={() => {
                    setIsFloatingNavbarVisible(false);
                  }}
                >
                  <X size={18} className="stroke-neutral-500" />
                </div>
              </div>
              <InputGroup className="max-w-xs">
                <InputGroupInput
                  placeholder="Search components"
                  className="selection:bg-blue-600 placeholder:text-sm"
                  onInput={(e) => {
                    const search = e.currentTarget.value.trim();
                    if (search === "") {
                      setVisibleComponents(componentsList);
                    }
                    const compos = [];
                    for (const compo of componentsList) {
                      if (compo.name.toLowerCase().includes(search)) {
                        compos.push(compo);
                      }
                    }
                    setVisibleComponents(compos);
                  }}
                />
                <InputGroupAddon>
                  <Search/>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="p-4 flex flex-col gap-4 mt-4 rounded max-h-[25rem] overflow-auto component-list-scrollbar component-list-scrollbar mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              {visibleComponents.length == 0 && (
                <div>
                  <p className="text-sm text-neutral-500">No components</p>
                </div>
              )}
              {visibleComponents.map((component, index) => (
                <Link
                  href={component.href}
                  key={index}
                  className="text-sm cursor-pointer hover:bg-neutral-600/50 p-2 rounded-md"
                >
                  <p>{component.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-4 mt-10 text-sm rounded bg-black">
              <Link
                href={"/"}
                className="text-neutral-500 hover:text-neutral-400"
              >
                Home
              </Link>
              <Link
                href={""}
                className="text-neutral-500 hover:text-neutral-400"
              >
                Feedback
              </Link>
              <Link
                href={"https://github.com/ayantik2006/pulse-ui"}
                className=" text-sm text-neutral-500 hover:text-neutral-400 rounded flex items-center gap-2 duration-300"
                target="_blank"
              >
                {/* <i className="devicon-github-original" /> */}
                <p className="mt-[0.1rem]">GitHub</p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ComponentNavbar;
