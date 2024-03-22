import UseCase from "../../shared/useCase";
import ClientDb from "./clientDb";

type Client = {
  name: string,
  cnpj_cpf: string,
  email: string,
  fone?: string,
  company_name: string,
  cell_phone: string,
  date_contact: string,
  createdAt: string,
  equipments: {
    name: string;
    brand: string;
    model: string;
    labor_value: number;
    defect: string;
  }[],
  address: {
    number: number,
    cep: string,
    neighborhood: string,
    city: string,
    state: string,
  },
}

export default class CreatingClientWithEquipment implements UseCase<Client, void>{

  constructor(private readonly DbClient: ClientDb) { }

  async handle(data: Client): Promise<void> {
    const { address, cnpj_cpf, company_name, email, equipments, fone, name, cell_phone, createdAt, date_contact } = data

    await this.DbClient.createClientWithEquipment({ address, cnpj_cpf, company_name, email, fone, name, equipments, cell_phone, createdAt, date_contact })
  }
}