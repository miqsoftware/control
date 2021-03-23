import { client as db } from "../../../deps.js"

export const departamento = async () => {
    const result = await db.query({
        text: `SELECT * FROM departamento`,
    })

    return result.rowsOfObjects();
}