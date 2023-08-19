import {FastifyInstance} from "fastify"
import {registerUserHandler} from "../controllers/user.controller"

async function userRoutes(server: FastifyInstance){
    //Criar usuario
    server.post('/', registerUserHandler) //-> o prefixo já está definido na função 'main' do server.ts
}

export default userRoutes