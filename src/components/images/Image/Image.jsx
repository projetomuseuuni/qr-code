import styles from "./Image.module.css";

export function Image({
  src,
  alt,
  width = "auto",
  height = "auto",
  withDetails = true,
}) {
  const detailsClassName = withDetails ? styles["--details"] : "";

  return (
    <img
      className={`${styles.imageContainer} ${detailsClassName}`}
      src={src}
      alt={alt}
      style={{ "--width": width, "--height": height }}
    />
  );
}
