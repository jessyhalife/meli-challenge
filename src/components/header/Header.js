import styles from "./header.module.scss";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const submit = (event) => {
    event.preventDefault();
    history.push(`/?search=${event.target.search.value}`);
  };
  return (
    <header className={styles.container}>
      <div>
        <Link to="/">
          <img className={styles.logoMD} src="/meli-logo.png" alt="logo ML" />
          <img className={styles.logoSM} src="/meli_sm.png" alt="logo ML" />
        </Link>
        <form onSubmit={submit}>
          <input
            name="search"
            type="search"
            placeholder="Buscar productos, marcas y más..."
          ></input>
          <button>
            <img src="/search.svg" alt="search"></img>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
