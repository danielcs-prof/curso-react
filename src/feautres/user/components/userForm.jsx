import React, { useEffect, useState } from "react";

export default function UserForm({ onSubmit, editUser }) {
  const [formData, setFormData] = useState({ nome: "", email: "" });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    } else {
      setFormData({ nome: "", email: "" });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;
    onSubmit(formData);
    setFormData({ nome: "", email: "" });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-md-5">
          <input
            type="text"
            name="nome"
            className="form-control"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-5">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            {editUser ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </div>
    </form>
  );
}
