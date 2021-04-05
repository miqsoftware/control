export const Pagamento = `
    type Pagamento{
        cliente: Cliente
        data: String
        vlrcompra: Float
        restante: Float
        juro: Float
        desconto: Float
        vlrpago: Float
        user: User
    }
`;