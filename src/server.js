import { Application, Router} from "./deps.js";
import { applyGraphQL, gql, GQLError } from './deps.js';
import { PORT } from './config.js';
const app = new Application();
import { typemercadoria,
         mercadoria,
         typeQueryMercadoria } 
from './graphql/resolvers/mercadoria.js';


const typeDefs = gql`${
    typemercadoria+ 
    typeQueryMercadoria
}`
console.log(typeDefs)

const resolvers = {
    Query:{
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
await app.listen({ port: PORT })