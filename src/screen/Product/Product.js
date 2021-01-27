import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./product.module.scss";
import { get } from "../../api/product.api";
import Single from "../../components/products/single";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      get(id)
        .then((data) => {
          setLoading(false);
          setProduct(data);
        })
        .catch((err) => {
          setProduct(null);
          setLoading(false);
        });
    }
  }, [id]);
  if (loading) return <h1>Cargando..</h1>;
  if (!id || !product)
    return <h1>No encontramos el producto que estabas buscando</h1>;
  return (
    <div className={styles.container}>
      <Single product={product}></Single>
    </div>
  );
};

export default Product;
