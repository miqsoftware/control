const Query = `
    type Query{
        mercadoria(codun: String): Mercadoria
        fornecedor(codforn: Int): Fornecedor
        user(input: UserInput): User
        contaspagar: [ContasPagar]
    }
`;

export {
    Query
}