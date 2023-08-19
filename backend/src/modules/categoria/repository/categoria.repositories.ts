import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../../utils/prisma";


//Criar o tipo
export interface Categoria {
  categoriaNome: string;
  id: number;
}

  //Criar as categorias
  export async function createCategory(categories: Categoria[]) {
    const categoriasElementos = await prisma.categoria.createMany({
      data: categories,
      skipDuplicates: true,
    });
    return categoriasElementos;
  }

//Listar as categorias
export async function getCategories(){
    return prisma.categoria.findMany()
}

//Listar as categorias por id --> Talvez não use
export async function getCategorie(id:number){
  return prisma.categoria.findFirst({
    where:{
      id
    }
  })
}
