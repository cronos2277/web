module.exports = function(){
    const {ApolloServer,gql} = require('apollo-server');
    const typeDefs = gql `        
        scalar MinhaData
        type Query{
            id:ID!                        
            string:String
            data:MinhaData
        }
    `;

    const resolvers = {
        Query:{
            id: () => parseInt(Math.random() * 99),
            string: () => "String retornada.",
            data: () => new Date
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
