import { GQLError, queryField  } from '../../../deps.js';

export const fornecedor = async (_, { codforn }) => {
    console.log(_);
    try{
        if (_.hasOwnProperty('fornecedor')){
            return await queryField('fornecedor', 'codforn', _.fornecedor )
         }
         const fornec = await queryField('fornecedor', 'codforn', codforn)
         if(fornec){
            return fornec
         }else{
             throw new GQLError({message: `Fornecedor nâo cadastrado.`})
         }
          
    }catch(e){
        throw new GQLError({error: `${e}`})
    }
}