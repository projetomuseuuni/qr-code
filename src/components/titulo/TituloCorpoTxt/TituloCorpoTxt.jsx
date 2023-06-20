import React from "react";
import styles from "./TituloCorpoTxt.module.css";

export const TituloCorpoTxt = () => {
  return (
    <div className={styles.content}>
      <h2 className={`${styles.p1} p1`}>Primeiro Subtitulo</h2>
      <p className={`${styles.subtitleParagraph1} subtitle-paragraph1`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero
        odio, molestias voluptates totam ipsam asperiores, architecto repellat
        hic accusamus corporis nulla eligendi adipisci? Temporibus quae
        doloremque architecto non molestiae.
      </p>

      <br />

      <h2 className={`${styles.p2} p2`}>Segundo Subtitulo</h2>
      <p className={`${styles.subtitleParagraph2} subtitle-paragraph2`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero
        odio, molestias voluptates totam ipsam asperiores, architecto repellat
        hic accusamus corporis nulla eligendi adipisci? Temporibus quae
        doloremque architecto non molestiae.
      </p>

      <br />

      <h2 className={`${styles.p3} p3`}>Terceiro Subtitulo</h2>
      <p className={`${styles.subtitleParagraph3} subtitle-paragraph3`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero
        odio, molestias voluptates totam ipsam asperiores, architecto repellat
        hic accusamus corporis nulla eligendi adipisci? Temporibus quae
        doloremque architecto non molestiae.
      </p>
    </div>
  );
};
