import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./stylenav.css"
import { NavLink } from 'react-bootstrap'

export default function NavBar () {
    return(
        <nav className='nav'>
            <Link to='/'>
                <h3>EMusic</h3>
            </Link>
            <div className='divcat'>
                <NavLink to={`/cat/cajasacusticas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cajas Acusticas</NavLink>
                <NavLink to={`/cat/instrumentos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Instrumentos</NavLink>
                <NavLink to={`/cat/Microfonos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Microfonos</NavLink>
                <NavLink to={`/cat/consolas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink>
                <NavLink to={`/cat/Accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}