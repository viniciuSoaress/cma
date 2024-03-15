import { PrismaClient } from "@prisma/client";
import DbPart from "../core/part/service/dbPart";
import Part from "../core/part/model/part";


export default class PartDbPrisma implements DbPart {

  private readonly prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createPart(data: Part): Promise<Part> {
    return await this.prisma.part.create({ data })

  }

  async getParts(): Promise<Part[]> {
    return await this.prisma.part.findMany({
      orderBy: {
        name: "asc"
      }
    })
  }

  async deletePart(id: string): Promise<void> {
    await this.prisma.part.delete({
      where: { id }
    })
  }
}