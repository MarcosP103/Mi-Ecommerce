import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import "./stylecarrito.css";
import { Link } from "react-router-dom";


export default function CartWidget() {
  const eventoClick = (event) => {
    alert("Carrito");
  };

  const { coleccion, setColeccion }=useContext(coleccionContext)

  return (
    <div>
      <Link to='/cart'>
      <img
        src="../assets/carrito.png"
        className="imgcarrito"
        alt="carrito"
        onClick={eventoClick}
      />
      </Link>
      <span>{coleccion.length}</span>
    </div>
  );
}
