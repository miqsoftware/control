import  { client as db } from '../../../deps.js' 

export const contasreceberCreate = async (_, args) => {
    const data = []

    for(const [prop, value] of Object.entries(args.contaspagarinput)){
        data.push(value);
    }

    const result = await db.query({
        text: `INSERT INTO contas_receber(codcli, vct, valor, juro, desconto, ultpag, restante, datacompra, dataquitou, operador)
               VALUE($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`, 
        args:[...data],
    })
    return result.rowsOfObjects()[0]; 
}
