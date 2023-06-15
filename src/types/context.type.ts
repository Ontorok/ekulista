export type ModeType = "dark" | "light";

export type ThemeContextType = {
  mode: ModeType;
  toggle: () => void;
};
