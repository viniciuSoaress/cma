import { PrismaClient } from "@prisma/client";
import ClientDb from "../core/client/service/clientDb";
import Client from "../core/client/model/client";


export default class ClientDbPrisma implements ClientDb {
  private readonly prisma: PrismaClient

  constructor() { this.prisma = new PrismaClient() }


  async createClientWithEquipment(data: Client): Promise<void> {
    
    const { address, cnpj_cpf, email, fone, name, equipments, company_name, cell_phone, createdAt, date_contact } = data



    const client = await this.prisma.client.create({
      data: {
        cnpj_cpf, company_name, email, fone, name, cell_phone, createdAt, date_contact,
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

}