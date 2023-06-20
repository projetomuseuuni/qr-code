import styles from "./Titulo.module.css";

export function Titulo({ level = "h2", children }) {
  const HeadingTag = level ? "h2" : `h${level}`;

  return <HeadingTag className={styles.heading}>{children}</HeadingTag>;
}
