import React from "react";
import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import ItemCount from "../Contador/Contador";
import "./cardsDetail.css";

const CardsDetail = ({
  id,
  titulo,
  imag,
  precio,
  desc,
  carac,
  stock,
  cantidad,
}) => {
  const { carrito, setCarrito } = useContext(coleccionContext);

  const comprarProd = (cant) => {
    const productoreEnCarrito = carrito.find((item) => item.id === id);

    if (productoreEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: productoreEnCarrito.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { id, titulo, imag, precio, stock, cantidad }]);
    }
  };

  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <p>{desc}</p>
      <p>{carac}</p>
      <h3>${precio}</h3>
      <p>Stock {stock}</p>
      <ItemCount intial={1} stock={stock} onAdd={comprarProd} />
    </article>
  );
};

export default CardsDetail;
