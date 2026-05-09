"use client"

import { useEffect, useState } from "react"
import { codeToHtml } from "shiki"

export default function CodeInline({
  code,
  lang = "tsx",
}: {
  code: string
  lang?: string
}) {
  const [copied, setCopied] = useState(false)
  const [html, setHtml] = useState("")

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  useEffect(() => {
    const load = async () => {
      const raw = await codeToHtml(code, {
        lang,
        theme: "github-dark",
      })
      setHtml(raw)
    }

    load()
  }, [code, lang])

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md">

      <div className="flex items-center gap-4 overflow-x-auto min-w-0 w-full">
        {/* <span className="text-gray-500 text-sm select-none">1</span> */}

        <div
          className="text-sm font-mono whitespace-nowrap [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <button
        onClick={handleCopy}
        className="text-gray-400 hover:bg-neutral-950 rounded cursor-pointer p-1 transition text-sm self-end sm:self-auto shrink-0"
      >
        {copied?"copied!":"copy"}
      </button>
    </div>
  )
}
