import prisma from "../../../utils/prisma";


const categorias = [
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

  //Criar as categorias

export async function createCategory(){
    const categoriasElementos = await prisma.categoria.createMany({
        data: categorias, skipDuplicates: true
    })
    return categoriasElementos
}

//Listar as categorias

export async function getCategories(){
    return prisma.categoria.findMany({})
}
