/*
  Warnings:

  - You are about to drop the column `address` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `partId` on the `PartEquipment` table. All the data in the column will be lost.
  - You are about to drop the column `labor_value` on the `Equipment` table. All the data in the column will be lost.
  - Added the required column `cell_phone` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj_cpf` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_contact` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labor_value` to the `PartEquipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `PartEquipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `PartEquipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantit` to the `PartEquipment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" REAL NOT NULL,
    "cep" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj_cpf" TEXT NOT NULL,
    "date_contact" TEXT NOT NULL,
    "fone" TEXT,
    "cell_phone" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Client" ("company_name", "createdAt", "email", "fone", "id", "name", "updatedAt") SELECT "company_name", "createdAt", "email", "fone", "id", "name", "updatedAt" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE UNIQUE INDEX "Client_cnpj_cpf_key" ON "Client"("cnpj_cpf");
CREATE TABLE "new_PartEquipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "labor_value" REAL NOT NULL,
    "quantit" INTEGER NOT NULL,
    "equippmentId" TEXT NOT NULL,
    CONSTRAINT "PartEquipment_equippmentId_fkey" FOREIGN KEY ("equippmentId") REFERENCES "Equipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PartEquipment" ("equippmentId", "id") SELECT "equippmentId", "id" FROM "PartEquipment";
DROP TABLE "PartEquipment";
ALTER TABLE "new_PartEquipment" RENAME TO "PartEquipment";
CREATE TABLE "new_Equipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "defect" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "Equipment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Equipment" ("brand", "clientId", "defect", "id", "model", "name") SELECT "brand", "clientId", "defect", "id", "model", "name" FROM "Equipment";
DROP TABLE "Equipment";
ALTER TABLE "new_Equipment" RENAME TO "Equipment";
CREATE UNIQUE INDEX "Equipment_clientId_key" ON "Equipment"("clientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
