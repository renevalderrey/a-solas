import React from "react";
import {
    sinSubcategory,
    subLubricantes,
    subDisfraces,
    subLenceria,
  } from "../data/functions";

const Filter = ({ filterCategory, filterSubcategory }) => {
  // función que recibe el evento de los "select"
  const handleChange = (e) => {
    filterSubcategory(e.target.value);
  };

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
            <li>
                  <h1 className="title">a solas</h1>
                  <h2 className="subtitle">Sexshop</h2>
                </li>
              <li>
                {sinSubcategory.map((category) => (
                  <>
                    <a
                      href="#Lubricantes"
                      onClick={() => filterCategory(category)}
                    >
                      {category}
                    </a>
                    <br />
                  </>
                ))}
                <select onChange={handleChange}>
                  <option hidden>Lubricantes</option>
                  {subLubricantes.map((subcategory) => (
                    <>
                      <option value={subcategory}>{subcategory}</option>
                    </>
                  ))}
                </select>
                <br />
                <select onChange={handleChange}>
                  <option hidden>Disfraces</option>
                  {subDisfraces.map((subcategory) => (
                    <>
                      <option value={subcategory}>{subcategory}</option>
                    </>
                  ))}
                </select>
                <br />
                <select onChange={handleChange}>
                  <option hidden>Lenceria</option>
                  {subLenceria.map((subcategory) => (
                    <>
                      <option value={subcategory}>{subcategory}</option>
                    </>
                  ))}
                </select>
              </li>
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
  );
};

export default Filter;
