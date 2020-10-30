<<<<<<< HEAD
import React from 'react';
import Cadastro from './pages/cadastro'


export default function app() {
  return (
    <>
 
  <Cadastro />
  </>
  
  )
  
=======
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import "../src/Reset.css";
import "./App.css";

export default function app() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
>>>>>>> 5c14ca3c6884a156f0ff6fd965c3f771da436936
}
