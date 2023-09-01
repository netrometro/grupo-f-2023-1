-- CreateTable
CREATE TABLE "ListaDesejos" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "dataAdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListaDesejos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListaDesejos" ADD CONSTRAINT "ListaDesejos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaDesejos" ADD CONSTRAINT "ListaDesejos_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
