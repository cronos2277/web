const caracteres = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
const simbolos = '-\/+?*.|^~';

console.log("/[08cdCD]/g");
console.log(caracteres.match(
    /*
        Aqui temos a expressao para conjuntos, no caso
        da forma com que esta escrito, sera procurado
        ou o "0" ou o "8" ou o "c" ou "d", ou "C" ou "D",
        se achado sera incluso no array. Um conjunto deve
        estar dentro de colchetes.
        String: "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
        Output: [ '0', '8', 'c', 'd' ]
    */
    /[08cdCD]/g
));

console.log("\n\n","/[0-9]/");
console.log(caracteres.match(
    /*
        Essa expressao faz com que seja procurados numeros de
        zero a nove dentro da expressao, quando voce quer 
        usar um range de valores, voce pode usar um hifem,
        que dependendo do contexto, no caso ele sera interpretado
        como true, qualquer valor que esteja entre o valor da esquerda
        e o da direita.
        String: "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
        Output: ['0', '1', '2', '3','4', '5', '6', '7','8', '9']
    */
    /[0-9]/gi
));

console.log("\n\n"," /[0-9a-f]/ig");
console.log(caracteres.match(
    /*
        Caso voce queira colocar 2 ranges de caracteres a ser avaliado,
        voce usa o hifen entre o range e coloca um grudado com o outro
        dentro dos colchetes. [0-9a-f] => primeiro vai avaliar se tem 
        algum caracter de 0-9, depois de a-f e como estamos com a flag i,
        logo a verificacao sera insensetive case.
        String: "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
        Output: ['0', '1', '2', '3','4', '5', '6', '7','8', '9', 'a', 'b','c', 'd', 'e', 'f']
    */
    /[0-9a-f]/ig
));

console.log("\n\n","/[\/+?*.|]/ig");
console.log(simbolos.match(
    /*
        A maioria dos metacaracteres dentro de conjunto sao interpretados de maneira literal,
        ou seja, como se tivesse uma barra "\" na frente deles, todos os metacaracteres colocados
        dentro de conjunto sao interpretados de maneira literal, exceto tres: "-","^","[","]",
        o hifem por exemplo ele eh interpretado como literal se for o primeiro ou o ultimo 
        caracter da expressao, ou ele pode delimitar um range, como visto acima, caso ele esteja
        entre dois outros caracteres qualquer, o que inclui simbolo.
        String: '-\/+?*.|^~';
        output: [ '/', '+', '?', '*', '.', '|' ]
    */
    /[\/+?*.|]/ig
));

console.log("\n\n","/[-0-9]/ig");
console.log(simbolos.match(
    /*
        Aqui temos um exemplo da analise, o primeiro hifem como esta no inicio, ou seja sem um 
        valor a esquerda, logo ele eh interpretado como um literal, enquanto que o segundo
        hifem aquele que esta entre o zero e o 9, esse eh um metacaracter. Ou seja se um metacaracter
        estiver no lugar certo dentro de um grupo ele tem a funcionalidade dele exercida, caso esteja
        no lugar errado, como eh o caso do primeiro hifen a regex o interpreta como um literal.
        String: '-\/+?*.|^~';
        Output: [ '-' ];
    */
    /[-0-9]/ig
));

//Alguns detalhes devem ser percebidos no caso dos conjuntos.
const texto = "ABC [a,b,c] a-c";
console.log("/[A-z]/g");
console.table(
    /*
        Primeiro quando for buscar por letras misturando letras minusculas e maiuscula, nessa consulta
        tambem entraria por exemplo o colchetes, uma vez que os colchetes esta dentro do range entre
        "A"(maiusculo) que tem codigo 65 e "z"(minusculo) que tem codigo "122", nesse range entra o
        colchete que tem o codigo na tabela ascii de "91", logo ele eh incluso como resultado. Lembre-se
        sempre que o range eh feito com base na tabela ASCII.
        String: "ABC [a,b,c] a-c";
        output
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │  'A'   │
        │    1    │  'B'   │
        │    2    │  'C'   │
        │    3    │  '['   │
        │    4    │  'a'   │
        │    5    │  'b'   │
        │    6    │  'c'   │
        │    7    │  ']'   │
        │    8    │  'a'   │
        │    9    │  'c'   │
        └─────────┴────────┘
    */
    texto.match(/[A-z]/g)
);

console.table(
    /*
        Segundo o hifem fora de um conjunto nao funciona como metacaracter e eh interpretado de
        maneira literal:
        String: "ABC [a,b,c] a-c";
        Output
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │ 'a-c'  │
        └─────────┴────────┘
    */
    texto.match(/a-c/g)
);

try {
    console.log("Analizando a expressao '/[z-A]/g'")
    console.log(
        /*
            Essa expressao vai ficar ate dentro de um catch, porque vai dar erro. Ou seja voce
            eh obrigado a respeitar o range do Ascii. O "z"(minusculo) tem codigo "122", ao
            tempo que "A"(maiusculo) tem o codigo "65", em resumo a esquerda do hifem sempre
            deve ter o caracter com o menor valor e a direita do hifem o com maior valor, senao
            pode dar erro, como esse codigo abaixo.
        */
        texto.match(/[z-A]/g)
    );
} catch (error) {
    console.log("Essa expressao regular '/[z-A]/g' sem respeitar o range da erro");
}