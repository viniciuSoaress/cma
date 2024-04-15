/*
  Warnings:

  - You are about to drop the column `name` on the `Client` table. All the data in the column will be lost.
  - You are about to alter the column `createdAt` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "cnpj_cpf" TEXT NOT NULL,
    "date_contact" TEXT NOT NULL,
    "fone" TEXT,
    "cell_phone" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Client" ("cell_phone", "cnpj_cpf", "company_name", "createdAt", "date_contact", "email", "fone", "id", "updatedAt") SELECT "cell_phone", "cnpj_cpf", "company_name", "createdAt", "date_contact", "email", "fone", "id", "updatedAt" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE UNIQUE INDEX "Client_cnpj_cpf_key" ON "Client"("cnpj_cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
