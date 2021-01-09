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

const fornecedor = async () => {
    const result = await db.query({
        text: "SELECT * FROM  fornecedor"
    })
    console.log(result.rows);
    console.log(result.rowsOfObjects());
    return result.rowsOfObjects()[0];
} 

export{
    Fornecedor,
    fornecedor
}