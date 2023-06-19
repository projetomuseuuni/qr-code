import styles from "./Image.module.css";

export function Image({ src, alt, width = "auto", height = "auto" }) {
  return (
    <img
      className={styles.imageContainer}
      src={src}
      alt={alt}
      style={{ "--width": width, "--height": height }}
    />
  );
}
