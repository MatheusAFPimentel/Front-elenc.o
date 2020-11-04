import React from "react";
import "./sobre.css";
import CardTime from "../../Components/CardTime/CardTime";
import time from "../../Components/CardTime/time";

function Sobre() {
  return (
    <div className="sobre_container">
      <div className="sobre_conteudo">
        <h3 id="sobre_texto">
          O Elenc.o foi desenvolvido para a Gama Academy em parceria com
          Accenture. Nosso time de desenvolvedores junior é composto por:
        </h3>
        <div className="sobre_container_cards">
          {time.map((membro, index) => (
            <div key={index}>
              <CardTime membro={membro} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sobre;
