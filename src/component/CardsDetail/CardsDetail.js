import React, { useContext, useEffect, useState } from "react";
import { coleccionContext } from "../../context/ColeccionContext";
import ItemCount from "../Contador/Contador";

const CardsDetail = ({ id, titulo, imag, precio, desc, carac, stock }) => {

  const [cantidadAdd, setCantidadAdd]=useState(0)

  const { addItem } = useContext(coleccionContext)

  const handleOnAdd=(cantidad)=>{
    setCantidadAdd(cantidad)

    const item={
      id, titulo, precio
    }

    addItem(item, cantidad)
  }
  
  const {coleccion, setColeccion}=useContext(coleccionContext)

  useEffect(()=>{
    console.log(coleccion)
  },[coleccion])

  return (
    <article className="divcards">
      <h2>{titulo}</h2>
      <img src={imag} alt={desc} />
      <p>{desc}</p>
      <p>{carac}</p>
      <h3>{precio}</h3>
      <ItemCount
        inicial={1}
        stock={stock}
        onAdd={(cantidadAdd) => console.log("Cantidad agregada ", cantidadAdd)}
        funcion={()=>setColeccion(prevState=>[...prevState, id])}
      />
    </article>
  );
};

export default CardsDetail;
