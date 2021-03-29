//import db from '../../../db/connection.js'
import { client as db } from '../../../deps.js';

 const createMercadoria = async (_, args) => {
    const data = [];  
    for(const [property, value] of Object.entries(args.mercadoriaInput)){
        data.push(value);
    }  
    const result = await db.query({
        text: `INSERT INTO mercadoria ( codun, nomeun, vendaun, custoun, estoqueun, codcj, nomecj, Vendacj, custocj, estoquecj, qtdPorcj, st, compra, codforn, depart, acesso)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
        args: [...data],
    })
    return result.rowsOfObjects()[0];
}

export {
    createMercadoria
}