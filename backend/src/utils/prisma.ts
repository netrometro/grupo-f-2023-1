import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient() //-> Instanciar o prisma client para usar nos outros arquivos

export default prisma