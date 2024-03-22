import Client from "../model/client";

export default interface ClientDb{
  createClientWithEquipment(data: Client): Promise<void>,
  searchForCustomers(): Promise<Client[]>,
}