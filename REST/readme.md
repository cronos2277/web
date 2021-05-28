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