import { Router } from "express";
import BudgetDbPrisma from "../external/budgetDbPrisma";
import CreatingBudget from "../core/budget/service/creatingBudget";
import CreatingBudgetController from "../adapters/budget/creatingBudgetController";

const budgetRouter = Router()
const dbBudget = new BudgetDbPrisma()

const createBudget = new CreatingBudget(dbBudget)
new CreatingBudgetController(budgetRouter, createBudget)


export default budgetRouter