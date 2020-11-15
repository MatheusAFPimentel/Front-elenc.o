import { useState } from "react";
import "./home.css";
import logo from "../../assets/images/logo.svg";
import { useHistory, Link } from "react-router-dom";
import { findUser } from "../../services/helpers/findUser";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginErr("");
    const userFound = await findUser(email, password);
    if (userFound.success) {
      if (userFound.role === "producer") {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: userFound.id,
            role: "producer",
            ...userFound.user,
          })
        );
        history.push("/busca");
      } else {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ id: userFound.id, role: "actor", ...userFound.user })
        );
        history.push("/actor/profile");
      }
    } else {
      setLoginErr(userFound.err);
    }
  };

  return (
    <div className="home">
      <img id="home_logo" src={logo} alt="logo elenc.o" />
      <div className="form_login">
        <form onSubmit={handleSubmit}>
          <h2 className="titulo_login">Login</h2>
          <h3>
            <span style={{ color: "red" }}>{loginErr}</span>
          </h3>
          <label id="label_home">Email</label> <br />
          <input
            type="email"
            placeholder="insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input_home"
          />
          <br />
          <label id="label_home">Senha</label>
          <br />
          <input
            type="password"
            placeholder="insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="input_home"
          />
          <br />
          <button id="botao_entrar" type="submit">
            Entrar
          </button>
        </form>
        <div className="container_cadastro">
          <Link to="/cadastro?role=producer" className="link_cadastro">
            Cadastre-se como Produtor
          </Link>
          <p>ou</p>
          <Link to="/cadastro?role=actor" className="link_cadastro">
            Cadastre-se como Elenco
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
