import UseCase from "../../shared/useCase";
import UserDb from "./userDb";

type PutUser = {
  email: string,
  password: string
}

export default class UserPutPassword implements UseCase<PutUser, void>{

  constructor(private readonly dbUser: UserDb) { }

  async handle(data: PutUser): Promise<void> {
    const { email, password } = data

    const user = await this.dbUser.getEmail(email)
    if (!user) {
      throw new Error('usuario não encontrado!')
    }

    await this.dbUser.putPasswordUser(email, password)
  }

}