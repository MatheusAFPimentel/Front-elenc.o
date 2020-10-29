import React from "react";
import './home.css';

function Home() {
  return (
    <div>
      <div>
        <form className='form_login'>
          <h2>Login</h2>
          <label>Email</label>
          <input type="email" placeholder="email" required />
          <label>Senha</label>
          <input type="password" placeholder="Senha" required />
          <button id='botao_entrar' type="submit">Entrar</button>
        </form>
        <div className='container_cadastro'>
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
