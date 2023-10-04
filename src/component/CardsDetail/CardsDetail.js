import ItemCount from "../Contador/Contador";

const CardsDetail = ({ id, titulo, imag, precio, desc, carac, stock}) => {
  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <p>{desc}</p>
      <p>{carac}</p>
      <h3>{precio}</h3>
      <ItemCount inicial={1} stock={stock} onAdd={(cantidad) => console.log("Cantidad agregada ", cantidad)} />
    </article>
  );
};

export default CardsDetail;
