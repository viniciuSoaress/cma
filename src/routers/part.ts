import { Router } from "express";
import PartDbPrisma from "../external/partDbPrisma";
import CreatingPart from "../core/part/service/creatingPart";
import CreatingPartController from "../adapters/part/creatingPartController";

const partRouter = Router()

const PartDb = new PartDbPrisma()

const regitration = new CreatingPart(PartDb)
new CreatingPartController(partRouter, regitration)


export default partRouter