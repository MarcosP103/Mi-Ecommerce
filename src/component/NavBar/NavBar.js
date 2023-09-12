import CartWidget from '../CartWidget/CartWidget'
import "./stylenav.css"

export default function NavBar () {
    return(
        <nav className='nav'>
            <h3>EMusic</h3>
            <div className='divcat'>
                <button>Cajas Acusticas</button>
                <button>Instrumentos</button>
                <button>Microfonos</button>
                <button>Consolas</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}