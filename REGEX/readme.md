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

`\u` => Esse meta-caracter é o unicode, ele permite procurar algorismos de outros alfabetos passando o código [https://unicode-table.com/pt/](Tabela de Unicode), para usar você coloca o meta-caracter concatenado com o código do caracter que voce quer avaliar, por exemplo: "**\u02AC**" sendo esse caracter equivalente a "**ʬ**"

`[]` => Tudo que estiver dentro de colchetes eh interpretado como grupo. Ex: **[sar]** se colocado de maneira literal dentro do operador dessa forma, primeiro ele procura por um "**s**" ou "**a**" ou "**r**". Quando se tem um hífem no meio, apenas no meio pois se estiver no início ou no fim, o hífem é interpretado de maneira literal, nesse caso ele procurará por um range de caracter **[1-4]** ou seja ele ira nesse caso procurar por "**1**","**2**","**3**","**4**". Ou **[1-4a-c]**, nesse caso ele vai procurar por algarismos numericos de um a quatro e depois por
letras: "**a**","**b**","**c**" se nao houver a flag *i*, lembre se que o hifem ele deve estar a direita do primeiro valor da sequencia, geralmente 0, 1 ou a e a direita do ultimo valor do range, caso voce queira procurar mais de um range lembre que o hifem nao eh um separador de range, alem disso o hifem em lugar errado vira caracter literal a ser pesquisado. A sequencia desse
range é definida pla tabela ASCII podendo ser acessada aqui: [https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm](Tabela ASCII), por exemplo em um range do tipo [A-Z], sera procurado por caracteres que estejam no range entre o código **65** que eh a letra **A** no ascii, até o **90** que é a letra **Z** no ascii.