import { useState, useEffect } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import "./meuPerfilAtor.css";
import { HiMail } from "react-icons/hi";
import { GiMoneyStack } from "react-icons/gi";
import { FaTheaterMasks, FaPersonBooth } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdPerson } from "react-icons/md";

const MeuPerfilAtor = (props) => {
  const [actor, setActor] = useState({});
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!!user) {
      setActor(user);
      api
        .get(`/reserve/listByActress/${user.id}`)
        .then((res) => {
          setReserves(res.data);
        })
        .catch((err) => alert(err));
    }
  }, []);
  if (!JSON.parse(localStorage.getItem("currentUser"))) {
    return <Redirect to="" />;
  } else {
    return (
      <div className="perfil_ator_container">
        <Card id="card_ator">
          <CardImg
            className="img_card_ator"
            src="https://placekitten.com/200/300"
            alt="foto do ator"
          ></CardImg>
          <div className="card_expand">
            <CardTitle>
              <h2>
                <MdPerson />
                {actor?.name}
              </h2>
            </CardTitle>
            <hr />
            <CardText>
              <FaPersonBooth />
              Gênero: {actor?.gender}
              <br />
              <FaTheaterMasks />
              Atuação: {actor?.genre}
              <br />
              <GiMoneyStack />
              Cachê: R${parseFloat(actor?.price).toLocaleString()}
              <br />
              <HiMail />
              Contato: {actor.user?.login}
              <br />
            </CardText>
            <CardBody id="card_body">
              <Link to="/edit/profile" className="btn-alterar_perfil">
                Alterar perfil
              </Link>
            </CardBody>
          </div>
        </Card>

        <div className="reservas-grid">
          {reserves.length === 0 ? (
            <CardText>Você não possui reservas</CardText>
          ) : (
            reserves.map((reserve, index) => (
              <Card id="card_reserva" key={reserve.id}>
                <div className="card_expand">
                  <CardBody id="card_body">
                    <header>
                      <span>
                        <FcCalendar />
                        Data reservada:{" "}
                        {new Date(reserve.reserveDate).toLocaleDateString()}
                      </span>
                      <hr />
                    </header>
                    <CardText>
                      <span>Produtor da Obra: {reserve.producer.name}</span>
                    </CardText>
                  </CardBody>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    );
  }
};
export default MeuPerfilAtor;
