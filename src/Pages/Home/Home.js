import React from "react";
import "./home.css";
import logo from "../../assets/images/logo.svg";

function Home() {
  return (
    <div className="home">
      <img id="logo" src={logo} alt="logo elenc.o" />
      <div className="form_login">
        <form>
          <h2 className="titulo_login">Login</h2>
          <label>Email</label> <br />
          <input type="email" placeholder="insira seu email" required /> <br />
          <label>Senha</label>
          <br />
          <input type="password" placeholder="insira sua senha" required />{" "}
          <br />
          <button id="botao_entrar" type="submit">
            Entrar
          </button>
        </form>
        <div className="container_cadastro">
          <a href="" className="link_cadastro">
            Cadastre-se como Produtor
          </a>
          <p>ou</p>
          <a href="" className="link_cadastro">
            Cadastre-se como Elenco
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
