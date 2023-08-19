import {FastifyInstance} from "fastify"
import { createCategoryHandler, getCategoryById } from "../controller/category.controller"

async function categoriesRoutes(server: FastifyInstance){

    //Criar usuario
    server.post('/', createCategoryHandler)
    server.get('/:id', getCategoryById)

}

export default categoriesRoutes