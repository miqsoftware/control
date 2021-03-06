import { Application,
         Router, 
         Context,
         oakCors} from "./deps.js";
import { applyGraphQL, gql } from './deps.js';
const app = new Application();
app.use(
    oakCors({

    })
);
//Schema
import { 
    TipoPerfil,
    Perfil,
    Query,
    Mercadoria,
    Fornecedor,
    User,
    Mutation,
    UserInput,
    MercadoriaInput,
    FornecedorInput,
    Cliente,
    ContasPagar,
    ClienteInput,
    ContasReceberInput,
    ContasReceber,
    Departamento,
    EntradaMercadoria,
    EntradaMercadoriaInput,
    ItensVendidos,
    ItensVendidosInput,
    Pagamento,
    PagamentoInput,
    Movimento,
    MovimentoInput,
} from './deps.js'

//Resolvers
import { user } from './graphql/Resolvers/user/user.js';
import { createUser } from './graphql/Resolvers/user/createUser.js'

import { perfil } from './graphql/Resolvers/perfil/perfil.js'
import { createPerfil } from './graphql/Resolvers/perfil/createPerfil.js'

import { mercadoria } from './deps.js' 
import { createMercadoria } from './deps.js'

import { fornecedor } from './deps.js'
import { fornecedorCreate } from './deps.js'

import { clienteCreate } from './deps.js'

import { contaspagar } from './deps.js'
import { contasreceberCreate } from './deps.js'

import { departamento } from './deps.js'
import { departamentoCreate } from './deps.js'

import { entradaMercadoria } from "./graphql/Resolvers/entradaMercadoria/entradaMercadoria.js";
import { entradaMercadoriaCreate } from './deps.js'

import { itensVendidos } from './deps.js'
import { itensVendidosCreate } from './deps.js'

import { pagamentoCreate } from './deps.js'

const typeDefs = gql`${
    Perfil+
    TipoPerfil+
    MercadoriaInput+
    Mercadoria+
    FornecedorInput+
    Fornecedor+    
    User+
    UserInput+
    Cliente+
    ClienteInput+
    ContasPagar+
    ContasReceberInput+
    ContasReceber+
    Departamento+
    EntradaMercadoriaInput+
    EntradaMercadoria+
    ItensVendidosInput+
    ItensVendidos+
    Pagamento+
    PagamentoInput+
    Movimento+
    MovimentoInput+
    Query+
    Mutation
}
`;

const resolvers = {
    Query: {
        mercadoria,
        fornecedor,
        user,   
        contaspagar,
        departamento,
        perfil,
        entradaMercadoria,
        itensVendidos,   
    },
    Mutation: {
        createUser,
        createPerfil,
        createMercadoria,
        fornecedorCreate,
        clienteCreate,
        contasreceberCreate,
        departamentoCreate,
        entradaMercadoriaCreate,
        itensVendidosCreate,
        pagamentoCreate,
    },
    User:{
        perfil,
    },
    EntradaMercadoria:{
        fornecedor,
        user,
        departamento,
        mercadoria,
    },
    ItensVendidos:{
        mercadoria
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
