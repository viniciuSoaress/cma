/*
  Warnings:

  - You are about to drop the column `price` on the `Part` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Part" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Part" ("id", "name") SELECT "id", "name" FROM "Part";
DROP TABLE "Part";
ALTER TABLE "new_Part" RENAME TO "Part";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
