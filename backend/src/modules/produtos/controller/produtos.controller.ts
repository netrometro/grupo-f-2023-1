import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductImput } from "../schema/produtos.schema";
import { createProducts, deleteProductById, findProducts, findProductsByCategory, getProductByItsUser } from "../repository/produtos.repositories";

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
       reply.status(404).send({ message: "Categoria não encontrada." });
       return;
     }
 
     reply.status(200).send(category_product);
   } catch (error) {
     console.log("Erro ao buscar categoria: " + error);
     reply.status(500).send({ message: "Erro ao buscar categoria." });
   }
}

//Deletar

interface DelProductParams {
 id: string;
}
export async function deleteProductsHandler(request: FastifyRequest<{ Params: DelProductParams }>, reply: FastifyReply) {
  const productId = parseInt(request.params.id, 10);

  try {
    const deletedProduct = await deleteProductById(productId);
    if (!deletedProduct) {
      reply.code(400).send({ message: "O produto já não existe."});
      return;
    }
    
    reply.code(200).send("O produto foi deletado.");
  } catch (error) {
    console.log("Erro ao deletar o produto: " + error);
    return reply.code(500).send({ mensage: "Um erro ocorreu ao deletar o produto"});
  }
}


//Buscar produto pelo seu dono

interface identificadorParams {
  identificadoUsuario: string;
}

export async function getProductsUser(request: FastifyRequest<{ Params: identificadorParams }>, reply: FastifyReply){
  try {
    const produto = await getProductByItsUser(request.params.identificadoUsuario)
    reply.status(200).send(produto);
    
  } catch (error) {
    console.log("Erro ao buscar o produto pelo seu dono: " + error)
    return reply.code(500).send({ mensage: "Um erro ocorreu ao buscar o produto"});

  }
}