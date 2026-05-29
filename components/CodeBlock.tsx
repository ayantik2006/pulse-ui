"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { useTheme } from "next-themes";
import CopyButton from "./CopyButton";

export default function CodeInline({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const [html, setHtml] = useState("");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const load = async () => {
      const raw = await codeToHtml(code, {
        lang,
        theme:
          resolvedTheme === "dark"
            ? "github-dark"
            : "github-light",
      });

      setHtml(raw);
    };

    load();
  }, [code, lang, resolvedTheme]);

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 px-4 py-2">
      <div className="overflow-x-auto flex-1">
        <div
          className="
            text-sm font-mono whitespace-nowrap
            [&_pre]:!bg-transparent
            [&_pre]:!m-0
            [&_code]:!bg-transparent
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <CopyButton text={code} size={13} />
    </div>
  );
}