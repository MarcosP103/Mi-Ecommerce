import React from "react";
import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import ItemCount from "../Contador/Contador";

const CardsDetail = ({ id, titulo, imag, precio, desc, carac, stock }) => {

  const { carrito, setCarrito } = useContext(coleccionContext)

  const comprarProd = (id) => {
    console.log(id)
    setCarrito([...carrito, id])
  }

  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <p>{desc}</p>
      <p>{carac}</p>
      <h3>{precio}</h3>
      <p>Stock {stock}</p>
      <ItemCount/>
    </article>
  );
};

export default CardsDetail;