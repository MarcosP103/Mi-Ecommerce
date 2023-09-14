import carrito from './assets/carrito.png'
import "./stylecarrito.css"

export default function CartWidget (){

    const eventoClick = event => {        
        alert('Carrito')
    };

    return (
        <div>
            <img src={carrito} className="imgcarrito" alt="carrito" onClick={eventoClick}/>
            0
        </div>
    );
}
