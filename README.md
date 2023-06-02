# QR Code - Museu Universitário Academia

## Astro

### O que é?

Esse projeto foi criado usando Astro, um framework que possibilita a criação site que utilizem arquivos estáticos já com seus conteúdos. Já que frameworks como React utilizam javascript para a renderização de contéudo ao carregar a página.

Existem outros frameworks parecidos, porém a diferença do Astro é que ele não depende de nenhum outro framework em específico e pode ser usando com React, Vue, Svelte, entre outros.

### Como funciona?

Na maior parte do projeto, ele funciona idêntico a como se fosse um projeto usando somente React (como os criados usando Create React App). Porém, tem 2 pastas que tem significados especiais que são a `Layouts` e `Pages`.

Os componentes descritos na pasta de Layouts são aqueles que definem como páginas que o usarem serão escritas. Nesses componentes, nós precisamos definir inclusive as meta tags do `Head` como num arquivo `.html`. Podemos ter somente um layout no site todo ou vários, a depender da necessidade.

Os componentes descritos na pasta de Pages são aqueles que virarão rotas da aplicação em si, eliminando a necessidade de configuração de rotas que fizemos com o React Router (o Astro faz essa confiuração por debaixo dos panos). No caso, usaremos a configuração de `prerender` que fará com que essas páginas virem arquivos `.html` com seu conteúdo já pré-renderizado para, entre outras coisas, garantir um menor tempo de carregamento das mesmas (o que não ocorre normalmente com o React puro)


### Escrevendo Componentes

O Astro permite que a gente escreva os componentes usando qualquer um dos frameworks disponíveis nele que esteja configurado no projeto em questão. No nosso caso, o React. Porém ele também oferece um arquivo especial com a extensão `.astro` que premite escrever componentes na linguagem deles. A ideia aqui é que os componentes sejam escritos em React em si. Mas caso alguém entre no projeto, e desconheça a biblioteca, pode começar usando essa outra versão. A vantagem dela é que a estrutura é mais próxima do HTML padrão e pode oferecer uma barreira de entrada menor

Para escrever um componente em `.astro` basta criar um arquivo com essa extensão, tipo: `NomeDoComponente.astro`. E escrever o código separado por blocos. O código Javascript associado ao componente fica escrito entre dois conjuntos de três hifens `---`, o código HTML é escrito solto logo após esses hífens e por fim coloca-se uma tag `<style>` ao fim do arquivo com os estilos daquele componente dentro.

Ficando assim:

```html
---
// Código Javascript
...
---

<div>
    <p>Código Html</p>
    ...
</div>

<style>
    /* Código CSS */
    ...
</style>
```

O bloco de Javascript é opcional, logo o componente pode ficar assim:

```html
<div>
    <p>Código Html</p>
    ...
</div>

<style>
    /* Código CSS */
    ...
</style>
```

> Qualquer estilo escrito dentro de uma tag style de um componente Astro está vinculado ao escopo dele. Ou seja, um seletor `h1` só irá afetar as tags `<h1>` daquele componente e nenhuma outra. Mais detalhes em: [Estilos com Escopo](https://docs.astro.build/pt-br/guides/styling/#estilos-com-escopo)

### Escrevendo Estilos

O projeto está configurado para usar algumas variáveis CSS. Algumas delas foram criadas exclusivamente para esse projeto e estão presentes no arquivo `/src/styles/main.css` dentro do seletor HTML

```css
html {
  --color__brand--normal: #1a99d6;
  --color__brand--dark: #2c3340;

  --color__neutral--lighter: #fbfcfd;
  --color__neutral--light: #e8f2ff;
  --color__neutral--dark: #596273;
  --color__neutral--darker: #232021;

  ...
}
```

Para usar, basta chamar a função `var()` dentro do código CSS

```css
html {
  color: var(--color__neutral--darker);
  background-color: var(--color__neutral--lighter);
}
```

Dê preferência para usar estas variáveis para manter um padrão dentro do site (desde cores, até espaçamentos, sombras, fontes e etc), mas caso precise de algo que não exista nelas você tem duas opções:

- Usar o [Open Props](https://open-props.style/#getting-started), que já está configurado. Essa biblioteca é um conjunto de variáveis CSS prontos para serem usados. Desse modo, você manteria a mesma ideia do bloco de código acima (usando a função `var()`, porém com uma variável que está presente no site deles, por exemplo: `var(--animation-slide-in-left)` para usar uma animação de deslizamento para a esquerda)

- Escrever o seu próprio CSS sem usar nenhuma variável. Não tem problema nenhum, mas mantive essa opção por último para que seja usado em terceiro caso mesmo


## Como organizaremos o projeto

A ideia aqui é que faremos:

- [ ] Um Layout específico para as páginas de QR Code, já com tudo que for necessário pré-configurado
- [ ] Iremos construir os componentes que possam ser necessários para facilitar a construção dessas páginas.
- [ ] Definir o conteúdo que será usado nas páginas
- [ ] Criar a primeira página de QR Code completa com seu conteúdo
- [ ] Replicar essa construção para as demais páginas até finalizar os primeiros QR Codes que serão feitos nesse primeiro período de 2023

## Como contribuir com o projeto

> Os comandos via terminal abaixo são apenas para referência. Você pode realizar esses processos pela própria interface do VS Code ou de qualquer outro método que já conhecer e/ou preferir

1. Faça um clone do repositório. Pegue a URL pelo botão `Code` na interface do github e digite no terminal o comando abaixo

```sh
$ git clone <url_do_repositório>
```

2. Crie um novo branch com um nome curto porém descritivo sobre o que você fará nele, com as palavras em minúsculo e separadas por hífen (snake-case).

>Por exemplo: Um branch que será criado para a criação de um novo layout para páginas de um blog poderia ser: `'layout-para-blog'`

```sh
git checkout -b <nome_do_branch>
```

3. Após realizar as mudanças, realize o commit delas (de preferência, faça vários pequenos commits ao longo do seu trabalho na branch).

```sh
git commit -m <descrição_do_commit>
```

4. Suba as alterações para o repositório do github. No primeiro `push` que fizer de uma branch, o comando irá dar um erro avisando que você precisa indicar a qual branch remota a sua branch local diz respeito. Basta copiar o próprio comando que aparece nesse mensagem de erro e executar novamente

```sh
git push
```

5. Uma vez que o branch estiver no github e você tenha finalizado todas as suas alterações nele, basta criar um Pull Request. Isso ocorre pelo próprio site do Github. 

> Num branch que acabou de receber commits novos aparece um botão verde `create pull request` ou você pode ir na aba "Pull Requests (que fica logo abaixo do nome do repositório) e clicar no botão "new pull request".

> Certifique-se que o branch Base seja o `main` e o branch Compare seja o seu branch criado (ambos ficam logo abaixo do título, Compare Changes, e do subtítulo dessa página)

> Adicione um nome e descrição que expliquem bem o trabalho que foi realizado por você nesse branch

> Ao finalizar e criar o Pull Request, avise no grupo para que outra pessoa possa ver e aprovar o mesmo (todos os Pull Requests vão precisar de pelo menos uma aprovação de alguém que não seja quem o criou)

## Possíveis Ideias para o futuro

- [ ] Criar uma página para ser um index com todos os QR Codes para uso interno nosso e do pessoal do museu
- [ ] Montar um gerador de QR Codes em uma das páginas para não depender de ferramentas externas (não é tão complicado usando algumas bibliotecas, mas também não é muita prioridade)
  