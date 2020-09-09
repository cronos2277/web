# XSD
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