import "./App.css";
import { MainContainer } from "./components/main-container";
import { SearchContainer } from "./components/search-contanier";
import { SearchResult } from "./components/result";
import { UserContext } from "./context/context";
import { useState } from "react";
import type { User } from "./types/types";

function App() {
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
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
