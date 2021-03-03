# blue-modas-web

Aplicação web construida com Angular 9 utilizando typescript.
Esta aplicação consume a API [blue-modas-api](https://github.com/nandomegale/blue-modas-api).

## Executando aplicação

1 - Clone o repositório.

2 - Rode o comando `ng serve`. Acesse a URL `http://localhost:4200/`.

3 - Se você estive com a blue-modas-api rodando localmente, você irá ver a aplicação corretamente.

## Deploy

Foi realizado o deploy utilizando Heroku

https://blue-modas-web.herokuapp.com/showcase

## Informações

 - A versão de produção ainda não contém o consumo da API.
 - O primeiro acesso pode demorar um pouco devido ao Heroku colocar a aplicação em modo sleep.
 - Caminhos: 
    - /showcase: vitrine do ecommerce.
    - /cart: visualiza o carrinho de compras.
    - /identification: identificação do usuário.
    - /order: apresenta o número do pedido, informaçoes do usuário e dados dos produtos comprados.
