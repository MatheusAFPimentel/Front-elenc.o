import React from 'react';
import './index.css';
import BackgroundImageCadastro from '../../assets/images/backgroundImageCadastro.jpg'

export default function Cadastro() {
    return (
        <>
            <div className="tela-cadastro">
                <img className="backcadastro" src={BackgroundImageCadastro} alt="" />
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
                    <label id="labelName">Idade :</label>
                    <input type = "date "placeholder="DD/MM/AAAA"></input>
                    <p/>
                    <div>
                    <label>Ator:</label>
                    <input type="radio" id="Alguma coisa"></input>
                    <label>Produtor:</label>
                    <input type="radio" id="Alguma coisa"></input>
                    </div>
                    <p/>
                    <input type="button" id="btncadastro" value="Registrar"></input>
                    </ul>
                    
                </from>
                
            </div>
        </>
    )
}

