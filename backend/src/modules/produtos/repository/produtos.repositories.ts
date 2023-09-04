import prisma from "../../../utils/prisma";
import { CreateProductImput } from "../schema/produtos.schema";



//criar produto
export async function createProducts(data:CreateProductImput){
    const produto = await prisma.produto.create({
        data,
    })
    return produto
}

//listar produtos
export async function findProducts(){
    return prisma.produto.findMany()
}

//listar produto por categoria

export async function findProductsByCategory(categoriaId:number){
    return prisma.produto.findMany({
        where:{
            categoriaId
        }
    })
}

//deletar produto pelo id

export async function deleteProductById(id: number) {
  // Verifica se o produto está na lista de desejos de algum usuário
  const produtoNaLista = await prisma.listaDesejos.findFirst({
    where: {
      produtoId: id,
    },
  });

  if (produtoNaLista) {
    // Remove o produto da lista de desejos do usuário
    await prisma.listaDesejos.delete({
      where: {
        id: produtoNaLista.id,
      },
    });
  }

  // Deletar o produto após resolver as pendencias da lista de desejo
  const deletedProduct = await prisma.produto.delete({
    where: {
      id,
    },
  });

  return deletedProduct;
}



//Listar produto de acordo com o dono
export async function getProductByItsUser(identificadoUsuario: string) {
    const getProducts = await prisma.produto.findMany({
        where: {
            identificadoUsuario,
        },
    });
    return getProducts;
}


//Atualizar os produtos

export interface ProdutoUpdateData {
  titulo: string;
  descricao: string;
  categoriaId: number;
}

export async function atualiza(id:number, dados:ProdutoUpdateData){
  const produtos = await prisma.produto.update({
    where:{
      id
    },
    data: dados
  })
  return produtos
}

//Adicionar produtos à lista de desejo


export async function listaDesejo(data:any){
    const lista = await prisma.listaDesejos.create({
        data
    })
    return lista

}


//Listar Todos os produtos da lista de desejo

export async function GetlistaDesejo(identificadoUsuario: string) {
    const produtosNaListaDeDesejos = await prisma.listaDesejos.findMany({
      where: {
        identificadoUsuario
      },
      include: {
        produto: {
          select: {
            id: true,
            titulo: true,
            descricao: true,
            dataCriacao: false,
            categoriaId: true,
            identificadoUsuario: true,
            destinoEntrega: true,
          },
        },
      },
    });
    return produtosNaListaDeDesejos.map((item) => item.produto); 
  }
  