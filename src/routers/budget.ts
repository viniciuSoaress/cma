import { Router } from "express";

import BudgetDbPrisma from "../external/budgetDbPrisma";

import CreatingBudget from "../core/budget/service/creatingBudget";
import CreatingBudgetController from "../adapters/budget/creatingBudgetController";

import GetBudget from "../core/budget/service/getBudget";
import GetBudgetController from "../adapters/budget/getBudgetController";

import GetBudgetsClientName from "../core/budget/service/getBudgetsClientName";
import GetBudgetsClientNameControer from "../adapters/budget/getBudgetsClientNameController";

const budgetRouter = Router()
const dbBudget = new BudgetDbPrisma()

const createBudget = new CreatingBudget(dbBudget)
new CreatingBudgetController(budgetRouter, createBudget)


const getBudget = new GetBudget(dbBudget)
new GetBudgetController(budgetRouter, getBudget)

const budgets = new GetBudgetsClientName(dbBudget)
new GetBudgetsClientNameControer(budgetRouter, budgets)

export default budgetRouter