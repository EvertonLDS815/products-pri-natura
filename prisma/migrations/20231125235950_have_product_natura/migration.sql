/*
  Warnings:

  - You are about to alter the column `house_number` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "house_number" SET DATA TYPE DECIMAL(8,2);
