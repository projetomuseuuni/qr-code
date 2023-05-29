# **QR Code - Museu Universitário Academia**

## **Astro**

### O que é?

Esse projeto foi criado usando Astro, um framework que possibilita a criação site que utilizem arquivos estáticos já com seus conteúdos. Já que frameworks como React utilizam javascript para a renderização de contéudo ao carregar a página.

Existem outros frameworks parecidos, porém a diferença do Astro é que ele não depende de nenhum outro framework em específico e pode ser usando com React, Vue, Svelte, entre outros.

### Como funciona?

Na maior parte do projeto, ele funciona idêntico a como se fosse um projeto usando somente React (como os criados usando Create React App). Porém, tem 2 pastas que tem significados especiais que são a `Layouts` e `Pages`.

Os componentes descritos na pasta de Layouts são aqueles que definem como páginas que o usarem serão escritas. Nesses componentes, nós precisamos definir inclusive as meta tags do `Head` como num arquivo `.html`. Podemos ter somente um layout no site todo ou vários, a depender da necessidade.

Os componentes descritos na pasta de Pages são aqueles que virarão rotas da aplicação em si, eliminando a necessidade de configuração de rotas que fizemos com o React Router (o Astro faz essa confiuração por debaixo dos panos). No caso, usaremos a configuração de `prerender` que fará com que essas páginas virem arquivos `.html` com seu conteúdo já pré-renderizado para, entre outras coisas, garantir um menor tempo de carregamento das mesmas (o que não ocorre normalmente com o React puro)

## **Como organizaremos o projeto**

A ideia aqui é que faremos:

- [ ] Um Layout específico para as páginas de QR Code, já com tudo que for necessário pré-configurado
- [ ] Iremos construir os componentes que possam ser necessários para facilitar a construção dessas páginas.
- [ ] Definir o conteúdo que será usado nas páginas
- [ ] Criar a primeira página de QR Code completa com seu conteúdo
- [ ] Replicar essa construção para as demais páginas até finalizar os primeiros QR Codes que serão feitos nesse primeiro período de 2023

## **Possíveis Ideias para o futuro**

- [ ] Criar uma página para ser um index com todos os QR Codes para uso interno nosso e do pessoal do museu
- [ ] Montar um gerador de QR Codes em uma das páginas para não depender de ferramentas externas (não é tão complicado usando algumas bibliotecas, mas também não é muita prioridade)
  