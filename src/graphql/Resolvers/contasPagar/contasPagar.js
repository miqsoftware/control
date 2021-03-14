import {client as db} from '../../../db/connection.js';

export const contaspagar = async () => {
    const result = await db.query({
        text: 'SELECT * FROM contas_pagar',
    })


    return result.rowsOfObjects();
}