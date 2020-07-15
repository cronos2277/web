const telefones = `
lista telefônica:
    - (21) 12345-6789
    - (11) 62380-2234
    - 5678-7771
    - (85)333-7890
    - (1) 4321-1234
`;
console.log("\nTelefones");
console.log(telefones.match(
    /(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g //Expressao regular para telefones
));

const intervaloNumerico = '0 1 10 192 199 201 249 255 256 1010 1512'
console.log("\nRange de Numeros");
console.log(
    intervaloNumerico.match(
        /*
        Expressao para pega um range de numeros
            () => Um grupo que
            \d{1,2} => Pega numeros de zero a 99 ou "|"
            1\d{2} => Pega numeros de 100 a 199 ou "|"
            2[0-4]\d => Pega numeros de 200 a 249 ou "|"
            25[0-5] => Pega numeros de 250 a 255
            \b bordas, ou seja o numero deve estar envolto por caracteres que negam \w.
        */
        /\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g //pega numeros ate 255.
    )
);

const ipv4 = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`

/*
    Voce pode usar no javascript o objeto RegExp, ele eh recomendavel
    caso voce queira criar regex apartir de String por exemplo ou de maneira dinamica.
    Porem alguns cuidados deve ser tomados:

    1) se voce for usar o meta-caracter de escape, saiba que ele tambem serve para escapar
    Strings no javascript, logo se for usar um caracter de digito, ao inves de \d, 
    voce deve usar \\d para anular o efeito dele na String.

    2) Nao coloque o "//", no caso o RegExp ja faz isso automaticamente, apenas coloque a sua
    expressao, sem colocar a / de inicio e a / de fim.

    3) As flags sao passadas como um segundo parametro e nao junto com a expressao, nesse caso
    esta sendo passado a flag g, repare que a mesma eh passada como sendo o segundo parametro
    de uma String, caso nao tenha flag nao precisa ter uma segunda String.

    4) Essas regras vale para qualquer funcao javascript que recebe uma regex por String.
*/

//Se voce for colocar o caracter de escape dentro de uma String, 
//nao esqueca de colocar uma segunda para evitar de escapar na String
const range = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])';
const regex = RegExp(`\\b${range}\\.${range}\\.${range}\\.${range}\\b`,'g');
console.log("\nIPV4",regex);
console.log(
    ipv4.match(regex)
);

