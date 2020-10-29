import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import MeuPerfilAtor from "./Pages/MeuPerfilAtor/MeuPerfilAtor";
import MeuPerfilProdutor from "./Pages/MeuPerfilProdutor/MeuPerfilProdutor";
import ProducerHome from "./Pages/ProducerHome";
import Signup from "./Pages/Signup";
import Sobre from "./pages/Sobre/Sobre";
import PainelResultados from "./Pages/PainelResultados/PainelResultados";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/" exact component={MeuPerfilAtor} />
      <Route path="/" exact component={MeuPerfilProdutor} />
      <Route path="/" exact component={PainelResultados} />
      <Route path="/" exact component={ProducerHome} />
      <Route path="/" exact component={Signup} />
      <Route path="/" exact component={Sobre} />
    </Switch>
  );
};

export default Routes;
