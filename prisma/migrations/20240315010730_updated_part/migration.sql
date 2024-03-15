/*
  Warnings:

  - You are about to alter the column `price` on the `Part` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
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
