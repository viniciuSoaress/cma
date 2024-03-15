import { PrismaClient } from "@prisma/client";
import DbPart from "../core/part/service/dbPart";
import Part from "../core/part/model/part";


export default class PartDbPrisma implements DbPart {

  private readonly prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createPart(data: Part): Promise<Part> {
    throw new Error("Method not implemented.");
  }
  async getParts(): Promise<Part[]> {
    throw new Error("Method not implemented.");
  }
  async deletePart(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}