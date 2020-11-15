import { useState } from "react";
import { Redirect } from "react-router-dom";
import CardAtores from "../../Components/CardsAtores/CardsAtores";

import api from "../../services/api";

import { FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";

import "./index.css";

const ProducerHome = (props) => {
  const [search, setSearch] = useState([]);
  const [priceFilter, setPriceFilter] = useState(false);
  const [relevanceFilter, setRelevanceFilter] = useState(false);
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  function handleSubmit(event) {
    setSearch([]);
    event.preventDefault();
    api
      .get(
        `/producer/getCast?quantity=${qty}&budget=${price}&genre=${genre}&date=${date}`
      )
      .then((res) => {
        setSearch(res.data);
      });
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
      sortedSearch = search.sort((x, y) => y.price - x.price);
    } else {
      sortedSearch = search.sort((x, y) => x.price - y.price);
    }
    setPriceFilter(!priceFilter);
    setSearch(sortedSearch);
  }

  function handleGenreChange(e) {
    setGenre(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(parseFloat(e.target.value));
  }

  function handleQtySelect(e) {
    setQty(parseInt(e.target.value));
  }

  function handleReserve(e, id) {
    api
      .post(`/reserve/save/${id}`, {
        reserveDate: date,
        producer: {
          id: JSON.parse(localStorage.getItem("currentUser")).id,
        },
      })
      .then((res) => {
        alert("Reservado!");
        e.target.disabled = true;
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleDateSelect(e) {
    setDate(e.target.value);
  }
  if (
    !!JSON.parse(localStorage.getItem("currentUser")) &&
    JSON.parse(localStorage.getItem("currentUser")).role === "actor"
  ) {
    return <Redirect to="" />;
  } else {
    return (
      <div className="home_producer_container">
        <div className="producer_searchbar">
          <h2 className="producer_titulo">Buscar elenco</h2>
          <form className="" onSubmit={handleSubmit} action="">
            <div className="form-group_select">
              <label htmlFor="">De quantos atores você precisa?</label>
              <select
                required
                name=""
                onChange={handleQtySelect}
                value={qty}
                id="select_producer"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Orçamento disponível</label>
              <input
                id="input_producer"
                value={price}
                type="number"
                required
                onChange={handlePriceChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Data de início da filmagem</label>
              <input
                id="input_producer"
                value={date}
                type="date"
                required
                onChange={handleDateSelect}
                min={new Date().toISOString().split("T")[0]}
              />
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
                Por relevância{" "}
                {relevanceFilter ? <FaArrowUp /> : <FaArrowDown />}
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
                  <CardAtores
                    key={actor.id}
                    actor={actor}
                    handleReserve={handleReserve}
                  />
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
  }
};

export default ProducerHome;
