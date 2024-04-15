import Client, { Equipment } from "../model/client";

export default interface ClientDb {
  createClientWithEquipment(data: Client): Promise<string>,
  searchForCustomers(): Promise<Client[]>,
  createEquipmentClient(clientId:string, data: Equipment[]): Promise<void>,
  searchClientByCnpj(cnpj:string): Promise<Client | void>
}