import { Image } from "../../Image/Image"
import styles from "./cardDisplay.css";

export const CardDisplay = ({
    imgWidth: width,
    imgHeight: height,
    img,
    alt,
    title,
    description
  }) => {
    return (
    <div className={styles.containerDisplay}>
          <Image className={styles.containerImg}
            alt={alt}
            src={img}
            width={width}
            height={height}
          />
        
        <div className={styles.containerText}>
          <h1 className={styles.cardTitle}>{title}</h1>
          <h2 className={styles.cardDescription}>{description}</h2>
        </div>
    </div>
    );
  }
  