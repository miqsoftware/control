const Query = `
    type Query{
        mercadoria(codun: String): Mercadoria
        fornecedor(codforn: Int): Fornecedor
    }
`;

export {
    Query
}