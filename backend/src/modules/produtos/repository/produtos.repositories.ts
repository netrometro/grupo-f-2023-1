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
    const deletedProduct = await prisma.produto.delete({
        where:{
            id
        }
    })
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

/* export async function listaDesejo(){
    const produtosNaListaDeDesejos = await prisma.listaDesejos.findMany({
  where: {
    usuarioId: idDoUsuarioLogado,
  },
  include: {
    produto: true,
  },
});

} */