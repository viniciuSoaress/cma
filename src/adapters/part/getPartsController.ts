import { Router } from "express";
import GetParts from "../../core/part/service/getParts";

export default class GetPartsController {

  constructor(
    server: Router,
    useCase: GetParts
  ) {
    server.get('/', async (_, res, next) => {
      try {
        const parts = await useCase.handle()

        res.send(parts)
      } catch (error) {
        next(error)
      }
    })
  }
}