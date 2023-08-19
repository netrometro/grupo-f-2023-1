import { FastifyInstance } from "fastify";
import { createProductsHandler } from "../controller/produtos.controller";

async function productRoutes(server: FastifyInstance){
    server.post("/", createProductsHandler)
}

export default productRoutes