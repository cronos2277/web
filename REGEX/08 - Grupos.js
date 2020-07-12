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
