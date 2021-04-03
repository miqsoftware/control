//import db from '../../db/connection.js';
import { client as db } from '../../../deps.js';
import { queryField } from '../../../deps.js';

export const mercadoria = async (_, {codun}) => {
    console.log(_)
    if(_.hasOwnProperty('mercadoria')){
        const merc = await queryField('mercadoria', 'codmerc', _.codmerc)
        if(merc){
            return merc
        }
    }
    const result = await db.query({
        text: 'SELECT * FROM mercadoria WHERE codun = $1',
        args: [codun],
    })
    return result.rowsOfObjects()[0];
}