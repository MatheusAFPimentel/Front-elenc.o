import React from 'react';
import './cadastro.css';


export default function Cadastro() {
    return (
        <>
            <div className="container_cadastro-produtor">
                <form className="form_cadastro-produtor">

                    <label id="label_cadastro-produtor">Nome:</label> 
                    <input id="input_cadastro-produtor" type="text" placeholder="nome completo" required></input>
                    
                    <label id="label_cadastro-produtor">Nome da produtora:</label>
                    <input id="input_cadastro-produtor" type="text" placeholder="nome da produtora" required></input>
                    
                    <label id="label_cadastro-produtor">CNPJ:</label> 
                    <input id="input_cadastro-produtor" type="text" placeholder="CNPJ" required></input>
                   
                    <label id="label_cadastro-produtor">Telefone de contato:</label> 
                    <input id="input_cadastro-produtor" type="tel" placeholder="+55 (XX) XXXX-XXXX" required></input>
                  
                    <label id="label_cadastro-produtor">Telefone do produtor:</label> 
                    <input id="input_cadastro-produtor" type="tel" placeholder="+55 (XX) XXXX-XXXX" required></input>
                   
                    <label id="label_cadastro-produtor">Email de contato:</label> 
                    <input id="input_cadastro-produtor" type="text" placeholder="seu@email.com" required></input>
                 
                    <input type="submit" id="btncadastro" value="Registrar"></input>
                    
                </form>
                
            </div>
        </>
    )
}

