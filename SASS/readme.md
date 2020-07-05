# SASS
## Instalação
Você pode instalar através do NPM usando a tag global: "**npm install -g sass**", precisa ser root para instalar modo global no NPM.

## Site Oficial
[ir para o site](https://www.sassmeister.com/)

## Ferramenta online para SASS
[SASS Meister](https://www.sassmeister.com/)

## Arquivos
Aqui nesse arquivos temos um exemplo básico de como funciona o sass. Clique no(s) arquivo(s) abaixo(s) e veja mais informações de como criar um arquivo SASS.

[basico.sass](./basico.scss) => Exemplos básicos no SASS.

[part.sass](./_part.scss) => Mixin e Herança

[operacao.sass](./_operacao.scss) => operações matematica, desvio condicional e laço de repetição no SASS

[Arquivo HTML](./index.html)

[Output](./basico.css)

## Compilação
### Basico
Para você compilar um código no SASS você precisa usar o comando:

```sass **[nomeDoArquivo.sass|scss]** **[nomeDoNovoArquivo.CSS]**```

### Assistindo arquivos
Você pode usar a tag "**--watch**" para que o sass monitore um arquivo e faça a compilação para CSS assim que perceber alguma mudança.

```sass --watch **[nomeDoArquivo.sass|scss]** **[nomeDoNovoArquivo.CSS]**```

### Definindo os arquivos de saida.
Você pode usar a tag "**--style=MODO**" para definir como deve ser a saida do arquivo CSS. Como exemplo o arquivo basico.scss e o arquivo basico.css

``sass basico.scss basico.css --style=expanded`` => o css sai expandido, ou seja identado. (Opção padrão se omitido o style)

``sass basico.scss basico.css --style=compressed`` => o css sai mimificado, ou seja pronto para produção.

### Compilando Pastas
Para compilar pastas basta usar a sintaxe abaixo, lembrando que voce pode combinar tanto o "**--watch**", como o "**--style**"

``sass sassPasta:cssPasta``

### Usando todos os parametros
``sass --watch basico.scss basico.css --style=expanded`` => Arquivos

``sass --watch sassPasta:cssPasta --style=expanded`` => Pastas

Repare que a diferença entre a entrada de pasta é que a pasta não é informado a extensão e a pasta de entrada fica a esquerda dos dois pontos e a pasta de saida a direita dos dois pontos.

## Tipos de dados

**number** => numerico que representa tanto o tipo float,double ou Integer. assim como tambem pode representar dados como 1px, 50% ou 2em, 3rem, 1fr esse tipo eh inferido em qualquer desses valores.

**color** => Tipo de dados do tipo cor, esse tipo de dado eh inferido em valores do tipo #FFF ou rgba(128,128,128,.5)

**bool** => Valor do tipo booleano.

**list** => seria o equivalente a arrays, exemplo: [2,3,4]

**sting** => qualquer valor textual ou valor dentro de aspas.

**map** => do tipo objeto, 

## Shell interativo
Voce pode chamar o shell interativo usando o comando ``sass -i``

Temos a funcao type-of() que permite identificar o tipo dos dados ou variaveis.

## Observações
### Cuidado com o arquivo MAP.
Cuidado com as informações de output, informe o diretório correto de saida pois, esse parametro pois qualquer problema ai o css pode não carregar por mais que você informe o caminho correto no html. Então cuidado com o arquivo de saida, pois se o diretório não bater com o arquivo MAP, você pode ter problemas, certifique-se de que o diretório de saida exista e se mesmo informado
o CSS certo o mesmo não carregar, favor recompilar.

### Cuidado com o --watch em arquivos "_". 
Ele so vai monitorar esses arquivos caso esteja no modo de ler alterações em pastas.


