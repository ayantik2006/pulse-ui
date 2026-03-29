"use client";

import React, { createContext, useContext, useState } from "react";

export type CursorType = "default" | "dot" | "ring" | "follow";

interface MouseCursorContextType {
  type: CursorType;
  setType: (type: CursorType) => void;
}

const MouseCursorContext = createContext<MouseCursorContextType | undefined>(
  undefined
);

export function MouseCursorProvider({ children }: { children: React.ReactNode }) {
  const [type, setType] = useState<CursorType>("default");

  return (
    <MouseCursorContext.Provider value={{ type, setType }}>
      {children}
    </MouseCursorContext.Provider>
  );
}

export function useMouseCursor() {
  const context = useContext(MouseCursorContext);
  if (context === undefined) {
    throw new Error("useMouseCursor must be used within a MouseCursorProvider");
  }
  return context;
}
