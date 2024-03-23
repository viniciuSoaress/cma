import UseCase from "../../shared/useCase";
import Client from "../model/client";
import ClientDb from "./clientDb";


export default class GetClients implements UseCase<void, Client[]>{
  
  constructor(private readonly dbPrisma: ClientDb){}

  async handle(): Promise<Client[]> {
    return await this.dbPrisma.searchForCustomers()  
  }
}