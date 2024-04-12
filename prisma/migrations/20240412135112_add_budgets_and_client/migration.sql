/*
  Warnings:

  - Added the required column `clientId` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Budget" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date_delivery" TEXT NOT NULL,
    "date_entry" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "Budget_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Budget_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Budget" ("date_delivery", "date_entry", "equipmentId", "id") SELECT "date_delivery", "date_entry", "equipmentId", "id" FROM "Budget";
DROP TABLE "Budget";
ALTER TABLE "new_Budget" RENAME TO "Budget";
CREATE UNIQUE INDEX "Budget_equipmentId_key" ON "Budget"("equipmentId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
