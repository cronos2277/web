module.exports = function(){
    const {ApolloServer,gql} = require('apollo-server');
    const typeDefs = gql `
        #Pontos de entrada da API
        type Query{
            id:ID
            int:Int
            float:Float
            boolean:Boolean
            string:String
        }
    `;

    const resolvers = {
        Query:{
            id: () => 1,
            int: () => 3232,
            float: () => 10.50,
            boolean: () => true,
            string: () => "texto"
        }
    };

    const server = new ApolloServer({
            typeDefs,
            resolvers
    });
    server
    .listen(4004)
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