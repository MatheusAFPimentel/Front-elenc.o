import "./index.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
//fake data api
import { getActors } from "../../assets/fakedata/api";
import CardAtores from "../../Components/CardsAtores/CardsAtores";

const ProducerHome = (props) => {
  const [search, setSearch] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    getActors.then((data) => {
      setSearch(data);
    });
  }

  return (
    <div className="home_producer_container">
      <div className="home_producer_sidebar">
        <header>
          <h2>Buscar</h2>
        </header>
        <main>
          <form onSubmit={handleSubmit} action="">
            <div className="form-group">
              <label htmlFor="">De quantos atores você precisa?</label>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="">Genero da obra (separado por vírgulas)</label>
              <input type="text" placeholder="Drama, Ação" />
            </div>

            <div className="form-group">
              <label htmlFor="">Data de início da filmagem</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label htmlFor="">Data de fim da filmagem</label>
              <input type="date" />
            </div>

            <div className="form-submit">
              <button type="submit">
                Buscar
                <FaSearch />
              </button>
            </div>
          </form>
        </main>
        <header>
          <h2>Reservas</h2>
        </header>
        <main>
          <p>Você ainda não fez nenhuma reserva</p>
        </main>
      </div>
      <div className="home_producer_background">
        {search.length !== 0 ? (
          search.map((actor) => <CardAtores key={actor.id} actor={actor} />)
        ) : (
          <h1>Você não fez nenhuma busca ainda</h1>
        )}
      </div>
    </div>
  );
};

export default ProducerHome;
