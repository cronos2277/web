module.exports = function(){
    const {ApolloServer,gql} = require('apollo-server');
    const typeDefs = gql `        
        type Pessoa{
            identity:ID
            nome:String
        }
        
        type Query{
            id:ID!                                    
            pessoa:Pessoa
        }
    `;

    const resolvers = {        
        Query:{
            id: () => parseInt(Math.random() * 99),                        
            pessoa: () => (
                {
                    identity:parseInt(Math.random() * 99),
                    nome: "Da Silva"
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
