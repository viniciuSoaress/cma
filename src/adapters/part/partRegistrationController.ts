import { Router } from "express";
import PartRegistration from "../../core/part/service/partRegistration";

export default class PartRegistrationController {

  constructor(
    server: Router,
    useCase: PartRegistration
  ) {
    server.post('/', async (req, res, next) => {
      try {
        const { name, price } = req.body as any

       const part = await useCase.handle({ name, price })

        res.status(201).send(part)

      } catch (error) {
        next(error)
      }
    })
  }
}