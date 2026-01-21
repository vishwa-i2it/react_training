export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  name?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
}

export interface SearchBarProps {
  searchValue: string;
  onSearch: (term: string) => void;
}

export interface DashboardReducerState {
  query: string;
  currency: string;
  active: boolean;
  isLive: boolean;
}

export type DashboardReducerAction =
  | { type: "SET_QUERY"; payload: string }
  | { type: "PAUSE" }
  | { type: "RESET" };

export type ThemContextType = { theme: "dark" | "light"; currencySymbol: "$" };

export interface LiveTickerProps {
  assetName: string;
  priceData: CurrencyData;
  isUpdating: boolean;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CurrencyData {
  country: string;
  value: string;
  low: number;
  high: number;
  currency: string;
}
