import React from "react";
import { Link } from "react-router-dom";
import logo_blanco from "../imagenes/logo_blanco.png";
import "../style/index.css";

const Landing = () => {
  return (
    <>
      <h1 className="title">a solas</h1>
      <h3 className="slogan">Para ingresar al sitio debes ser mayor de edad</h3>
      <h3>Si eres mayor haz click en el logo</h3>
      <Link to="/home">
        <img src={logo_blanco} alt="Logo" className="logo" />
      </Link>
    </>
  );
};

export default Landing;
