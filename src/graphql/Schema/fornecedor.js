import db from '../../db/connection.js'
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

const fornecedor = async (_, { codforn }) => {
    const result = await db.query({
        text: "SELECT * FROM  fornecedor WHERE codforn = $1",
        args: [codforn]
    })
    return result.rowsOfObjects()[0];
} 

export{
    Fornecedor,
    fornecedor,
}