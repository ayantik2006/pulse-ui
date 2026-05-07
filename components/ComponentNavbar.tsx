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
  const allComponents = [
    "Buttons",
    "Loaders",
    "File Upload",
    "Toasts",
    "Accordian",
    "Avatar",
    "Typewriter Effect",
    "Rating",
    "Wheel Picker",
    "Copy Button",
    "Switch",
    "Date Picker",
    "Time Picker",
    "Password",
    "Elastic Slider",
    "Slide To Unlock"
    // "Carousal",
    // "Badges",
  ];
  const [visibleComponents, setVisibleComponents] = useState(allComponents);
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

  async function handleComponentLinkClick(componentName: string) {
    switch (componentName) {
      case "Buttons":
        router.push("/buttons");
        break;
      case "Loaders":
        router.push("/loaders");
        break;
      case "File Upload":
        router.push("/file-upload");
        break;
      case "Toasts":
        router.push("/toasts");
        break;
      case "Accordian":
        router.push("/accordians");
        break;
      case "Avatar":
        router.push("/avatars");
        break;
      case "Typewriter Effect":
        router.push("/typewriter-effects");
        break;
      case "Rating":
        router.push("/ratings");
        break;
      case "Wheel Picker":
        router.push("/wheel-pickers");
        break;
      case "Copy Button":
        router.push("/copy-button");
        break;
      case "Switch":
        router.push("/switch");
        break;
      case "Date Picker":
        router.push("/date-picker");
        break;
      case "Time Picker":
        router.push("/time-picker");
        break;
      case "Password":
        router.push("/password");
        break;
      case "Elastic Slider":
        router.push("/elastic-slider");
        break;
      case "Slide To Unlock":
        router.push("/slide-to-unlock");
        break;
    }
  }

  return (
    <div
      className={`z-80 ${isFloatingNavbarVisible && !isComponentNavbarVisible ? "fixed top-0 left-0 h-full" : ""} ${isComponentNavbarVisible ? "sticky top-0 bottom-0" : ""}`}
    >
      <div
        className={`relative left-0 h-full p-4 pr-0 ${!isComponentNavbarVisible ? "hidden" : ""}`}
      >
        <div
          className={`bg-neutral-900 w-65 h-fll border border-neutral-800 rounded p-4 flex flex-col sticky top-4`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-neutral-400">COMPONENTS</h1>
              <div className="flex items-center justify-center bg-neutral-950 px-2 py-1 rounded text-sm text-neutral-400">
                <p>{visibleComponents.length}</p>
              </div>
            </div>
            <InputGroup className="max-w-xs">
              <InputGroupInput
                placeholder="Search components"
                className="selection:bg-blue-600"
                onInput={(e) => {
                  const search = e.currentTarget.value.trim();
                  if (search === "") {
                    setVisibleComponents(allComponents);
                  }
                  const compos = [];
                  for (const compo of allComponents) {
                    if (compo.toLowerCase().includes(search)) {
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
          <div className="p-4 flex flex-col gap-4 mt-4 bg-neutral-800 rounded max-h-[25rem] overflow-auto component-list-scrollbar component-list-scrollbar">
            {visibleComponents.length == 0 && (
              <div>
                <p className="text-sm text-neutral-500">No components</p>
              </div>
            )}
            {visibleComponents.map((componentName, index) => (
              <div
                key={index}
                className="cursor-pointer text-sm hover:text-neutral-400"
                onClick={() => {
                  handleComponentLinkClick(componentName);
                }}
              >
                <p>{componentName}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 p-4 mt-10 bg-neutral-950 rounded text-sm duration-300">
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
              className="font-semibold text-neutral-400 text-[0.9rem] rounded flex items-center gap-2 duration-300"
              target="_blank"
            >
              <i className="devicon-github-original" />
              <p className="text-[0.8rem] mt-[0.1rem]">GitHub</p>
            </Link>
          </div>
        </div>
      </div>

      {!isFloatingNavbarVisible && (
        <div
          className={`fixed top-0 m-2 h-fit w-fit p-2 pr-0 bg-neutral-800 mx-2 rounded cursor-pointer hover:opacity-90 ${isComponentNavbarVisible ? "hidden" : ""}`}
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
            className={`bg-neutral-900 w-65 h-full border border-neutral-800 p-4 flex flex-col absolute left-0 top-0 `}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-neutral-400">COMPONENTS</h1>
                <div className="flex items-center justify-center bg-neutral-950 px-2 py-1 rounded text-sm text-neutral-400">
                  <p>{visibleComponents.length}</p>
                </div>
                <div
                  className="hover:bg-neutral-950 p-1 rounded cursor-pointer"
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
                  className="selection:bg-blue-600"
                  onInput={(e) => {
                    const search = e.currentTarget.value.trim();
                    if (search === "") {
                      setVisibleComponents(allComponents);
                    }
                    const compos = [];
                    for (const compo of allComponents) {
                      if (compo.toLowerCase().includes(search)) {
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
            <div className="p-4 flex flex-col gap-4 mt-4 bg-neutral-800 rounded max-h-[25rem] overflow-auto component-list-scrollbar component-list-scrollbar">
              {visibleComponents.length == 0 && (
                <div>
                  <p className="text-sm text-neutral-500">No components</p>
                </div>
              )}
              {visibleComponents.map((componentName, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-sm hover:text-neutral-400"
                  onClick={() => {
                    handleComponentLinkClick(componentName);
                  }}
                >
                  <p>{componentName}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-4 mt-10 bg-neutral-950 rounded text-sm">
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
                className="font-semibold text-neutral-400 text-[0.9rem] rounded flex items-center gap-2 duration-300"
                target="_blank"
              >
                <i className="devicon-github-original" />
                <p className="text-[0.8rem] mt-[0.1rem]">GitHub</p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ComponentNavbar;
