import { Router } from "express";
import CreatingPart from "../../core/part/service/creatingPart";
import { z } from 'zod'

export default class CreatingPartController {

  constructor(
    server: Router,
    useCase: CreatingPart
  ) {
    server.post('/', async (req, res, next) => {
      try {

        const partSchemaBody = z.object({
          name: z.string()
        })

        const { name } = partSchemaBody.parse(req.body)
        const part = await useCase.handle({ name})

        res.status(201).send(part)

      } catch (error) {
        next(error)
      }
    })
  }
}