import styles from "./tile.module.scss";
import { Link } from "react-router-dom";
const Tile = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.container}>
      <div>
        <img src={product.image} alt={product.title}></img>
        <div>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
          <span>${product.price}</span>
        </div>
      </div>
      <div>{product.location}</div>
    </div>
  );
};

export default Tile;
