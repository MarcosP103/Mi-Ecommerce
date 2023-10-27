import { createContext, useState } from 'react'

export const coleccionContext=createContext()

const DataProvider=({children})=>{

    const [carrito, setCarrito]=useState([])

    return(
        <coleccionContext.Provider value={{carrito, setCarrito}}>
            {children}
        </coleccionContext.Provider>
    )
}

export default DataProvider;
