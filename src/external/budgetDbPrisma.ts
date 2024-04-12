import { PrismaClient } from "@prisma/client";
import BudgetDb from "../core/budget/service/budgetDb";
import Budget from "../core/budget/model/budget";

export default class BudgetDbPrisma implements BudgetDb {

  private readonly prisma: PrismaClient

  constructor() { this.prisma = new PrismaClient() }

  async createBudget(data: { date_delivery: string; date_entry: string; equipmentId: string }): Promise<Budget> {

    const { date_delivery, date_entry, equipmentId } = data

    const clientId = await this.prisma.equipment.findUnique({
      where: {
        id: data.equipmentId
      }
    })

    return await this.prisma.budget.create({
      data: {
        clientId: clientId?.clientId ?? '',
        date_delivery,
        date_entry,
        equipmentId
      },
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

  async getBudgetsClientName(name: string): Promise<Budget[]>{
    const budgets = await this.prisma.budget.findMany({
      where: {
        client: {
          company_name: name
        },
      },
      include: {
        equipment: {
          include: {parts: true}
        }
      }
    })

    console.log(budgets)
    return budgets
  }
}