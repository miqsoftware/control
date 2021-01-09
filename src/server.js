import { Application, Router} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
const app = new Application();
import { Query } from './graphql/Schema/query.js'
import { Mercadoria, mercadoria } 
    from './graphql/Schema/mercadoria.js';
import { Fornecedor, fornecedor } from './graphql/Schema/fornecedor.js';

const typeDefs = gql`${
    Mercadoria+ 
    Fornecedor+
    Query
}`

const resolvers = {
    Query: {
        mercadoria,
        fornecedor
    }
}

const GraphQLService = await applyGraphQL({
    path: '/graphql',
    typeDefs,
    resolvers
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
console.log('Server running int port ' + 9000);
await app.listen({ port: 9000 });