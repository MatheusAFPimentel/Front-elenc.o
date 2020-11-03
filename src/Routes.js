import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import MeuPerfilAtor from "./pages/MeuPerfilAtor/MeuPerfilAtor";
import MeuPerfilProdutor from "./pages/MeuPerfilProdutor/MeuPerfilProdutor";
import ProducerHome from "./pages/ProducerHome";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre/Sobre";
import PainelResultados from "./pages/PainelResultados/PainelResultados";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/actor/profile" exact component={MeuPerfilAtor} />
      <Route path="/producer/profile" exact component={MeuPerfilProdutor} />
      <Route path="/results" exact component={PainelResultados} />
      <Route path="/dashboard" exact component={ProducerHome} />
      <Route path="/registro" exact component={Cadastro} />
      <Route path="/sobre" exact component={Sobre} />
    </Switch>
  );
};

export default Routes;
