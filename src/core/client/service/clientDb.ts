import Client, { Equipment } from "../model/client";

export default interface ClientDb {
  createClientWithEquipment(data: Client): Promise<void>,
  searchForCustomers(): Promise<Client[]>,
  createClientEquipment(clientId:string, data: Equipment[]): Promise<void>,
  searchClientByCnpj(cnpj:string): Promise<Client | void>
}