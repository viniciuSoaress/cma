import { Router } from "express";
import CreatingBudget from "../../core/budget/service/creatingBudget";


export default class CreatingBudgetController{

  constructor(
    server:Router,
    useCase: CreatingBudget
  ){
    server.post('/:id', async (req, res, next) => {
      try {
        const equipmentId = req.params.id
        const {date_delivery, date_entry} = req.body as any 

        const budget = await useCase.handle({date_delivery, date_entry, equipmentId})
        res.send(budget)
      } catch (error) {
        next(error)
      }
    })
  }
}