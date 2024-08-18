/*
  Warnings:

  - You are about to drop the `AboutUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AboutUser" DROP CONSTRAINT "AboutUser_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "about" TEXT,
ADD COLUMN     "birthDate" TEXT,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "livesIn" TEXT,
ADD COLUMN     "schooling" TEXT,
ADD COLUMN     "workPlace" TEXT;

-- DropTable
DROP TABLE "AboutUser";
