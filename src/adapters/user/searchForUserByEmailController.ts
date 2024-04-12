import { Router } from "express";
import SearchEmail from "../../core/user/service/searchForUserByEmail";
import { z } from 'zod'

export default class SearchForUserByEmailController {

  constructor(
    server: Router,
    useCase: SearchEmail
  ) {
    server.get('/:email', async (req, res, next) => {
      try {
        const emailSchema = z.string().email()

        const email = emailSchema.parse(req.params.email)
        const user = await useCase.handle(email)

        res.send(user)
      } catch (error) {
        next(error)
      }
    })
  }
}