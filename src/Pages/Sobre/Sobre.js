import React from "react";
import "./sobre.css";
import CardTime from "../../Components/CardTime/CardTime";
import Navbar from '../../Components/Navbar/Navbar'
import time from "../../Components/CardTime/time";

function Sobre() {
  return (
    <div>
    <Navbar />
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
