# XSD
## Recomendação
Aqui é usado o plugin XML de autoria da empresa Red Hat no software Visual Studio Code, dificilmente você conseguirá fazer um XSD sem o auxilio de um software e plugin como esses.

## Definindo Elementos
[Arquivo](./xsd1.xml)
### XML 1
    <?xml version="1.0" encoding="UTF-8"?>
    <root>
        <children>
            <name>Filho 1</name>
            <child>Neto 1</child>
            <child>Neto 2</child>
        </children>
        <children>
            <name>Filho 2</name>
        </children>
    </root>

[Arquivo](./xsd1.xsd)
### XSD 1
    <?xml version="1.0" encoding="UTF-8"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="root">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="children" minOccurs="1" maxOccurs="unbounded">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:element name="name" type="xs:string"/>
                                <xs:element name="child" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>
                            </xs:sequence>
                        </xs:complexType>                
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
        </xs:element>
    </xs:schema>

## Básico
Um arquivo XSD precisa ter a anotação de XML `<?xml version="1.0" encoding="UTF-8"?>` assim como um XML qualquer. Após isso precisamos definir um namespace `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">`, o namespace **xs** é uma recomendação para definição de um schema, de todo modo você precisar definir ao menos um esquema. Aqui temos a definição do esquema `xmlns:xs="http://www.w3.org/2001/XMLSchema"`, sendo que essa url *http://www.w3.org/2001/XMLSchema* uma mera recomendação. A definição dos elementos segue a mesma lógica que o DTD, você deve começar a definir o elemento pai e ir avançando para os filhos.

## Tag :schema
`<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"></xs:schema>` => Aqui dentro estará toda as regras para a validação do XML.

## Tag :complexType
`<xs:complexType>/<xs:complexType>` => Aqui estamos informando que o atributo é complexo, no caso que o atributo tem uma sequência e etc... necessário usar quando o elemento tiver sub-elementos.

## Tag :sequence
`<xs:sequence>` => Aqui definimos a sequencia com que os elementos devem aparecer no XML, a ordem definida aqui deve estar refletida no XML para que o mesmo possa ser validado.

## Tag :element
`<xs:element name="root"></xs:element>` => Aqui definimos como deve se comportar cada elemento através dessa tag e de seus valores.

### Atributo name de Tag :element
`<xs:element name="root"></xs:element>` => aqui estamos definindo o atributo para o elemento raiz, que nesse exemplo seria esse `<root></root>`, através do atributo `name` da tag `namespace:element`, essa seria a definição mais básica, e através da tag **name** o XSD sabe a qual elemento estamos nos referindo. 

### Atributo type de Tag :element
`<xs:element name="name" type="xs:string"/>` => No XSD é possível definir o tipo de dado que o elemento irá receber. Repare que o elemento que irá conter o dado sequer precisa ter corpo e além disso pode ter o seu tipo definido, ao passo que os elementos que possuem sub-elementos são ligeramente diferentes e possuem corpo. Devido a essa propriedade `type="xs:string"`, aqui definimos que o elemento deve receber um valor string.

### Atributo minOccurs,maxOccurs de Tag :element
`<xs:element name="child" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>` => Aqui você basicamente define a frequencia com que o elemento deve aparecer, se omitido os valores de **minOccurs** e **maxOccurs** o padrão é no mínimo 1 e no máximo 1, ou seja obrigatório e deve aparecer apenas uma vez.

`minOccurs` => Aqui definimos a ocorrência mínima, se colocado o valor como zero, logo o elemento se torna opcional, o valor passado aqui deve ser um número pertencente ao conjunto dos números naturais. Se omitido o limite mínimo é 1.

`maxOccurs` => Aqui definimos a ocorrência máxima, no caso a quantidade com que esse elemento se repete não pode ultrapassar o estipulado aqui, o número passado como atributo deve ser um número pertencente ao conjunto dos números naturais ou o valor **unbounded**, caso a quantidade de repetição máxima seja infinita, ou seja não existe limite máximo. Se omitido o limite máximo é 1.

## XSD Atributos
[Arquivo](./xsd2.xml)
### XML 2
    <?xml version="1.0" encoding="UTF-8"?>
    <root attr1="texto" attr2="0" attr3="true"/>

[Arquivo](./xsd2.xsd)
### XSD 2
    <?xml version="1.0" encoding="UTF-8"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="root" >   
            <xs:complexType>            
                <xs:attribute name="attr1" type="xs:string" use="required"/>
                <xs:attribute name="attr2" type="xs:integer" use="optional"/>
                <xs:attribute name="attr3" type="xs:boolean"/>                                   
                <xs:attribute name="attr4" type="xs:decimal" default="0.0"/>                                   
                <xs:attribute name="attr5" type="xs:date" fixed="2001-01-01"/>                                   
                <xs:attribute name="attr6" type="xs:time" fixed="00:00:00" />                                   
            </xs:complexType>                
        </xs:element>
    </xs:schema>

### required
Para que o atributo seja obrigatório no elemento em questão, ele deve ser especificado como um atributo de *use*, como nesse exemplo: `<xs:attribute name="attr1" type="xs:string" use="required"/>`, no use você também pode setar como opcional `<xs:attribute name="attr2" type="xs:integer" use="optional"/>`, mas isso é desnecessário, uma vez que o padrão é esse, se não for explicitado a obrigatóriedade conforme informado.

### default
Aqui definimos um valor padrão caso o atributo seja omitido ou não seja definido um valor a ele na tag, como aqui não definimos nenhum valor `<root attr1="texto" attr2="0" attr3="true"/>` a *attr4*, logo o valor para o *attr4* será o definido aqui: `<xs:attribute name="attr4" type="xs:decimal" default="0.0"/>`.

### Fixed
Diferente do default o valor desse atributo sempre vai ser o especificado o XSD e nunca vai mudar. Na prática ele funciona como um atributo oculto no XML que é específicado no XSD, exemplo: `<xs:attribute name="attr5" type="xs:date" fixed="2001-01-01"/> `.

### Atributos
Como você pode ver aqui estamos definindo uma tag sem corpo: `<root attr1="texto" attr2="0" attr3="true"/>`, uma tag sem corpo é um elemento complexo por mais paradoxo que isso pareça e deve estar envolto da tag `<xs:complexType>`. Aqui nessa tag começamos a definir os atributos `xs:attribute`. Todos os atributos devem obrigatóriamente ter um `name` e um `type` definido.

#### xs:string
`<xs:attribute name="attr1" type="xs:string" use="required"/>` => Aqui estamos definindo um dado do tipo String com o nome de attr1, ele é obrigatório e deve ser composto de texto.

#### xs:integer
`<xs:attribute name="attr2" type="xs:integer" use="optional"/>` => Um atributo com esse tipificado deve ser um número inteiro. Por mais que seja um número o mesmo deve estar envolto de aspas dupla no XML.

#### xs:boolean
`<xs:attribute name="attr3" type="xs:boolean"/>` => Esse atributo aceita apenas **true** ou **false**. Lembre-se que coloca-lo dentro de aspas no XML.

#### xs:decimal
`<xs:attribute name="attr4" type="xs:decimal" default="0.0"/>` => Esse atributo aceita números com pontos, ou seja numeros com casas decimais. Por mais que seja um número o mesmo deve estar envolto de aspas dupla no XML.

#### xs:date
` <xs:attribute name="attr5" type="xs:date" fixed="2001-01-01"/> ` => repare no padrão da data `2001-01-01`, o padrão deve ser primeiro o ano com 4 dígitos, seguido do mês e por fim seguido do dia, tudo isso dentro de string lá no XML, porém como esse valor é fixo ele deve ser ocultado do xml.

#### xs:time
`<xs:attribute name="attr6" type="xs:time" fixed="00:00:00" /> ` => Aqui temos o padrão para horário: `00:00:00` no caso os dois primeiros zero são as horas, os zeros do meio os minutos e por fim os segundos, esse é o padrão a ser seguido, sempre dentro de aspas duplas no xml, mas como o valor é fixo e opcional, devido a omissão do `use=required`, logo esse atributo deve ser omitido do XML.

## XSD Restrição
[Arquivo](./xsd3.xml)
### XML 3
    <?xml version="1.0" encoding="UTF-8"?>
    <pessoas>
        <pessoa nome="Fulano" id="1" cpf="123.456.789-00"/>    
        <pessoa nome="Beltrano" id="2" cpf="321.654.987-47"/>    
        <pessoa nome="Ciclano" id="3" cpf="354.621.940-82"/>    
    </pessoas>

[Arquivo](./xsd3.xsd)
### XSD 3
    <?xml version="1.0" encoding="UTF-8"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="pessoas">
            <xs:complexType>
                <xs:sequence>                
                    <xs:element name="pessoa" maxOccurs="unbounded">                                                            
                        <xs:complexType>     
                            <xs:attribute name="nome">
                                <xs:simpleType>
                                    <xs:restriction base="xs:string">
                                        <xs:minLength value="4"/>                                    
                                    </xs:restriction>
                                </xs:simpleType>
                            </xs:attribute>                                                                         
                            <xs:attribute name="id" use="required">
                                <xs:simpleType>
                                    <xs:restriction base="xs:integer">                                    
                                        <xs:minInclusive value="0"/>                                                                      
                                    </xs:restriction>
                                </xs:simpleType>
                            </xs:attribute>                                                               
                            <xs:attribute name="cpf" use="required">                      
                                <xs:simpleType>
                                    <xs:restriction base="xs:string">
                                        <xs:pattern value="\d{3}\.\d{3}\.\d{3}\-\d{2}"/>
                                        <xs:minLength value="11"/>
                                        <xs:maxLength value="14"/>
                                    </xs:restriction>
                                </xs:simpleType>
                            </xs:attribute>                                                              
                        </xs:complexType>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
        </xs:element>
    </xs:schema>

### Atributos
`<xs:simpleType>` => Com esse atributo, você pode definir restrições ao elemento, dentre outras coisas, o objeto disso é restringir a quantidade de valores válidos. Nesse exemplo estamos usando dentro de um atributo e com o auxilio do restriction.

`<xs:restriction base="xs:string|integer|date|etc... ">` => Aqui é definido as restrições, essa tag deve ficar dentro de uma tag **simple** e deve ter um **base** com o tipo de dado que será aceito.

`<xs:minLength value="4"/>` => Quantidade mínima de caracteres. No caso os nomes devem ter no mínimo 4 caracteres.

` <xs:maxLength value="14"/>` => Aqui definimos o número máximo de caracteres.

`<xs:minInclusive value="0"/>` => Aqui informamos o número mínimo a ser aceito, no caso zero, logo numeros negativos não será aceito.

`<xs:pattern value="\d{3}\.\d{3}\.\d{3}\-\d{2}"/>` => Através do pattern você pode definir uma expressão regular para que o dado possa ser validado, caso o dado não bata com a essa expressão regular, o dado é invalidado.

Repare que todos esses parametros estão dentro de cada atributo, os definindo.