const texto = "Oi mundo, como vai";
console.log("/^Oi/gi");
console.table(
    texto.match(
        /*
            ^ => fora dos colchetes ele se torna um caracter
        de borda, ou seja ele da match se essa expressão estiver
        no comecao da borda, que pode ser toda a String se estiver
        sem a flag multiline, ou de um \n se estiver com a flag
        habilitada.
        String: Oi mundo, como vai
        Output:
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │  'Oi'  │
        └─────────┴────────┘
        */
        /^Oi/gi
    )
)
console.log("/vai$/gi");
console.table(
    texto.match(
        /*
            $ => esse eh um caracter de borda, ou seja ele da match
        se essa expressão estiver no final da borda, que pode ser 
        toda a String se estiver sem a flag multiline, 
        ou de um \n se estiver com a flag habilitada. Lembre-se
        sempre que esse caracter fica a direita da expressao, ao
        passo que o '^' fica a esquerda
        String: Oi mundo, como vai
        Output:
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │ 'vai'  │
        └─────────┴────────┘
        */
        /vai$/gi
    )
);
console.log("/^Oi.*vai$/gi");
console.table(
    texto.match(
        /*
            Os dois caracteres de borda "^" e "$" podem, ser usados 
        em conjunto, na String abaixo estamos avaliando se a String
        inteira, uma vez que o multiline esta desativdo, comecao com
        "Oi", tem N caracteres e depois termina com "vai"
        String: Oi mundo, como vai
        Output
        ┌─────────┬──────────────────────┐
        │ (index) │        Values        │
        ├─────────┼──────────────────────┤
        │    0    │ 'Oi mundo, como vai' │
        └─────────┴──────────────────────┘
        */
        /^Oi.*vai$/gi
    )
);
console.log("/\\b\w+\\b/gi");
console.table(
    texto.match(        
        /*
        O caracter de borda, no caso o '\b', seria o
        equivalente ao '\W', ou seja a negacao do '\w',
        nesse caso todo e qualquer caracter que nao esteja
        enquadrado em '\w', sera tratado como borda, logo
        essa abordagem nao eh util em strings que tenha
        acentos, como essa string nao tem acentos, logo
        nao ha problemas e o resultado ocorreu como o esperado.
        String: Oi mundo, como vai
        Output
        ┌─────────┬─────────┐
        │ (index) │ Values  │
        ├─────────┼─────────┤
        │    0    │  'Oi'   │
        │    1    │ 'mundo' │
        │    2    │ 'como'  │
        │    3    │  'vai'  │
        └─────────┴─────────┘
        */
        /\b\w+\b/gi
    )
);

const acento = "Olá como você está?"
console.log(" /\\b\w+\\b/gi");
console.table(
    /*
        Aqui o problema do \b fica mais evidente, repare que 
        os caracteres especiais, sao tratados como bordas.
        String: Olá como você está?
        Output
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │    0    │  'Ol'  │
        │    1    │ 'como' │
        │    2    │ 'voc'  │
        │    3    │ 'est'  │
        └─────────┴────────┘
    */
    acento.match(
        /\b\w+\b/gi
    )
);

const multiplas_linhas = `
Linha 1l
Linha 2l
Linha 3l
Linha 4l`;
console.log("/^(L).*\\1$/gim");
console.table(
    /*
        Aqui temos um exemplo de como funciona a flag multiline,
    a expressao abaixo sem a flag 'm' vai dar nulo. Aqui temos
    um caso ao qual a flag multiline pode ser util. Aqui eh dado
    match quando o primeiro e o ultimo caracter da String sao os
    mesmos, tanto que tem o L como primeiro caracter da linha
    e como estamos usando o retrovisor com a flag do ignore
    sensitive-case, isso faz com que o "L" do inicio da linha
    de metch com o "l" do final de cada linha, repare que temos
    4 resultados e isso ocorre porque a cada \n, o regex interpreta
    cada linha como uma nova "string" vamos dizer assim, ou
    seja: "linha 1l" eh idependente da "linha 2l" e por ai vai...
    String: `
            Linha 1l
            Linha 2l
            Linha 3l
            Linha 4l`
    Output
    ┌─────────┬────────────┐
    │ (index) │   Values   │
    ├─────────┼────────────┤
    │    0    │ 'Linha 1l' │
    │    1    │ 'Linha 2l' │
    │    2    │ 'Linha 3l' │
    │    3    │ 'Linha 4l' │
    └─────────┴────────────┘
    */
    multiplas_linhas.match(
        /^(L).*\1$/gim //Aqui estamos usando a flag m
    )
);