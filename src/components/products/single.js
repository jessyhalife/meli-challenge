import styles from "./single.module.scss";
import Breadcrumb from "./breadcrumb";
const Single = ({ product }) => {
  return (
    <div className={styles.parent}>
      <Breadcrumb paths={product.path_from_root} />
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={product.pictures ? product.pictures[0].url : product.thumbnail}
            alt={product.title}
          />
          <div className={styles.details}>
            <div>
              {product.condition === "new" ? "Nuevo" : "Usado"}{" "}
              {product.sold_quantity > 0
                ? " - " + product.sold_quantity + " vendidos"
                : undefined}
            </div>
            <div>{product.title}</div>
            <div>${product.price}</div>
            <label>{product.free_shipping ? "Envío gratis" : undefined}</label>
            <button>Comprar ahora</button>
          </div>
        </div>
        <div className={styles.description}>
          <h1>Descripción</h1>
          <div>{product.plain_text}</div>
        </div>
      </div>
    </div>
  );
};

export default Single;
