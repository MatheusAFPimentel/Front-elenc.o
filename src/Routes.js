import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home/Home";
import MeuPerfilAtor from "./Pages/MeuPerfilAtor/MeuPerfilAtor";
import MeuPerfilProdutor from "./Pages/MeuPerfilProdutor/MeuPerfilProdutor";
import ProducerHome from "./Pages/ProducerHome";
import Cadastro from "./Pages/Cadastrar/Cadastro";
import Sobre from "./Pages/Sobre/Sobre";
import AlterarPerfil from "./Pages/AlterarPerfil/AlterarPefil";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const Routes = () => {
  switch (useLocation().pathname) {
    case "/":
      return (
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      );
    case "/cadastro":
      return (
        <Switch>
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      );
    default:
      return (
        <>
          <Navbar />
          <Switch>
            <Route path="/actor/profile" exact component={MeuPerfilAtor} />
            <Route path="/edit/profile" exact component={AlterarPerfil} />
            <Route
              path="/producer/profile"
              exact
              component={MeuPerfilProdutor}
            />
            <Route path="/busca" component={ProducerHome} />
            <Route path="/sobre" component={Sobre} />
          </Switch>
          <Footer />
        </>
      );
  }
};

export default Routes;
