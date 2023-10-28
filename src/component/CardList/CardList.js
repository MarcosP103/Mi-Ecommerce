import "./stylecardlist.css";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { useParams } from "react-router-dom";
import { db } from "../..";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function CardList() {
  const [productos, setProductos] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    const llamadaFSFil = async () => {
      const allProducts = [];
      const todasLasCategorias = [
        "cajasacusticas",
        "instrumentos",
        "microfonos",
        "consolas",
        "accesorios"
      ];

      for (const categoria of todasLasCategorias) {
        const categoryCollection = collection(db, categoria);

        // Verifica si la categoría es nula o igual a catId antes de cargar los productos
        if (!catId || categoria === catId) {
          try {
            const res = await getDocs(categoryCollection);
            const items = res.docs.map((elem) => ({ ...elem.data() }));
            allProducts.push(...items);
          } catch (error) {
            console.error(error);
          }
        }
      }

      setProductos(allProducts);
    };

    llamadaFSFil();
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
            id={element.id}
          />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
}





