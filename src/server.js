import { Application, Router, Context} from "./deps.js";
import { applyGraphQL, gql } from './deps.js';
const app = new Application();
import { Query } from './graphql/Schema/query.js'
import { Mercadoria, mercadoria } 
    from './graphql/Schema/mercadoria.js';
import { Fornecedor, fornecedor } 
    from './graphql/Schema/fornecedor.js';
import { User, user }
    from './graphql/Schema/user.js';
import  { UserInput } from './deps.js';

const typeDefs = gql`${
    Mercadoria+ 
    Fornecedor+
    User+
    UserInput+
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
        const token = ctx.request.headers.get('authorization');        
        return {
            token
        };
    }
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
        
console.log("Server running at port " + 9000);
await app.listen({ port: 9000 })
