import { client as db } from '../../../db/connection.js'
export const createUser = async (_, args ) => {
    const data = [];

    for (const [property, value] of Object.entries(args.userInput)){
        data.push(value);
    }
    
    const result = await db.query({
        text: `INSERT INTO "user" (pseudonimo, senha, nome, idperfil) 
               VALUES ($1, $2, $3, $4) RETURNING *;`,
        args: [...data],
    });

    return result.rowsOfObjects()[0];
}