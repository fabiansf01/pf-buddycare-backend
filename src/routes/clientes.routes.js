import { Router } from "express";
import {
  getClientes,
  createClientes,
  updateClientes,
  getCliente,
  deleteCliente,
  /*getProjectTasks,*/
} from "../controllers/Clientes.controller.js";

const router = Router();

// Routes
router.post("/", createClientes);
router.get("/", getClientes);
router.put("/:id", updateClientes);
router.delete("/:id", deleteCliente);
router.get("/:id", getCliente);

// router.get("/:id/tasks", getProjectTasks);

export default router;
