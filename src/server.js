import { Application, Router, Context} from "./deps.js";
import { applyGraphQL, gql } from './deps.js';
const app = new Application();
//resolvers
import { TipoPerfil } from './deps.js'

import { Query } from './graphql/Schema/query.js'
import { Mercadoria, mercadoria } 
    from './graphql/Schema/mercadoria.js';
import { Fornecedor, fornecedor } 
    from './graphql/Schema/fornecedor.js';
import { user }
    from './graphql/Resolvers/user.js';
import { User }
    from './graphql/Schema/User.js';
import  { UserInput } from './deps.js';
import { Mutation } from './graphql/Schema/mutation.js'
import { createUser } from './graphql/Resolvers/createUser.js'

const typeDefs = gql`${
    TipoPerfil+
    Mercadoria+ 
    Fornecedor+
    User+
    UserInput+
    Query+
    Mutation
}`

const resolvers = {
    Query: {
        mercadoria,
        fornecedor,
        user,       
    },
    Mutation: {
        createUser
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
