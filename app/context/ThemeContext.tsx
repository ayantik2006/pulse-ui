"use client"

import { createContext, useContext, useState } from "react";
import { themeType, theme as THEME } from "@/types/themeType";

const ThemeContext = createContext<themeType | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<THEME>(THEME.DARK);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
    return useContext(ThemeContext);
}