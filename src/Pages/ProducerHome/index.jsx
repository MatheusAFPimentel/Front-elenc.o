import "./index.css";
import { FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
//fake data api
import { getActors } from "../../assets/fakedata/api";
import CardAtores from "../../Components/CardsAtores/CardsAtores";
import api from "../../services/api";

const ProducerHome = (props) => {
  const [search, setSearch] = useState([]);
  const [priceFilter, setPriceFilter] = useState(false);
  const [relevanceFilter, setRelevanceFilter] = useState(false);
  const [genre, setGenre] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    getActors.then((data) => {
      setSearch(data);
    });
    api.get("/actress/list").then((data) => console.log(data.data));
    api.get("/producer/list").then((data) => console.log(data.data));
  }

  function toogleRelevance(event) {
    let sortedSearch;
    if (relevanceFilter) {
      sortedSearch = search.sort((x, y) => {
        if (x.genre.includes(...genre)) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      sortedSearch = search.sort((x, y) => {
        if (x.genre.includes(...genre)) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    setRelevanceFilter(!relevanceFilter);
    setSearch(sortedSearch);
  }

  function tooglePrice() {
    let sortedSearch;
    if (priceFilter) {
      sortedSearch = search.sort((x, y) => y.salary - x.salary);
    } else {
      sortedSearch = search.sort((x, y) => x.salary - y.salary);
    }
    setPriceFilter(!priceFilter);
    setSearch(sortedSearch);
  }

  function handleGenreChange(e) {
    const genreArray = e.target.value.split(",");
    const trimmedArray = genreArray.map((genre) => genre.trim());
    setGenre(trimmedArray);
  }

  return (
    <div className="home_producer_container">
      <div className="producer_searchbar">
        <h2 className="producer_titulo">Buscar elenco</h2>
        <form className="" onSubmit={handleSubmit} action="">
          <div className="form-group_select">
            <label htmlFor="">De quantos atores você precisa?</label>
            <select name="" id="select_producer">
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
            <label id="label_gender-producer" htmlFor="">
              Gênero da obra (separado por vírgulas)
            </label>
            <input
              id="input_producer"
              type="text"
              placeholder="Drama, Ação"
              onChange={handleGenreChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Data de início da filmagem</label>
            <input id="input_producer" type="date" />
          </div>

          <div className="form-submit">
            <button id="btn_producer-submit" type="submit">
              Buscar
              <FaSearch id="search_icon" />
            </button>
          </div>
        </form>
      </div>

      <div className="producer-filter_container">
        <div className="producer-filter_text">
          <h2 className="producer_titulo">Filtrar</h2>
          <div className="producer-filter_category">
            <p onClick={toogleRelevance}>
              Por relevância {relevanceFilter ? <FaArrowUp /> : <FaArrowDown />}
            </p>
            <p onClick={tooglePrice}>
              Por preço {priceFilter ? <FaArrowUp /> : <FaArrowDown />}
            </p>
          </div>
        </div>

        {search.length !== 0 ? (
          <div className="producer_results">
            <div className="card_list">
              {search.map((actor) => (
                <CardAtores key={actor.id} actor={actor} />
              ))}
            </div>
          </div>
        ) : (
          <div className="producer_results_empty">
            <h1>Você não fez nenhuma busca ainda</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProducerHome;
