import React from "react";

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
          <th style={{ width: "150px" }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center">Nenhum usuário cadastrado</td>
          </tr>
        ) : (
          users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => onEdit(index)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(index)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
