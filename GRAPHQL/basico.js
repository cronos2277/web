module.exports = function(){
    const {ApolloServer,gql} = require('apollo-server');
    const typeDefs = gql `
        #Pontos de entrada da API
        type Query{
            exemplo:String
            hoje:String
        }
    `;

    const resolvers = {
        Query:{
            exemplo(){
                return "Exemplo retornado!"
            },
            hoje: () => new Date().toDateString()
        }
    };

    const server = new ApolloServer({
            typeDefs,
            resolvers
    });

    server
        .listen()
        .then(param => 
            {
                console.log(`
                    url: ${param.url},
                    address: ${param.address}, 
                    family: ${param.family},
                    port: ${param.port},
                    server: ${param.server},
                    subscriptionsPath: ${param.subscriptionsPath},
                    subscriptionsUrl: ${param.subscriptionsUrl}
                `);             
            }
        );
}