import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductImput } from "../schema/produtos.schema";
import { createProducts } from "../repository/produtos.repositories";

//Criar produtos
export async function createProductsHandler(request: FastifyRequest<{Body: CreateProductImput}>, reply: FastifyReply){
    const body = request.body
    try {
       const produto = await createProducts(body)
       return reply.code(200).send(produto)
    } catch (error) {
       console.log("Erro ao criar usuário: " + error)
       return reply.code(500).send(error)
    }
}