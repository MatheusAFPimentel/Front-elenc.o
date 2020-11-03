import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import "../src/Reset.css";
import "./App.css";

export default function app() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
