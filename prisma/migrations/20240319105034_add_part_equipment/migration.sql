-- CreateTable
CREATE TABLE "PartEquipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "partId" TEXT NOT NULL,
    "equippmentId" TEXT NOT NULL,
    CONSTRAINT "PartEquipment_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PartEquipment_equippmentId_fkey" FOREIGN KEY ("equippmentId") REFERENCES "Equipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PartEquipment_partId_equippmentId_key" ON "PartEquipment"("partId", "equippmentId");
