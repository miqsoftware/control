import { queryField } from "../../../deps.js"

const pagamento = async (_, args) => {
    return await queryField('pagamento', 'cliente', args.cliente  ) 
}
export{
    pagamento
}