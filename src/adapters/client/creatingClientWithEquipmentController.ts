import { Router } from "express";
import CreatingClientWithEquipment from "../../core/client/service/creatingClientWithEquipment";

export default class CreatingClientWithEquipmentController {

  constructor(
    server: Router,
    useCase: CreatingClientWithEquipment
  ) {
    server.post('/', async (req, res, next) => {
      try {
        const {
          address,
          cnpj_cpf,
          email,
          fone,
          name,
          equipments,
          company_name,
          cell_phone,
          createdAt,
          date_contact
        } = req.body as any

        await useCase.handle({ address, cnpj_cpf, email, fone, name, company_name, equipments, cell_phone, createdAt, date_contact })

        res.status(201).send('criando')

      } catch (error) {
        next(error)
      }
    })
  }
}