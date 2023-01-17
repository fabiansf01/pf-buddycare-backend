import { Router } from "express";
import {
  getVeterinarios,
  createVeterinarios,
  updateVeterinarios,
  getVeterinario,
  deleteVeterinario,
  /*getProjectTasks,*/
} from "../controllers/Veterinarios.controller.js";

const router = Router();

// Routes
router.post("/", createVeterinarios);
router.get("/", getVeterinarios);
router.put("/:id", updateVeterinarios);
router.delete("/:id", deleteVeterinario);
router.get("/:id", getVeterinario);

// router.get("/:id/tasks", getProjectTasks);

export default router;
