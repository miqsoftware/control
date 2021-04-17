//import { client as db } from '../../../db/connection.js'
import  { GQLError } from '../../../deps.js'
import { createToken, verifyToken } from '../../../token/generator.js'
import { queryField } from '../../../deps.js'

// async function fetchDataUser(nome) {
//     const result = await db.query({
//         text: 'SELECT * FROM "user" WHERE nome = $1',
//         args: [nome]
//     });    
//     return result.rowsOfObjects()[0];
// }
//{ input: { nome, password }
const user = async (_, {input:{nome, password}}, { token }) => {
    console.log(nome, password);
    
    if(_.hasOwnProperty('user')){
        console.log('Entrou no hasOnwProperty')
        return await queryField('user', 'coduser', _.user)
    }
// 
    const token_aux = await createToken(nome); 
    console.log(token_aux);
    // 
    const userData = await queryField('user','nome', nome);
    console.log(userData);
    try {
        if (await verifyToken(token)){
         console.log('token-ok ')   
        }
    } catch (error) {
        throw new Error({message: 'Token expired or invalid'})  
    }  

    if (userData){
        if (userData.senha === password && userData.nome === nome){
            const jwt = (userData.idperfil === 1) ? await createToken(nome) : null;
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
    user
}