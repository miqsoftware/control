export const Mutation  = `
    type Mutation{
        createUser( userInput: UserInput ) : User 
        createPerfil(descricao: String): Perfil
    }
`;