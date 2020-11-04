import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import MeuPerfilAtor from "./pages/MeuPerfilAtor/MeuPerfilAtor";
import MeuPerfilProdutor from "./pages/MeuPerfilProdutor/MeuPerfilProdutor";
import ProducerHome from "./pages/ProducerHome";
import Cadastro from "./pages/cadastro";
import Sobre from "./pages/Sobre/Sobre";
import PainelResultados from "./pages/PainelResultados/PainelResultados";

import Navbar from "./Components/Navbar/Navbar";

const Routes = () => {
  switch (useLocation().pathname) {
    case "/":
      return (
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      );
    case "/registro":
      return (
        <Switch>
          <Route path="/registro" component={Cadastro} />
        </Switch>
      );
    default:
      return (
        <>
          <Navbar />
          <Switch>
            <Route path="/actor/profile" exact component={MeuPerfilAtor} />
            <Route
              path="/producer/profile"
              exact
              component={MeuPerfilProdutor}
            />
            <Route path="/results" component={PainelResultados} />
            <Route path="/dashboard" component={ProducerHome} />
            <Route path="/sobre" component={Sobre} />
          </Switch>
        </>
      );
  }
};

export default Routes;
