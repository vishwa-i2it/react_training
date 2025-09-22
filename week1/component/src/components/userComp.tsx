import { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "../types/user";

function SingleUser(props: { url: string }) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Vishwa",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: -37.3159,
        lng: 81.1496,
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  });

  useEffect(() => {
    axios
      .get(props.url + "/")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(user)
  if (user) {
    return (
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>{user.name}</td>
        </tr>
      </table>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export { SingleUser };
