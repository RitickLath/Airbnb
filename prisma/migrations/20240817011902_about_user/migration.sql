/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `ServiceFee` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleaningFee` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "AboutProp" TEXT,
ADD COLUMN     "ServiceFee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "cleaningFee" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AboutUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "schooling" TEXT,
    "workPlace" TEXT,
    "birthDate" TEXT,
    "languages" TEXT[],
    "livesIn" TEXT,
    "about" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AboutUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AboutUser_email_key" ON "AboutUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AboutUser_userId_key" ON "AboutUser"("userId");

-- AddForeignKey
ALTER TABLE "AboutUser" ADD CONSTRAINT "AboutUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
