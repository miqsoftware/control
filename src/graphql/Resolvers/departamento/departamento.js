import { client as db } from "../../../deps.js"
import { queryField } from "../../../deps.js"

export const departamento = async (_) => {
    
    const depart = await queryField('departamento', 'coddepart', _.depart)
    
    if (depart){
        return depart 
    }

    const result = await db.query({
        text: `SELECT * FROM departamento`,
    })

    return result.rowsOfObjects();
}