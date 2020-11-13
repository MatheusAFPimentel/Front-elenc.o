import { useEffect, useState } from "react";
import api from "../../services/api";

const MeuPerfilProdutor = (props) => {
  const [user, setUser] = useState({});
  const [reserves, setReserves] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser({ ...currentUser });
    api
      .get(`/reserve/listByProducer/${currentUser.id}`)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="profile_producer_container">
      <div className="profile-grid">
        <main>{user.name}</main>
      </div>
    </div>
  );
};

export default MeuPerfilProdutor;
