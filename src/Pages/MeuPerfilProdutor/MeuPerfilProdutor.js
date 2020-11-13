import { useEffect, useState } from "react";
import api from "../../services/api";

const MeuPerfilProdutor = (props) => {
  const [user, setUser] = useState({});
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser({ ...currentUser });
    api
      .get(`/reserve/listByProducer/${currentUser.id}`)
      .then((res) => setReserves(res.data));
  }, []);

  return (
    <div className="profile_producer_container">
      <div className="profile-grid">
        <main>{user.name}</main>
        <div className="reservas">
          {reserves.map((reserve) => (
            <div className="reserva">
              <h1>Dia Reservado:{reserve.reserveDate}</h1>
              <h1>Nome do Ator: {reserve.actress.name}</h1>
              <h1>Cachê do ator: {reserve.actress.price}</h1>
              <h1>Sexo do ator: {reserve.actress.gender}</h1>
              <h1>Gênero de Atuação: {reserve.actress.genre}</h1>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeuPerfilProdutor;
