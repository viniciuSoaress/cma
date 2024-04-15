import UseCase from "../../shared/useCase";
import ClientDb from "./clientDb";

type Client = {
  cnpj_cpf: string,
  email: string,
  fone?: string,
  company_name: string,
  cell_phone: string,
  date_contact: string,
  equipments: {
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
  }[],
  address: {
    number: number,
    cep: string,
    neighborhood: string,
    city: string,
    state: string,
  },
}

export default class CreatingClientWithEquipment implements UseCase<Client, string> {

  constructor(private readonly DbClient: ClientDb) { }

  async handle(data: Client): Promise<string> {
    const {
      address,
      cnpj_cpf,
      company_name,
      email,
      equipments,
      fone,
      cell_phone,
      date_contact
    } = data


   return await 
    this.DbClient.createClientWithEquipment({ address, cnpj_cpf, company_name, email, fone, equipments, cell_phone, date_contact })
  }
}