import { Router } from "express";
import UserRedistration from "../../core/user/service/userRegistration";

export default class RegistrationController {
  constructor(
    server: Router,
    useCase: UserRedistration
  ) {
    server.post('/', async (req, res, next) => {
      try {

        const { name, email, password, access_level, position } = req.body as any

        const user = await useCase.handle({ name, email, password, access_level, position })

        res.status(201).send(user)

      } catch (error) {
        next(error)
      }
    })
  }
}