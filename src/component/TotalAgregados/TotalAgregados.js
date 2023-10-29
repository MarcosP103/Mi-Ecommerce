import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import "./totalagregados.css"

function TotalAgregados() {
  const { carrito } = useContext(coleccionContext);

  const totalAgregados = carrito.reduce((sum, elem) => sum + elem.cantidad, 0);

  return (
    <span className="numerocarrito">
        {totalAgregados}
    </span>
  )
}

export default TotalAgregados
