import React, { Component } from 'react';
import './index.css';
// import BackgroundImageCadastro from '../../assets/images/backgroundImageCadastro.jpg'

export default function Cadastro() {
    return (
        <>
            <div className="tela-cadastro">
                {/* <img className="backcadastro" src={BackgroundImageCadastro} /> */}
                <from className="form-login">
                    <ul>
                    <label id="labelName">Nome:</label>
                    <input type = "text " placeholder="Algum placeholder"></input>

                    <p/>
                    <label id="labelName">Nome:</label>
                    <input type = "text "placeholder="Algum placeholder"></input>

                    <p/>
                    <label id="labelName">Nome:</label>
                    <input type = "text "placeholder="Algum placeholder"></input>

                    <p/>
                    <label id="labelName">Nome:</label>
                    <input type = "text "placeholder="Algum placeholder"></input>
                    <p/>
                    <label id="labelName">Nome:</label>
                    <input type = "text "placeholder="Algum placeholder"></input>
                    <p/>
                    <label id="labelName">Idade:</label>
                    <input type = "date "placeholder="Algum placeholder"></input>
                    <p/>
                    <form>
                    <label>Ator:</label>
                    <input type="radio" id="Alguma coisa"></input>
                    <label>Produtor:</label>
                    <input type="radio" id="Alguma coisa"></input>
                    </form>
                    <p/>
                    <input type="button" id="btncadastro" value="Registrar"></input>
                    </ul>
                    
                </from>
                
            </div>
        </>
    )
}

