import {FastifyRequest, FastifyReply} from "fastify"
import { createUser, findUsers, findUsersById } from "../repositories/user.repository"
import { createUserInput } from "../schema/user.schema"


//criar usuário
export async function registerUserHandler(request: FastifyRequest<{Body: createUserInput}>, reply: FastifyReply){

    const body = request.body
     try {
        const user = await createUser(body)

        return reply.code(200).send(user)
     } catch (error) {
        console.log("Erro ao criar usuário: " + error)
        return reply.code(500).send(error)
     }
}

//listar usuário
export async function getUsersHandler(){
    const users = await findUsers()
    return users
}

//Buscar usuário pelo seu ID

export interface identificadorUser {
   id: string;
 }
 
 export async function getUser(request: FastifyRequest<{ Params: identificadorUser }>, reply: FastifyReply){
   try {
     const produto = await findUsersById(request.params.id)
     reply.status(200).send(produto);
     
   } catch (error) {
     console.log("Erro ao buscar o usuário: " + error)
     return reply.code(500).send({ mensage: "Um erro ao buscar o usuário"});
 
   }
 }