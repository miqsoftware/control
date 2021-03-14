//import db from '../../../db/connection.js'
import { client as db } from '../../../deps.js';
export const fornecedor = async (_, { codforn }) => {
    const result = await db.query({
        text: "SELECT * FROM  fornecedor WHERE codforn = $1",
        args: [codforn]
    })
    return result.rowsOfObjects()[0];
}