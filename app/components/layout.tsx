"use client";

import ComponentNavbar from "@/components/ComponentNavbar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <div className="flex">
        <ComponentNavbar />
        <VerticalScale className="w-4 h-full" />
      </div>
      <div className="flex-1 min-w-0 py-10">{children}</div>
    </div>
  );
}

const VerticalScale = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-[repeating-linear-gradient(-45deg,#000_0px,#0a0a0a_10px,#111111_10px,#111111_12px)] ${className}`}
    ></div>
  );
};
