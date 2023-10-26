import React, { useState } from "react";
import { coleccionContext } from "../../context/ColeccionContext";


export default function ContextProvider({ children }) {
    const [coleccion, setColeccion] = useState([]);

    return (
    <coleccionContext.Provider value={{ coleccion, setColeccion }}>
      {children}
    </coleccionContext.Provider>
  );
}
  