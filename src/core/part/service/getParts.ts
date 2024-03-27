import UseCase from "../../shared/useCase";
import Part from "../model/part";
import DbPart from "./dbPart";



export default class GetParts implements UseCase<void, Part[]>{

  constructor(private readonly dbPart: DbPart) { }

  async handle(): Promise<Part[]> {
    return await this.dbPart.getParts()
  }
}