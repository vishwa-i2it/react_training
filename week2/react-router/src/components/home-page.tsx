import { useState } from "react";
import { UserContext } from "../context/context";
import { Users } from "./main-container";
import { SearchResult } from "./result";
import { SearchContainer } from "./search-contanier";
import type { User } from "../types/types";
import "../App.css";

export function Home() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="h-screen w-screen flex flex-row bg-sky-50 m-0 border-1">
      <div className="w-5/10 flex flex-col m-2 p-3 bg-sky-100">
        <UserContext.Provider value={{ users, setUsers }}>
          <SearchContainer />
          <SearchResult />
        </UserContext.Provider>
      </div>
      <div className="w-5/10 m-2 p-3 bg-sky-100">
        <Users />
      </div>
    </div>
  );
}
