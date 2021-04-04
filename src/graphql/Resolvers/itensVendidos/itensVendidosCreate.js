import { client as db } from '../../../deps.js'

const itensVendidosCreate = async ( _, args ) => {
    const data = [];
    for (const [prop, value] of Object.entries(args.itensVendidosInput)){
        data.push(value);    
    }
    const result = await db.query({
        text:`INSERT INTO itens_vendidos ( data, codmerc, qtd, vlrunitario, lucrounitario, departamento )
              VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *`,
        args:[...data],
    });

    return result.rowsOfObjects()[0];
}

export {
    itensVendidosCreate,
}
