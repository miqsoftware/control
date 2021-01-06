import { gql } from '../deps.js';
const typeDefs = gql`
    type Mercadoria {
        codUn: String
        nomeUn: String
        vendaUn: Float
        custoUn: Float
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
    Query: {

    }
}
    export {
        typeDefs,
        resolvers
    }