import { Router } from "express";
import GetClients from "../../core/client/service/getClients";


export default class GetClientsController {
  
  constructor(
    server: Router,
    useCase: GetClients
  ){
    server.get('/', async (_, res, next) => {
      try {
        const clients = await useCase.handle()

        res.send(clients)
      } catch (error) {
        next(error)
      }
    })
  }
}