import { Application, Router, Context} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
const app = new Application();
import { Query } from './graphql/Schema/query.js'
import { Mercadoria, mercadoria } 
    from './graphql/Schema/mercadoria.js';
import { Fornecedor, fornecedor } 
    from './graphql/Schema/fornecedor.js';
import { User, user }
    from './graphql/Schema/user.js';

const typeDefs = gql`${
    Mercadoria+ 
    Fornecedor+
    User+
    Query
}`

const resolvers = {
    Query: {
        mercadoria,
        fornecedor,
        user       
    }
}

const GraphQLService = await applyGraphQL({
    path: '/graphql',
    typeDefs,
    resolvers,
    context: ctx => {
      return ctx.request.headers.get('authorization');  
    }
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
console.log('Server running int port ' + 9000);
await app.listen({ port: 9000 });