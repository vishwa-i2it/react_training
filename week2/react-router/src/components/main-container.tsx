import { useEffect, useState } from "react";
import type { User } from "../types/types";
import { getAllUsers } from "../service/userService";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    const response = await getAllUsers();
    if (response.success) {
      setLoading(false);
    }
    setUsers(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col max-h-full overflow-y-auto">
      <div className="p-2">
        <a href="/users">
          <h1>User List</h1>
        </a>

        {loading && <p>Loading users...</p>}

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
    </div>
  );
}
