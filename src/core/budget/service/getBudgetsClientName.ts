import UseCase from "../../shared/useCase";
import Budget from "../model/budget";
import BudgetDb from "./budgetDb";


export default class GetBudgetsClientName implements UseCase<string, Budget[]>{

  constructor(private readonly dbPrisma: BudgetDb){}

  async handle(data: string): Promise<Budget[]> {
    return await this.dbPrisma.getBudgetsClientName(data)
  }
}