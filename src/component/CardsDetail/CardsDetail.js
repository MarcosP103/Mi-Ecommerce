import React from "react";
import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";

const CardsDetail = ({ id, titulo, imag, precio, desc, carac, stock }) => {

  const { carrito, setCarrito } = useContext(coleccionContext)

  const comprarProd = (CardsDetail, id) => {
    console.log(CardsDetail, id)
    setCarrito([...carrito, CardsDetail])
  }

  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <p>{desc}</p>
      <p>{carac}</p>
      <h3>{precio}</h3>
      <p>Stock {stock}</p>
      <button onClick={()=> comprarProd(CardsDetail)}>Comprar</button>
    </article>
  );
};

export default CardsDetail;