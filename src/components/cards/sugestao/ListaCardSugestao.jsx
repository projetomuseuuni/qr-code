import { CardSugestao } from "./CardSugestao";
import styles from "./lista-card-sugestao.module.css";

export const ListaCardSugestao = () => {
  return (
    <div className={styles.listaCardSugestao}>
      <CardSugestao
        title="Próxima Peça"
        description="A esquerda da peça atual"
        img="https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        href="#"
        alt="Imagem 1"
      />
      <CardSugestao
        title="Próxima Peça"
        description="A esquerda da peça atual"
        img="https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        href="#"
        alt="Imagem 2"
      />
      <CardSugestao
        title="Próxima Peça"
        description="A direita da peça atual"
        img="https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        href="#"
        alt="Imagem 3"
      />
    </div>
  );
};
