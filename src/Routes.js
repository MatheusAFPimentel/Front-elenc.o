import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import MeuPerfilAtor from "./Pages/MeuPerfilAtor/MeuPerfilAtor";
import MeuPerfilProdutor from "./Pages/MeuPerfilProdutor/MeuPerfilProdutor";
import ProducerHome from "./Pages/ProducerHome";
import Signup from "./Pages/Signup/Signup";
import Sobre from "./Pages/Sobre/Sobre";
import PainelResultados from "./Pages/PainelResultados/PainelResultados";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/actor/profile" exact component={MeuPerfilAtor} />
      <Route path="/producer/profile" exact component={MeuPerfilProdutor} />
      <Route path="/results" exact component={PainelResultados} />
      <Route path="/dashboard" exact component={ProducerHome} />
      <Route path="/registro" exact component={Signup} />
      <Route path="/sobre" exact component={Sobre} />
    </Switch>
  );
};

export default Routes;