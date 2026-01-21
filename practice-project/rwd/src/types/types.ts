export interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  ref?: React.Ref<HTMLInputElement> | null;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export interface HomeProps extends React.DOMAttributes<HTMLDivElement> {
  loggedIn: boolean;
  email: string;
}

export interface AuthContextType {
  loggedIn: boolean;
  email: string;
  login: (email: string) => void;
  logout: () => void;
}
