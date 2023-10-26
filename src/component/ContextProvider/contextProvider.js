import React, { useState, useEffect } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import { db } from "../..";
import { collection, getDocs } from "firebase/firestore"

export default function ContextProvider({ children }) {
    const [coleccion, setColeccion] = useState([]);

    const llamadaFS = () => {
      const itemsCollection = collection(db, "productos")
      getDocs(itemsCollection).then((res) => {
          let items = res.docs.map((elm)=>({...elm.data()}))
          console.log(items)
      })
  }
    
    useEffect(()=>{
      llamadaFS()
    }, [])

  return (
    <coleccionContext.Provider value={{ coleccion, setColeccion }}>
      {children}
    </coleccionContext.Provider>
  );
}
