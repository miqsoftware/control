import { client as  db } from '../../../deps.js';
import { queryField } from '../../../deps.js';
import { GQLError } from '../../../deps.js';

export const departamentoCreate = async (_, args) => {
    try{
        if (! await queryField('departamento', 'departamento',args.departamento)){
            const result = await db.query({
                text: `INSERT INTO departamento (departamento)
                       VALUES ($1) RETURNING *`,
                args: [args.departamento],
            })
            return result.rowsOfObjects()[0];
        }else{
            throw new GQLError({message: 'Nâo é possivel cadastrar, departamento existente na base dados.'})
        }
    }catch(e){
        throw new GQLError({error: e})
    }
}