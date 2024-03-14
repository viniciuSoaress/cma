import User from "../model/user";

export default interface UserDb {
  getEmail(email: string): Promise<User |void>,
  createUser(data: User): Promise<User>,
  putPasswordUser(email: string, password: string): Promise<void>,
}