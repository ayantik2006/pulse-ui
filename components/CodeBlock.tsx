"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

export default function CodeInline({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const load = async () => {
      const raw = await codeToHtml(code, {
        lang,
        theme: "github-dark",
      });
      setHtml(raw);
    };

    load();
  }, [code, lang]);

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 rounded-xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-4 overflow-x-auto">
        {/* <span className="text-gray-500 text-sm select-none">1</span> */}

        <div
          className="text-sm font-mono whitespace-nowrap [&_code]:bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="mb-auto">
        <CopyButton text={code} size={13} />
      </div>
    </div>
  );
}
