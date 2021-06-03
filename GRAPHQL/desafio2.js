module.exports = function(){
    const {ApolloServer,gql} = require('apollo-server');
    const typeDefs = gql `        
        type Produto{            
            nome:String!
            preco:Float!
            desconto:Float
            precoComDesconto:Float            
        }

        type Query{
            produtoEmDestaque:ID!
            produto:Produto!
        }
    `;

    const resolvers = {
        Produto:{                        
            precoComDesconto: produto => produto.preco - produto.desconto
        },        
        Query:{
            produtoEmDestaque: () => parseInt(Math.random() * 99),                        
            produto: () => (
                {
                    nome:"Computador",
                    preco:9999,                    
                    desconto: 999,                   
                })
        }
    }

    const server = new ApolloServer({
            typeDefs,
            resolvers
    });

    server
        .listen()
        .then(_ => console.log('servidor rodando'))
        .catch(error => console.log(error));
}
