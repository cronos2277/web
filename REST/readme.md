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
