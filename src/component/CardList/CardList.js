import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./stylecardlist.css";
import { getProductos } from "../../data/data";

export default function CardList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="divmapeo">
      {productos.map((element, i) => {
        return (
          <Cards
            titulo={element.titulo}
            imag={element.imag}
            marca={element.marca}
            precio={element.precio}
            desc={element.desc}
            carac={element.carac}
            cat={element.cat}
            key={i}
          />
        );
      })}
    </div>
  );
}
