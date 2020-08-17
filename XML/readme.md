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
