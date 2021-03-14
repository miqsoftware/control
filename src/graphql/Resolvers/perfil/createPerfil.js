import { client as db } from '../../../db/connection.js'
export const createPerfil = async (_, args) => {
    const result = await db.query({
        text: 'INSERT INTO perfil (descricao) VALUES ($1) RETURNING *',
        args: [args.descricao],
    })
    return result.rowsOfObjects()[0];
}