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

export async function deleteProductById(productId: number) {
    const deletedProduct = await prisma.produto.delete({
        where:{
            id: productId,
        }
    })
    return deletedProduct;
}

