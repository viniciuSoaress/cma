import Budget from "../model/budget";

type Data = {
  date_delivery: string,
  date_entry: string,
  equipmentId: string
}

export default interface BudgetDb{
  createBudget(data: Data): Promise<Budget>,
  getBudgetClient(id: string): Promise<Budget | void>,
}