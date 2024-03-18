import { Router } from "express";

import CreatingUser from "../core/user/service/creatingUser";
import CreatingUserController from "../adapters/user/creatingUserController";

import UserDbPrisma from "../external/userDbPrisma";

import UpdateUserPassword from "../core/user/service/updateUserPassword";
import UpdateUserPassowrdController from "../adapters/user/updateUserPassworController";

import SearchUser from "../core/user/service/searchForUserByEmail";
import SearchForUserByEmailController from "../adapters/user/searchForUserByEmailController";



const userRouter = Router()

const userDbPrisma = new UserDbPrisma()

const createUser = new CreatingUser(userDbPrisma)
new CreatingUserController(userRouter, createUser)

const UserPutPassowrd = new UpdateUserPassword(userDbPrisma)
new UpdateUserPassowrdController(userRouter, UserPutPassowrd)

const getEmail = new SearchUser(userDbPrisma)
new SearchForUserByEmailController(userRouter, getEmail)

export default userRouter