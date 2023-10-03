import "./stylecarrito.css";

export default function CartWidget() {
  const eventoClick = (event) => {
    alert("Carrito");
  };

  return (
    <div>
      <img
        src="../assets/carrito.png"
        className="imgcarrito"
        alt="carrito"
        onClick={eventoClick}
      />
      <span>0</span>
    </div>
  );
}
