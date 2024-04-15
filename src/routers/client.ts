import { Router } from "express";

import ClientDbPrisma from "../external/clientDbPrisma";

import CreatingClientWithEquipment from "../core/client/service/creatingClientWithEquipment";
import CreatingClientWithEquipmentController from "../adapters/client/creatingClientWithEquipmentController";

import GetClients from "../core/client/service/getClients";
import GetClientsController from "../adapters/client/getClientsController";

import CreatingEquipmentClient from "../core/client/service/createEquipmentClient";
import CreatingEquipmentClientController from "../adapters/client/createEquipmentClientController";

const clientRouter = Router()
const clientDb = new ClientDbPrisma()

const creatingClientWithEquipment = new CreatingClientWithEquipment(clientDb)
new CreatingClientWithEquipmentController(clientRouter, creatingClientWithEquipment)

const getClients = new GetClients(clientDb)
new GetClientsController(clientRouter, getClients)

const createClientEquipment = new CreatingEquipmentClient(clientDb)
new CreatingEquipmentClientController(clientRouter, createClientEquipment)


export default clientRouter