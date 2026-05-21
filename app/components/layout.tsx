"use client"

import ComponentNavbar from "@/components/ComponentNavbar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <ComponentNavbar />

      <div className="flex-1 min-w-0 py-10">
        {children}
      </div>
    </div>
  );
}