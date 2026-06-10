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
import { componentsList } from "@/lib/componentsList";
import { ThemeSwitcher } from "./theme-switcher";

function ComponentNavbar() {
  const [isCompressed, setIsCompressed] = useState(false);

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
      className={`z-80 fixed top-0 ${isFloatingNavbarVisible && !isComponentNavbarVisible ? "fixed top-0 left-0 h-full" : ""} ${isComponentNavbarVisible ? "sticky top-0 bottom-0" : ""}`}
    >
      <div
        className={`relative left-0 h-full p4 pr-0 ${!isComponentNavbarVisible ? "hidden" : ""}`}
      >
        <div className="w-65 h-screen rounded border border-border bg-background p-4 flex flex-col sticky top-0">
          <div className="flex flex-col gap-3 mt-6">
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
                className="text-sm cursor-pointer text-muted-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
              >
                <p>{component.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 p-4 mt-10 ml-2 text-sm duration-300 rounded">
            <Link
              href={"/"}
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href={"/feedback"}
              className="text-muted-foreground hover:text-foreground"
            >
              Feedback
            </Link>
            <Link
              href={"https://github.com/ayantik2006/pulse-ui"}
              className="text-muted-foreground text-[0.9rem] rounded flex items-center gap-2 duration-300 hover:text-foreground"
              target="_blank"
            >
              {/* <i className="devicon-github-original" /> */}
              <p className="text-[0.8rem mt-[0.1rem]">GitHub</p>
            </Link>
            {/* <ThemeToggle /> */}
            <div className="mt-10">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>

      {!isFloatingNavbarVisible && (
        <div
          className={`fixed top-0 m-2 h-fit w-fit p-2 pr-0 bg-muted border border-border mx-2 rounded cursor-pointer hover:opacity-90 ${isComponentNavbarVisible ? "hidden" : ""}`}
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
            className="bg-background w-65 h-full border border-border p-4 flex flex-col absolute left-0 top-0"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center justify-between">
                <div
                  className="p-1 rounded cursor-pointer hover:bg-accent ml-auto"
                  onClick={() => {
                    setIsFloatingNavbarVisible(false);
                  }}
                >
                  <X size={18} className="stroke-muted-foreground" />
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
                  <Search />
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
                  className="text-sm cursor-pointer text-muted-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                >
                  <p>{component.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-4 mt-10 text-sm rounded bg-background">
              <Link
                href={"/"}
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href={""}
                className="text-muted-foreground hover:text-foreground"
              >
                Feedback
              </Link>
              <Link
                href={"https://github.com/ayantik2006/pulse-ui"}
                className=" text-sm text-muted-foreground hover:text-foreground rounded flex items-center gap-2 duration-300"
                target="_blank"
              >
                <p className="mt-[0.1rem]">GitHub</p>
              </Link>
              <div className="mt-10">
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ComponentNavbar;
