import styles from './cardComImagem.module.css';
import React from 'react';

function cardComImagem(props){
    return(
        <section className={styles.cardComImagem}>

            <img className={styles.cardImagem} src={props.cardImagem} ></img>
            <strong className={styles.cardTitulo}>{props.cardTitulo} </strong>
            
            <span className={styles.cardDescricao}>{props.cardDescricao}</span>
            
        </section>
    )
}

export default cardComImagem