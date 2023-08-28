/*
  Warnings:

  - Added the required column `identificadoUsuario` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "identificadoUsuario" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Usuario_id_seq";
