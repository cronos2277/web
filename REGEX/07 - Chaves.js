const texto = "a b c ab ac bc abc bca bac cba cab aa aaa bb bbb cc ccc";
console.log("Regex: /{2,3}/g");
console.table(
    texto.match(
        /*
            As chaves indicam que existe uma ocorrencia minima e pode ou
            nao ter uma ocorrencia maxima, porem ambas podem ser definidos
            dentro de chaves.
            String: a b c ab ac bc abc bca bac cba cab aa aaa bb bbb cc ccc;
            Output
            ┌─────────┬────────┐
            │ (index) │ Values │
            ├─────────┼────────┤
            │    0    │  'aa'  │
            │    1    │ 'aaa'  │
            └─────────┴────────┘
        */
        /a{2,3}/g
    )
);

console.log("Regex: /{2,}/g");
console.table(
    texto.match(
        /*
            Aqui omitimos a ocorrencia maxima. Precisa se ter no minimo 2 ocorrencias,
            sem existir um limite maximo para as ocorrencias.
            String: a b c ab ac bc abc bca bac cba cab aa aaa bb bbb cc ccc;
            Output:
            ┌─────────┬────────┐
            │ (index) │ Values │
            ├─────────┼────────┤
            │    0    │  'bb'  │
            │    1    │ 'bbb'  │
            └─────────┴────────┘
        */
        /b{2,}/g
    )
);

console.log("Regex: /[abc]{2}/g");
console.table(texto.match(
    /*
        Quando tem apenas um numero, isso siginifica exatamente,
        no caso abaixo, deve haver exatos 2 caracteres, nem mais
        e nem menos. No exemplo abaixo como o mesmo esta envolto
        de um conjunto, entao toda vez que achar qualquer dois 
        algorismos repetidos dos caracteres dentro dos colchetes,
        entao ele retorna. 
        String: a b c ab ac bc abc bca bac cba cab aa aaa bb bbb cc ccc;
        Output
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │  'ab'  │
        │    1    │  'ac'  │
        │    2    │  'bc'  │
        │    3    │  'ab'  │
        │    4    │  'bc'  │
        │    5    │  'ba'  │
        │    6    │  'cb'  │
        │    7    │  'ca'  │
        │    8    │  'aa'  │
        │    9    │  'aa'  │
        │   10    │  'bb'  │
        │   11    │  'bb'  │
        │   12    │  'cc'  │
        │   13    │  'cc'  │
        └─────────┴────────┘
    */
    /[abc]{2}/g
));