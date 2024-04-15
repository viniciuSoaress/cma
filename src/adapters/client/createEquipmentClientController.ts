import { Router } from "express";
import CreatingEquipmentClient from "../../core/client/service/createEquipmentClient";
import { z } from 'zod'


export default class CreatingEquipmentClientController {

  constructor(
    server: Router,
    useCase: CreatingEquipmentClient
  ) {
    server.post('/equipment/:cnpj', async (req, res, next) => {
      try {

        const equipmentsSchemaBody = z.object({
          equipments: z.array(z.object({
            name: z.string(),
            brand: z.string(),
            model: z.string(),
            defect: z.string(),
            parts: z.array(z.object({
              name: z.string(),
              price: z.number(),
              quantit: z.number(),
              labor_value: z.number()
            }))
          }))
        })

        const { equipments } = equipmentsSchemaBody.parse(req.body)
        const cnpj = req.params.cnpj

        await useCase.handle({ cnpj, equipments })
        res.status(201).json({ message: 'equipamento criado.' })
      } catch (error) {
        next(error)
      }
    })
  }
}