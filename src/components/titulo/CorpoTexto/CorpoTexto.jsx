import styles from "./CorpoTexto.module.css";

export function CorpoTexto({ children }) {
  return <p className={styles.corpoTexto}>{children}</p>;
}
