import { Router } from "express";
import {
  getHorarios,
  createHorarios,
  updateHorarios,
  getHorario,
  deleteHorario,
  /*getProjectTasks,*/
} from "../controllers/horarios.controller.js";

const router = Router();

// Routes
router.post("/", createHorarios);
router.get("/", getHorarios);
router.put("/:id", updateHorarios);
router.delete("/:id", deleteHorario);
router.get("/:id", getHorario);

// router.get("/:id/tasks", getProjectTasks);

export default router;
