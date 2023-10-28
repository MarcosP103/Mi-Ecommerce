import "./contador.css";
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  return (
    <div className="Counter">
      <div>
        <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
