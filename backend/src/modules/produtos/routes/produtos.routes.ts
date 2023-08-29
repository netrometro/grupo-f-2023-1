import { FastifyInstance } from "fastify";
import { createProductsHandler, getAllProducts, getProducByCategory, deleteProductsHandler, getProductsUser } from "../controller/produtos.controller";


async function productRoutes(server: FastifyInstance){
    //Criar Produto
    server.post("/", createProductsHandler)
     //Buscar todos os produtos
    server.get("/", getAllProducts)
     //buscar produto por categoria
    server.get("/:categoryId", getProducByCategory)
     //deletar produto por id
    server.delete("/:id", deleteProductsHandler)
    //Pegar produtos pelo id do usuário
    server.get("/user/:identificadoUsuario", getProductsUser)
}

export default productRoutes