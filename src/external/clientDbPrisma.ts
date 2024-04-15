import { PrismaClient } from "@prisma/client";
import ClientDb from "../core/client/service/clientDb";
import Client, { Equipment } from "../core/client/model/client";


export default class ClientDbPrisma implements ClientDb {
  private readonly prisma: PrismaClient

  constructor() { this.prisma = new PrismaClient() }


  async createClientWithEquipment(data: Client): Promise<string> {

    const { address, cnpj_cpf, email, fone, equipments, company_name, cell_phone, date_contact } = data

    const client = await this.prisma.client.create({
      data: {
        cnpj_cpf, company_name, email, fone, cell_phone, date_contact,
      },
    })

    for (const equipmentData of equipments) {
      await this.prisma.equipment.create({
        data: {
          brand: equipmentData.brand,
          defect: equipmentData.defect,
          model: equipmentData.model,
          name: equipmentData.name,
          clientId: client.id,
          parts: {
            create: equipmentData.parts.map(part => ({
              name: part.name,
              price: part.price,
              labor_value: part.labor_value,
              quantit: part.quantit
            }))
          }
        }
      })
    }


    if (address) {
      const { cep, city, neighborhood, number, state } = address
      await this.prisma.address.create({
        data: {
          cep,
          city,
          neighborhood,
          number,
          state,
          clientId: client.id,
        }
      })
    }

    return client.id
  }

  async searchForCustomers(): Promise<Client[]> {
    return await this.prisma.client.findMany({
      include: {
        address: true,
        equipments: {
          include: {
            parts: true
          }
        }
      }
    })

  }

  async createEquipmentClient(clientId: string, data: Equipment[]): Promise<void> {
    for (const equipment of data) {
      await this.prisma.equipment.create({
        data: {
          brand: equipment.brand,
          name: equipment.name,
          defect: equipment.defect,
          model: equipment.model,
          clientId: clientId,
          parts: {
            create: equipment.parts.map(part => ({
              labor_value: part.labor_value,
              name: part.name,
              price: part.price,
              quantit: part.quantit
            }))
          }
        }
      })
    }
  }

  async searchClientByCnpj(cnpj: string): Promise<Client | void> {
    return await this.prisma.client.findUnique({
      where: {
        cnpj_cpf: cnpj
      },
      include: {
        address: true,
        equipments: {
          include: {
            parts: true
          }
        }
      }
    }) ?? undefined
  }
}