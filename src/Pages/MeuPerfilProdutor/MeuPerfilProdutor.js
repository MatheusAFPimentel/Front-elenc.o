import { useEffect, useState } from "react";
import api from "../../services/api";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { HiMail } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import "./meuPerfilProdutor.css";

const MeuPerfilProdutor = (props) => {
  const [user, setUser] = useState({});
  const [reserves, setReserves] = useState([]);
  const [mostReservedDate, setMostReservedDate] = useState("");
  const [mostReservedActor, setMostReservedActor] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser({ ...currentUser });
    api
      .get(`/reserve/getMostReservedDatesByProducer/${currentUser.id}`)
      .then((res) => {
        const mostArray = Object.entries(res.data);
        const mostReserved = mostArray.sort((x, y) => {
          return x[1] >= y[1];
        })[0][0];
        setMostReservedDate(mostReserved);
      });
    api
      .get(`/reserve/getMostReservedActressesByProducer/${currentUser.id}`)
      .then((res) => {
        const mostArray = Object.entries(res.data);
        const mostReserved = mostArray.sort((x, y) => {
          return x[1] >= y[1];
        })[0][0];
        setMostReservedActor(mostReserved);
      });
    api
      .get(`/reserve/listByProducer/${currentUser.id}`)
      .then((res) => setReserves(res.data));
  }, []);

  return (
    <div className="perfil_producer_container">
      <div id="producer-pageGrid">
        <Card id="card_producer">
          <div className="card_expand">
            <CardTitle>
              <h2>
                <MdPerson />
                {user?.name}
              </h2>
            </CardTitle>
            <hr />
            <CardText>
              <HiMail />
              Contato: {user.user?.login.toLowerCase()}
              <br />
            </CardText>
            <CardBody id="card_body">
              <Link to="/edit/profile" className="btn-alterar_perfil">
                Alterar perfil
              </Link>
            </CardBody>
          </div>
        </Card>

        <div className="producer-stat-res-grid">
          <div className="producer-stats">
            <div className="stat">
              <h2>Suas Reservas:</h2>
              <div className="stats">
                <p>Ator Mais Reservado: {mostReservedActor}</p>
                <p>
                  Data Mais Reservada:{" "}
                  {new Date(mostReservedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="reservas-grid-producer">
            {reserves.length === 0 ? (
              <Card id="producer-empty-reserves">
                <CardText>Você não possui reservas</CardText>
              </Card>
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
                        <p>Ator reservado: {reserve.actress.name}</p>
                        <p>
                          Cachê do ator: R$
                          {parseFloat(reserve.actress.price).toLocaleString()}
                        </p>
                        <p>Sexo do ator: {reserve.actress.gender}</p>
                        <p>Gênero da Atuação: {reserve.actress.genre}</p>
                        <br />
                      </CardText>
                    </CardBody>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeuPerfilProdutor;
