import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SingleUser } from "./components/userComp";
import { UsersList } from "./components/usersComp";

const baseUrl = "https://jsonplaceholder.typicode.com/users/";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SingleUser url={baseUrl} />
    <UsersList />
  </StrictMode>
);
