export default interface Client {
  id?: string,
  name: string,
  cnpj_cpf: string,
  email: string,
  fone?: string | null,
  company_name: string,
  cell_phone: string,
  date_contact: string,
  createdAt: string,
  address: Address | null,
  equipments: Equipment[]
}

export interface Equipment {
  id?: string,
  name: string;
  brand: string;
  model: string;
  defect: string;
  clientI?: string,
  parts: Part[]
}

interface Address {
  id?: string,
  number: number,
  cep: string,
  neighborhood: string,
  city: string,
  state: string,
  clientI?: string
}

interface Part {
  name: string,
  price: number,
  labor_value: number,
  quantit: number
}