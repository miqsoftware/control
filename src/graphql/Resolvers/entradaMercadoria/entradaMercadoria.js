// import { client as db } from '../../../deps.js'
import { queryField } from '../../../deps.js' 
export const entradaMercadoria = async (_, args) => {
   return await queryField('entrada_mercadoria', 'nf', args.nf)
    // console.log(args.nf)
    // const result = await db.query({
    //     text: `SELECT * FROM entrada_mercadoria WHERE nf = $1`,
    //     args: [args.nf],
    // }) 

    // return result.rowsOfObjects()[0];
}