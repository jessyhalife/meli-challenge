import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ paths }) => {
  if (!paths) return <></>;
  return <div className={styles.container}>{paths.map((p) => p.name).join(" > ")}</div>;
};

export default Breadcrumb;
