import { Router } from "express";

import ClientDbPrisma from "../external/clientDbPrisma";
import CreatingClientWithEquipment from "../core/client/service/creatingClientWithEquipment";
import CreatingClientWithEquipmentController from "../adapters/client/creatingClientWithEquipmentController";

const clientRouter = Router()
const clientDb = new ClientDbPrisma()

const creatingClientWithEquipment = new CreatingClientWithEquipment(clientDb)
new CreatingClientWithEquipmentController(clientRouter, creatingClientWithEquipment)


export default clientRouter