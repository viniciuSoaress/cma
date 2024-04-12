import { Router } from "express";
import GetBudgetsClientName from "../../core/budget/service/getBudgetsClientName";


export default class GetBudgetsClientNameController{

  constructor(
    server: Router,
    useCase: GetBudgetsClientName
  ){
    server.get('/client/:name', async (req, res, next) => {
      try {
        const name = req.params.name

        const budgets = await useCase.handle(name)

        res.send(budgets)
      } catch (error) {
        next(error)
      }
    })
  }
}