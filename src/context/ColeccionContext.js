import { createContext, useState } from 'react'

export const coleccionContext=createContext({cart: []})

export const CartProvider=({children})=>{
    const [carrito, setCarrito]=useState([])

    console.log(carrito)

    const addItem=(producto, cantidad)=>{
        if(!inCarrito(producto.id)){
            setCarrito(prev=>[...prev, {...producto, cantidad}])
        }else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem=(productoId)=>{
        const carritoActulizado=carrito.filter(prod=>prod.id !== productoId)
        setCarrito(carritoActulizado)
    }

    const clearCarrito=()=>{
        setCarrito([])
    }

    const inCarrito=(productoId)=>{
        return carrito.some(prod=>prod.id === productoId)
    }

    return(
        <coleccionContext.Provider value={{carrito, addItem, removeItem, clearCarrito}}>
            {children}
        </coleccionContext.Provider>
    )

}

