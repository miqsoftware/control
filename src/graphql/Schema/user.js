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
        const result = await db.query({
            text: 'SELECT * FROM "user" WHERE nome = $1',
            args: [name]
        });    
        return result.rowsOfObjects()[0];        
}

const user = async (_, { input: { name, password } },  { token }) => {
    const userData = await fetchDataUser(name);
    const token_aux = await createToken(name); 
    console.log(token_aux);
    
        try {
            if (await verifyToken(token)){
                console.log('token-ok');
            }
        } catch (error) {
            throw new GQLError({message: 'Token expired or invalid'})  
        }  

    if (userData){
        if (userData.senha === password && userData.nome === name){
                const jwt = (userData.perfil === 'ADMIN') ? await createToken(name) : null;
            const objUser = {
                ...userData,
                token: jwt
            }
            return objUser
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