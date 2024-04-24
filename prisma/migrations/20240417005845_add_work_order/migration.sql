-- CreateTable
CREATE TABLE "WorkOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "techincal" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    CONSTRAINT "WorkOrder_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkOrder_budgetId_key" ON "WorkOrder"("budgetId");
