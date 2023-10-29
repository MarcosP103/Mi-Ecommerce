
import { NavLink, Link } from 'react-router-dom';
import TotalAgregados from "../TotalAgregados/TotalAgregados";
import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import "./stylenav.css";


export default function NavBar () {
    const { carrito } = useContext(coleccionContext);
    return(
        <nav className='nav'>
            <Link to='/'>
                <h3 className='hsubrayado'>EMusic</h3>
            </Link>
            <div className='divcat'>
                <NavLink to={`/cat/cajasacusticas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cajas Acusticas</NavLink>
                <NavLink to={`/cat/instrumentos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Instrumentos</NavLink>
                <NavLink to={`/cat/microfonos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Microfonos</NavLink>
                <NavLink to={`/cat/consolas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink>
                <NavLink to={`/cat/accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <Link to={"/cart"}>
                <img src="../assets/carrito.png" className="imgcarrito" alt="carrito" />
                {carrito.length > 0 ? <TotalAgregados/> : null}
            </Link>
        </nav>
    )
}