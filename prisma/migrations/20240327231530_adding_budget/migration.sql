-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date_delivery" TEXT NOT NULL,
    "date_entry" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,
    CONSTRAINT "Budget_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Budget_equipmentId_key" ON "Budget"("equipmentId");
