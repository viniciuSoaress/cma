import { Router } from "express";
import PartDbPrisma from "../external/partDbPrisma";
import PartRegistration from "../core/part/service/partRegistration";
import PartRegistrationController from "../adapters/part/partRegistrationController";

const partRouter = Router()


const PartDb = new PartDbPrisma()

const regitration = new PartRegistration(PartDb)
new PartRegistrationController(partRouter, regitration)


export default partRouter