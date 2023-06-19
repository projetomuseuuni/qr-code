import React from "react";

import styles from "./CardComImagem.module.css";

export function CardComImagem(props) {
  return (
    <section className={styles.cardComImagem}>
      <img className={styles.cardImagem} src={props.cardImagem}></img>

      <div className={styles.cardConteudo}>
        <strong className={styles.cardTitulo}>{props.cardTitulo} </strong>

        <span className={styles.cardDescricao}>{props.cardDescricao}</span>
      </div>
    </section>
  );
}
