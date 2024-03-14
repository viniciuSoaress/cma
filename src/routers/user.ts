import { Router } from "express";

import UserRedistration from "../core/user/service/userRegistration";
import RegistrationController from "../adapters/user/registrationController";
import UserDbPrisma from "../external/userDbPrisma";
import UserPutPassword from "../core/user/service/userPutPassword";
import PutPassowrdController from "../adapters/user/putPasswordController";
import UserGetEmail from "../core/user/service/userGetEmail";
import GetEmailController from "../adapters/user/getEmailController";



const userRouter = Router()

const userDbPrisma = new UserDbPrisma()

const userRegistration = new UserRedistration(userDbPrisma)
new RegistrationController(userRouter, userRegistration)

const UserPutPassowrd = new UserPutPassword(userDbPrisma)
new PutPassowrdController(userRouter, UserPutPassowrd)

const getEmail = new UserGetEmail(userDbPrisma)
new GetEmailController(userRouter, getEmail)

export default userRouter