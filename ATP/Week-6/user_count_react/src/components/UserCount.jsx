import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserCount() {
  const { count } = useContext(UserContext);

  return (
    <div className="my-4">
      <h2>Total Users Added: {count}</h2>
    </div>
  );
}

export default UserCount;