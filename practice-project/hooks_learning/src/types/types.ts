import type { ReactNode } from "react";

export interface ButtonProps {
  name: string;
  onClick: () => void;
}

export interface InputProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
}

export interface ThemeContextType {
  theme: Theme;
  toggled: () => void;
}

export type Theme = "light" | "dark";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface State {
  count: number;
}
export type Type = "increment" | "decrement" | "reset";

export interface Action {
  type: Type;
}
export interface ResultProps {
  onResult: (data: any) => void;
}

export interface Result {
  data: any;
}
