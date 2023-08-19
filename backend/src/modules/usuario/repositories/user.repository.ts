import prisma from "../../../utils/prisma";
import { createUserSchema } from "../schema/user.schema";


//Criar usuario
export async function createUser(data: createUserSchema){
    const user = await prisma.usuario.create({
        data,
    })
}