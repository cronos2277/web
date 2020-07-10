const texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,_,-,&,^";

//Apenas digitos
console.log("Apenas Digitos: /\d/g")
/*
    \d => Significa apenas digitos, ou seja ele da match em
    todos os caracteres de zero a 9, seria um atalho para /[0-9]/
    String: 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,_,-,&,^
    output: ['0', '1', '2', '3','4', '5', '6', '7','8', '9']
*/
console.log(texto.match(/\d/g))

//Todos menos digitos
console.log("Nao Digitos: /\D/g")
// \D(maiusculo) => nega o \d, seria o equivalente a: /[^0-9]/
/*
String: 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,_,-,&,^
Output
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  ','   │
    │    1    │  ','   │
    │    2    │  ','   │
    │    3    │  ','   │
    │    4    │  ','   │
    │    5    │  ','   │
    │    6    │  ','   │
    │    7    │  ','   │
    │    8    │  ','   │
    │    9    │  ','   │
    │   10    │  'a'   │
    │   11    │  ','   │
    │   12    │  'b'   │
    │   13    │  ','   │
    │   14    │  'c'   │
    │   15    │  ','   │
    │   16    │  'd'   │
    │   17    │  ','   │
    │   18    │  'e'   │
    │   19    │  ','   │
    │   20    │  'f'   │
    │   21    │  ','   │
    │   22    │  '_'   │
    │   23    │  ','   │
    │   24    │  '-'   │
    │   25    │  ','   │
    │   26    │  '&'   │
    │   27    │  ','   │
    │   28    │  '^'   │
    └─────────┴────────┘

*/
console.table(texto.match(/\D/g))

//Letras, Digitos e underline.
console.log("Regex: /\w/g")
//String: 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,_,-,&,^
//Output: [ '0', '1', '2', '3', '4','5', '6', '7', '8', '9','a', 'b', 'c', 'd', 'e','f', '_']
console.log(texto.match(/\w/g));

//Tudo exceto Digitos, Letras e underline
//String: 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,_,-,&,^
/*
Output
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  ','   │
│    1    │  ','   │
│    2    │  ','   │
│    3    │  ','   │
│    4    │  ','   │
│    5    │  ','   │
│    6    │  ','   │
│    7    │  ','   │
│    8    │  ','   │
│    9    │  ','   │
│   10    │  ','   │
│   11    │  ','   │
│   12    │  ','   │
│   13    │  ','   │
│   14    │  ','   │
│   15    │  ','   │
│   16    │  ','   │
│   17    │  '-'   │
│   18    │  ','   │
│   19    │  '&'   │
│   20    │  ','   │
│   21    │  '^'   │
└─────────┴────────┘
*/
console.log("Regex: /\W/g")
console.table(texto.match(/\W/g));

/* Como deu para perceber a negacao de um shorthand eh a sua forma maiuscula, ou seja a negacao de \d por exemplo eh \D */
console.log("Procurando espacos:");
//Procura por /n, /t, /f, /r, /f e espaco
//String: 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,_,-,&,^
//Output: null
console.log(texto.match(/[\s]/g));
//agora a negacao...
console.log(texto.match(/[\S]/g).length, "ocorrencias que nao sao '\\n' ou '\\t' ou '\\f' ou '\\r' ou espaco em branco.");

/*
 No console.log cuidado com expressao regular, que algumas podem ser interpretadas, logo o uso do \\. 
 O metodo lenght informa o numero de ocorrencias encontrada, no caso sera retornado o numero 39,
 que eh o numero de ocorrencia que o \S achou.
*/