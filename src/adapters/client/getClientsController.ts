import { Router } from "express";
import GetClients from "../../core/client/service/getClients";


export default class GetClientsController {
  
  constructor(
    server: Router,
    useCase: GetClients
  ){
    server.get('/1', async (_, res, next) => {
      try {
        const clients = await useCase.handle()

        console.log(clients);
        
        res.status(200).send(clients)
      } catch (error) {
        next(error)
      }
    })
  }
}