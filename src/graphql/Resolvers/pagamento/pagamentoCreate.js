import { client as db } from "../../../deps.js"

const pagamentoCreate = async (_, args) => {
    const data = [];
    console.log(args);
    for(const [property, value] of Object.entries(args.pagamentoInput)){
        data.push(value);
    }

    console.log(data);

    const result = await db.query({
        text: `INSERT INTO pagamento (cliente, data, vlrcompra, restante, juro, desconto, vlrpago, "user")
               VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING *`,
        args: [...data],
    })
    return result.rowsOfObjects()[0]; 
}

export{
    pagamentoCreate,
}