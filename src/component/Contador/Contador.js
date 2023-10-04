import "./contador.css";
import { useState } from 'react';

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const increment = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const decrement = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className='contador'>
            <div className='controles'>
                <button className='boton' onClick={decrement}>-</button>
                <h4 className='numero'>{cantidad}</h4>
                <button className='boton' onClick={increment}>+</button>
            </div>
            <div className='agregarcarrito'> 
                <button className='botoncarrito' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
} 

export default ItemCount;