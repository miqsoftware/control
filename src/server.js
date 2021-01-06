import { Application, Router} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
import { PORT } from './config.js';
const app = new Application();
<<<<<<< HEAD
import { typeDefs, resolvers } from './typeDefs/mercadoria.js';
console.log(typeDefs)
=======

const typeDefs = gql`
    type Mercadoria{
        codUn: String
        nomeUn: String
        vendaUn: Float
        custoUn: FLoat
        estoqueUn: Int
        codCj: String
        nomeCj: String
        VendaCj: Float 
        custoCj: Float
        estoqueCj: Int
        qtdPorCj: Int
        ST: Int
        compra: Float
        codForn: Int
        depart: String
        acesso: Int
    }

    type Query{
        mercadorias: [Mercadoria]
        Mercadoria: Mercadoria
    }
`;

const resolvers = {
    Query:{
        
    }
};
>>>>>>> 6cce0e0a451435bb6b603082488f21b9c40bd563

const GraphQLService = await applyGraphQL({
    path: '/graphql',
    typeDefs,
    resolvers
})

app.use(GraphQLService.routes(),
        GraphQLService.allowedMethods());
console.log('Server running int port ' + PORT);
await app.listen({ port: PORT })