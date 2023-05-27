import styles from "./Image.module.css";

export function Image(props) {
  return (
    <img className={styles.imageContainer} src={props.src} alt={props.alt} />
  );
}
