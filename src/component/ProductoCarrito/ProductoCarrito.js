import { useContext } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import CarritoContador from "../CarritoContador/CarritoContador";
import "./productocarrito.css";

const ProductoCarrito = () => {
  const { carrito, setCarrito } = useContext(coleccionContext);

  const eliminarProducto = (id) => {
    const traerId = carrito.find((elem) => elem.id === id)

    const nuevoCarrito = carrito.filter((elem) => {
      return elem !== traerId
    })

    setCarrito(nuevoCarrito)

  }

  return (
    <div className="carritocontenedor">
      {carrito.map((producto, index) => (
        <div className="producto" key={index}>
          <img className="imgprodcar" src={producto.imag}></img>
          <h3 className="titulo">{producto.titulo}</h3>
          <h3 className="precio">${producto.precio * producto.cantidad}</h3>
          <CarritoContador producto={producto} cantidad={producto.cantidad}/>
          <p className="eliminarproducto" onClick={() => eliminarProducto(producto.id)}>Eliminar Producto</p>
        </div>
      ))}
    </div>
  );
}

export default ProductoCarrito;

