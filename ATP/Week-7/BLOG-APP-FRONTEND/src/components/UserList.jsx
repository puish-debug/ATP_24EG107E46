import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let res = await axios.get("http://localhost:4000/admin-api/users");
    setUsers(res.data.payload);
  }

  async function deleteUser(id) {
    await axios.put(`http://localhost:4000/admin-api/delete-user/${id}`);
    getUsers();
  }

  async function restoreUser(id) {
    await axios.put(`http://localhost:4000/admin-api/restore-user/${id}`);
    getUsers();
  }

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {users.map((user) => (
      <div key={user._id} className={`${articleCardClass} relative flex flex-col`}>
        
        {/* Status Badge */}
        <span className={user.isActive ? articleStatusActive : articleStatusDeleted}>
          {user.isActive ? "ACTIVE" : "DELETED"}
        </span>

        <div className="flex flex-col gap-2">
          <p className={articleMeta}>{user.role}</p>

          <p className={articleTitle}>{user.firstName}</p>

          <p className={articleExcerpt}>{user.email}</p>
        </div>

        <button
          className={`${ghostBtn} mt-auto pt-4`}
          onClick={() => openUser(user)}
        >
          View User →
        </button>
      </div>
    ))}
  </div>
);
}

export default UsersList;