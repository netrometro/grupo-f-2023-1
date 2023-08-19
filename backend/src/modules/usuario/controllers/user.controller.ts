import {FastifyRequest, FastifyReply} from "fastify"
import { createUser } from "../repositories/user.repository"
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