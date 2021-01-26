
import { create, verify, GQLError } from '../deps.js'
const secret = 'miqueias'
const header = {
    alg: 'HS512',
    typ: 'JWT' 
}



export async function createToken(info){
    const payload = {
        info,
        exp: Date.now() / 1000 + 300,
    }
        return await create(header, payload, secret)
        .then( response => {
            return response                
        })
}

export async function verifyToken(token){
    return await verify( token, secret, 'HS512' )
}

