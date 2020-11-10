import React, { useState } from "react";
import CardAtores from '../../Components/CardsAtores/CardsAtores'
import { getActors } from '../../assets/fakedata/api'
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


const MeuPerfilAtor = (props) => {

  const [actors, setActors] = useState([])

  getActors.then((data) => {
    setActors(data);
  });

  return (
    <div>
      {actors.map((actor) => <Card key={actor.id} actor={actor} >
        <CardImg
          className="img_card"
          src={actor.avatar}
          alt="foto do actors"
        >
        </CardImg>
        <CardTitle>
          <h2>{actor.name}</h2>
        </CardTitle>
        <CardText>
          Idade: {actor.age}
          <br />
          Gênero: {actor.sex}
          <br />
          DRT: {actor.drt}
          <br />
          Atuação: {actor.genre.join(", ")}
          <br />
        </CardText>
        <br />
        <CardBody>
          <hr />
          Suas reservas
          <hr />
        </CardBody>
        <CardText>
          Você não possui reservas
        </CardText>
      </Card>)}
    </div>
  )
};
export default MeuPerfilAtor;