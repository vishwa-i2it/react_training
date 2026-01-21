import React, { useMemo, useState } from "react";
import type {
  Theme,
  ThemeContextType,
  ThemeProviderProps,
} from "../types/types";

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  toggled: () => {},
});

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggled = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const value = useMemo(() => ({ theme, toggled }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
