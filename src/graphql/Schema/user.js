import db from '../../db/connection.js'


const User = `
    type User{
        coduser: Int
        pseudonimo: String
        senha: String
        nome: String
        perfil: String
    }
`;


const user = async (_, { coduser }, context) => {
    console.log(context);
    const result = await db.query({
        text: 'SELECT * FROM "user" WHERE coduser = $1',
        args: [coduser]
    });
    return result.rowsOfObjects()[0];
}

export {
    User,
    user
}