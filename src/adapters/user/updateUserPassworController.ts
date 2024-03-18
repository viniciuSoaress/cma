import { Router } from "express";
import UpdatePassword from "../../core/user/service/updateUserPassword";
import { z } from 'zod'


export default class UpdateUserPassowrdController {

  constructor(
    server: Router,
    useCase: UpdatePassword
  ) {
    server.patch('/:email', async (req, res, next) => {
      try {
        
        const userSchema = z.object({
          email: z.string().email('E-mail não e valido.'),
          password: z.string().min(8, 'senha deve conter no minimo oito caracteres.')
        })

        const { email, password } = userSchema.parse({ password: req.body.password, email: req.params.email })
        await useCase.handle({ email, password })

        res.status(301).send('senha de usuario atualizada!')

      } catch (error) {
        next(error)
      }
    })
  }
}