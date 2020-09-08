# XML
## Regras
 XML só pode ter apenas um elemento raiz, mas dentro do elemento raiz você pode ter N filhos.

 Um atributo deve ter valores atribuídos por um igual sempre, ou seja, isso **NÃO** é permitido ``<componente id>``, 
 
 apenas isso:`<componente id='valor'>` ou isso `<componente id="valor">`.

Não use caractéres especiais para criação de **elementos** ou **ids**, para eles vale as mesmas regras das variáveis, porem para valor de um elemento ou atributo, ai é diferente, mas não esqueça de definir o `encoding` no prólogo se for usar acentos ou caracteres especiais,  a recomendação é sempre **UTF-8**.

## ELEMENTOS

`<?xml version="1.0" encoding="utf-8" standalone="yes" ?>` => Prólogo indicando que o xml está na versão 1, tem codificação **UTF-8** e é considerado autônomo.

`<E>V</E>` => Nesse caso temos o elemento **E** com o valor **V**

`<E id='0'></E>` => Nesse caso temos o elemento **E** sem valor e com o atributo **id** igual a zero.

### CDATA

CDATA não é processado pelo XML, caso você queira passar um código ou algo do tipo você pode usar a estrutura abaixo.

    `<elemento>`
        `<![CDATA[`
            `<script>`
                `alert("Exemplo");`
            `</script>`
        `]]>`
    `</elemento>`

### Comentários
Usa se o `<!-- -->` para comentários como no HTML.

### Namespaces
sintaxe básica, coloque isso na sua tag: `xlmns:[prefixo]="[url]"` substitua o `[prefixo]` pelo o namespace que você quer colocar na sua tag e `[url]` como a url do seu namespace, voce pode definir **N** namespaces dentro da sua tag, mas cuidado para não os repetir prefixos.

## Arquivos de exemplo
[Exemplo Básico](./basico.xml)

[NAMESPACE](./namespace.xml)

## DTD Atributos
[Arquivo Exemplo de DTD](./dtd1.xml)

### Verificar se o arquivo DTD é válido
[xmlvalidation](https://www.xmlvalidation.com/)

### DTD Inline

Aqui temos um exemplo de arquivo DTD inline:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE root[
        <!ELEMENT root (obs*,children)>
        <!ELEMENT children (child+)>
        <!ELEMENT child (id?,name,(description|desc))>
        <!ELEMENT name (#PCDATA)>
        <!ELEMENT id (#PCDATA)>
        <!ELEMENT description (#PCDATA)>
        <!ELEMENT desc (#PCDATA)>
        <!ELEMENT obs (#PCDATA)>
    ]>
    <root>    
        <children>
            <child>
                <id>1</id>
                <name>Exemplo1</name>
                <description>Minha Descricao</description>            
            </child>
            <child>
                <name>Exemplo 2</name>
                <desc>Descricao 2</desc>
            </child>
        </children>
    </root>

Como se trata de um XML, precisamos disso `<?xml version="1.0" encoding="UTF-8"?>`, para começar um DTD inline basta colocar as regras do DTD dentro de `<!DOCTYPE root[]>`, lembrando que aqui vale a regra do sensitive case, então é *DOCTYPE* e o seu elemento raiz também deve seguir essa mesma regra. Para definição de tipos você usa *(#PCDATA)*, não importa o tipo se o mesmo conter um valor ele deve estar marcado com *(#PCDATA)*, o DTD não tipifica os arquivos, ele apenas destingue elementos pai de filhos, verifica a frequência e a ordem com que devem aparecer. Todos os elementos que contiverem valores você marca com *(#PCDATA)*, já os elementos que contém nós filhos, você coloca o nó filho na ordem que devem aparecer e quantas vezes.

#### Quantidade
**\*** => De zero a N ocorrências.

**?** => Opcional, de zero a uma ocorrência.

**+** => Uma ou mais ocorrências.

**NENHUM** => No mínimo 1 vez e no máximo uma vez, o elemento que não tiver marcado com nenhum desses caracteres devem aparecer exatamente uma vez.

Também é valido resaltar que ordem também, importa. Nesse caso por exemplo: `<!ELEMENT root (obs*,children)>`, estamos dizendo o **obs** é opcional, porém se ele aparecer deve ser obrigatóriamente como primeiro elemento antes do **children**, ou ser omitido, já no **children** temos que esse elemento deve aparecer uma vez, quando você não tipifica a cardinalidade é 1, logo as combinações válidas seriam:

##### com obs
    <root>
        <obs></obs>
        <children></children>
    </root>

##### sem obs

    <root>        
        <children></children>
    </root>

Nessa segunda linha `<!ELEMENT children (child+)>` temos a regra de que o **child** deve aparecer ao menos uma vez dentro do children. Ele é obrigatório e deve aparecer no mínimo uma vez e no máximo sem limites.

##### Pode aparecer uma única vez
    <root>
        <obs></obs>
        <children>
            <child></child>
        </children>
    </root>

##### ou pode aparecer N vezes, mas deve aparecer...

    <root>        
        <children>
            <child></child>
            <child></child>
            <child></child>
            <child></child>
        </children>
    </root>

#### Ordem
Aqui temos o interrogação que indica opcional, lembrando que diferente do asterisco, esse significa zero ou um, no caso não mais que um. Além disso a ordem aqui importa. `<!ELEMENT child (id?,name,(description|desc))>`, no caso o id pode ser omitido, mas se ele for aparecer ele deve ser obrigatóriamente o primeiro e aparecer apenas uma única vez.

##### ID aparecendo uma vez e ordem mantida e description, primeira possibilidade  
    ...
        <child>
                <id>1</id>
                <name>Exemplo1</name>
                <description>Minha Descricao</description>            
            </child>
    ...

##### ID Ocultado e ordem mantida e desc, segunda possibilidade    
    ...
            <child>
                <name>Exemplo 2</name>
                <desc>Descricao 2</desc>
            </child>
    ...

No caso a ordem com que foi definido os atributos importa e muito, no DTD isso é extremamente importante, outra coisa esse caracter funciona com um ou `|`, nesse trecho `(description|desc)` estamos dizendo que deve ser ou *description* ou *desc*, como não tem o asterisco, interrogação ou até mesmo o mais após esses parenteses, logo deve ter uma ocorrência de um ou outro elemento na ultima posição, lembrando que é um ou excludente, uma vez que a cardinalidade é exatamente 1.

## DTD Atributos

[dtd2.xml](./dtd2.xml)

##### XML Mais basico
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE children[
        <!ELEMENT children (child*)>
        <!ELEMENT child (#PCDATA)>
        <!ATTLIST children obrigatorio (valor1|valor2|valor3) #REQUIRED>
        <!ATTLIST child opcional CDATA #IMPLIED>
        <!ATTLIST child valor CDATA #REQUIRED >
    ]>
    <children obrigatorio="valor2"></children>

### !ATTLIST
Dessa forma você define um atributo a lógica sintática segue a seguinte lógica: `<!ATTLIST [NOME_ELEMENTO] [NOME_ATRIBUTO] [TIPO_DE_DADO] #[IMPLIED_OU_REQUIRED]>`

### CDATA
Esse tipo de dado é mais abrangente que o **#PCDATA**, ou seja ele aceita muito mais caracteres que esse tipo, caso o atributo seja composto, use o hifen ou underline, mas não use espaço, isso para o nome dos atributos, agora para os valores ai deve estar dentro de aspas, como valor vale tudo, agora como nome de atributo fique esperto com os espaço se precisar criar um atributo com nome composto.

### ENUM
`<!ATTLIST children obrigatorio (valor1|valor2|valor3) #REQUIRED>` Aqui temos um exemplo de como funciona uma **ENUM**, aqui `(valor1|valor2|valor3)`, estamos definindo os valores possiveis para o campo **obrigatorio**.

### #REQUIRED e #IMPLIED
`#REQUIRED` => Aqui definimos que o atributo é obrigatório.

`#IMPLIED` => Aqui definimos que o atributo é opcional, podendo existir ou não.

#### Com o Child definido
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE children[
        <!ELEMENT children (child*)>
        <!ELEMENT child (#PCDATA)>
        <!ATTLIST children obrigatorio (valor1|valor2|valor3) #REQUIRED>
        <!ATTLIST child opcional CDATA #IMPLIED>
        <!ATTLIST child valor CDATA #REQUIRED >
    ]>
    <children obrigatorio="valor2">
        <child valor="1"></child>
        <child valor="2" opcional="Valor Opcional"/>
    </children>

Esse atributo **obrigatorio** no children é obrigatório, tendo que ser necessariamente *valor1* ou *valor2* o*valor3*, caso tenha algum elemento child esse mesmo deve ter um **valor**, podendo ser esse valor qualquer tipo de dado, além disso você pode definir um valor opicional com o atributo **opcional** no elemento child, e o elemento child como é um *#PCDATA*, ele pode ter a sua forma sem corpo `<child valor="2" opcional="Valor Opcional"/>`.