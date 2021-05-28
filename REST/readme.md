# Api REST

## Api REST com o Swagger
[Swagger](https://swagger.io)

[Documentação do Swagger](https://swagger.io/docs/)

[Api Versão 2](https://swagger.io/specification/v2/)

[Api Especificação atual](https://swagger.io/specification/)

### Exemplo apenas com os campos obrigatórios
[funcional](funcional.yaml)

    swagger: "2.0"
    info:
        title: Minha Api
        version: "0.0.1"
    paths:
        /rotas:
            get:
                responses:
                    default:
                    description: Problemas nas requisições

#### No YAML
No caso aqui temos o minimo para funcionar, aqui `swagger: "2.0"` especificamos a aplicação e a versão que usaremos para criar a nossa **API REST**. Info também é um campo obrigatório, ao qual você deve indicar obrigatório dentro dele o título e a versão da api, nesse caso `Minha APi` e `0.0.1`. Após isso temos os Path.

##### PATH
Toda essa parte do *path* é obrigatória, na sua forma básica, o mesmo deve conter o método http a ser atendido, pelo menos o *get*, conforme ilustrado acima. Em cada método se faz necessário especificar as respostas, nessa, você deve conter os códigos *HTTP*, ou até mesmo o *default* caso você queira lidar de uma maneira mais genérica, além claro das descrições, representado por *description*.

#### Exemplo com o mínimo para funcionar, visual:
![funcional](.funcional.png)

### Adicionando campos extras
[informativo](informativo.yaml)

    swagger: "2.0"
    info: 
        title: Minha Api
        description: Exemplo Api
        version: "0.0.1"
    contact: 
        name: Jotape 
        email: email@email.com
        url: http://meusite.com
    host: api.host.com
    schemes:
        - https
    basePath: /subdominio
    produces: 
        - application/json
    paths:
        /rotas:
            get:
            responses:
                default:
                description: Problemas nas requisições

#### Contatos
Você pode colocar um campo de contatos se for o caso, uma vez inserido e-mail e name são campos obrigatórios, além disso é possível colocar uma *url*:

    contact: 
        name: Jotape 
        email: email@email.com
        url: http://meusite.com

####  :schemes, :produces, :host e :basePath
Através do `host` você define o domínio alvo e com base no `basePath` você define um subdominio raiz caso tenha, ambos os campos não são obrigatórios e o `basePath` só é útil caso você use um diretório dentro de seu domínio. Em `:schemes` você define o protocolo que será usado, podendo ser usado: `http`, `https`, `ws`, `wss`, esse campo pode ser facilmente omitido, mas quanto mais informação tiver a sua API, melhor será a documentação e o código resultante. Para concluir, temos o campo `:produces`, que indica que tipo de resposta o servidor irá dar, o padrão se omitido é `application/json`, esse campo seria o equivalente a `Content-Type` de uma requisição *http*.

    host: api.host.com
    schemes:
        - https
    basePath: /subdominio
    produces: 
        - application/json

#### Output com contatos e outros campos extras acima:
![informativo](.informativo.png)

### Definitions
[Definitions](definitions.yaml)

    swagger: "2.0"
    info:
        title: Minha Api
        description: Exemplo Api
        version: "0.0.1"
    contact:
        name: Jotape 
        email: email@email.com
        url: http://meusite.com
    host: api.host.com
    schemes:
        - https
    basePath: /subdominio
    produces: 
        - application/json
        - application/xml
    paths:
        /rotas:
            get:
            responses:
                default:
                    description: Problemas nas requisições
            
    definitions:
        Cliente:
            type: object
            properties:
                id:
                    type: integer
                    description: Identificador único do usuário.
                nome:
                    type: string
                    description: Nome do usuário.
        Error:
            type: object
            properties:
                code:
                    type: integer
                    description: Código do erro.
                message:
                    type: string
                    description: Mensagem referente ao erro.

#### Definitions
Aqui você cria tipos de dados customizáveis, para compor tipos mais complexo, funciona de maneira semelhante aos registros das linguagens de programação estruturadas. Um campo customizável deve ter um `type` para indicar o tipo, nesse caso temos um objeto, mas poderia ser um array, ou algum outro tipo de dados qualquer, além disso caso seja um objeto, devemos informar as propriedades.

##### Cliente

    Cliente:
        type: object
        properties:
            id:
                type: integer
                description: Identificador único do usuário.
            nome:
                type: string
                description: Nome do usuário.

Aqui temos um cliente que tem um `id` e um `nome`, o primeiro sendo do tipo inteiro e o segundo do tipo string, o interessante é modelar isso de acordo com as entidades, no caso cada um com a sua descrição cuja a importância é mais para fins de documentação.

##### Error

    Error:
        type: object
        properties:
            code:
                type: integer
                description: Código do erro.
            message:
                type: string
                description: Mensagem referente ao erro.
   
Algo análogo ocorre com o **Error**, porém a mesma tem propriedades diferentes, ambos poderão ser usados para compor o tipo de dados do PATH.

#### Imagem envolvendo definitions
![definitions](.definitions.png)