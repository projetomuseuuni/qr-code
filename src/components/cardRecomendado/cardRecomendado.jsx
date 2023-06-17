import React from "react";
import CardComImagem from "../cardComImagem/cardComImagem";
import './cardRecomendado.css';

function cardRecomendado(){
    return(
        
        <div className="cardRecomendado">

            <CardComImagem 
                cardImagem='https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/08/urias-artista-do-mes.jpg'
                cardTitulo='The biggest queen ever'
                cardDescricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet est ut interdum malesuada. Aliquam erat volutpat. Sed auctor finibus nunc eu posuere. Nullam a justo felis.'
            />
            <CardComImagem 
                cardImagem='https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/08/urias-artista-do-mes.jpg'
                cardTitulo='The biggest queen ever'
                cardDescricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet est ut interdum malesuada. Aliquam erat volutpat. Sed auctor finibus nunc eu posuere. Nullam a justo felis.'
            />
            
        </div>
    )
}
export default cardRecomendado