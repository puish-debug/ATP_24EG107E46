import { useEffect, useState } from "react";
import axios from "axios";

function AuthorList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let res = await axios.get("http://localhost:4000/admin-api/authors");
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
    {authors.map((author) => (
      <div key={author._id} className={`${articleCardClass} relative flex flex-col`}>
        
        {/* Status Badge */}
        <span className={author.isActive ? articleStatusActive : articleStatusDeleted}>
          {author.isActive ? "ACTIVE" : "DELETED"}
        </span>

        <div className="flex flex-col gap-2">
          <p className={articleMeta}>{author.role}</p>

          <p className={articleTitle}>{author.firstName}</p>

          <p className={articleExcerpt}>{author.email}</p>
        </div>

        <button
          className={`${ghostBtn} mt-auto pt-4`}
          onClick={() => openAuthor(author)}
        >
          View Author →
        </button>
      </div>
    ))}
  </div>
);
}

export default AuthorList;