import React, { useState } from "react";
import Table from "../components/common/Table"; 

const User= ({ currentUserRole = "admin" }) => {
  // Initial dummy user data
  const [users, setUsers] = useState([
    { id: 1, name: "Ravi Sharma", email: "ravi@example.com", role: "user" },
    { id: 2, name: "Priya Patel", email: "priya@example.com", role: "admin" },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "user",
  });

  // Add new user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id, ...newUser }]);
    setNewUser({ name: "", email: "", role: "user" });
  };

  // Delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // Table columns
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role", header: "Role" },
    ...(currentUserRole === "admin"
      ? [
          {
            accessorKey: "actions",
            header: "Actions",
            cell: ({ row }) => (
              <button
                onClick={() => handleDeleteUser(row.original.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all"
              >
                Delete
              </button>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="h-full bg-cardBg shadow-md text-gray-900 p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        User Management
      </h1>

      
      {currentUserRole === "admin" && (
        <form
          onSubmit={handleAddUser}
          className="max-w-2xl mx-auto bg-cardBg shadow-md p-6 rounded-2xl  border-border border-2 mb-10  "
        >
          <h2 className="text-lg font-semibold mb-4">Add New User</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
              placeholder="Full Name"
              className="border bg-secondary rounded-md px-3 py-2 focus:ring-2 focus:ring-border focus:outline-none"
            />

            <input
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              placeholder="Email"
              className="border bg-secondary rounded-md px-3 py-2 focus:ring-2 focus:ring-border focus:outline-none"
            />

            <select
              value={newUser.role}
              onChange={(e) =>
                setNewUser({ ...newUser, role: e.target.value })
              }
              className="border bg-secondary  rounded-md px-3 py-2 focus:ring-2 focus:ring-border focus:outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-Primary hover:bg-secondary hover:text-gray-700 border-border border-2 text-white px-4 py-2 rounded-md transition-all cursor-pointer"
          >
            Create User
          </button>
        </form>
      )}

    
      <div className="max-w-6xl bg-cardBg shadow-md border-2 rounded-2xl border-border mx-auto">
        <Table
          data={users}
          columns={columns}
          onRowSelect={(row) => console.log("Selected:", row)}
        />
      </div>
    </div>
  );
};

export default User;
