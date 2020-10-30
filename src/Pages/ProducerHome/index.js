import "./index.css";

const ProducerHome = (props) => {
  return (
    <div className="home_producer_container">
      <div className="home_producer_sidebar">
        <header>
          <h2>Buscar</h2>
        </header>
        <main>
          <form action="">
            <div className="form-group">
              <label htmlFor="">Quantos atores precisam</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="">Genero da obra (Separado por virgulas)</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="">Data de inicio</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label htmlFor="">Data de fim</label>
              <input type="date" />
            </div>
          </form>
        </main>
      </div>
      <div className="home_producer_background">
        <h1>Você não fez nenhuma busca ainda</h1>
      </div>
    </div>
  );
};

export default ProducerHome;
