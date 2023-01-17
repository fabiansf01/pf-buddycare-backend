import { Router } from "express";
import {
  getOperadors,
  createOperadors,
  updateOperadors,
  getOperador,
  deleteOperador,
  /*getProjectTasks,*/
} from "../controllers/operadores.controller.js";

const router = Router();

// Routes
router.post("/", createOperadors);
router.get("/", getOperadors);
router.put("/:id", updateOperadors);
router.delete("/:id", deleteOperador);
router.get("/:id", getOperador);

// router.get("/:id/tasks", getProjectTasks);

export default router;
