import ProductoCarrito from "../ProductoCarrito/ProductoCarrito";
import CarritoTotal from "../CarritoTotal/CarritoTotal";
import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";

const ContenedorCarrito = () => {

    const { carrito } = useContext(coleccionContext)

  return carrito.length > 0 ? (
    <>
      <ProductoCarrito />
      <CarritoTotal />
    </>
  ): (
    <h2 className="carritovacio">El carrito está vacío </h2>
  );
};

export default ContenedorCarrito;
