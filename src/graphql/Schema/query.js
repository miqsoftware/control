const Query = `
    type Query{
        mercadoria(codun: String): Mercadoria
        fornecedor(codforn: Int): Fornecedor
        user(coduser: Int): User
    }
`;

export {
    Query
}