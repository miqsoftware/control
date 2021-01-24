import { create, verify } from '../deps.js'
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
    try {
        return await create(header, payload, secret)
        .then( response => {
            return response                
   })
    } catch (error) {
        return error
    }
}

export async function verifyToken(token){
    try {
        return await verify( token, secret, 'HS512' )
    } catch (error) {
        return error        
    }
}

