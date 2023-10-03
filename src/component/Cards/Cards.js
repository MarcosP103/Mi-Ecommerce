import "./stylecards.css";

export default function Cards({ titulo, imag, precio, desc, carac, cat }) {
  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <h3>{precio}</h3>
      <p>{desc}</p>
      <p>{carac}</p>
    </article>
  );
}
