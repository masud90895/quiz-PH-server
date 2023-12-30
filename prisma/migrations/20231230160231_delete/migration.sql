/*
  Warnings:

  - You are about to drop the column `text` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `title` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Made the column `answer` on table `Questions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_quizId_fkey";

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "text",
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "answer" SET NOT NULL;
