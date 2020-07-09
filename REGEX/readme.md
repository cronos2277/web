# REGEX
## Flags
`/EXPRESSAO/g` => procura de maneira global, caso seja omitido apenas retorna o primeiro resultado.

`/EXPRESSAO/i` => Ignora maiúsculo e minúsculo e trata ambos como iguais, no caso faz uma verificação case-insensitive.

## Meta-caracteres 

`\`=> metacaracter de escape.

`|` => metacaracter de "ou".

`.` => Substitui 1 caracter, ex: /1.2/ => nesse caso ele substitui qualquer caracter que esteja entre 1 e 2, porem caso a String seja "12" ou "1,,2" o mesmo deve dar falso, pois so deve estar apenas 1 caracter entre o 1 e o 2, nesse caso, sendo verdadeiro: "1,2", "1.2", "1e2", "132", etc...

`\n` => Procura por quebra de linhas na String.

`\t` => Procura por tabulação na String.

`\s` => Procura por tabulação ou Quebra de linha e espaço em branco