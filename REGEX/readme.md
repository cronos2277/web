# REGEX
## Flags
`/EXPRESSAO/g` => procura de maneira global, caso seja omitido apenas retorna o primeiro resultado.

`/EXPRESSAO/i` => Ignora maiúsculo e minúsculo e trata ambos como iguais, no caso faz uma verificação case-insensitive.

`/EXPRESSAO/s` => **Dotall**, faz com que o **'.'** tambem possa substituir o **\n** algo desabilitado por padrao. Não é compatível com todas as linguagens, como javascript por exemplo, uma alternativa a essa flag, seria usar na expressão `[\s\S]` ao invés de `.`, nesse caso estamos incluindo tudo que for espaço e tudo que não for espaço, logo irá pegar qualquer caracter.

`/EXPRESSAO/m` => Multiline, nesse caso o regex trata Strings com multiplas linhas de maneira independente, ou seja para o regex cada **\n** passa a ser de fato uma nova linha, ou seja uma borda. Sem essa flag o regex não entende o **\n** como uma borda em toda a string, ou seja na ausência dessa flag, mesmo com \n a String inteira é analisada de maneira contínua, com a flag cada \n vira uma borda. Se por exemplo tiver duas linhas a primeira **Oi mundo** e a segunda **Tchau planeta**, e um **\n** entre elas, ou seja:

`Oi mundo\nTchau planeta`

Com a flag **m** ativada, tanto o **Oi** como o **Tchau** podem ser enchergado pelo caracter de borda `^`, assim como tanto o **mundo** como o **planeta** poderiam ser enchergado por `$`, uma vez que o regex entende que se trata de 2 linhas separadas, devido ao "**\n**", agora com a flag **m** desabilitada, apenas o **Oi** é atendido pelo `^`, assim como apenas o **planeta** seria atendido pelo `$`, pois o regex atende tudo como sendo uma linha só.

## Meta-caracteres 

`\`=> metacaracter de escape.

`|` => metacaracter de "ou".

`.` => Substitui 1 caracter, ex: /1.2/ => nesse caso ele substitui qualquer caracter que esteja entre 1 e 2, porem caso a String seja "12" ou "1,,2" o mesmo deve dar falso, pois so deve estar apenas 1 caracter entre o 1 e o 2, nesse caso, sendo verdadeiro: "1,2", "1.2", "1e2", "132", etc... Porem o '.' pode nao substituir o "**\n**" se a linguagem não tiver suporte a **dotall**. Ou seja se voce dar um enter, o enter o ponto não considera se a flag "**s**", porem algumas linguagens não tem suporte a flag "**s**" como o Javascript. 

`?` => Como quantificador substitui zero ou um caracter, ou seja ele é chamado de quantificador opcional, porém se houver mais de uma ocorrencia ele dá falso. Se colocado após um codificador, ou seja após de um "**+**" ou seja após um "**'*'**" ou valores entre chaves, o mesmo opera como um modificador para lazy. Por padrão os modificadores operam como guloso, pegando a maior quantidade de resultado possível, quando você usa o interrogação como um operador lazy, então ele passa a pegar a menor quantidade possível de resultados, ou seja a lógica é invertida. 

`*` => Coringa, esse quantificador indica zero ou mais, ou seja pode ter zero ocorrencias ou várias ocorrências.

`+` => Obrigatório, indica que deve ter uma ou mais ocorrências.

`{m,n}` => Indica que a ocorrência deve ocorrer no mínimo o numero de ocorrencias do "**m**" e no máximo o número de ocorrências do "**n**", por exemplo: **/a{3,5}/**, no mínimo deve ter três ocorrências e no máximo cinco ocorrências, o **n** pode ser omitido, nesse caso apenas tem um limite mínimo, exemplo: **/{2,}/** Ou seja precisa ter uma ocorrênica mínima de duas vezes.

`\n` => Procura por quebra de linhas na String (quando da um Enter).

`\t` => Procura por tabulação na String (Quando da um tab).

`\s` => Procura por tabulação ou Quebra de linha e espaço em branco (Quando da um tab, um espaço ou um enter). **\S**(maiusculo eh a negacao, ou seja qualquer caracter que nao seja enquadrado no \s).

`\d` => Procura por Digitos de zero a nove, sendo o "**\D**" o não digito.

`\w` => procura por Dígito + texto + underline. Sendo o **"\W"** a negação.

`\u` => Esse meta-caracter é o unicode, ele permite procurar algorismos de outros alfabetos passando o código [Tabela de Unicode](https://unicode-table.com/pt/), para usar você coloca o meta-caracter concatenado com o código do caracter que voce quer avaliar, por exemplo: "**\u02AC**" sendo esse caracter equivalente a "**ʬ**"

`\b` => Caracter de borda, na prática, esse meta-caracter se comporta como um `\W`, ou seja a negação do `\w`.Se colocado antes da expressao ele da match em todas as ocorrências que sejam  `\W` na frente do caracter, se depois ele faz o mesmo com os caracteres a direita, essa estratégia de bordas por palavras funciona bem quando não se tem acentos na String. Se a String tiver acentos, os acentos são interpretados com borda, logo para Strings com caracteres unicode ela é inútil. A negação seria `\B`

`[]` => Tudo que estiver dentro de colchetes eh interpretado como conjunto. Ex: **[sar]** se colocado de maneira literal dentro do operador dessa forma, primeiro ele procura por um "**s**" ou "**a**" ou "**r**". Quando se tem um hífem no meio, apenas no meio pois se estiver no início ou no fim, o hífem é interpretado de maneira literal, nesse caso ele procurará por um range de caracter **[1-4]** ou seja ele ira nesse caso procurar por "**1**","**2**","**3**","**4**". Ou **[1-4a-c]**, nesse caso ele vai procurar por algarismos numericos de um a quatro e depois por
letras: "**a**","**b**","**c**" se nao houver a flag *i*, lembre se que o hifem ele deve estar a direita do primeiro valor da sequencia, geralmente 0, 1 ou a e a direita do ultimo valor do range, caso voce queira procurar mais de um range lembre que o hifem nao eh um separador de range, alem disso o hifem em lugar errado vira caracter literal a ser pesquisado. A sequencia desse
range é definida pla tabela ASCII podendo ser acessada aqui: [Tabela ASCII](https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm), por exemplo em um range do tipo [A-Z], sera procurado por caracteres que estejam no range entre o código **65** que eh a letra **A** no ascii, até o **90** que é a letra **Z** no ascii. Lembre-se de sempre respeitar o range, a esquerda do hifem o caracter com o menor valor na tabela ascii e a direita o maior.

`^` => Se dentro de colchetes indica que ele nega o grupo de dentro dos colchetes, ou seja para procurar por qualquer caracter que não seja os do grupo. Se no início de uma expressão regular logo após a primeira **/**, indica que aquela expressão regular deve estar obrigatóriamente no início do texto, se estiver no meio ou no fim, não bate, ou seja fora dos colchetes ele vira um caracter de borda, logo o meta-caracter `^` na posição `/^EXPRESSAO/` é diferente de `/[^EXPRESSAO]/`, no primeiro caso é um caracter de borda, no segundo um caracter de negação.

`$` => Esse caracter é um caracter de borda que indica que a expressão deve estar no final, exemplo `/ola$/`, essa expressão indica que a string deve terminar em **ola** para ser válida.

`()` => Tudo que estiver dentro de parenteses é um grupo, que diferente do conjunto ele procura por toda a sequencia informada dentro dos parenteses, por exemplo **(sar)**, nesse caso ele vai procura por **sar** dentro da String.

`\Numeros` => Aqui temos exemplos de retrovisores, no caso os retrovisores fazem referências a grupos, por exemplo: **\1** faz referencia ao primeiro grupo de caracteres de dentro de parenteses, **\2** segundo e por ai vai... Exemplo: `/(\d)(\w)/g` nessa expressão regular o **\1** seria o **\d** e o **\2** seria o **\w**, porem tem uma diferença a mais do que simplesmente repetir a expressão, por exemplo para dar match em **\1** não basta apenas ser dígito, mas tem que ser o mesmo dígito que o do **\d** informado, assim como o **\2** não apenas tem que ser um **\w** nesse exemplo, mas como também tem que ter o mesmo carácter que naquela posição. Você pode excluir a funcionalidade de retrovisor de um grupo usando a expressão **?:** na frente de qualquer caracter do grupo, exemplo: `/(\d)(?:\s)(\w)/g`, nesse exemplo como o segundo grupo tem o **?:**, logo o segundo retrovisor seria **\w**.

`?=` => Esse operadoro deve ser usados dentro de grupos, se usados dentro de grupos ele avalia se a direita do elemento a ser avaliado, ou seja para dar match, o caracter deve atender o requisito de estar a esquerda das condições de dentro do `(?=)`, exemplo: `/l(?=l)/gi`, nessa expressão para dar match, você precisa que seja um caracter **l**, com outro caracter **l** a direita, ou seja o caracter a ser procurado seria um **ll** o **l** da expressão, mais o **l** da expressão looking ahead `(?=l)`, agora se tivessemos um **g** na expressão looking ahead, ou seja essa expressão `(?=g)`, ficando: `/l(?=g)/gi` => nesse caso em específico, para dar match a expressão seria: **lg**, **l** da expressão mais o **g** do looking ahead. Porem a negação do looking ahead seria `?!` ficando o not looking ahead `(?!)`

## Observações
### Respeite o Range.
Quando for usar grupos, o caracter a esquerda do hífen deve estar sempre com o valor menor que o da direita do hífem, uma vez que a expressão regular aceita como um range de valores tudo que tiver o valor na tabela ascii dentro do range, incluindo o caracter da esquerda e da direita do hífem.

### Sobre Hífens
Hifens apenas indica range, apenas se tiver um caracter a esquerda e a direita dele e se somente estiver dentro de um grupo, fora dessas condições ele é interpretado como um caracter literal e não um meta-caracter.

### Sobre acento circunflexo.
Acento circunflexo ao inicio de uma expressão regular, mas fora de colchetes, indica que o texto a ser avaliado deve começar com aqueles caracteres subsequentes a ele, porém se dentro de colchetes ai ele muda de significado e vira um caracter de negação. Para um acento circunflexo ser um meta-caracter ou ele precisa estar no início da expressão, indicando que o texto deve ter aqueles caracteres no seu ínicio, ou ele deve estar dentro de colchetes, indicando que ele está negando aquele grupo, em qualquer outra posição ele passa a ser interpretado de maneira literal.

### Sobre Colchetes.
Qualquer meta-caracter dentro de colchetes, exceto: "**[**" "**]**" "**^**" "**-**", sempre serão tratados como literais, com relação a esses caracteres mencionados, a não ser que eles estejam dentro do contexto correto, eles serão tratados como literais ou poderão dar um erro no Regex.

### Modo Guloso ou preguiçoso.
No modo guloso os metacaracteres quantificadores procuram retornar a maior quantidade de resultados possíveis, enquanto que o preguiçoso prioriza pelo menor.
Por exemplo o **'*'** no modo preguiçoso tenta na medida do possível enviar zero ocorrência, que é o seu mínimo e quando no modo guloso ele prioriza o máximo que pode ser N. O mesmo vale para o "**+**" que no preguiçoso prioriza retornar uma ocorrência e no guloso N ocorrencias, ao tempo que no **?** prioriza zero no preguiçoso e 1 no guloso.w
mais informações aqui: **06 - Quantificadores.js**

### A diferença entre Grupos e Conjuntos
Em conjuntos é feito uma pesquisa por cada caracter, ao passo que nos grupos todos os caracteres de dentro dos parênteses formam uma unidade.

`/[sar]/g` => Pesquisa ou por **s** ou por **a** ou por **r** dentro do texto. 

`/(sar)/g` => pesquisa por **sar** dentro do texto.

## Regex Úteis

`/\d{3}\.\d{3}\.\d{3}\-\d{2}/g` => **CPF**

`/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g` => **Telefone do Brasil com DDD**

`/\S+@\w+\.\w{2,}(\.\w{2})?/g` => **Regex para validação de e-mail**

`/[/s/S]` => Essa expressão pode servir como o equivalente ao ponto dotall, caso a linguagem não de suporte a flag **s**, no caso essa expressão pega todo e qualquer caracter, uma vez que se pega o **/s** e a negação dele.

`/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g` => Pega qualquer IPV4 válido, incluindo endereço de loopback e endereços privados.

`/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{X,Y}$/gm` => Regex para senha complexa, que tenha números, letras e simbolos. Observação, se for usar substitua o **X** dentro das chaves pelo número mínimo de caracteres que deve ter a senha e o **Y** dentro das chaves, pela ocorrência máxima que pode ter, por exemplo, se a senha deve ter de 6 a 20 caracteres, teriamos o seguinte: `/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{6,20}$/gm`. Apenas faça a substituição dentro das chaves.

[Receitas de Regex](./Receitas.js) => Exemplo de como usar o Objeto RegExp do Javascript.
