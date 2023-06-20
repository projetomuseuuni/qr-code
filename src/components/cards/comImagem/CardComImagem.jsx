import React from "react";

import styles from "./CardComImagem.module.css";

export function CardComImagem(props) {
  return (
    <section className={styles.cardComImagem}>
      <img className={styles.cardImagem} src={props.imagem}></img>

      <div className={styles.cardConteudo}>
        <strong className={styles.cardTitulo}>{props.titulo} </strong>

        <p className={styles.cardDescricao}>{props.children}</p>
      </div>
    </section>
  );
}
