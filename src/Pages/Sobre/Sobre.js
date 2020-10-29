import React from "react";
import "./sobre.css";
import CardTime from "../CardTime/CardTime";
import time from "./time";

function Sobre() {
  return (
    <div>
      <h3>
        O Elenc.o foi desenvolvido para a Gama Academy em parceria com
        Accenture. Nosso time de desenvolvedores junior é composto por:
      </h3>
      <div className="container_cards">
        {time.map((membro, index) => (
          <div key={index}>
            <CardTime membro={membro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;
