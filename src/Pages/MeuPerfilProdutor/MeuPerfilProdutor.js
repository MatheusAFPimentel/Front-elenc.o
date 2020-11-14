import { useEffect, useState } from "react";
import api from "../../services/api";

import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { HiMail } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import "./meuPerfilProdutor.css";

const MeuPerfilProdutor = (props) => {
  const [user, setUser] = useState({});
  const [reserves, setReserves] = useState([]);
  // const [stats, setStats] = useState({
  // mostReservedDate: {},
  // mostReservedActress: {},
  // });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser({ ...currentUser });
    // api
    //   .get(`/reserve/getMostReservedDatesByProducer/${currentUser.id}`)
    //   .then((res) => {
    //     setStats({ mostReservedDate: res.data });
    //   });
    // api
    //   .get(`/reserve/getMostReservedActressesByProducer/${currentUser.id}`)
    //   .then((res) => {
    //     setStats({ mostReservedActress: res.data });
    //   });
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
            </div>
          </div>
          <div className="reservas-grid-producer">
            {reserves.length === 0 ? (
              <Card>
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
                        <p>Dia Reservado:{reserve.reserveDate}</p>
                        <p>Nome do producer: {reserve.actress.name}</p>
                        <p>Cachê do producer: {reserve.actress.price}</p>
                        <p>Sexo do producer: {reserve.actress.gender}</p>
                        <p>Gênero de Atuação: {reserve.actress.genre}</p>
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
