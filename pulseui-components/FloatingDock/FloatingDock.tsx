"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function FloatingDock({
  links,
}: {
  links: { title: string; icon: React.ReactNode; href: string }[];
}) {
  const linkDivRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mainDivRef = useRef<HTMLDivElement | null>(null);

  const [mouseX, setMouseX] = useState(0);
  const [isMouseOnDiv, setIsMouseOnDiv] = useState(false);

  return (
    <div
      ref={mainDivRef}
      className="flex w-fit gap-4 bg-neutral-300/30 dark:bg-neutral-700/40 py-2 px-4 rounded-lg overflow-visible"
      onMouseMove={(e) => {
        setMouseX(e.clientX);
      }}
      onMouseEnter={() => setIsMouseOnDiv(true)}
      onMouseLeave={() => setIsMouseOnDiv(false)}
    >
      {/* eslint-disable-next-line react-hooks/refs */}
      {links.map((link, index) => {
        const element = linkDivRef.current[index];

        let translateY = 0;
        let scale = 1;

        if (element && mainDivRef.current) {
          const rect = element.getBoundingClientRect();

          const linkCenterX = rect.left + rect.width / 2;

          const dockWidth = mainDivRef.current.getBoundingClientRect().width;

          const distance = Math.abs(mouseX - linkCenterX);

          const percent = Math.max(0, (dockWidth - distance) / dockWidth);

          translateY = percent * 20;
          scale = percent * 0.4 + 1;
        }

        return (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                target="_blank"
                key={index}
                ref={(ref) => {
                  linkDivRef.current[index] = ref;
                }}
                className="bg-neutral-500/20 dark:bg-neutral-700/50 rounded-full p-2 transition-all duration-300 ease-out"
                style={{
                  transform: isMouseOnDiv
                    ? `translateY(-${translateY}px)`
                    : "translateY(0px)",
                  width: isMouseOnDiv ? `${38 * scale}px` : "38px",
                  height: isMouseOnDiv ? `${38 * scale}px` : "38px",
                }}
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="">{link.title}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default FloatingDock;
