import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductImput } from "../schema/produtos.schema";
import { createProducts, findProducts, findProductsByCategory } from "../repository/produtos.repositories";

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

//Listar Todos os produtos
  export async function getAllProducts(){
   const produtos = await findProducts()
   return produtos
 }



//buscar produtos por categoria (Usar para Filtrar)
interface CategoriaParams {
   categoryId: string;
 }
 export async function getProducByCategory(request: FastifyRequest<{ Params: CategoriaParams }>, reply: FastifyReply) {
   const categoryId = parseInt(request.params.categoryId, 10);
 
   if (isNaN(categoryId)) {
     reply.status(400).send({ message: "ID de categoria inválido" });
     return;
   }
   try {
     const category_product = await findProductsByCategory(categoryId);
 
     if (!category_product) {
       reply.status(404).send({ message: "Categoria não encontrada" });
       return;
     }
 
     reply.status(200).send(category_product);
   } catch (error) {
     console.log("Erro ao buscar categoria: " + error);
     reply.status(500).send({ message: "Erro ao buscar categoria" });
   }
 }