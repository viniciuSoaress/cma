import { Router } from "express";
import UserRedistration from "../../core/user/service/userRegistration";
import {z} from 'zod'

export default class RegistrationController {
  constructor(
    server: Router,
    useCase: UserRedistration
  ) {
    server.post('/', async (req, res, next) => {
      try {

        const userSchemaBody = z.object({
          name: z.string().min(4, 'Nome muito pequeno.'),
          email: z.string().email('E-mail não e valido.'),
          password: z.string().min(8, 'Senha deve conter oito ou mais caracteres.'),
          position: z.string(),
          access_level: z.string()
        })
        
        const { name, email, password, access_level, position } = userSchemaBody.parse(req.body)
        const user = await useCase.handle({ name, email, password, access_level, position })

        res.status(201).send(user)

      } catch (error) {
        next(error)
      }
    })
  }
}