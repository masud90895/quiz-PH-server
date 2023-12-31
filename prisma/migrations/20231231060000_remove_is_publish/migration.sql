/*
  Warnings:

  - You are about to drop the column `isPublished` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `isPublished` on the `Quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "isPublished";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "isPublished";
