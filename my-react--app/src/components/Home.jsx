import React, { useState } from "react";
import personas from "../imagenes/personas.png";
import Header from "./Header";
import Card from "./Card";
import data from "../data/data";
import "../style/index.css";

const Home = () => {
  // se crea un nuevo array de las categorías de los productos
  const allCategories = [
    "Todas",
    ...new Set(data.map((product) => product.category)),
  ];

  // se crea un estado con todos los productos y que sea dinámico
  const [products, setProducts] = useState(data);

  // función que filtra los productos dependiendo su categoría
  const filterCategory = (category) => {
    if (category === "Todas") {
      setProducts(data);
      return;
    }

    const filterProduct = data.filter(
      (product) => product.category === category
    );
    setProducts(filterProduct);
  };

  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger"></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <h1>A Solas - Sex Shop</h1>
                </li>
                {allCategories.map((category, id) => (
                  <li key={id}>
                    <a
                      href="#Lubricantes"
                      onClick={() => filterCategory(category)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main>
        <div className="back-2parte">
          <img src={personas} alt="" />
          <p>Disfruta y vive!</p>
        </div>
        <Card products={products} />
      </main>
    </>
  );
};

export default Home;
