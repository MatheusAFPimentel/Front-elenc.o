import React from "react";
import "./cardsAtores.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

function CardsAtores({ actor, handleReserve }) {
  return (
    <Card className="card">
      <CardImg
        className="img_card"
        src={actor.avatar}
        alt="foto do actors"
      ></CardImg>
      <CardBody>
        <CardTitle>
          <h2>{actor.name}</h2>
        </CardTitle>
        <CardText>
          Gênero: {actor.gender}
          <br />
          Atuação: {actor.genre}
          <br />
          Cachê: R${actor.price.toLocaleString()}
        </CardText>
        <Button
          onClick={(event) => handleReserve(event, actor.id)}
          className="botao_card"
        >
          Reservar
        </Button>
      </CardBody>
    </Card>
  );
}

export default CardsAtores;
