import { useEffect, useState } from "react";
import { getUsers } from "../services/userApi";

type User = {
  id: string;
  name: string;
};

function UsersList() {
  const [users, setUsers] = useState([]);

  // useEffect(async () => setUsers(await getUsers()), []);

  return (
    <ul>
      {users.map((u: User) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export { UsersList };
