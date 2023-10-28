import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";

function CarritoTotal() {
  const { carrito } = useContext(coleccionContext);

  const total = carrito.reduce((sum, elem) => sum + elem.precio * elem.cantidad, 0);

  return <div className="totalsuma">
    <h3>Total: ${total}</h3>

  </div>;
}

export default CarritoTotal;
