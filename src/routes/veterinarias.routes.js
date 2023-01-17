import { Router } from "express";
import {
  getVeterinarias,
  createVeterinarias,
  updateVeterinarias,
  getVeterinaria,
  deleteVeterinaria,
  /*getProjectTasks,*/
} from "../controllers/veterinarias.controller.js";

const router = Router();

// Routes
router.post("/", createVeterinarias);
router.get("/", getVeterinarias);
router.put("/:id", updateVeterinarias);
router.delete("/:id", deleteVeterinaria);
router.get("/:id", getVeterinaria);

// router.get("/:id/tasks", getProjectTasks);

export default router;
