import { useState } from "react";
import "./home.css";
import logo from "../../assets/images/logo.svg";
import { getLogin } from "../../assets/fakedata/api";
import { useHistory } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErr("");
    getLogin(email, password)
      .then((data) => {
        if (data.role === "producer") {
          history.push("/dashboard");
        } else {
          history.push("/actor/profile");
        }
      })
      .catch((err) => setLoginErr(err));
  };

  return (
    <div className="home">
      <img id="logo" src={logo} alt="logo elenc.o" />
      <div className="form_login">
        <form onSubmit={handleSubmit}>
          <h2 className="titulo_login">Login</h2>
          <h3>
            <span style={{ color: "red" }}>{loginErr}</span>
          </h3>
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Senha</label>
          <br />
          <input
            type="password"
            placeholder="insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <br />
          <button id="botao_entrar" type="submit">
            Entrar
          </button>
        </form>
        <div className="container_cadastro">
          <a href="/registro" className="link_cadastro">
            Cadastre-se como Produtor
          </a>
          <p>ou</p>
          <a href="/registro" className="link_cadastro">
            Cadastre-se como Elenco
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
