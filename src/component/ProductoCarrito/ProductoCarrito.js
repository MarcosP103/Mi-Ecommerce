import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";

const ProductoCarrito = () => {

  const { carrito } = useContext(coleccionContext)

  return (
    <div className="carritocontenedor">
      {carrito.map((producto) => (
        <div className="producto" key={producto.id}>
          <h3 className="titulo">{producto.titulo}</h3>
          <h3 className="precio">${producto.precio}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductoCarrito
