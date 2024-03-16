import { Router } from "express";
import PartRegistration from "../../core/part/service/partRegistration";
import { z } from 'zod'

export default class PartRegistrationController {

  constructor(
    server: Router,
    useCase: PartRegistration
  ) {
    server.post('/', async (req, res, next) => {
      try {

        const partSchemaBody = z.object({
          name: z.string(),
          price: z.coerce.number()
        })

        const { name, price } = partSchemaBody.parse(req.body)
        const part = await useCase.handle({ name, price })

        res.status(201).send(part)

      } catch (error) {
        next(error)
      }
    })
  }
}