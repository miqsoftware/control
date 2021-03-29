import { queryField } from '../../../deps.js';
export const perfil = async (obj, args) => {
    console.log(obj);
    const result = await queryField("perfil", "idperfil", obj.idperfil)     
    return result;
}