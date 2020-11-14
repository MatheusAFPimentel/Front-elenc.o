import { useState, useEffect } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./meuPerfilAtor.css";
// import kitten from 'https://placekitten.com/200/300';

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
    <div className="perfil_ator_container">
      <Card id="card_ator" key={actor.id} actor={actor}>
        <CardImg
          className="img_card_ator"
          src="https://placekitten.com/200/300"
          alt="foto do ator"
        ></CardImg>
        <div className="card_expand">
          <CardTitle>
            <h2>{actor.name}</h2>
          </CardTitle>
          <CardText>
            Gênero: {actor.gender}
            <br />
            Atuação: {actor.genre}
            <br />
          </CardText>
          <CardBody id="card_body">
            <hr />
            {reserves.length === 0 ? (
              <CardText>Você não possui reservas</CardText>
            ) : (
              reserves.map((reserve, index) => (
                <CardText key={index}>
                  Datas reservadas: {reserve.reserveDate}
                </CardText>
              ))
            )}
            <hr />
            <Link to="/actor/edit/profile" className="btn-alterar_perfil">
              Alterar perfil
            </Link>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};
export default MeuPerfilAtor;
