/*
  Warnings:

  - Added the required column `contato` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "contato" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL;
