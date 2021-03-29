import { client as db } from '../deps.js';

export async function queryField (table, field, value){
    const result = await db.query({
        text : `SELECT * FROM "${table}" WHERE ${field} = $1`,
        args: [value],
    });
    return result.rowsOfObjects()[0];
}