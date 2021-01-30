import db from '../../db/connection.js'
export const createUser = async (_, args ) => {
    const data = [];

    for (const [property, value] of Object.entries(args.userInput)){
        data.push(value);
    }
    console.log(data,[...data]);
   

    
    const result = await db.query({
        text: `INSERT INTO "user" (pseudonimo, senha, nome, perfil) 
               VALUES ($1, $2, $3, $4) RETURNING *;`,
        args: [...data],
    });

    console.log(result.rowsOfObjects()[0]);
    return result.rowsOfObjects()[0];
}