import UseCase from "../../shared/useCase";
import UserDb from "./userDb";

type User = {
  name: string,
  email: string,
  password: string,
  position: string,
  access_level: string,
}

export default class CreatingUser implements UseCase<User, void | User> {

  constructor(private readonly dbUser: UserDb) { }


  async handle(data: User): Promise<void | User> {
    const { email } = data

    const user = await this.dbUser.getEmail(email)
    if(user){
      throw new Error('email ja esta sendo utilizado!')
    }

    return await this.dbUser.createUser(data)
  }
}