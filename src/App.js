import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

export default function app() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}
