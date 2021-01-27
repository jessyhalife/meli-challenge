import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchFor } from "../../api/product.api";
import styles from "./list.module.scss";
import Tile from "../../components/products/Tile";

const List = () => {
  const [products, setProducts] = useState([]);
  const { search } = useLocation();
  const query = search.split("=")[1] || null;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    if (query) {
      setLoading(true);
      searchFor(query)
        .then((prod) => {
          setProducts(prod);
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }
  }, [query]);
  if (!query) return <></>;
  if (products.length ===0 && !loading) return <h2>No se encontraron resultados</h2>
  if (loading) return <h2>Buscando..</h2>
  return (
    <div className={styles.container}>
      {products.map((p) => (
        <Tile key={p.id} product={p}></Tile>
      ))}
    </div>
  );
};

export default List;
