import React from "react";
import CardComImagem from "../cardComImagem/cardComImagem";
import './cardRecomendado.css';

function cardRecomendado(){
    return(
        
        <div className="cardRecomendado">

            <CardComImagem 
                cardImagem='../../public/assets/fotoRaptor.jpg'
                cardTitulo='Título da peça'
                cardDescricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet est ut interdum malesuada. Aliquam erat volutpat. Sed auctor finibus nunc eu posuere. Nullam a justo felis.'
            />
            <CardComImagem 
                cardImagem='../../public/assets/fotoRaptor.jpg'
                cardTitulo='Título da peça'
                cardDescricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet est ut interdum malesuada. Aliquam erat volutpat. Sed auctor finibus nunc eu posuere. Nullam a justo felis.'
            />
            
        </div>
    )
}
export default cardRecomendado