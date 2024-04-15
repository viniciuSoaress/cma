import { Router } from "express";
import CreatingClientWithEquipment from "../../core/client/service/creatingClientWithEquipment";
import { z } from 'zod'



export default class CreatingClientWithEquipmentController {

  constructor(
    server: Router,
    useCase: CreatingClientWithEquipment
  ) {
    server.post('/', async (req, res, next) => {
      try {

        const clientSchemaBody = z.object({
          email: z.string().email(),
          cnpj_cpf: z.string(),
          fone: z.string().optional(),
          company_name: z.string(),
          cell_phone: z.string(),
          date_contact: z.string(),
          address: z.object({
            number: z.number(),
            cep: z.string(),
            neighborhood: z.string(),
            city: z.string(),
            state: z.string(),
          }),
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
        });

        const { address, cell_phone, cnpj_cpf, company_name, date_contact, email, equipments, fone, } = clientSchemaBody.parse(req.body)



       const clientId = await useCase.handle({ address, cnpj_cpf, email, fone, company_name, equipments, cell_phone, date_contact })

        res.status(201).json({id: clientId})

      } catch (error) {
        next(error)
      }
    })
  }
}