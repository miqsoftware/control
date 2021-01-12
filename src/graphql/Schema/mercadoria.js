import db from '../../db/connection.js';

const Mercadoria = `
    type Mercadoria {
        codun: String
        nomeun: String
        vendaun: Float
        custoun: Float
        estoqueun: Int
        codcj: String
        nomecj: String
        Vendacj: Float 
        custocj: Float
        estoquecj: Int
        qtdPorcj: Int
        st: Int
        compra: Float
        codforn: Int
        depart: String
        acesso: Int
    }`

const mercadoria = async (_, {codun}) => {
    const result = await db.query({
        text: 'SELECT * FROM mercadoria WHERE codun = $1',
        args: [codun],
    })
    return result.rowsOfObjects()[0];
}

export {
    Mercadoria,
    mercadoria,
}