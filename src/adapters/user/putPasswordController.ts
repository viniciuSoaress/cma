import { Router } from "express";
import UserPutPassword from "../../core/user/service/userPutPassword";

export default class PutPassowrdController{

  constructor(
    server: Router,
    useCase: UserPutPassword
  ){
    server.patch('/:email', async (req, res, next) => {
      try {
        const { password} = req.body as any
        const email = req.params.email

        await useCase.handle({email, password})
        
        res.status(301).send('senha de usuario atualizada!')
      } catch (error) {
        next(error)
      }
    })
  }
}