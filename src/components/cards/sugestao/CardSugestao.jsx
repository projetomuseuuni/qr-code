import { Image } from "../../images/Image/Image";
import styles from "./card-sugestao.module.css";

export const CardSugestao = ({ title, description, img, href, alt }) => {
  return (
    <a href={href} className={styles.container}>
      <div className={styles.containerImg}>
        <Image alt={alt} src={img} width="6rem" height="8rem" />
      </div>
      <div className={styles.containerText}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <h2 className={styles.cardDescription}>{description}</h2>
      </div>
    </a>
  );
};
