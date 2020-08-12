# Bootstrap

## Importando o bootstrap 4

### Tag Meta
Por padrao o bootstrap é adaptativo, mas não responsívo, porém com essa tag no `head`, permite com que essa propriedade do bootstrap seja ativada.

`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`

**name** => o nome da metatag é viewport.

**content="width=device-width"** => o width é o tamanho do viewport, no caso aqui estamos passando como parametro o valor total da tela.

**content="initial-scale=1"** => Escala inicial, se 1 significa zoom de 100 por cento, zoom mais que 1 significa zoom maior que 100 por cento e zoom menor que 1 eh zoom menor que 100%. O número sem aspas.

**shrink-to-fit=no** => Aqui você informar se deve ser aplicada a técnica de diminuir o zoom da página caso o dispositivo seja pequeno, no caso de um celular por exemplo se definido como **yes**, ele ira reduzir o zoom do conteudo ate que caiba todo o conteudo na tela, deixa como não isso.

### CSS
coloque isso no `head`

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`

### JAVASCRIPT
coloque no body antes do seus scripts

`<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>`

`<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>`

`<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>`
