/*
  Warnings:

  - You are about to drop the column `gastoGasolina` on the `Produto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "gastoGasolina",
ADD COLUMN     "destinoEntrega" TEXT;
