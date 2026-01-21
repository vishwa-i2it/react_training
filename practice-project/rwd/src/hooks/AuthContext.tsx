import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AuthContextType } from "../types/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const login = (userEmail: string) => {
    setLoggedIn(true);
    setEmail(userEmail);
  };

  const logout = () => {
    setLoggedIn(false);
    setEmail("");
  };

  const values = useMemo(
    () => ({
      loggedIn,
      email,
      login,
      logout,
    }),
    [loggedIn, email],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
