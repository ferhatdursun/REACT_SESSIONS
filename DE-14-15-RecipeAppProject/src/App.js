import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div>
      <Home/>
    </div>
  );
};

export default App;
