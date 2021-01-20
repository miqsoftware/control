import { create, verify } from '../deps.js'
const secret = 'miqueias'

export async function createToken(info: any){
    try {
        return await create({ alg: 'HS512', typ: 'JWT' }, { exp: Date.now() / 1000 + 300, info }, secret)
        .then( response => {
            return response                
   })
    } catch (error) {
        throw new error
    }
}

export async function verifyToken(token: any){
    try {
        return await verify( token, secret, 'HS512' )
    } catch (error) {
        return error        
    }
}

