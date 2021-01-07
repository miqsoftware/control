import { gql } from '../../deps.js';
const typemercadoria = `
    type Mercadoria {
        codun: String
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
    }`

const typeQueryMercadoria = `
    type Query{
        mercadorias: [Mercadoria]
        mercadoria: Mercadoria
    }
`;

const mercadoria = () => {
        return { codun: "1"}
    
}


    export {
        typemercadoria,
        typeQueryMercadoria,
        mercadoria,
}