"use client";

import { ModeType, ThemeContextType } from "@/types/context.type";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggle: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setmode] = useState<ModeType>("dark");

  const toggle = () => {
    setmode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
