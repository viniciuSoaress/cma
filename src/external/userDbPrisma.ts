import { PrismaClient } from "@prisma/client";
import UserDb from "../core/user/service/userDb";
import User from "../core/user/model/user";

export default class UserDbPrisma implements UserDb {

  private readonly prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }


  async getEmail(email: string): Promise<void | User> {
    return await this.prisma.user.findUnique({
      where: { email }
    }) ?? undefined
 
  }

  async createUser(data: User): Promise<User> {
    const newUser = await this.prisma.user.create({
      data
    })

    return newUser
  }

  async putPasswordUser(email: string, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { email },
      data: {
        password
      }
    })
  }

}