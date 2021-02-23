import db from '../../db/connection.js'

export const fornecedorCreate = async (_, args) => {
    const data = [];
    
    for(const [property, value] of Object.entries(args.fornecedorInput)){
        data.push(value);
    } 
    
    const result = await db.query({
        text: `INSERT INTO fornecedor ( fornecedor, endereco, fone, cidade, estado, contato)
               VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6) RETURNING *`, 
        args:[...data],
    })
    return result.rowsOfObjects()[0];
}