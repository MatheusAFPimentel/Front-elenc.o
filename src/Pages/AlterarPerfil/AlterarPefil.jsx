import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./alterarPerfil.css";

export default function Cadastro() {
  const [role, setRole] = useState();
  const [form, setForm] = useState({
    id: 0,
    name: "",
    user: { login: "", password: "" },
    company: "",
    cnpj: "",
    gender: "",
    price: 0,
    genre: "",
    avatar: "",
    phone: "",
    status: false,
    role: "",
    relevance: 0,
  });

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setRole(user.role);
    setForm({ ...form, ...user });
  }, []);

  function handleChange(ev) {
    if (ev.target.name === "login" || ev.target.name === "password") {
      setForm({
        ...form,
        user: { ...form.user, [ev.target.name]: ev.target.value },
      });
    } else {
      setForm({ ...form, [ev.target.name]: ev.target.value });
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const id = JSON.parse(localStorage.getItem("currentUser")).id;
    if (role === "producer") {
      api
        .put(`/producer/update/${id}`, {
          name: form.name,
          user: { login: form.user.login, password: form.user.password },
        })
        .then((data) => {
          if (!localStorage.getItem("producers")) {
            localStorage.setItem("producers", JSON.stringify([]));
          }
          const fakeData = JSON.parse(localStorage.getItem("producers"));
          localStorage.setItem(
            "producers",
            JSON.stringify([
              ...fakeData,
              { id: data.data.id, role: "producer", ...form },
            ])
          );
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ id: data.data.id, role: "producer", ...form })
          );
          history.push("/busca");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      api
        .put(`/actress/update/${id}`, {
          name: form.name,
          price: form.price,
          genre: form.genre,
          gender: form.gender,
          status: true,
          relevance: 0,
          user: { login: form.user.login, password: form.user.password },
        })
        .then((data) => {
          if (!localStorage.getItem("actors")) {
            localStorage.setItem("actors", JSON.stringify([]));
          }
          const fakeData = JSON.parse(localStorage.getItem("actors"));
          localStorage.setItem(
            "actors",
            JSON.stringify([
              ...fakeData,
              { id: data.data.id, role: "actor", ...form },
            ])
          );
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ id: data.data.id, role: "actor", ...form })
          );
          history.push("/actor/profile");
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  return (
    <>
      <div className="container_alterarperfil">
        <form className="form_alterarperfil" onSubmit={handleSubmit}>
          <label className="label_alterarperfil">Nome:</label>
          <input
            onChange={handleChange}
            className="input_alterarperfil"
            type="text"
            placeholder="nome completo"
            required
            name="name"
            value={form?.name}
          />
          <label className="label_alterarperfil">Email:</label>
          <input
            onChange={handleChange}
            className="input_alterarperfil"
            type="email"
            placeholder="seu@email.com"
            required
            name="login"
            value={form?.user.login}
          />

          <label className="label_alterarperfil">Senha:</label>
          <input
            onChange={handleChange}
            className="input_alterarperfil"
            type="password"
            placeholder="Senha"
            required
            name="password"
            value={form?.user.password}
          />

          {role === "producer" && (
            <>
              <label className="label_alterarperfil">
                Nome da produtora:
              </label>
              <input
                onChange={handleChange}
                className="input_alterarperfil"
                type="text"
                placeholder="nome da produtora"
                required
                name="company"
                value={form?.company}
              />

              <label className="label_alterarperfil">CNPJ:</label>
              <input
                onChange={handleChange}
                className="input_alterarperfil"
                type="text"
                placeholder="CNPJ"
                required
                name="cnpj"
                value={form?.cnpj}
              />
            </>
          )}

          {role === "actor" && (
            <>
              <label className="label_alterarperfil">Sexo:</label>
              <input
                onChange={handleChange}
                className="input_alterarperfil"
                type="text"
                placeholder="Masculino, Feminino, Outros"
                required
                name="gender"
                value={form?.gender}
              />
              <label className="label_alterarperfil">Cachê:</label>
              <input
                onChange={handleChange}
                className="input_alterarperfil"
                type="number"
                placeholder="Cachê"
                required
                name="price"
                value={form?.price}
              />
              <label className="label_alterarperfil">
                Genero que atua:
              </label>
              <input
                onChange={handleChange}
                className="input_alterarperfil"
                type="text"
                placeholder="Drama, Comédia"
                required
                name="genre"
                value={form?.genre}
              />
              <label className="label_alterarperfil">Foto:</label>
              <input
                onChange={handleChange}
                className="input_alterarperfil"
                type="File"
                required
                name="avatar"
                value={form?.avatar}
              />
            </>
          )}
          <label className="label_alterarperfil">Telefone:</label>
          <input
            onChange={handleChange}
            className="input_alterarperfil"
            type="tel"
            placeholder="+55 (XX) XXXX-XXXX"
            required
            name="phone"
            value={form?.phone}
          />

          <input type="submit" id="btn_alterar" value="Alterar"></input>
        </form>
      </div>
    </>
  );
}
