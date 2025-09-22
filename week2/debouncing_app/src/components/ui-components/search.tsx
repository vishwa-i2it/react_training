import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/context";
import { searchUsers } from "../../service/userService";
import { useDebounce } from "../../custom-hooks/custom-hooks";

export function SearchBox() {
  const { setUsers } = useContext(UserContext);

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  async function fetchUsers(query: string) {
    const response = await searchUsers(query);
    setUsers(response.data);
  }

  useEffect(() => {
    if (value) {
      fetchUsers(value);
    } else {
      setUsers([]);
    }
  }, [debouncedValue]);

  return (
    <input
      className="h-10 border-2 p-1 rounded-10"
      type="text"
      id="search"
      name="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
