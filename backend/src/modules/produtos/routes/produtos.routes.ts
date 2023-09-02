import { FastifyInstance } from "fastify";
import { 
    createProductsHandler, 
    getAllProducts, 
    getProducByCategory, 
    deleteProductsHandler, 
    getProductsUser, 
    updateProducts,
    addToList
} from "../controller/produtos.controller";


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
    //atualizar os produtos
    server.put("/:id", updateProducts)
    //adicionar à lista de produto
    server.post("/lista", addToList )
}

export default productRoutes