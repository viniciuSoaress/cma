import UseCase from "../../shared/useCase";
import DbPart from "./dbPart";

type Part = {
  name: string,
  price: number
}

export default class CreatingPart implements UseCase<Part, Part>{

  constructor(private readonly dbPart: DbPart){}


  async handle(data: Part): Promise<Part> {
   const newPart = await this.dbPart.createPart(data)

   if(!newPart){
    throw new Error('peça não foi criada!')
   }

   return newPart
  }
}