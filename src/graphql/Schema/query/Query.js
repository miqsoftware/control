const Query = `
    type Query{
        mercadoria(codun: String): Mercadoria
        fornecedor(codforn: Int): Fornecedor
        user(input: UserInput): User
        contaspagar: [ContasPagar]
        departamento: [Departamento]
        perfil: Perfil
        entradaMercadoria(nf: String): EntradaMercadoria
    }
`;

export {
    Query
}