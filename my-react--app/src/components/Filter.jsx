import React, { useState } from "react";
import {
  sinSubcategory,
  subLubricantes,
  subDisfraces,
  subLenceria,
} from "../data/functions";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../style/index.css";

const Filter = ({ filterCategory, filterSubcategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // // función que recibe el evento de los "select"
  // const handleChange = (e) => {
  //   filterSubcategory(e.target.value);
  // };

  return (
    <>
      {/* Botón que dice filtro */}
      <Button variant="primary" onClick={handleShow}>
        Filtro
      </Button>

      {/* Desplegable lateral */}
      <Offcanvas restoreFocus={false} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* Título del desplegable */}
          <Offcanvas.Title>Categorías</Offcanvas.Title>
        </Offcanvas.Header>

        {/* Cuerpo del desplegable */}
        <Offcanvas.Body>
          {sinSubcategory.map((category) => (
            <>
              {/* Todos los botones de categorías menos los que tiene subcategorías */}
              <Button
                href="#Lubricantes"
                onClick={() => {
                  filterCategory(category);
                  handleClose();
                }}
              >
                {category}
              </Button>
              <br />
            </>
          ))}

          {/* Botón con subcategorías de Lenceria */}
          <div className="mb-2">
            {["end"].map((direction) => (
              <DropdownButton
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title="Lenceria"
                href="#Lubricantes"
              >
                {subLenceria.map((subcategory) => (
                  <Dropdown.Item
                    href="#Lubricantes"
                    onClick={() => {
                      filterSubcategory(subcategory);
                      handleClose();
                    }}
                  >
                    {subcategory}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            ))}
          </div>

          {/* Botón con subcategorías de Disfraces */}
          <div className="mb-2">
            {["end"].map((direction) => (
              <DropdownButton
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title="Disfraces"
                href="#Lubricantes"
              >
                {subDisfraces.map((subcategory) => (
                  <Dropdown.Item
                    href="#Lubricantes"
                    onClick={() => {
                      filterSubcategory(subcategory);
                      handleClose();
                    }}
                  >
                    {subcategory}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            ))}
          </div>

          {/* Botón con subcategorías de Lubricantes */}
          <div className="mb-2">
            {["end"].map((direction) => (
              <DropdownButton
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title="Lubricantes"
                href="#Lubricantes"
              >
                {subLubricantes.map((subcategory) => (
                  <Dropdown.Item
                    href="#Lubricantes"
                    onClick={() => {
                      filterSubcategory(subcategory);
                      handleClose();
                    }}
                  >
                    {subcategory}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>

    // Código del menú hamburger ⬇️

    // <div className="menu-wrap">
    //   <input type="checkbox" className="toggler" />
    //   <div className="hamburger"><div></div></div>
    //   <div className="menu">
    //     <div>
    //       <div>
    //         <ul>
    //         <li>
    //               <h1 className="title">a solas</h1>
    //               <h2 className="subtitle">Sexshop</h2>
    //             </li>
    //           <li>
    //             {sinSubcategory.map((category) => (
    //               <>
    //                 <a
    //                   href="#Lubricantes"
    //                   onClick={() => filterCategory(category)}
    //                 >
    //                   {category}
    //                 </a>
    //                 <br />
    //               </>
    //             ))}
    //             <select onChange={handleChange}>
    //               <option hidden>Lubricantes</option>
    //               {subLubricantes.map((subcategory) => (
    //                 <>
    //                   <option value={subcategory}>{subcategory}</option>
    //                 </>
    //               ))}
    //             </select>
    //             <br />
    //             <select onChange={handleChange}>
    //               <option hidden>Disfraces</option>
    //               {subDisfraces.map((subcategory) => (
    //                 <>
    //                   <option value={subcategory}>{subcategory}</option>
    //                 </>
    //               ))}
    //             </select>
    //             <br />
    //             <select onChange={handleChange}>
    //               <option hidden>Lenceria</option>
    //               {subLenceria.map((subcategory) => (
    //                 <>
    //                   <option value={subcategory}>{subcategory}</option>
    //                 </>
    //               ))}
    //             </select>
    //           </li>
    //           <li>
    //             <a href="#">About</a>
    //           </li>
    //           <li>
    //             <a href="#">Services</a>
    //           </li>
    //           <li>
    //             <a href="#">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Filter;
