import {FastifyInstance} from "fastify"
import {getUsersHandler, registerUserHandler} from "../controllers/user.controller"

async function userRoutes(server: FastifyInstance){

    //Criar usuario
    server.post('/', registerUserHandler) //-> o prefixo já está definido na função 'main' do server.ts

    //Lista usuarios
    server.get('/', getUsersHandler)
}

export default userRoutes