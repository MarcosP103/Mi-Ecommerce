import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";

const ProductoCarrito = () => {

  const { carrito } = useContext(coleccionContext)

  return (
    <div className="carritocontenedor">
      {carrito.map((carrito) => (
        <div className="producto" key={carrito.id}>
          <h3 className="titulo">{carrito.id}</h3>
          <h3 className="precio">${}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductoCarrito
