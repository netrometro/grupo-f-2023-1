/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `ListaDesejos` table. All the data in the column will be lost.
  - Added the required column `identificadoUsuario` to the `ListaDesejos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ListaDesejos" DROP CONSTRAINT "ListaDesejos_usuarioId_fkey";

-- AlterTable
ALTER TABLE "ListaDesejos" DROP COLUMN "usuarioId",
ADD COLUMN     "identificadoUsuario" TEXT NOT NULL;
