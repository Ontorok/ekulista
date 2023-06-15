import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

export default function useThemeContext() {
  return useContext(ThemeContext);
}
