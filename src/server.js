import { Application, Router} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
import { PORT } from './config.js';
const app = new Application();
import { Query } from './graphql/Schema/query.js'
import {
            Mercadoria,
            mercadoria,
       } 
from './graphql/Schema/mercadoria.js';


const typeDefs = gql`${
    Mercadoria+ 
    Query
}`

const resolvers = {
    Query: {
        mercadoria
    }
}

const GraphQLService = await applyGraphQL({
    path: '/graphql',
    typeDefs,
    resolvers
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
console.log('Server running int port ' + PORT);
await app.listen({ port: PORT });