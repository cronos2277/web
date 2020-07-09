const texto = "0.1.2.3.4.5.6.7.8.9.0,1,2,3,4,5,6,7,8,9,0";
/*
    \ => Esse eh o caracter de escape, ele serve quando voce precisa
    procurar por um caracter na string, porem a mesma se trata de 
    um meta caracter e tem uma funcao dentro do Regex, nesse caso
    o ponto eh um meta-caracter, logo precisa colocar um /\./ ao
    inves de /./, se quiser usar o ponto ou qualquer meta caracter
    deve usar o escape, caso nao queira ativar a funcao dele.
    No caso a funcao vai separar a string em cada elemento do array,
    usando o . como separador, no caso aonde tem ponto ele separa
    o elemento em um elemento do array, repare que os numeros separados
    por virgula estaram todos juntos no ultimo elemento do array
*/
console.log("Separando com base no Ponto: '/\./'");
const regex1 = new RegExp(/\./);
console.table(texto.split(regex1));

/*
    | => Esse caracter, seria o PIPe, ele serve como "ou" jno Regex,
    no exemplo abaixo, toda vez que encontrar um ponto ou uma virgula
    o numero (nesse exemplo) sera colocado em um novo espaco no array.
*/
console.log("Usando o PIPE: '/\.|,/'")
const regex2 = /\.|,/;
console.table(texto.split(regex2));

/*
    O ponto serve como caracter coringa, no caso a expressao regular abaixo
    indica que se tiver um e apenas 1 caracter entre o numero 1 e 2, o
    mesmo deve ser retornado. Seria algo se tiver comecando com 1 e terminando
    com 2, e se tiver um e apenas um caracter, independente de qual seja o caracter, 
    entao retorna o valor, repare que sera dado match em "1.2" e "1,2":
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │ '1.2'  │
    │    1    │ '1,2'  │
    └─────────┴────────┘
*/
console.log("Usando o Ponto: '/1.2/'")
const regex3 = /1.2/g;
console.table(texto.match(regex3));

/*
    Aqui estamos usando o metacaracter ponto '.' para interagir com o literal ponto '\.'
    Na expressao abaixo, estamos procurando por qualquer ocorrencia de um caracter que
    antece um ponto.
*/
console.log("Usando o meta-caractere ponto com o literal Ponto: '/.\\./'");
const regex4 = /.\./g;
console.table(texto.match(regex4));

/*
    No javascript o metodo Split usa a expressao regular como um separador, no caso cada
    vez que eh encontrada tal ocorrencia, o mesmo eh desmembrado. Nesse exemplo:
    "0.1.2.3.4.5.6.7.8.9.0,1,2,3,4,5,6,7,8,9,0"; com a regex: '/.|,/'
    se houver uma expressao para procurar por ponto ou virgula, o split vai usar o ponto
    ou a virgula como um separador, ficando assim:
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  '0'   │
    │    1    │  '1'   │
    │    2    │  '2'   │
    │    3    │  '3'   │
    │    4    │  '4'   │
    │    5    │  '5'   │
    │    6    │  '6'   │
    │    7    │  '7'   │
    │    8    │  '8'   │
    │    9    │  '9'   │
    │   10    │  '0'   │
    │   11    │  '1'   │
    │   12    │  '2'   │
    │   13    │  '3'   │
    │   14    │  '4'   │
    │   15    │  '5'   │
    │   16    │  '6'   │
    │   17    │  '7'   │
    │   18    │  '8'   │
    │   19    │  '9'   │
    │   20    │  '0'   │
    └─────────┴────────┘
*/