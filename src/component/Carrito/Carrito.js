import { useContext } from "react"
import { coleccionContext } from "../../context/ColeccionContext"

const Carrito = () => {
    const { carrito, limpiarCarrito, cantidadTotal, total}=useContext(coleccionContext)

    if(cantidadTotal===0) {
        return(
            <div>
                <h2>No hay productos en el carrito</h2>
            </div>
        )
    }

    return(
        <div>
            {carrito.map(p => <itemCarrito key={p.id}{...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> limpiarCarrito()}>Limpiar Carrito</button>
        </div>
    )

}



export default Carrito;