import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Details from "../src/pages/details/Details";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          {/* ilk acilista home sayfasinin gelmesi icin path icerisinde /home yazdik */}
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
