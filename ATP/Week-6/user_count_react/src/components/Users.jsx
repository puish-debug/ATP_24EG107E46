import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Users() {
  console.log("API rerendered");

  let [users, setUser] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const { incrementCount } = useContext(UserContext);

  useEffect(() => {
    async function getdata() {
      setLoading(true);
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let Userlist = await res.json();
        setUser(Userlist);
      } catch (err) {
        console.log("err is", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getdata();
  }, []);

  if (loading === true) {
    return <p className="text-center text-3xl">Loading...</p>;
  }

  if (error !== null) {
    return (
      <p className="text-center text-3xl text-red-500">
        {error.message}
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center mb-6">List of Users</h1>

      {/* 4 cards per row */}
      <div className="grid grid-cols-4 gap-6 px-6">
        {users.map((userObj) => {
          return (
            <div
              key={userObj.id}
              className="border rounded-xl shadow p-4 bg-white"
            >
              <p className="font-bold text-lg">{userObj.name}</p>
              <p className="text-gray-600">{userObj.email}</p>

              <button
                className="mt-3 px-3 py-1 bg-blue-500 text-white rounded"
                onClick={incrementCount}
              >
                Add User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;