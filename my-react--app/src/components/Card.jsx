import React from "react";
import lubricante_frio from "../imagenes/productos/lubricante_frio.png";
import "../style/index.css";

const Card = ({ products }) => {
  return (
    <>
      {products.map((product, id) => (
        <div key={id} className="productos">
          <div className="producto_1" id="Lubricantes">
            <div className="descripcion">
              <h2 className="titulos">{product.name}</h2>
              <div className="texto_descripcion">
                <p>
                  Desarrollo a base de agua, proporciona un tacto sedoso, la
                  formula efecto frio da una sensacion placentera desde el
                  segundo 1. Al contacto con la piel lubrica, hidrata y genera
                  una sensacion de bienestar
                  <br />
                  <br />
                </p>
                <ul>
                  <li>{product.categories}</li>
                </ul>
              </div>
              <span className="precio">AR${product.price}</span>
            </div>
            <div className="imagen_producto">
              <img src={lubricante_frio} alt="Lubricante frio" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
