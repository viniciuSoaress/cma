import { PrismaClient } from "@prisma/client";
import BudgetDb from "../core/budget/service/budgetDb";
import Budget from "../core/budget/model/budget";

export default class BudgetDbPrisma implements BudgetDb {

  private readonly prisma: PrismaClient

  constructor() { this.prisma = new PrismaClient() }

  async createBudget(data: { date_delivery: string; date_entry: string; equipmentId: string; }): Promise<Budget> {
    return await this.prisma.budget.create({
      data: data,
      include: {
        equipment: {
          include: {
            parts: true,
          }
        }
      }
    })
  }



  async getBudgetClient(id: string): Promise<Budget | void> {
    return await this.prisma.budget.findUnique({
      where: {
        id
      },
      include: {
        equipment: {
          include: {
            parts: true
          }
        }
      }
    }) ?? undefined
  }
}