import { Router } from "express";
import GetBudget from "../../core/budget/service/getBudget";

export default class GetBudgetController{

  constructor(
    server: Router,
    useCase: GetBudget
  ){
    server.get('/unico/:id', async (req, res, next) => {
      try {
        const id = req.params.id

        const budget = await useCase.handle(id)
        
        if(!budget){
          return 'orçamento nao encontrado!'
        }

        res.send(budget)
        
      } catch (error) {
        next(error)
      }
    })
  }
}