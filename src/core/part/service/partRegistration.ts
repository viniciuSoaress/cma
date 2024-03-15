import UseCase from "../../shared/useCase";
import DbPart from "./dbPart";

type Part = {
  name: string,
  price: number
}

export default class PartRegistration implements UseCase<Part, void>{

  constructor(private readonly dbPart: DbPart){}


  async handle(data: Part): Promise<void> {
    await this.dbPart.createPart(data)
  }
}