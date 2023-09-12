import carrito from './assets/carrito.png'
import "./stylecarrito.css"

export default function CartWidget (){
    return (
        <div>
            <img src={carrito} className="imgcarrito" alt="carrito"/>
            0
        </div>
    );
}