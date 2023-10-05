import { Link } from "react-router-dom";
import "./stylecards.css";

export default function Cards({ id, titulo, imag, precio, desc }) {
  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <h3>{precio}</h3>
      <p>{desc}</p>
      <Link to={`/cards/${id}`} className="opcion">
        Ver Detalle
      </Link>
    </article>
  );
}
