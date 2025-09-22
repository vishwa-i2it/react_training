import { useContext } from "react";
import { UserContext } from "../context/context";

export function SearchResult() {
  const { users } = useContext(UserContext);

  return (
    <div className="p-2 h-9/10 w-full flex flex-col overflow-y-auto">
      {!users && <h1>User List</h1>}

      {users && <p>Enter the value in search box</p>}

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <strong>{user.name}</strong>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
