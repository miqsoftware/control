import db from '../../db/connection.js'

export const clienteCreate = async (_, args) => {
    const data = []

    for(const [property, value] of Object.entries(args.clienteInput)){
        data.push(value);
    }
    console.log(...data);

    const result = await db.query({
        text: `INSERT INTO cliente(cliente, cpfcnpj, rg, renda, datanasc, obs, limite, endereco, bairro, cidade, estado, fone, datacad)
               VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,  
        args:[...data],
    })

    return result.rowsOfObjects()[0];
}