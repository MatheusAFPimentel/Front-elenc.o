import { useState, useEffect } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import api from "../../services/api";

const MeuPerfilAtor = (props) => {
  const [actor, setActor] = useState({});
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setActor(user);
    api
      .get(`/reserve/listByActress/${user.id}`)
      .then((res) => {
        setReserves(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <Card key={actor.id} actor={actor}>
        <CardImg
          className="img_card"
          src={actor.avatar}
          alt="foto do actors"
        ></CardImg>
        <CardTitle>
          <h2>{actor.name}</h2>
        </CardTitle>
        <CardText>
          Gênero: {actor.gender}
          <br />
          Atuação: {actor.genre}
          <br />
        </CardText>
        <br />
        <CardBody>
          <hr />
          Suas reservas
          <hr />
        </CardBody>
        {reserves.length === 0 ? (
          <CardText>Você não possui reservas</CardText>
        ) : (
          reserves.map((reserve) => (
            <CardText>Data Reservada: {reserve.reserveDate}</CardText>
          ))
        )}
      </Card>
    </div>
  );
};
export default MeuPerfilAtor;
