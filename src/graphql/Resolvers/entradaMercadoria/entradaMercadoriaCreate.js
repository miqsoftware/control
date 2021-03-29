import { client as db } from '../../../deps.js'

export const entradaMercadoriaCreate = async (_, args) => {
    const data = [];

    for(const [property, value] of Object.entries(args.entradaMercadoriaInput)){
        data.push(value);
    }

    const result = await db.query({
        text: `INSERT INTO entrada_mercadoria (codmerc, mercadoria, data, qtd, fornecedor, vlr, condpag, nf, coduser, depart)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *` ,
        args: [...data],
    })

    return result.rowsOfObjects()[0];
}