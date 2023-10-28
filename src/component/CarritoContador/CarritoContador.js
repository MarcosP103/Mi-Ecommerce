import React, { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import "./carritocontador.css"

const CarritoContador = ({ producto, cantidad }) => {
  const { carrito, setCarrito } = useContext(coleccionContext);

  const comprarProd = (producto) => {
    const productoreEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoreEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: productoreEnCarrito.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([
        ...carrito,
        {
          id: producto.id,
          titulo: producto.titulo,
          imag: producto.imag,
          precio: producto.precio,
          stock: producto.stock,
          cantidad: cantidad,
        },
      ]);
    }
  };

  const eliminar = () => {
    const productoreEnCarrito = carrito.find((item) => item.id === producto.id);

    productoreEnCarrito.cantidad !== 1 &&
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: productoreEnCarrito.cantidad - 1 }
            : item
        )
      );
  };

  return (
    <div>
      <p className="carritocontador" onClick={eliminar}>
        -
      </p>
      <p>{cantidad}</p>
      <p className="carritocontador" onClick={() => comprarProd(producto)}>
        +
      </p>
    </div>
  );
};

export default CarritoContador;
