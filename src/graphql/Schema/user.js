import db from '../../db/connection.js'
import  { GQLError } from '../../deps.js'

const User = `
    type User{
        coduser: Int
        pseudonimo: String
        senha: String
        nome: String
        perfil: String
    }
`;


const user = async (_, { input: { codigo, password } },  { token }) => {
    console.log(codigo, password);
    console.log(token);
    
        const result = await db.query({
            text: 'SELECT * FROM "user" WHERE coduser = $1',
            args: [codigo]
        });
        console.log(!result.rowCount)
        if (!result.rowCount){
            throw new GQLError('User not found!')
            
        }
        return result.rowsOfObjects()[0];
 }

export {
    User,
    user
}