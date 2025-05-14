import React, { useState } from "react";
import UserForm from "./feautres/user/components/userForm";
import UserTable from "./feautres/user/components/userTables";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateUser = (user) => {
    if (editIndex === null) {
      setUsers([...users, user]);
    } else {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = user;
      setUsers(updatedUsers);
      setEditIndex(null);
    }
  };

  const handleEditUser = (index) => {
    setEditIndex(index);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gerenciar Usuários</h2>
      <UserForm
        onSubmit={handleAddOrUpdateUser}
        editUser={editIndex !== null ? users[editIndex] : null}
      />
      <UserTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
}
