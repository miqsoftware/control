import db from '../../db/connection.js'
import  { GQLError } from '../../deps.js'
import { createToken, verifyToken } from '../../token/generator.js'

const User = `
    type User{
        coduser: Int
        pseudonimo: String
        senha: String
        nome: String
        perfil: String
        token: String
    }
`;

async function fetchDataUser(name) {
    try {
        const result = await db.query({
            text: 'SELECT * FROM "user" WHERE nome = $1',
            args: [name]
        });    
        return result.rowsOfObjects()[0];        
    } catch (error) {
        throw new GQLError('ERRORshow: ' + error);
    }    
}

const user = async (_, { input: { name, password } },  { token }) => {
   
        const userData = await fetchDataUser(name); 
        if (userData){
            if (userData.senha === password && userData.nome === name){
                const jwt = await createToken(name);
                   
                const obj = {
                    ...userData,
                    token
                }
                 return {
                    ...userData,
                    token
                }
            }else{
                throw new GQLError({ text: 'invalid name or password' })
            }
        }else{
            throw new GQLError({ text: 'user not found.' })
        }
        
 }

export {
    User,
    user
}