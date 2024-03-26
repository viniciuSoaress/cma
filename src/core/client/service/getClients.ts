import UseCase from "../../shared/useCase";
import Client from "../model/client";
import ClientDb from "./clientDb";


export default class GetClients implements UseCase<void, Client[]>{
  
  constructor(private readonly dbClient: ClientDb){}

  async handle(): Promise<Client[]> {
    return await this.dbClient.searchForCustomers()  
  }
}