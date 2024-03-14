import UseCase from "../../shared/useCase";
import User from "../model/user";
import UserDb from "./userDb";

export default class UserGetEmail implements UseCase<string, User | void>{

  constructor(private readonly dbUser: UserDb){}

  async handle(data: string): Promise<User | void> {
    const user = await this.dbUser.getEmail(data)
    if (!user) {
      throw new Error('usuario não encontrado!')
    }
    
    return user
  }
}