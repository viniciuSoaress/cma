import UseCase from "../../shared/useCase";
import Budget from "../model/budget";
import BudgetDb from "./budgetDb";



export default class GetBudget implements UseCase<string, Budget | null>{

  constructor(private readonly dbBudget: BudgetDb) { }

  async handle(data: string): Promise<Budget | null> {
    return await this.dbBudget.getBudgetClient(data) ?? null
  }
}