import { FastifyInstance } from "fastify";
import { createProductsHandler, getAllProducts, getProducByCategory, deleteProductsHandler } from "../controller/produtos.controller";


async function productRoutes(server: FastifyInstance){
    //Criar Produto
    server.post("/", createProductsHandler)
     //Buscar todos os produtos
    server.get("/", getAllProducts)
     //buscar produto por categoria
    server.get("/:categoryId", getProducByCategory)
     //deletar produto por id
    server.delete("/:productId", deleteProductsHandler)
}

export default productRoutes