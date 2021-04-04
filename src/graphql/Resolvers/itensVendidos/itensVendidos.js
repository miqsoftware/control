import { queryField } from "../../../deps.js"

const itensVendidos = async (_, args) => {
    return await queryField('itens_vendidos', 'mercadoria', args.codmerc)
}

export {
    itensVendidos,
}