# REGEX
## Flags
`/EXPRESSAO/g` => procura de maneira global, caso seja omitido apenas retorna o primeiro resultado.

`/EXPRESSAO/i` => Ignora maiúsculo e minúsculo e trata ambos como iguais, no caso faz uma verificação case-insensitive.

`/EXPRESSAO/s` => **Dotall**, faz com que o **'.'** tambem possa substituir o **\n** algo desabilitado por padrao.

## Meta-caracteres 

`\`=> metacaracter de escape.

`|` => metacaracter de "ou".

`.` => Substitui 1 caracter, ex: /1.2/ => nesse caso ele substitui qualquer caracter que esteja entre 1 e 2, porem caso a String seja "12" ou "1,,2" o mesmo deve dar falso, pois so deve estar apenas 1 caracter entre o 1 e o 2, nesse caso, sendo verdadeiro: "1,2", "1.2", "1e2", "132", etc... Porem o '.' pode nao substituir o "**\n**" se a linguagem não tiver suporte a **dotall**. Ou seja se voce dar um enter, o enter o ponto não considera se a flag "**s**", porem algumas linguagens não tem suporte a flag "**s**" como o Javascript. 

`\n` => Procura por quebra de linhas na String (quando da um Enter). O ponto não o substitui se o dotall não estiver ativado.

`\t` => Procura por tabulação na String (Quando da um tab).

`\s` => Procura por tabulação ou Quebra de linha e espaço em branco (Quando da um tab, um espaço ou um enter).

`\u` => Esse meta-caracter é o unicode, ele permite procurar algorismos de outros alfabetos passando o código, aqui uma tabela para saber quais são esses códigos: [Tabela de Unicodes](https://unicode-table.com/pt/), para usar você coloca o meta-caracter concatenado com o código do caracter que voce quer avaliar, por exemplo: "**\u02AC**" sendo esse caracter equivalente a "**ʬ**"
