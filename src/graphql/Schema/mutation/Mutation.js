export const Mutation  = `
    type Mutation{
        createUser( userInput: UserInput ) : User 
        createPerfil( descricao: String ): Perfil
        createMercadoria( mercadoriaInput: MercadoriaInput ): Mercadoria
        fornecedorCreate( fornecedorInput: FornecedorInput ): Fornecedor
        clienteCreate( clienteInput: ClienteInput ): Cliente
        contasreceberCreate( contasReceberInput: ContasReceberInput ): ContasReceber
        departamentoCreate( departamento: String ): Departamento
        entradaMercadoriaCreate(entradaMercadoriaInput: EntradaMercadoriaInput): EntradaMercadoria
        itensVendidosCreate(itensVendidosInput: ItensVendidosInput): ItensVendidos
        pagamentoCreate(pagamentoInput: PagamentoInput): Pagamento
    }
`;