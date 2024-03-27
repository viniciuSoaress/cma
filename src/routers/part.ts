import { Router } from "express";
import PartDbPrisma from "../external/partDbPrisma";
import CreatingPart from "../core/part/service/creatingPart";
import CreatingPartController from "../adapters/part/creatingPartController";
import GetParts from "../core/part/service/getParts";
import GetPartsController from "../adapters/part/getPartsController";

const partRouter = Router()

const PartDb = new PartDbPrisma()

const regitration = new CreatingPart(PartDb)
new CreatingPartController(partRouter, regitration)

const getParts = new GetParts(PartDb)
new GetPartsController(partRouter, getParts)


export default partRouter