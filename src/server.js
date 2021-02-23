import { Application, Router, Context} from "./deps.js";
import { applyGraphQL, gql } from './deps.js';
const app = new Application();

//Schema
import { TipoPerfil } from './deps.js'
import { Perfil } from './deps.js' 
import { Query } from './graphql/Schema/query.js'
import { Mercadoria } from './graphql/Schema/mercadoria.js';
import { Fornecedor} from './graphql/Schema/fornecedor.js';
import { User } from './graphql/Schema/user.js';
import { Mutation } from './graphql/Schema/mutation.js'
import { UserInput } from './deps.js';
import { MercadoriaInput } from './deps.js'
import { FornecedorInput } from './deps.js';
//Resolvers
import { user } from './graphql/Resolvers/user.js';
import { createUser } from './graphql/Resolvers/createUser.js'

import { createPerfil } from './graphql/Resolvers/createPerfil.js'
import { perfil } from './graphql/Resolvers/perfil.js'

import { mercadoria } from './deps.js' 
import { createMercadoria } from './deps.js'

import { fornecedor } from './deps.js'
import { fornecedorCreate } from './deps.js'


const typeDefs = gql`${
    Perfil+
    TipoPerfil+
    MercadoriaInput+
    Mercadoria+
    FornecedorInput+
    Fornecedor+    
    User+
    UserInput+
    Query+
    Mutation
}
`;

const resolvers = {
    Query: {
        mercadoria,
        fornecedor,
        user,       
    },
    Mutation: {
        createUser,
        createPerfil,
        createMercadoria,
        fornecedorCreate,
    },
    User:{
        perfil,
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
