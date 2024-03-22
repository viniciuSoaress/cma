/*
  Warnings:

  - You are about to drop the column `equipmentId` on the `Part` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "PartEquipment" (
    "partId" TEXT NOT NULL,
    "equippmentId" TEXT NOT NULL,

    PRIMARY KEY ("partId", "equippmentId"),
    CONSTRAINT "PartEquipment_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PartEquipment_equippmentId_fkey" FOREIGN KEY ("equippmentId") REFERENCES "Equipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Part" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Part" ("id", "name", "price") SELECT "id", "name", "price" FROM "Part";
DROP TABLE "Part";
ALTER TABLE "new_Part" RENAME TO "Part";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
