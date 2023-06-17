import { Image } from "../../Image/Image"
import styles from "./card-sugestao.module.css";

export const CardSugestao = ({
  imgWidth: width,
  imgHeight: height,
  title,
  description,
  img,
  href,
  alt
}) => {
  return (
    <a href={href} className={styles.container}>
      <div className={styles.containerImg}>
        <Image
          alt={alt}
          src={img}
          width={width}
          height={height}
        />
      </div>
      <div className={styles.containerText}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <h2 className={styles.cardDescription}>{description}</h2>
      </div>
    </a>
  );
}
