import { Router } from "express";
import UserPutPassword from "../../core/user/service/userPutPassword";
import { z } from 'zod'


export default class PutPassowrdController {

  constructor(
    server: Router,
    useCase: UserPutPassword
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