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

