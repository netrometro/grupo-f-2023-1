import { FastifyReply, FastifyRequest } from "fastify";
import { Categoria, createCategory, getCategorie } from "../repository/categoria.repositories";
import prisma from "../../../utils/prisma";



//Criar categoria
export async function createCategoryHandler() {
    const categorias: Categoria[] = [
      {
        categoriaNome: "Roupas",
        id: 1
      },
      {
        categoriaNome: "Alimentos",
        id: 2
      },
      {
        categoriaNome: "Brinquedos",
        id: 3
      },
      {
        categoriaNome: "Livros",
        id: 4
      },
      {
        categoriaNome: "Móveis",
        id: 5
      },
    ];
    try {
      const categoriasCriadas = await createCategory(categorias);
  
      return categoriasCriadas
    } catch (error) {
      console.log("Erro ao criar categorias: " + error);
      return error
    }
  }


  //buscar categoria por id
interface CategoriaParams {
    id: string;
  }
  export async function getCategoryById(request: FastifyRequest<{ Params: CategoriaParams }>, reply: FastifyReply) {
    const categoryId = parseInt(request.params.id, 10);
  
    if (isNaN(categoryId)) {
      reply.status(400).send({ message: "ID de categoria inválido" });
      return;
    }
    try {
      const category = await getCategorie(categoryId);
  
      if (!category) {
        reply.status(404).send({ message: "Categoria não encontrada" });
        return;
      }
  
      reply.status(200).send(category);
    } catch (error) {
      console.log("Erro ao buscar categoria: " + error);
      reply.status(500).send({ message: "Erro ao buscar categoria" });
    }
  }