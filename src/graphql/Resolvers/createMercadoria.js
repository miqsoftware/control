import db from '../../db/connection.js'

export const createMercadoria = async (_, args) => {
    const result = await db.query({
        text: `INSERT INTO mercadorias ()
               VALUES ()` 
    })
}