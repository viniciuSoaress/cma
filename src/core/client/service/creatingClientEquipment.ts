import UseCase from "../../shared/useCase";
import ClientDb from "./clientDb";


type Equipment = {
  name: string;
  brand: string;
  model: string;
  defect: string;
  parts: {
    name: string,
    price: number,
    labor_value: number,
    quantit: number
  }[]
}

type Data = {
  cnpj: string,
  equipments: Equipment[]
}

export default class CreatingClientEquipment implements UseCase<Data, void>{

  constructor(private readonly dbClient: ClientDb){}

  async handle(data: Data): Promise<void> {
    const {cnpj, equipments} = data

    const client = await this.dbClient.searchClientByCnpj(cnpj)

    if(!client){
      throw new Error('cliente não encotrado.')
    }
    

    await this.dbClient.createClientEquipment(String(client.id), equipments)
  }
}