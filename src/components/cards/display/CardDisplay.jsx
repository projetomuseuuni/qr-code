import { Image } from "../../Image/Image"
import styles from "./cardDisplay.module.css";

export const CardDisplay = ({
    img,
    alt,
    title,
    children
  }) => {
    return (
    <div className={styles.containerDisplay}>
        <div className={styles.containerText}>
          <h1 className={styles.cardTitle}>{title}</h1>
          <span className={styles.cardDescription}>{children}</span>
        </div>
        <img className={styles.containerImg}
          alt={alt}
          src={img}
        />
        
    </div>
    );
  }
  