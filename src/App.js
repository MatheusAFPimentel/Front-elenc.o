
import React from 'react';
import Home from '../src/Pages/Home/Home';
import '../src/Reset.css';
import '../src/App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

export default function app() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  )
}

