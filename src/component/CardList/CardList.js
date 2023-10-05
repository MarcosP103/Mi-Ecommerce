import "./stylecardlist.css";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { getProductos, getProductoByCat } from "../../data/data";
import { useParams } from "react-router-dom";

export default function CardList() {
  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    const asyncFunc = catId ? getProductoByCat : getProductos;

    asyncFunc(catId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [catId]);

  return (
    <div className="divmapeo">
    {productos && productos.length > 0 ? (
      productos.map((element, i) => (
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
      ))
    ) : (
      <p>No hay productos disponibles.</p>
    )}
  </div>
  );
}
