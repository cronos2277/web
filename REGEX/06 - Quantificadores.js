const numeros = "a ab abc aa aaa b bb bbb c cc ccc";
//Quantificador opcional (?)
/*
    O interrogacao representa zero ou uma ocorrencia, 
    esse metacaracter quantificador exige que tenha 
    zero e nao mais que uma ocorrencia, logo ele eh
    chamado de operador opcional, quando esta nessa
    posicao. No exemplo abaixo o "b" eh opcional,
    ou seja nesse exemplo se tiver o "a" esse eh obrigatorio
    e tiver ou nao o b, logo se da match. Resumindo,
    o interrogacao quando usado como quantificador,
    ele indica que o caracter imediatamente anterior,
    nesse exemplo o "b", tera que obrigatoriamente ter
    zero ou uma ocorrencia, nao mais que uma.
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output:
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  'a'   │
    │    1    │  'ab'  │
    │    2    │  'ab'  │
    │    3    │  'a'   │
    │    4    │  'a'   │
    │    5    │  'a'   │
    │    6    │  'a'   │
    │    7    │  'a'   │
    └─────────┴────────┘
*/
console.log("Regex: /ab?/gi");
console.table(numeros.match(/ab?/gi));

//Quantificador opcional nao guloso (??)
/*
    Quando o interrogacao eh colocado apos o 
    operador de quantificador o mesmo indica que
    o modo a ser analisado eh o modo preguicoso
    e nao guloso, sendo o guloso o padrao, mas
    alterado para lazy quando colocado o interrogacao
    apos algum meta-caracter quantificador.
    Quando a busca eh feita de maneira preguicosa, ele
    omite o caracter com quantificador do resultado.
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output:
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  'a'   │
    │    1    │  'a'   │
    │    2    │  'a'   │
    │    3    │  'a'   │
    │    4    │  'a'   │
    │    5    │  'a'   │
    │    6    │  'a'   │
    │    7    │  'a'   │
    └─────────┴────────┘
*/
console.log("Regex: /ab??/gi");
console.table(numeros.match(/ab??/gi));

//Quantificador 1 ou mais.
/*
    Nesse quantificador voce deve ter no minimo uma
    ocorrencia, sem maximo.
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output:
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  'a'   │
    │    1    │  'ab'  │
    │    2    │ 'abc'  │
    │    3    │  'aa'  │
    │    4    │ 'aaa'  │
    │    5    │  'b'   │
    │    6    │  'bb'  │
    │    7    │ 'bbb'  │
    │    8    │  'c'   │
    │    9    │  'cc'  │
    │   10    │ 'ccc'  │
    └─────────┴────────┘
*/
console.log("Regex: /[abc]+/gi");
console.table(numeros.match(/[abc]+/gi));

//Quantificador 1 ou mais nao guloso
/*
    Porem quando voce coloca o ? e voce obriga
    por uma busca lazy, temos isso:
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  'a'   │
    │    1    │  'a'   │
    │    2    │  'b'   │
    │    3    │  'a'   │
    │    4    │  'b'   │
    │    5    │  'c'   │
    │    6    │  'a'   │
    │    7    │  'a'   │
    │    8    │  'a'   │
    │    9    │  'a'   │
    │   10    │  'a'   │
    │   11    │  'b'   │
    │   12    │  'b'   │
    │   13    │  'b'   │
    │   14    │  'b'   │
    │   15    │  'b'   │
    │   16    │  'b'   │
    │   17    │  'c'   │
    │   18    │  'c'   │
    │   19    │  'c'   │
    │   20    │  'c'   │
    │   21    │  'c'   │
    │   22    │  'c'   │
    └─────────┴────────┘
*/
console.log("Regex: /[abc]+?/gi");
console.table(numeros.match(/[abc]+?/gi));

// Quantificador coringa zero ou mais.
/*
    Aqui temos um exemplo do quantificador zero
    ou mais, tambem chamado de quantificador coringa.
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │  'a'   │
    │    1    │   ''   │
    │    2    │  'ab'  │
    │    3    │   ''   │
    │    4    │ 'abc'  │
    │    5    │   ''   │
    │    6    │  'aa'  │
    │    7    │   ''   │
    │    8    │ 'aaa'  │
    │    9    │   ''   │
    │   10    │  'b'   │
    │   11    │   ''   │
    │   12    │  'bb'  │
    │   13    │   ''   │
    │   14    │ 'bbb'  │
    │   15    │   ''   │
    │   16    │  'c'   │
    │   17    │   ''   │
    │   18    │  'cc'  │
    │   19    │   ''   │
    │   20    │ 'ccc'  │
    │   21    │   ''   │
    └─────────┴────────┘
*/
console.log("Regex: /[abc]*/gi");
console.table(numeros.match(/[abc]*/gi));

//Quantificador coringa nao guloso
/*
    Aqui tem um bom exemplo de como funciona
    o modo lazy, em contra ponto com o guloso.
    No caso no modo lazy, ao dar match tenta-se
    devolver a menor quantidade possivel, ao
    modo de que o guloso eh a maior quantidade possivel.
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │   ''   │
    │    1    │   ''   │
    │    2    │   ''   │
    │    3    │   ''   │
    │    4    │   ''   │
    │    5    │   ''   │
    │    6    │   ''   │
    │    7    │   ''   │
    │    8    │   ''   │
    │    9    │   ''   │
    │   10    │   ''   │
    │   11    │   ''   │
    │   12    │   ''   │
    │   13    │   ''   │
    │   14    │   ''   │
    │   15    │   ''   │
    │   16    │   ''   │
    │   17    │   ''   │
    │   18    │   ''   │
    │   19    │   ''   │
    │   20    │   ''   │
    │   21    │   ''   │
    │   22    │   ''   │
    │   23    │   ''   │
    │   24    │   ''   │
    │   25    │   ''   │
    │   26    │   ''   │
    │   27    │   ''   │
    │   28    │   ''   │
    │   29    │   ''   │
    │   30    │   ''   │
    │   31    │   ''   │
    │   32    │   ''   │
    │   33    │   ''   │
    └─────────┴────────┘
*/
console.log("Regex: /[abc]*?/gi");
console.table(numeros.match(/[abc]*?/gi));

/*
    Aqui temos o quantificador unico, ou seja
    precisa que se tenha exatamente uma ocorrencia,
    nem mais e nem menos.
    String: "a ab abc aa aaa b bb bbb c cc ccc";
    Output
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │ 'ab '  │
    │    1    │ 'abc'  │
    └─────────┴────────┘
    Aqui o interrogacao nao faz muito diferenca, uma
    vez que ele sempre opera no lazy.
*/
console.log("Regex: /ab./gi");
console.table(numeros.match(/ab./gi));