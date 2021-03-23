import { client as  db } from '../../../deps.js'

export const departamentoCreate = async (_, args) => {
    const result = await db.query({
        text: `INSERT INTO departamento (departamento)
               VALUES ($1) RETURNING *`,
        args: [args.departamento],
    })
    return result.rowsOfObjects()[0];
}