import { Router } from "express";
import CreatingClientEquipment from "../../core/client/service/creatingClientEquipment";
import {z} from 'zod'


export default class CreatingClientEquipmentController {

  constructor(
    server: Router,
    useCase: CreatingClientEquipment
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

        const {equipments} = equipmentsSchemaBody.parse(req.body)
        const cnpj = req.params.cnpj

        await useCase.handle({cnpj, equipments})
        res.send('certo')
      } catch (error) {
        next(error)
      }
    })
  }
}