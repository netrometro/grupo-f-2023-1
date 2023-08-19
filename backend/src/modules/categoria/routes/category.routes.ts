import {FastifyInstance} from "fastify"
import { createCategoryHandler, getAllCategories, getCategoryById } from "../controller/category.controller"

async function categoriesRoutes(server: FastifyInstance){

    //Criar usuario
    server.post('/', createCategoryHandler)
    //Buscar categoria por id
    server.get('/:id', getCategoryById)
    //Listar todas as categorias
    server.get("/", getAllCategories)

}

export default categoriesRoutes