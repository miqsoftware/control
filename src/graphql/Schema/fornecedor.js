const Fornecedor = `
    type Fornecedor {
        codforn: Int
        fornecedor: String
        endereco: String
        fone: String
        cidade: String
        estado: String
        contato: String
    } 
`;

const fornecedor = () => {
    return {codforn: 10}
} 

export{
    Fornecedor,
    fornecedor
}