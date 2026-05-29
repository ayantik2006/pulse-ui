import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Kbd } from "./ui/kbd";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ThemeSwitcher } from "./theme-switcher";
import { useTheme } from "next-themes";

function LandingNavbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", down);

    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="fixed top-0 z-80 flex h-20 w-full items-center justify-between border-b border-border bg-background/95 text-foreground backdrop-blur">
      <Link
        href={"/"}
        className="flex gap-1 items-center pl-20 [@media(max-width:780px)]:pl-10 "
      >
        {theme==="dark" ? <Image src="/logo.png" height={38} width={38} alt="logo" /> : <Image src="/logo-light.png" height={38} width={38} alt="logo" className="rounded-full" />}
        <p className="italic font-semibold text-2xl">ulse</p>
        <p className="italic font-semibold text-2xl ml-1">UI</p>
      </Link>
      <div className="flex gap-10 items-center [@media(max-width:972px)]:hidden pr-20 [@media(max-width:972px)]:pr-10">
        <button
          className="font-semibold text-muted-foreground hover:bg-accent rounded-md py-2 px-3 hover:text-accent-foreground text-[0.9rem] border flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Search size={15} />
          <p>Search</p>
          <Kbd className="text-lg">
            ⌘ <p className="text-xs">K</p>{" "}
          </Kbd>
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Components">
                {componentsList.map((component, index) => {
                  return (
                    <CommandItem key={index}>
                      <Link href={component.href}>{component.name}</Link>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandGroup heading="Other">
                <CommandItem>
                  <Link href={"/"} target="_blank">
                    Home
                  </Link>
                </CommandItem>
                <CommandItem>
                  <Link href={"/explore"} target="_blank">
                    Components
                  </Link>
                </CommandItem>
                <CommandItem>
                  <Link
                    href={"https://github.com/ayantik2006/pulse-ui"}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </CommandItem>
                <CommandItem>
                  <Link href={"/feedback"}>Feedback</Link>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
        <Link
          href={"/"}
          className="font-semibold text-muted-foreground hover:bg-accent rounded-md py-2 px-3 hover:text-accent-foreground text-[0.9rem]"
        >
          Home
        </Link>
        <Link
          href={"/feedback"}
          className="font-semibold text-muted-foreground hover:bg-accent rounded-md py-2 px-3 hover:text-accent-foreground text-[0.9rem]"
        >
          Feedback
        </Link>
        <div className="">
          <ThemeSwitcher />
        </div>
        <Tooltip>
          <TooltipTrigger className="z-81">
            <Link
              href={"https://github.com/ayantik2006/pulse-ui"}
              className="font-semibold hover:text-accent-foreground text-[0.9rem] hover:bg-accent p-[0.4rem] px-2 rounded flex items-center gap-2 duration-300"
              target="_blank"
            >
              <i className="devicon-github-original" />
              <p className="text-[0.8rem]">GitHub</p>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="z-90" side="top">
            <p className="font-semibold">View in GitHub</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="[@media(min-width:972px)]:hidden pr-10 flex items-center gap-3">
        <div className="mr-2">
          <ThemeSwitcher />
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="cursor-pointer"
          onClick={() => setIsHamburgerActive((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {!isHamburgerActive ? (
              <motion.div
                key="hamburger"
                className="flex flex-col gap-1 p-2"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-[0.1rem] w-4.5 bg-foreground" />
                <div className="h-[0.1rem] w-4.5 bg-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="x"
                className="p-2"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {isHamburgerActive && (
          <div className="absolute top-20 w-full h-fit z-80 px-3 pt-2 flex items-center justify-center">
            <motion.div
              className="flex flex-col gap-5 w-full items-center justify-center p-2 py-4 bg-background border-2 border-border rounded shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Link
                href={"/"}
                className="font-semibold hover:text-accent-foreground text-muted-foreground hover:bg-accent w-full px-4 py-2 duration-300 rounded-sm text-sm"
              >
                Home
              </Link>
              <Link
                href={"/feedback"}
                className="font-semibold hover:text-accent-foreground text-muted-foreground hover:bg-accent w-full px-4 py-2 duration-300 rounded-sm text-sm"
              >
                Feedback
              </Link>
              <Link
                href={"https://github.com/ayantik2006/pulse-ui"}
                target="_blank"
                className="font-semibold hover:text-accent-foreground text-muted-foreground hover:bg-accent w-full px-4 py-2 duration-300 rounded-sm text-sm"
              >
                GitHub
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingNavbar;

const HorizontalScale = () => {
  return (
    <div className="bg-[repeating-linear-gradient(-45deg,#000_0px,#0a0a0a_10px,#111111_10px,#111111_12px)] h-5 w-20"></div>
  );
};
