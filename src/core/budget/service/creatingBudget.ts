import UseCase from "../../shared/useCase";
import Budget from "../model/budget";
import BudgetDb from "./budgetDb";

type Data = {
  date_delivery: string,
  date_entry: string,
  equipmentId: string
}

export default class CreatingBudget implements UseCase<Data, Budget>{

  constructor(private readonly dbBudget: BudgetDb){}

  async handle(data: Data): Promise<Budget> {
    const {date_delivery, date_entry, equipmentId} = data
    const budget = await this.dbBudget.createBudget({date_delivery, date_entry, equipmentId}) 

    if(!budget){
      throw new Error('oçamento não foi criado.')
    }

    return budget
  }

}