import React, { useState } from "react";
import { getActors } from '../../assets/fakedata/api';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


const MeuPerfilAtor = (props) => {

  const [currentUser, setCurrentUser] = useState([])


    getActors.then((data) => {
    setCurrentUser(data);
    const user = localStorage.getItem('currentUser')
    console.log(user)
  });

  return (
    <div>
      {currentUser.map((actor) => <Card key={actor.id} actor={actor} >
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