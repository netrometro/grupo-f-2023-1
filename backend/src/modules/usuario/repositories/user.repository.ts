import prisma from "../../../utils/prisma";
import { createUserInput} from "../schema/user.schema";


//Criar usuario
export async function createUser(data: createUserInput){
    const user = await prisma.usuario.create({
        data,
    })
    return user
}

//listar usuário
export async function findUsers(){
    return prisma.usuario.findMany()
}