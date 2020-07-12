const texto = "abc ab ac bc abc bca cba aa aaa bb bbb cc ccc";
console.log("Resultado: ",texto.match(
    /*
        Aqui temos um exemplo de grupo, no caso sera procurado por
        "aa" dentro da String de texto.
        String: abc ab ac bc abc bca cba aa aaa bb bbb cc ccc
        Output: Resultados:  [ 'aa', 'aa' ].
    */
    /(aa)/g
    ));

const letras = "abcdefghijkll";
console.log("Resultado: ",
    letras.match(
        /*
            Aqui nos grupos abaixo, temos 12 retrovisores, no caso o 
            \12 abaixo representa o decimo segundo retrovisor, que
            no caso seria o (l). Lembrando que nem todas as linguagens
            de programacao que tem suporte a mais de 9 retrovisores,
            alem disso, cada grupo vira um retrovisor por padrao.
            String: "abcdefghijkll"
            Output: "Resultado:['abcdefghijkll']"
        */
        /(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/gi
    )
)

console.log("Resultado: ",
        /*
            Aqui temos um outro exemplo de como funciona os retrovisores.
            Repare que abaixo estamos usando o retrovisor, no caso o "\1",
            como estamos usando "?:" no primeiro grupo, logo o \1 esta 
            fazendo referencia a o "(b)", entao justamente devido a isso,
            o "\1" faz referencia ao segundo grupo.
        */
        texto.match(/(?:a)?(b)\1/g)
);

console.log( "Looking ahead: ",
    letras.match(
        /*
            Aqui tem um exemplo de como funciona o operador looking ahead,
            no caso a expressao abaixo vai retornar uma caracter l, que tenha
            a sua direita um outro caracter "l". Ou seja sao duas condicoes,
            a primeira eh que o l eh obrigatorio e o segundo eh que alem
            do caracter ser um l, ele tambem deve ter o "l" a sua direita.
            No caso ele procura por um "ll" segundo a expressao abaixo e
            retorna o "l". Logo colocar "?=" dentro de um grupo faz com que
            o grupo opera como o operador looking ahead, no caso o operador
            looking ahead ele usa o carater a direita para fazer analise
            no caracter a esquerda.
            String: "abcdefghijkll"
            Output: Looking ahead:  [ 'l' ]
        */
        /l(?=l)/gi
    )
);

console.log("Not Looking ahead: ",
    /*
        Aqui temos a negacao do looking ahead acima, no caso para se ter a
        negacao voce troca o igual por exclamacao. No caso a expressao abaixo
        vai dar match em qualquer caracter que contenha a letra "a" e nao esteja
        a esquerda do caracter "l".
        String: "abcdefghijkll"
        Output: Not Looking ahead:  [ 'a' ]
    */
    letras.match(
        /a(?!l)/g
    )
);