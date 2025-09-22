import { createContext } from "react";
import type { User } from "../types/types";

export const UserContext = createContext<{
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}>({
  users: [],
  setUsers: () => {},
});
