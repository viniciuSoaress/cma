import { Router } from "express";
import UserGetEmail from "../../core/user/service/userGetEmail";

export default class GetEmailController {

  constructor(
    server: Router,
    useCase: UserGetEmail
  ){
    server.get('/:email', async (req, res, next) => {
      try {
        const email = req.params.email

        const user = await useCase.handle(email)

        res.send(user)
      } catch (error) {
        next(error)
      }
    })
  }
}