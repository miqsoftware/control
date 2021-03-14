//import db from '../../db/connection.js';
import { client as db } from '../../../deps.js';

export const mercadoria = async (_, {codun}) => {
    const result = await db.query({
        text: 'SELECT * FROM mercadoria WHERE codun = $1',
        args: [codun],
    })
    return result.rowsOfObjects()[0];
}